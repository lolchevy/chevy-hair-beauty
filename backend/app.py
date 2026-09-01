import os
from flask import Flask, request, jsonify, render_template, send_from_directory, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename

# Initialize Flask App
# Configuring static and template paths to point directly to the frontend directory structure
# Re-adjusting paths to step inside the local nested directory structure perfectly
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.abspath(os.path.join(BASE_DIR, 'frontend'))
UPLOAD_FOLDER = os.path.join(FRONTEND_DIR, 'uploads')


app = Flask(
    __name__,
    static_folder=FRONTEND_DIR,
    static_url_path=''
)

app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'chevy_luxury_hair_beauty_secret_key_2026')

# 🔒 FORCE RENDER TO WRITE DATA TO THE UNRESTRICTED CLOUD STORAGE DIRECTORY
if os.environ.get('RENDER'):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/salon.db'
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = f"sqlite:///{os.path.join(BASE_DIR, 'salon.db')}"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 64 * 1024 * 1024  # 64 MB Max Upload Limit

# ==============================================================================
# 🔀 BULLETPROOF DUAL-DOMAIN PRODUCTION ROUTING
# ==============================================================================
@app.route('/')
def master_routing_hub():
    host = request.host.lower()

    # 🔒 IF ACCESSING YOUR DASHBOARD DOMAIN: SERVE THE PRIVATE DASHBOARD SHEET
    if 'chevyhairbeauty.com' in host:
        return send_from_directory(FRONTEND_DIR, 'admin.html')

    # 💇 DEFAULT ROOT: SERVE THE REGULAR WEBSITE STOREFRONT TO YOUR CUSTOMERS
    return send_from_directory(FRONTEND_DIR, 'index.html')

@app.route('/admin-gate')
def emergency_backdoor_route():
    # 🚀 AN ABSOLUTE DIRECT BACKDOOR PATH THAT BYPASSES ALL DOMAIN FILTERS
    return send_from_directory(FRONTEND_DIR, 'admin.html')

# Enable CORS and Initialize SQLAlchemy
# Enable CORS and Initialize SQLAlchemy
CORS(app, resources={r"/api/*": {
    "origins": [
        "https://chevyhairandbeauty.com",
        "https://chevyhairandbeauty.com",
        "https://chevyhairbeauty.com",
        "https://onrender.com"
    ]
}}, supports_credentials=True)
db = SQLAlchemy(app)



# Ensure Upload Directory Exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# -----------------------------------------------------------------------------
# DATABASE MODELS
# -----------------------------------------------------------------------------

class ServiceCategories(db.Model):
    __tablename__ = 'service_categories'
    id = db.Column(db.Integer, primary_key=True)
    folder_name = db.Column(db.String(100), nullable=False, unique=True)
    cards = db.relationship('ServiceCards', backref='category', lazy=True, cascade="all, delete-orphan")

    def to_dict(self):
        return {
            'id': self.id,
            'folder_name': self.folder_name,
            'cards': [card.to_dict() for card in self.cards]
        }

class ServiceCards(db.Model):
    __tablename__ = 'service_cards'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    price = db.Column(db.Float, nullable=False)
    duration = db.Column(db.String(50), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('service_categories.id'), nullable=False)
    promo_discount_text = db.Column(db.String(100), nullable=True, default="")
    discount_unit = db.Column(db.String(20), nullable=True, default="percent")  # 'percent' or 'fixed'
    discount_value = db.Column(db.Float, nullable=True, default=0.0)
    setmore_deep_link = db.Column(db.String(500), nullable=False, default="https://setmore.com")
    description = db.Column(db.Text, nullable=True, default="")

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'duration': self.duration,
            'category_id': self.category_id,
            'promo_discount_text': self.promo_discount_text,
            'discount_unit': self.discount_unit,
            'discount_value': self.discount_value,
            'setmore_deep_link': self.setmore_deep_link,
            'description': self.description
        }

class AddOns(db.Model):
    __tablename__ = 'add_ons'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(150), nullable=False)
    price = db.Column(db.Float, nullable=False)
    duration = db.Column(db.String(50), nullable=False)
    scope_boundary = db.Column(db.String(100), nullable=False, default="global")  # 'global' or category ID/name

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'duration': self.duration,
            'scope_boundary': self.scope_boundary
        }

