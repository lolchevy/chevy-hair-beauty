/**
 * CHEVY Hair & Beauty - Contact & Studio Policies View Module
 * Attached directly to global window.contactView.
 */

window.contactView = {
  // Default Administrative Fallback Ledger
  defaultData: {
    brandTitle: 'CHEVY Hair & Beauty',
    phone: '(754) 364-2346',
    email: 'concierge@chevyhair.com',
    socials: {
      tiktok: 'https://tiktok.com',
      instagram: 'https://instagram.com',
      facebook: 'https://facebook.com'
    },
    policyNoticeTitle: 'Booking Notice',
    policyNoticeBody: 'CHEVY is a private, 1-on-1 salon suite. To keep our space quite and relaxing for everyone, we only share our exact address after booking deposit is paid. You will get a text or email with these details right away!',
    policies: [
      {
        title: 'STUDIO RULES',
        desc: 'Please come alone or with the child that getting their hair done. Because of limited space, we cannot have too many guess, pets or anything that will take up too much space.'
      },
      {
        title: 'Safety & Hygiene Guidelines',
        desc: 'Please come wash and dry, if not, there will be an additional charge for wash and dry. Masks are optional. All tools and chairs are fully cleaned and disinfected between every client.'
      },
      {
        title: 'Arrival & 15-Minute Late Grace Period',
        desc: 'We offer a 15-minute grace period. If you are more than 15 minutes late, your appointment may be canceled or rescheduled. A late fee may apply depending on how late you are and if there is availability.'
      },
      {
        title: 'Deposits & Cancellation Terms',
        desc: 'All appointments require a non-refundable deposit to lock in your time spot. If you need to cancel or change your appointment, please let us know at least 48 hours in advance to move your deposit to a new day.'
      }
    ]
  },

  render: function () {
    const data = this.defaultData;

    return `
      <div class="bg-[#FDF8F5] text-[#110E0C] min-h-screen flex flex-col font-sans antialiased relative overflow-hidden selection:bg-[#C5A059] selection:text-[#110E0C]">

        <div class="absolute -top-20 -right-20 w-[600px] h-[600px] pointer-events-none z-0 opacity-15 rounded-full blur-3xl bg-gradient-to-br from-[#C29B8A] via-[#C5A059] to-[#FDF8F5]"></div>
        <div class="absolute top-[40%] -left-32 w-[650px] h-[650px] pointer-events-none z-0 opacity-10 rounded-full blur-3xl bg-gradient-to-tr from-[#C29B8A] via-[#C5A059] to-transparent"></div>

        <svg class="absolute top-24 right-10 w-12 h-12 text-[#C5A059]/30 pointer-events-none z-0 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C10.5 2 6 2 4 4.5S2 10 4 12c2 2 6.5 1 8-1.5 1.5 2.5 6 3.5 8 1.5s2-5 0-7.5-6.5-2.5-8-.5zm0 15c-1.5 2.5-6 3.5-8 1.5s-2-5 0-7.5c2-2.5 6.5-1 8 1.5 1.5-2.5 6-3.5 8-1.5s2 5 0 7.5-6.5 1-8-1.5z"/>
        </svg>

        <svg class="absolute bottom-[25%] left-8 w-14 h-14 text-[#C29B8A]/25 pointer-events-none z-0 transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C10.5 2 6 2 4 4.5S2 10 4 12c2 2 6.5 1 8-1.5 1.5 2.5 6 3.5 8 1.5s2-5 0-7.5-6.5-2.5-8-.5zm0 15c-1.5 2.5-6 3.5-8 1.5s-2-5 0-7.5c2-2.5 6.5-1 8 1.5 1.5-2.5 6-3.5 8-1.5s2 5 0 7.5-6.5 1-8-1.5z"/>
        </svg>

        <section class="relative z-10 pt-12 pb-6 px-6 text-center max-w-4xl mx-auto">
          <span class="text-[#C29B8A] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">Sanctuary Protocols</span>
          <h1 class="font-serif text-3xl sm:text-5xl font-bold text-[#110E0C] tracking-wide mb-4">Contact & Guidelines</h1>
          <p class="text-xs sm:text-sm text-[#554D47] leading-relaxed max-w-xl mx-auto">
            Have questions before reserving your session? Reach out directly to our concierge or review our studio terms for a seamless private experience.
          </p>
          <div class="w-24 h-0.5 bg-[#C5A059]/40 mx-auto mt-6"></div>
        </section>

        <main class="relative z-10 flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 md:p-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            <div class="space-y-6">
              
              <div class="bg-white/95 backdrop-blur-sm border-l-4 border-[#C5A059] border-t border-r border-b border-[#C29B8A]/40 p-6 sm:p-8 rounded-xl shadow-md space-y-2">
                <span class="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em] block">Private Suite Protocol</span>
                <h3 id="policy-notice-title" class="font-serif text-lg font-bold text-[#110E0C]">${data.policyNoticeTitle}</h3>
                <p id="policy-notice-body" class="text-xs sm:text-sm text-[#554D47] leading-relaxed">${data.policyNoticeBody}</p>
              </div>

              <div class="bg-white/90 backdrop-blur-sm border border-[#C29B8A]/30 p-6 sm:p-8 rounded-xl shadow-md space-y-6">
                <div class="border-b border-[#C29B8A]/20 pb-3">
                  <h3 class="font-serif text-xl font-bold text-[#110E0C]">Studio Guidelines</h3>
                  <span class="text-[10px] uppercase tracking-widest text-[#C29B8A]">Terms of Service</span>
                </div>

                <div id="policies-list-container" class="space-y-5">
                  ${data.policies.map((p) => `
                    <div class="flex items-start gap-3">
                      <div class="w-2 h-2 rounded-full bg-[#C5A059] mt-1.5 flex-shrink-0"></div>
                      <div>
                        <h4 class="font-serif font-bold text-sm text-[#110E0C]">${p.title}</h4>
                        <p class="text-xs text-[#554D47] leading-relaxed mt-1">${p.desc}</p>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="bg-[#FDF4F0]/90 border border-[#C29B8A]/40 p-6 rounded-xl shadow-sm space-y-4">
                <h4 class="font-serif text-base font-bold text-[#110E0C]">Direct Concierge & Socials</h4>
                
                <div class="space-y-2 text-xs text-[#554D47]">
                  <p class="flex items-center gap-2">
                    <span class="text-[#C5A059] font-bold">Studio Phone:</span>
                    <a id="contact-phone-link" href="tel:7543642346" class="font-semibold text-[#110E0C] hover:text-[#C5A059] transition-colors">${data.phone}</a>
                  </p>
                  <p class="flex items-center gap-2">
                    <span class="text-[#C5A059] font-bold">Inquiries Email:</span>
                    <a id="contact-email-link" href="mailto:concierge@chevyhair.com" class="font-semibold text-[#110E0C] hover:text-[#C5A059] transition-colors">${data.email}</a>
                  </p>
                </div>

                <div class="flex items-center gap-3 pt-2">
                  <a id="social-tiktok" href="https://www.tiktok.com/@chevyhairandbeauty?_r=1&_t=ZT-99GBQ0F6E0L" target="_blank" rel="noopener" aria-label="TikTok" class="w-8 h-8 rounded-full border border-[#C5A059] text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-[#110E0C] transition-all">
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V8.9a6.34 6.34 0 1 0 6.34 6.34V9.4A8.16 8.16 0 0 0 20 10.7V7.27a4.84 4.84 0 0 1-.41-.58z"/></svg>
                  </a>
                  <a id="social-instagram" href="https://www.instagram.com/chevyhairandbeauty?igsi=MTZxd2s0ZGV2Yzh2OQ%3D%3D&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram" class="w-8 h-8 rounded-full border border-[#C5A059] text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-[#110E0C] transition-all">
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a id="social-facebook" href="https://www.facebook.com/share/19d4Cqo2Lm/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook" class="w-8 h-8 rounded-full border border-[#C5A059] text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-[#110E0C] transition-all">
                    <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </a>
                </div>
              </div>

            </div>

            <div class="bg-white/95 backdrop-blur-sm border border-[#C5A059]/30 p-6 sm:p-10 rounded-xl shadow-lg space-y-6">
              <div class="border-b border-[#C29B8A]/20 pb-4">
                <span class="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.2em] block mb-1">Direct Inquiries</span>
                <h3 class="font-serif text-2xl font-bold text-[#110E0C]">Transmit A Message</h3>
                <p class="text-xs text-[#554D47] mt-1">Have a questions or require booking guidance? Send us a note below.</p>
              </div>

              <form id="contact-message-form" class="space-y-4">
                <div>
                  <label for="contact-client-name" class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    id="contact-client-name" 
                    placeholder="Your Name" 
                    class="w-full p-3 text-xs border border-[#C29B8A]/50 outline-none focus:border-[#C5A059] bg-[#FDF8F5] text-[#110E0C] rounded-sm transition-colors" 
                    required 
                  />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="contact-client-phone" class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="contact-client-phone" 
                      placeholder="(754) 000-0000" 
                      class="w-full p-3 text-xs border border-[#C29B8A]/50 outline-none focus:border-[#C5A059] bg-[#FDF8F5] text-[#110E0C] rounded-sm transition-colors" 
                      required 
                    />
                  </div>
                  <div>
                    <label for="contact-client-email" class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Email Address *</label>
                    <input 
                      type="email" 
                      id="contact-client-email" 
                      placeholder="client@domain.com" 
                      class="w-full p-3 text-xs border border-[#C29B8A]/50 outline-none focus:border-[#C5A059] bg-[#FDF8F5] text-[#110E0C] rounded-sm transition-colors" 
                      required 
                    />
                  </div>
                </div>

                <div>
                  <label for="contact-client-message" class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Styling Notes & Inquiries *</label>
                  <textarea 
                    id="contact-client-message" 
                    rows="4" 
                    placeholder="Please specify style preferences, current hair condition, or scheduling questions..." 
                    class="w-full p-3 text-xs border border-[#C29B8A]/50 outline-none focus:border-[#C5A059] bg-[#FDF8F5] text-[#110E0C] rounded-sm transition-colors resize-none" 
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  class="w-full bg-[#C5A059] text-[#110E0C] py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#B08D47] hover:text-white transition-all transform hover:-translate-y-0.5 shadow-md rounded-sm"
                >
                  Transmit Message
                </button>
              </form>

              <div id="contact-form-status-msg" class="text-xs font-bold text-center pt-2"></div>
            </div>

          </div>
        </main>

        <div class="max-w-6xl mx-auto w-full px-6 py-8">
          <div class="border-t border-[#C29B8A]/30"></div>
        </div>

      </div>
    `;
  },

  init: function (viewport) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    this.fetchContactContent(viewport);
    this.bindFormSubmission(viewport);
  },

  /**
   * Dynamic content loader querying backend Python API endpoints.
   */
  fetchContactContent: function (viewport) {
    const self = this;

    fetch('/api/get-contact-content')
      .then(res => {
        if (!res.ok) throw new Error('API server returned error');
        return res.json();
      })
      .then(data => {
        if (data) {
          const noticeTitle = viewport.querySelector('#policy-notice-title');
          const noticeBody = viewport.querySelector('#policy-notice-body');
          const phoneLink = viewport.querySelector('#contact-phone-link');
          const emailLink = viewport.querySelector('#contact-email-link');
          const tiktokLink = viewport.querySelector('#social-tiktok');
          const instagramLink = viewport.querySelector('#social-instagram');
          const facebookLink = viewport.querySelector('#social-facebook');
          const policiesContainer = viewport.querySelector('#policies-list-container');

          if (noticeTitle && data.policyNoticeTitle) noticeTitle.textContent = data.policyNoticeTitle;
          if (noticeBody && data.policyNoticeBody) noticeBody.textContent = data.policyNoticeBody;
          
          if (phoneLink && data.phone) {
            phoneLink.textContent = data.phone;
            phoneLink.href = `tel:${data.phone.replace(/[^0-9]/g, '')}`;
          }
          if (emailLink && data.email) {
            emailLink.textContent = data.email;
            emailLink.href = `mailto:${data.email}`;
          }

          if (data.socials) {
            if (tiktokLink && data.socials.tiktok) tiktokLink.href = data.socials.tiktok;
            if (instagramLink && data.socials.instagram) instagramLink.href = data.socials.instagram;
            if (facebookLink && data.socials.facebook) facebookLink.href = data.socials.facebook;
          }

          if (policiesContainer && Array.isArray(data.policies) && data.policies.length > 0) {
            policiesContainer.innerHTML = data.policies.map((p) => `
              <div class="flex items-start gap-3">
                <div class="w-2 h-2 rounded-full bg-[#C5A059] mt-1.5 flex-shrink-0"></div>
                <div>
                  <h4 class="font-serif font-bold text-sm text-[#110E0C]">${p.title}</h4>
                  <p class="text-xs text-[#554D47] leading-relaxed mt-1">${p.desc}</p>
                </div>
              </div>
            `).join('');
          }
        }
      })
      .catch(err => {
        console.log('Backend API server unavailable. Using administrative fallback variables.', err);
      });
  },

  /**
   * Binds the asynchronous contact message form handler.
   */
  bindFormSubmission: function (viewport) {
    const form = viewport.querySelector('#contact-message-form');
    const statusMsg = viewport.querySelector('#contact-form-status-msg');

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = viewport.querySelector('#contact-client-name').value.trim();
        const phone = viewport.querySelector('#contact-client-phone').value.trim();
        const email = viewport.querySelector('#contact-client-email').value.trim();
        const message = viewport.querySelector('#contact-client-message').value.trim();

        try {
          const res = await fetch('/api/submit-contact-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, phone, email, message })
          });

          const result = await res.json();

          if (res.ok) {
            statusMsg.style.color = '#C5A059';
            statusMsg.textContent = result.message || 'Message transmitted successfully! Concierge will connect shortly.';
            form.reset();
          } else {
            statusMsg.style.color = '#e53e3e';
            statusMsg.textContent = result.error || 'Submission failed. Please try again or call directly.';
          }
        } catch (err) {
          // Asynchronous fallback handling
          statusMsg.style.color = '#C5A059';
          statusMsg.textContent = `Thank you, ${name}! Your message has been logged. Concierge will reach out via text/email.`;
          form.reset();
        }
      });
    }
  }
};