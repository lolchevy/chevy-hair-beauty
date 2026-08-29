/**
 * CHEVY Hair & Beauty - About View Component Module
 * Attached directly to global window.aboutView.
 */

window.aboutView = {
  // Default Layout Data Ledger (Fallback when server/DB is offline)
  defaultData: {
    heroImage: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80',
    badgeTag: 'Private Suite Experience',
    badgeSub: '1-on-1 Dedicated Crown Preservation',
    sectionBadge: 'Heritage & Craft',
    headlineTitle: 'Our Story & Philosophy',
    paragraph1: 'CHEVY Hair & Beauty was born out of a desire to break away from chaotic, double-booked, high-volume salon dynamics. We envisioned an intentional, peaceful sanctuary—a private 1-on-1 suite where time slows down, privacy is respected, and your natural crown is honored with absolute reverence.',
    paragraph2: 'Our artistry centers on the architecture of healthy natural hair care. From crisp, tension-free parting for protective braids to meticulous loc cultivation, silk presses, and deep hydration steam therapy, every service is tailored to preserve delicate edges, nourish the scalp, and promote maximum hair retention.',
    paragraph3: 'When you reserve a session at CHEVY, you are guaranteed total, undivided focus. No waiting room delays, no overlapping appointments, and no rushed routines—just a quiet, luxurious self-care experience dedicated entirely to your personal wellness goals.',
    buttonText: 'Explore Our Signature Services',
    buttonRoute: 'services'
  },

  render: function () {
    const data = this.defaultData;

    return `
      <div class="bg-[#FDF8F5] text-[#110E0C] min-h-screen flex flex-col font-sans antialiased relative overflow-hidden selection:bg-[#C5A059] selection:text-[#110E0C]">

        <svg class="absolute -top-16 -left-16 w-96 h-96 text-[#C29B8A]/10 pointer-events-none z-0 transform -rotate-12" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 10C60 40 20 80 20 130c0 40 30 60 80 60s80-20 80-60C180 80 140 40 100 10zm0 165c-40 0-60-15-60-45 0-35 30-70 60-95 30 25 60 60 60 95 0 30-20 45-60 45z"/>
          <path d="M100 30v140M60 80l40 30M140 80l-40 30M50 120l50 25M150 120l-50 25"/>
        </svg>

        <svg class="absolute -bottom-20 -right-20 w-[500px] h-[500px] text-[#C29B8A]/10 pointer-events-none z-0 transform rotate-45" viewBox="0 0 200 200" fill="currentColor">
          <circle cx="100" cy="100" r="25"/>
          <path d="M100 20c-15 20-15 40 0 55 15-15 15-35 0-55zM100 125c-15 20-15 40 0 55 15-15 15-35 0-55zM20 100c20-15 40-15 55 0-15 15-35 15-55 0zM125 100c20-15 40-15 55 0-15 15-35 15-55 0z"/>
        </svg>

        <main class="relative z-10 flex-1 w-full flex items-center justify-center py-12 md:py-20">
          <div class="max-w-6xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div class="relative w-full flex justify-center items-center">
              
              <div class="absolute -inset-3 rounded-2xl border border-[#C5A059]/40 transform rotate-3 pointer-events-none"></div>
              
              <div class="relative w-full max-w-md md:max-w-none aspect-[4/5] overflow-hidden rounded-xl border border-[#C5A059]/30 shadow-2xl transform -rotate-2 hover:scale-[1.01] transition-transform duration-300 group">
                <img 
                  id="about-hero-img"
                  src="${data.heroImage}" 
                  alt="CHEVY Private Boutique Salon Suite Interior" 
                  class="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                
                <div class="absolute inset-0 bg-gradient-to-t from-[#110E0C]/50 via-transparent to-transparent opacity-80 pointer-events-none"></div>

                <div class="absolute bottom-4 left-4 right-4 bg-[#110E0C]/80 backdrop-blur-md p-4 rounded-lg border border-[#C5A059]/40 text-center">
                  <span id="about-badge-tag" class="font-serif text-[#C5A059] text-xs font-bold uppercase tracking-[0.25em] block">${data.badgeTag}</span>
                  <p id="about-badge-sub" class="text-[11px] text-[#FDF8F5] mt-0.5 tracking-wide">${data.badgeSub}</p>
                </div>
              </div>
            </div>

            <div class="flex flex-col justify-center space-y-6">
              
              <div>
                <span id="about-sec-badge" class="text-[#C29B8A] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">${data.sectionBadge}</span>
                <h1 id="about-headline" class="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#110E0C] relative border-b border-[#C5A059]/30 pb-3 leading-tight">
                  ${data.headlineTitle}
                </h1>
              </div>

              <p id="about-p1" class="text-sm sm:text-base text-[#554D47] leading-relaxed">
                ${data.paragraph1}
              </p>

              <p id="about-p2" class="text-sm sm:text-base text-[#554D47] leading-relaxed">
                ${data.paragraph2}
              </p>

              <p id="about-p3" class="text-sm sm:text-base text-[#554D47] leading-relaxed">
                ${data.paragraph3}
              </p>

              <div class="pt-4">
                <button 
                  id="about-cta-btn"
                  onclick="switchPublicView('${data.buttonRoute}')" 
                  class="inline-block bg-[#C5A059] text-[#110E0C] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#B08D47] hover:text-white transition-all transform hover:-translate-y-0.5 shadow-md rounded-sm"
                >
                  ${data.buttonText}
                </button>
              </div>

            </div>

          </div>
        </main>

        <div class="max-w-6xl mx-auto w-full px-6 pb-8">
          <div class="border-t border-[#C29B8A]/30"></div>
        </div>

      </div>
    `;
  },

  init: function (viewport) {
    // Scroll to top when view initializes
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const self = this;

    // DYNAMIC API DATA FETCHING (ADMIN BACKEND INTEGRATION)
    fetch('/api/get-about-content')
      .then(res => {
        if (!res.ok) throw new Error('Network response error');
        return res.json();
      })
      .then(data => {
        if (data) {
          const heroImg = viewport.querySelector('#about-hero-img');
          const badgeTag = viewport.querySelector('#about-badge-tag');
          const badgeSub = viewport.querySelector('#about-badge-sub');
          const secBadge = viewport.querySelector('#about-sec-badge');
          const headline = viewport.querySelector('#about-headline');
          const p1 = viewport.querySelector('#about-p1');
          const p2 = viewport.querySelector('#about-p2');
          const p3 = viewport.querySelector('#about-p3');
          const ctaBtn = viewport.querySelector('#about-cta-btn');

          if (heroImg && data.heroImage) heroImg.src = data.heroImage;
          if (badgeTag && data.badgeTag) badgeTag.textContent = data.badgeTag;
          if (badgeSub && data.badgeSub) badgeSub.textContent = data.badgeSub;
          if (secBadge && data.sectionBadge) secBadge.textContent = data.sectionBadge;
          if (headline && data.headlineTitle) headline.textContent = data.headlineTitle;
          if (p1 && data.paragraph1) p1.textContent = data.paragraph1;
          if (p2 && data.paragraph2) p2.textContent = data.paragraph2;
          if (p3 && data.paragraph3) p3.textContent = data.paragraph3;
          if (ctaBtn) {
            if (data.buttonText) ctaBtn.textContent = data.buttonText;
            if (data.buttonRoute) ctaBtn.setAttribute('onclick', `switchPublicView('${data.buttonRoute}')`);
          }
        }
      })
      .catch(err => {
        // Silent catch: page uses client fallback defaults if server/endpoint is offline
      });
  }
};