class PortfolioMedia(db.Model):
    __tablename__ = 'portfolio_media'
    id = db.Column(db.Integer, primary_key=True)
    file_path = db.Column(db.String(300), nullable=False)
    item_type_photo_or_video = db.Column(db.String(20), nullable=False, default="photo")  # 'photo' or 'video'
    clip_duration = db.Column(db.String(50), nullable=True, default="")

    def to_dict(self):
        return {
            'id': self.id,
            'file_path': self.file_path,
            'item_type_photo_or_video': self.item_type_photo_or_video,
            'clip_duration': self.clip_duration
        }

class ConciergeInbox(db.Model):
    __tablename__ = 'concierge_inbox'
    id = db.Column(db.Integer, primary_key=True)
    client_name = db.Column(db.String(150), nullable=False)
    client_phone = db.Column(db.String(50), nullable=False)
    client_email = db.Column(db.String(150), nullable=False)
    text_details = db.Column(db.Text, nullable=False)
    is_unread = db.Column(db.Boolean, default=True)
    created_at = db.Column(db.DateTime, default=db.func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'client_name': self.client_name,
            'client_phone': self.client_phone,
            'client_email': self.client_email,
            'text_details': self.text_details,
            'is_unread': self.is_unread,
            'created_at': self.created_at.strftime('%Y-%m-%d %H:%M') if self.created_at else ''
        }

class VIPSubscribers(db.Model):
    __tablename__ = 'vip_subscribers'
    id = db.Column(db.Integer, primary_key=True)
    member_name = db.Column(db.String(150), nullable=False)
    member_email = db.Column(db.String(150), nullable=False, unique=True)
    created_at = db.Column(db.DateTime, default=db.func.now())

    def to_dict(self):
        return {
            'id': self.id,
            'member_name': self.member_name,
            'member_email': self.member_email,
            'created_at': self.created_at.strftime('%Y-%m-%d') if self.created_at else ''
        }

class PageContent(db.Model):
    __tablename__ = 'page_content'
    id = db.Column(db.Integer, primary_key=True)
    key_name = db.Column(db.String(100), unique=True, nullable=False)
    value_text = db.Column(db.Text, nullable=True)

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)

# Seed Initial Default Admin & Sample Categories
def seed_initial_data():
    if not User.query.filter_by(email="chevy@chevyhair.com").first():
        admin = User(
            email="chevy@chevyhair.com",
            password_hash=generate_password_hash("Sanctuary2026!")
        )
        db.session.add(admin)

    if ServiceCategories.query.count() == 0:
        locs = ServiceCategories(folder_name="Loc Care & Cultivation")
        braids = ServiceCategories(folder_name="Braid Architecture")
        natural = ServiceCategories(folder_name="Natural Hair & Silk Press")
        db.session.add_all([locs, braids, natural])
        db.session.commit()

        # Seed sample cards
        card1 = ServiceCards(
            name="Signature Loc Retwist & Scalp Detox",
            price=135.00,
            duration="2 hrs 30 mins",
            category_id=locs.id,
            promo_discount_text="10% Off First Session",
            discount_unit="percent",
            discount_value=10.0,
            setmore_deep_link="https://setmore.com",
            description="Organic detox wash, precision palm-roll retwist, and botanical essential oil seal."
        )
        card2 = ServiceCards(
            name="Knotless Braid Architecture",
            price=220.00,
            duration="4 hrs",
            category_id=braids.id,
            promo_discount_text="Includes Edge Preservation",
            discount_unit="fixed",
            discount_value=0.0,
            setmore_deep_link="https://setmore.com",
            description="Tension-free parting, lightweight extension feeds, and scalp hydration treatment."
        )
        db.session.add_all([card1, card2])
        db.session.commit()

# -----------------------------------------------------------------------------
# STATIC FILE & VIEW ROUTING
# -----------------------------------------------------------------------------
# ==============================================================================
# 🔀 THE MASTER DUAL-DOMAIN ROUTING ENGINE (UNIFIED & CONFLICT-FREE)
# ==============================================================================
@app.route('/')
def master_routing_hub():
    # Capture the exact web URL address typed into the browser bar
    host = request.host.lower()

    # 🔒 IF YOU ACCESS YOUR NEW PERSONAL BACKDOOR DOMAIN:
    if 'chevyhairbeauty.com' in host:
        return send_from_directory(FRONTEND_DIR, 'admin.html')

    # 💇 DEFAULT ROOT (CHEVYHAIRANDBEAUTY.COM) SERVES THE PUBLIC WEBSITE STOREFRONT
    return send_from_directory(FRONTEND_DIR, 'index.html')

@app.route('/admin-gate')
def emergency_backdoor_route():
    # 🚀 AN ABSOLUTE DIRECT BACKDOOR. NO EXTRA DOMAIN LOGIC NEEDED.
    return send_from_directory(FRONTEND_DIR, 'admin.html')
