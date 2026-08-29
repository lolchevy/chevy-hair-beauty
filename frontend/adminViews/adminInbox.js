/**
 * CHEVY Hair & Beauty - Executive Concierge Inbox & VIP Marketing Suite Module
 * Attached directly to global window.adminInbox namespace.
 */

window.adminInbox = {
  // Failsafe Default Subscriber Ledger Dataset for Local Offline Testing
  defaultSubscribers: [
    { id: 1, name: 'Amara Johnson', email: 'amara.johnson@example.com', date: '2026-08-26' },
    { id: 2, name: 'Camila Rodriguez', email: 'camila.r@example.com', date: '2026-08-27' },
    { id: 3, name: 'Jasmine Taylor', email: 'jtaylor.beauty@example.com', date: '2026-08-27' },
    { id: 4, name: 'Nia Washington', email: 'nia.wash@example.com', date: '2026-08-28' },
    { id: 5, name: 'Brianna Williams', email: 'brianna.w@example.com', date: '2026-08-28' }
  ],

  // Failsafe Default Client Contact Inquiries Dataset
  defaultMessages: [
    { id: 1, name: 'Sophia Miller', phone: '(754) 555-0192', email: 'sophia.m@example.com', message: 'Hi Chevy! Do you have availability for starter locs and scalp detox next Saturday afternoon?', date: '2026-08-28 09:30', read: true },
    { id: 2, name: 'Elena Rostova', phone: '(754) 555-0144', email: 'elena.rostova@example.com', message: 'Inquiring about tension-free knotless braids for sensitive scalps. Should I book waist length extension separately?', date: '2026-08-27 16:15', read: true },
    { id: 3, name: 'Maya Lin', phone: '(754) 555-0188', email: 'maya.lin@example.com', message: 'Looking for a silk press and hydration steam session for my natural 4c hair before an event.', date: '2026-08-27 11:00', read: true }
  ],

  // State registry for campaign flyer image preview data URL
  campaignFlyerDataUrl: null,

  render: function (ledgerContainer, workspaceContainer) {
    const rawStore = (window.adminStore && window.adminStore.data) ? window.adminStore.data : null;
    
    // Extract Messages and VIP Subscribers with fallback guarantees
    const messages = (rawStore && rawStore.messages && rawStore.messages.length > 0)
      ? rawStore.messages
      : this.defaultMessages;

    const subscribers = (rawStore && rawStore.subscribers && rawStore.subscribers.length > 0)
      ? rawStore.subscribers
      : this.defaultSubscribers;

    const unreadCount = messages.filter(m => !m.read).length;

    // ZONE 2: MIDDLE LEDGER SUMMARY PANEL
    if (ledgerContainer) {
      ledgerContainer.innerHTML = `
        <div class="border-b border-[#C29B8A]/30 pb-3 flex justify-between items-center">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-[#C29B8A]">Ledger Navigation</span>
            <h3 class="font-serif font-bold text-sm text-[#110E0C]">Concierge & VIP Suite</h3>
          </div>
          <span class="bg-[#C5A059] text-[#110E0C] text-[10px] font-bold px-2 py-0.5 rounded-full">
            ${messages.length} Messages
          </span>
        </div>

        <div class="space-y-3 pt-2">
          <div class="p-3 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/30 space-y-1">
            <span class="text-[10px] uppercase font-bold text-[#C29B8A] block">Pending Messages</span>
            <div class="font-serif font-bold text-2xl text-[#110E0C]">${unreadCount} Unread</div>
            <span class="text-[9px] text-[#C5A059] font-bold block">Direct Client Inquiries</span>
          </div>

          <div class="p-3 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/30 space-y-1">
            <span class="text-[10px] uppercase font-bold text-[#C29B8A] block">VIP Subscribers</span>
            <div class="font-serif font-bold text-2xl text-[#C5A059]">${subscribers.length} Members</div>
            <span class="text-[9px] text-[#110E0C]/60 block">Newsletter Database Active</span>
          </div>
        </div>
      `;
    }

    // ZONE 3: MAIN WORKSPACE CANVAS (BALANCED 2-COLUMN MATRIX)
    if (workspaceContainer) {
      workspaceContainer.innerHTML = `
        <div class="space-y-8 max-w-7xl mx-auto selection:bg-[#C5A059] selection:text-[#110E0C]">
          
          <!-- WORKSPACE TOP HEADER -->
          <div class="border-b border-[#C29B8A]/30 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-1">
                Executive Communications & Marketing Deck
              </span>
              <h1 class="font-serif text-2xl sm:text-3xl font-bold text-[#110E0C]">
                Concierge Inbox & VIP Broadcast Suite
              </h1>
            </div>

            <div class="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#C29B8A]/30 shadow-sm self-start sm:self-auto">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span class="text-[11px] font-bold text-[#110E0C] uppercase tracking-wider">Communication Grid Active</span>
            </div>
          </div>

          <!-- UNIFIED TWO-COLUMN COMMUNICATIONS MATRIX -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            <!-- COLUMN 1: CONCIERGE INBOX DECK (LEFT HALF) -->
            <div class="space-y-6">
              
              <div class="flex justify-between items-center border-b border-[#C29B8A]/20 pb-3">
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C29B8A] block">Client Dialog Stream</span>
                  <h3 class="font-serif font-bold text-xl text-[#110E0C]">Direct Client Inquiries (${messages.length})</h3>
                </div>
                <button 
                  onclick="window.adminInbox.refreshMessages()" 
                  class="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] hover:underline"
                >
                  ↻ Refresh Messages
                </button>
              </div>

              <!-- INBOX MESSAGES LIST WITH FIXED HEIGHT SCROLL CONTAINER -->
              <div class="space-y-4 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
                ${messages.length === 0 ? `
                  <div class="bg-white border border-[#C29B8A]/30 rounded-2xl p-8 text-center text-stone-500 font-serif italic">
                    No active concierge client messages in log.
                  </div>
                ` : messages.map(m => `
                  <div class="bg-white border border-[#C5A059]/30 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 relative group">
                    
                    <!-- MESSAGE HEADER & TIMESTAMP -->
                    <div class="flex justify-between items-start gap-2 border-b border-[#C29B8A]/15 pb-3">
                      <div>
                        <h4 class="font-serif font-bold text-lg text-[#110E0C]">${m.name}</h4>
                        <div class="flex flex-wrap items-center gap-2 mt-0.5 text-xs text-[#554D47]">
                          <span class="font-semibold text-[#110E0C]">${m.phone}</span>
                          <span>•</span>
                          <span class="text-[#C29B8A]">${m.email}</span>
                        </div>
                      </div>
                      <span class="text-[10px] font-bold uppercase tracking-wider text-stone-400 bg-[#FDF8F5] px-2.5 py-1 rounded-md border border-[#C29B8A]/20 shrink-0">
                        ${m.date}
                      </span>
                    </div>

                    <!-- CLIENT MESSAGE BODY -->
                    <p class="text-xs sm:text-sm text-[#110E0C] leading-relaxed font-sans bg-[#FDF8F5] p-3.5 rounded-xl border border-[#C29B8A]/15">
                      "${m.message}"
                    </p>

                    <!-- DIRECT ACTION BUTTONS (MAILTO / SMS TRIGGERS) -->
                    <div class="grid grid-cols-2 gap-3 pt-1">
                      <a 
                        href="mailto:${m.email}?subject=CHEVY%20Hair%20%26%20Beauty%20-%20Sanctuary%20Inquiry%20Response" 
                        class="inline-flex items-center justify-center bg-[#110E0C] text-[#C5A059] py-2.5 px-3 rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] border border-[#C5A059]/40 hover:bg-stone-900 transition-all text-center shadow-sm"
                      >
                        ✉️ SEND EMAIL
                      </a>

                      <a 
                        href="sms:${m.phone.replace(/[^0-9+]/g, '')}?body=Hi%20${encodeURIComponent(m.name)},%20this%20is%20CHEVY%20Hair%20%26%20Beauty%20following%20up%20on%20your%20message!%20" 
                        class="inline-flex items-center justify-center bg-[#C5A059] text-[#110E0C] py-2.5 px-3 rounded-lg text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-[#B08D47] hover:text-white transition-all text-center shadow-sm font-semibold"
                      >
                        💬 TEXT CLIENT
                      </a>
                    </div>

                  </div>
                `).join('')}
              </div>

            </div>

            <!-- COLUMN 2: NEWSLETTER VIP HUB & CAMPAIGN BOARD (RIGHT HALF) -->
            <div class="space-y-6">
              
              <!-- CARD A: NEWSLETTER VIP SUBSCRIBER LEDGER SHEET -->
              <div class="bg-white border border-[#C5A059]/30 rounded-2xl p-6 shadow-sm space-y-4">
                <div class="flex justify-between items-center border-b border-[#C29B8A]/20 pb-3">
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">Member Roster</span>
                    <h3 class="font-serif font-bold text-lg text-[#110E0C]">✨ NEWSLETTER VIP SUBSCRIBER LEDGER</h3>
                  </div>
                  <span class="bg-[#110E0C] text-[#C5A059] text-[10px] font-bold px-2.5 py-1 rounded-full">
                    ${subscribers.length} Members
                  </span>
                </div>

                <!-- SUBSCRIBER SCROLLING LIST WITH FIXED HEIGHT CONTAINER -->
                <div class="max-h-[250px] overflow-y-auto pr-2 custom-scrollbar space-y-2">
                  ${subscribers.map(s => `
                    <div class="p-3 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/20 flex justify-between items-center text-xs hover:border-[#C5A059]/40 transition-colors">
                      <div>
                        <strong class="text-[#110E0C] font-serif font-bold text-sm block">${s.name}</strong>
                        <span class="text-[#554D47] text-[11px]">${s.email}</span>
                      </div>
                      <span class="text-[10px] font-semibold text-[#C5A059] bg-white px-2 py-0.5 rounded border border-[#C29B8A]/20 shrink-0">
                        ${s.date}
                      </span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- CARD B: LIVE CAMPAIGN BROADCASTER FORM WITH FLYER UPLOADER -->
              <div class="bg-white border-2 border-[#C5A059] p-6 rounded-2xl shadow-md space-y-4 hover:shadow-lg transition-all">
                <div class="border-b border-[#C29B8A]/20 pb-3">
                  <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C29B8A] block">Promotional Suite</span>
                  <h3 class="font-serif font-bold text-lg text-[#110E0C]">📢 CREATE & DISPATCH BULK SALON ADVERTISING</h3>
                </div>

                <div class="space-y-4">
                  <div>
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">
                      Campaign/Ad Title Headline *
                    </label>
                    <input 
                      type="text" 
                      id="campaign-ad-title" 
                      placeholder="e.g., 15% Off Braid Installs & Loc Detox Sessions This Week!" 
                      class="w-full p-3 bg-white text-xs font-serif font-bold rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                    />
                  </div>

                  <!-- CAMPAIGN AD POSTER GRAPHICS FILE UPLOADER MODULE -->
                  <div>
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">
                      Campaign Promotional Graphic / Canva Layout Attachment
                    </label>
                    <div class="flex items-center gap-3">
                      <div id="flyer-preview-container" class="w-12 h-12 rounded-lg overflow-hidden border border-[#C29B8A]/30 shrink-0 bg-stone-100 hidden">
                        <img id="prev-campaign-flyer" src="" class="w-full h-full object-cover" />
                      </div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onchange="window.adminInbox.handleFlyerUpload(this)"
                        class="w-full p-2 bg-white rounded-lg border border-[#C29B8A]/30 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F5EBE6] file:text-[#110E0C] hover:file:bg-[#C29B8A]/20 cursor-pointer" 
                      />
                    </div>
                    <p class="text-[10px] text-[#554D47] mt-1.5 leading-tight">
                      📌 Optional: Upload an advertising flyer poster, booking graphic, or promotional Canva layout design sheet to attach to this member broadcast campaign.
                    </p>
                  </div>

                  <div>
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">
                      Promotional Broadcast Update & Discount Rules *
                    </label>
                    <textarea 
                      id="campaign-ad-body" 
                      rows="4" 
                      placeholder="Write custom sanctuary updates, flash deal codes, or private suite schedule openings to dispatch to all subscribers..." 
                      class="w-full p-3 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] resize-none leading-relaxed"
                    ></textarea>
                  </div>

                  <!-- MASTER BROADCAST TRIGGER BUTTON -->
                  <button 
                    onclick="window.adminInbox.broadcastCampaignAdLive()" 
                    class="w-full bg-[#C5A059] text-[#110E0C] py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#B08D47] hover:text-white transition-all rounded-lg shadow-md font-sans"
                  >
                    BROADCAST CAMPAIGN AD LIVE
                  </button>
                </div>
              </div>

              <!-- NOTIFICATION OVERLAY TOAST -->
              <div id="broadcast-success-toast" class="hidden bg-emerald-900 text-emerald-100 p-4 rounded-xl border border-emerald-500/50 flex items-center justify-between text-xs font-bold animate-fadeIn shadow-lg">
                <span class="flex items-center gap-2">
                  <span class="text-base">📢</span>
                  <span>Marketing Campaign Successfully Broadcasted to All VIP Members!</span>
                </span>
                <span class="text-emerald-300 uppercase tracking-wider text-[10px]">Dispatched</span>
              </div>

            </div>

          </div>

        </div>
      `;
    }
  },

  init: function (ledgerContainer, workspaceContainer) {
    this.render(ledgerContainer, workspaceContainer);
  },

  refreshMessages: function () {
    if (window.fetchAdminState) {
      window.fetchAdminState();
    } else {
      this.render(document.getElementById('admin-ledger'), document.getElementById('admin-workspace'));
    }
  },

  handleFlyerUpload: function (input) {
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    const objectUrl = URL.createObjectURL(file);
    this.campaignFlyerDataUrl = objectUrl;

    const previewContainer = document.getElementById('flyer-preview-container');
    const previewImg = document.getElementById('prev-campaign-flyer');
    if (previewContainer && previewImg) {
      previewImg.src = objectUrl;
      previewContainer.classList.remove('hidden');
    }
  },

  broadcastCampaignAdLive: function () {
    const titleInput = document.getElementById('campaign-ad-title');
    const bodyInput = document.getElementById('campaign-ad-body');

    if (!titleInput || !bodyInput) return;

    const title = titleInput.value.trim();
    const body = bodyInput.value.trim();

    if (!title || !body) {
      return;
    }

    // Lock ad parameters inside global memory store
    if (!window.adminStore) window.adminStore = {};
    if (!window.adminStore.data) window.adminStore.data = {};
    if (!window.adminStore.data.campaigns) window.adminStore.data.campaigns = [];

    window.adminStore.data.campaigns.unshift({
      id: Date.now(),
      title,
      body,
      flyer_image: this.campaignFlyerDataUrl || null,
      dispatched_at: new Date().toISOString()
    });

    // Clear input fields and preview state
    titleInput.value = '';
    bodyInput.value = '';
    this.campaignFlyerDataUrl = null;
    const previewContainer = document.getElementById('flyer-preview-container');
    if (previewContainer) {
      previewContainer.classList.add('hidden');
    }

    // Trigger Native Notification Toast Overlay
    const toast = document.getElementById('broadcast-success-toast');
    if (toast) {
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 4000);
    }
  }
};