# -----------------------------------------------------------------------------
# AUTHENTICATION ENDPOINTS
# -----------------------------------------------------------------------------

@app.route('/api/gatekeeper-login', methods=['POST'])
def gatekeeper_login():
    data = request.get_json() or {}
    email = data.get('email', '').strip()
    password = data.get('password', '').strip()

    user = User.query.filter_by(email=email).first()
    if user and check_password_hash(user.password_hash, password):
        session['admin_logged_in'] = True
        session['admin_user'] = email
        return jsonify({'status': 'success', 'message': 'Authenticated successfully.'}), 200
    
    return jsonify({'status': 'error', 'message': 'Invalid credentials.'}), 401

@app.route('/api/gatekeeper-logout', methods=['POST'])
def gatekeeper_logout():
    session.pop('admin_logged_in', None)
    session.pop('admin_user', None)
    return jsonify({'status': 'success', 'message': 'Logged out.'}), 200

# -----------------------------------------------------------------------------
# SERVICES & ADD-ONS API ENDPOINTS
# -----------------------------------------------------------------------------

@app.route('/api/get-services', methods=['GET'])
def get_services():
    categories = ServiceCategories.query.all()
    add_ons = AddOns.query.all()
    
    return jsonify({
        'categories': [c.to_dict() for c in categories],
        'add_ons': [a.to_dict() for a in add_ons]
    }), 200

@app.route('/api/admin/add-service', methods=['POST'])
def add_service():
    data = request.get_json() or {}
    
    name = data.get('name')
    price = data.get('price')
    duration = data.get('duration')
    category_id = data.get('category_id')

    if not name or price is None or not duration or not category_id:
        return jsonify({'status': 'error', 'message': 'Missing required fields.'}), 400

    # Automation Rule: If Setmore deep link is empty, pre-fill with master URL
    setmore_link = data.get('setmore_deep_link', '').strip()
    if not setmore_link:
        setmore_link = "https://setmore.com"

    new_card = ServiceCards(
        name=name,
        price=float(price),
        duration=duration,
        category_id=int(category_id),
        promo_discount_text=data.get('promo_discount_text', ''),
        discount_unit=data.get('discount_unit', 'percent'),
        discount_value=float(data.get('discount_value', 0.0)),
        setmore_deep_link=setmore_link,
        description=data.get('description', '')
    )

    db.session.add(new_card)
    db.session.commit()

    return jsonify({'status': 'success', 'service': new_card.to_dict()}), 201

@app.route('/api/admin/delete-service/<int:service_id>', methods=['DELETE'])
def delete_service(service_id):
    card = ServiceCards.query.get_or_404(service_id)
    db.session.delete(card)
    db.session.commit()
    return jsonify({'status': 'success', 'message': 'Service card deleted.'}), 200

@app.route('/api/admin/add-addon', methods=['POST'])
def add_addon():
    data = request.get_json() or {}
    name = data.get('name')
    price = data.get('price')
    duration = data.get('duration')

    if not name or price is None or not duration:
        return jsonify({'status': 'error', 'message': 'Missing required add-on parameters.'}), 400

    new_addon = AddOns(
        name=name,
        price=float(price),
        duration=duration,
        scope_boundary=data.get('scope_boundary', 'global')
    )

    db.session.add(new_addon)
    db.session.commit()

    return jsonify({'status': 'success', 'addon': new_addon.to_dict()}), 201

@app.route('/api/admin/delete-addon/<int:addon_id>', methods=['DELETE'])
def delete_addon(addon_id):
    addon = AddOns.query.get_or_404(addon_id)
    db.session.delete(addon)
    db.session.commit()
    return jsonify({'status': 'success', 'message': 'Add-on deleted.'}), 200

# -----------------------------------------------------------------------------
# PORTFOLIO MEDIA GALLERY ENDPOINTS
# -----------------------------------------------------------------------------

@app.route('/api/get-media', methods=['GET'])
def get_media():
    media_list = PortfolioMedia.query.all()
    return jsonify({'media': [m.to_dict() for m in media_list]}), 200

@app.route('/api/admin/upload-media', methods=['POST'])
def upload_media():
    if 'file' not in request.files:
        return jsonify({'status': 'error', 'message': 'No file segment found in request.'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'status': 'error', 'message': 'No selected file.'}), 400

    filename = secure_filename(file.filename)
    # Append timestamp to prevent collisions
    unique_filename = f"{int(db.func.now().get_active_options().get('time', 0)) if hasattr(db.func.now(), 'get_active_options') else 'file'}_{filename}"
    save_path = os.path.join(app.config['UPLOAD_FOLDER'], unique_filename)
    file.save(save_path)

    relative_path = f"/uploads/{unique_filename}"
    item_type = request.form.get('item_type', 'photo')
    clip_duration = request.form.get('clip_duration', '')

    new_media = PortfolioMedia(
        file_path=relative_path,
        item_type_photo_or_video=item_type,
        clip_duration=clip_duration
    )

    db.session.add(new_media)
    db.session.commit()

    return jsonify({'status': 'success', 'media': new_media.to_dict()}), 201

@app.route('/api/admin/delete-media/<int:media_id>', methods=['DELETE'])
def delete_media(media_id):
    media = PortfolioMedia.query.get_or_404(media_id)
    
    # Remove physical file from uploads folder if it exists locally
    if media.file_path.startswith('/uploads/'):
        filename = media.file_path.replace('/uploads/', '')
        file_disk_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        if os.path.exists(file_disk_path):
            try:
                os.remove(file_disk_path)
            except Exception as e:
                app.logger.error(f"Error deleting file {file_disk_path}: {e}")

    db.session.delete(media)
    db.session.commit()
    return jsonify({'status': 'success', 'message': 'Media asset purged.'}), 200

# -----------------------------------------------------------------------------
# CONCIERGE INBOX & VIP SUBSCRIBERS ENDPOINTS
# -----------------------------------------------------------------------------

@app.route('/api/submit-contact-form', methods=['POST'])
def submit_contact_form():
    data = request.get_json() or {}
    
    name = data.get('name')
    phone = data.get('phone')
    email = data.get('email')
    message = data.get('message')

    if not name or not phone or not email or not message:
        return jsonify({'status': 'error', 'message': 'All form fields are required.'}), 400

    new_inquiry = ConciergeInbox(
        client_name=name,
        client_phone=phone,
        client_email=email,
        text_details=message,
        is_unread=True
    )

    db.session.add(new_inquiry)
    db.session.commit()

    return jsonify({
        'status': 'success',
        'message': 'Inquiry received successfully.',
        'inquiry': new_inquiry.to_dict()
    }), 201

@app.route('/api/get-messages', methods=['GET'])
def get_messages():
    messages = ConciergeInbox.query.order_by(ConciergeInbox.created_at.desc()).all()
    unread_count = ConciergeInbox.query.filter_by(is_unread=True).count()
    
    return jsonify({
        'messages': [m.to_dict() for m in messages],
        'unread_count': unread_count
    }), 200

@app.route('/api/subscribe-vip', methods=['POST'])
def subscribe_vip():
    data = request.get_json() or {}
    name = data.get('name', 'Valued Client').strip()
    email = data.get('email', '').strip()

    if not email:
        return jsonify({'status': 'error', 'message': 'Email address required.'}), 400

    existing = VIPSubscribers.query.filter_by(member_email=email).first()
    if existing:
        return jsonify({'status': 'exists', 'message': 'Already subscribed to VIP list.'}), 200

    subscriber = VIPSubscribers(member_name=name, member_email=email)
    db.session.add(subscriber)
    db.session.commit()

    return jsonify({'status': 'success', 'subscriber': subscriber.to_dict()}), 201

# -----------------------------------------------------------------------------
# PAGE CUSTOMIZER PERSISTENCE ENDPOINTS
# -----------------------------------------------------------------------------

@app.route('/api/admin/update-content', methods=['POST'])
def update_content():
    data = request.get_json() or {}
    key_name = data.get('key_name')
    value_text = data.get('value_text')

    if not key_name:
        return jsonify({'status': 'error', 'message': 'Key name required.'}), 400

    item = PageContent.query.filter_by(key_name=key_name).first()
    if item:
        item.value_text = value_text
    else:
        item = PageContent(key_name=key_name, value_text=value_text)
        db.session.add(item)

    db.session.commit()
    return jsonify({'status': 'success', 'key': key_name}), 200

@app.route('/api/get-page-content', methods=['GET'])
def get_page_content():
    records = PageContent.query.all()
    content_map = {r.key_name: r.value_text for r in records}
    return jsonify({'content': content_map}), 200

# -----------------------------------------------------------------------------
# APPLICATION INITIALIZATION & SERVER LAUNCH
# -----------------------------------------------------------------------------

with app.app_context():
    db.create_all()
    seed_initial_data()

if __name__ == '__main__':
    # Running on 0.0.0.0:5000 for local network and server accessibility
    app.run(host='0.0.0.0', port=5000, debug=True)