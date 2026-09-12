/**
 * CHEVY Hair & Beauty - Home View Component Module
 * Attached directly to global window.homeView.
 */

window.homeView = {
  // Default Layout Data Ledger (Fallback when server/DB is offline)
  defaultData: {
    heroSlides: [
      {
        image: 'IMG_1946.jpg',
        title: 'Gentle Kids Natural Care',
        desc: 'Patience, love, and light hands for your little royalty (Ages 3–12). Premium tension-free protective styling engineered for growth.',
        buttonText: 'Explore Services',
        buttonRoute: 'services'
      },
      {
        image: 'IMG_1476.jpg',
        title: 'Crown Loc Cultivation',
        desc: 'Precision retwists, starter locs, palm rolling, and therapeutic herbal detox rinses in a quiet, serene suite sanctuary.',
        buttonText: 'Explore Services',
        buttonRoute: 'services'
      },
      {
        image: 'IMG_5333.jpg',
        title: 'Artisanal Braid Architecture',
        desc: 'Crisp parting, lightweight knotless braids, fulani accents, and protective styles crafted tension-free for edge retention.',
        buttonText: 'Explore Services',
        buttonRoute: 'services'
      }
    ],
    welcome: {
      badge: 'Boutique Sanctuary',
      title: 'The CHEVY Experience',
      paragraph: 'Welcome to CHEVY Hair & Beauty, an exclusive private boutique suite dedicated to honoring your natural crown. We champion health-first techniques, tension-free styling, and peaceful, uninterrupted 1-on-1 private self-care in a tranquil environment engineered for rest, renewal, and retention.',
      buttonText: 'Read Our Full Story',
      buttonRoute: 'about'
    },
    transformations: [
      {
        image: 'IMG_3643.jpg',
        title: 'Loc Detox & Maintenance',
        subtitle: 'Palmed retwist with herbal rinse finish'
      },
      {
        image: 'IMG_5133.jpg',
        title: 'Tension-Free Knotless Braids',
        subtitle: 'Lightweight protective braid architecture'
      },
      {
        image: 'IMG_0075.jpg',
        title: 'Silk Press & Style',
        subtitle: 'Steam therapy and precision end trim'
      }
    ]
  },

  render: function () {
    const data = this.defaultData;

    return `
      <div class="bg-[#FDF8F5] text-[#110E0C] min-h-screen flex flex-col font-sans antialiased relative overflow-hidden selection:bg-[#C5A059] selection:text-[#110E0C]">

        <div class="absolute -top-20 -right-20 w-[600px] h-[600px] pointer-events-none z-0 opacity-15 rounded-full blur-3xl bg-gradient-to-br from-[#C29B8A] via-[#C5A059] to-[#FDF8F5]"></div>
        <div class="absolute top-[35%] -left-32 w-[650px] h-[650px] pointer-events-none z-0 opacity-10 rounded-full blur-3xl bg-gradient-to-tr from-[#C29B8A] via-[#C5A059] to-transparent"></div>

        <svg class="absolute top-28 right-12 sm:right-24 w-12 h-12 text-[#C5A059]/30 pointer-events-none z-0 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C10.5 2 6 2 4 4.5S2 10 4 12c2 2 6.5 1 8-1.5 1.5 2.5 6 3.5 8 1.5s2-5 0-7.5-6.5-2.5-8-.5zm0 15c-1.5 2.5-6 3.5-8 1.5s-2-5 0-7.5c2-2.5 6.5-1 8 1.5 1.5-2.5 6-3.5 8-1.5s2 5 0 7.5-6.5 1-8-1.5z"/>
        </svg>

        <svg class="absolute top-[48%] right-8 w-16 h-16 text-[#C5A059]/20 pointer-events-none z-0 transform rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C10.5 2 6 2 4 4.5S2 10 4 12c2 2 6.5 1 8-1.5 1.5 2.5 6 3.5 8 1.5s2-5 0-7.5-6.5-2.5-8-.5zm0 15c-1.5 2.5-6 3.5-8 1.5s-2-5 0-7.5c2-2.5 6.5-1 8 1.5 1.5-2.5 6-3.5 8-1.5s2 5 0 7.5-6.5 1-8-1.5z"/>
        </svg>

        <svg class="absolute bottom-[22%] left-10 w-14 h-14 text-[#C29B8A]/25 pointer-events-none z-0 transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C10.5 2 6 2 4 4.5S2 10 4 12c2 2 6.5 1 8-1.5 1.5 2.5 6 3.5 8 1.5s2-5 0-7.5-6.5-2.5-8-.5zm0 15c-1.5 2.5-6 3.5-8 1.5s-2-5 0-7.5c2-2.5 6.5-1 8 1.5 1.5-2.5 6-3.5 8-1.5s2 5 0 7.5-6.5 1-8-1.5z"/>
        </svg>

        <section class="relative z-10 w-full h-[78vh] min-h-[520px] max-h-[850px] overflow-hidden shadow-2xl border-b border-[#C29B8A]/30">
          
          <div id="hero-slide-0" class="home-hero-slide absolute inset-0 opacity-100 transition-opacity duration-1000 ease-in-out bg-cover bg-center" style="background-image: url('${data.heroSlides[0].image}');"></div>
          
          <div id="hero-slide-1" class="home-hero-slide absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center" style="background-image: url('${data.heroSlides[1].image}');"></div>
          
          <div id="hero-slide-2" class="home-hero-slide absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center" style="background-image: url('${data.heroSlides[2].image}');"></div>

          <div class="absolute inset-0 bg-gradient-to-t from-[#110E0C]/65 via-transparent to-black/20 z-10"></div>

          <div class="relative z-20 max-w-[1280px] mx-auto h-full px-6 flex items-end justify-start pb-10 sm:pb-14">
            <div class="backdrop-blur-md bg-[#110E0C]/80 text-[#FDF8F5] p-6 sm:p-8 max-w-sm rounded-lg border-l-4 border-[#C5A059] shadow-2xl border-t border-r border-b border-[#C29B8A]/20 transform transition-all duration-500 hover:border-[#C5A059]">
              <span class="text-[#C5A059] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] block mb-2">Exclusive Crown Care</span>
              <h1 id="hero-promo-title" class="font-serif text-2xl sm:text-3xl font-bold mb-3 tracking-wide text-white leading-tight">${data.heroSlides[0].title}</h1>
              <p id="hero-promo-desc" class="text-xs sm:text-sm text-[#D3C9C3] mb-6 leading-relaxed">${data.heroSlides[0].desc}</p>
              <button id="hero-promo-btn" onclick="switchPublicView('${data.heroSlides[0].buttonRoute || 'services'}')" class="bg-[#C5A059] text-[#110E0C] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#B08D47] hover:text-white transition-all shadow-md transform hover:-translate-y-0.5">
                ${data.heroSlides[0].buttonText || 'Explore Services'}
              </button>
            </div>
          </div>

          <div class="absolute bottom-8 right-6 sm:right-12 flex gap-3 z-20">
            <button aria-label="Slide 1" class="hero-dot-indicator w-3 h-3 rounded-full bg-[#C5A059] border border-[#C5A059] cursor-pointer transition-all"></button>
            <button aria-label="Slide 2" class="hero-dot-indicator w-3 h-3 rounded-full bg-white/40 border border-[#C5A059] cursor-pointer transition-all"></button>
            <button aria-label="Slide 3" class="hero-dot-indicator w-3 h-3 rounded-full bg-white/40 border border-[#C5A059] cursor-pointer transition-all"></button>
          </div>
        </section>

        <section class="relative z-10 max-w-[880px] mx-auto text-center px-6 pt-16 pb-12">
          <div class="mb-4 inline-block text-[#C5A059]">
            <svg class="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M7.757 16.243l-2.121 2.121m12.728 0l-2.121-2.121M7.757 7.757L5.636 5.636"/>
            </svg>
          </div>
          
          <span id="welcome-badge" class="text-[#C29B8A] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">${data.welcome.badge}</span>
          <h2 id="welcome-title" class="font-serif text-3xl md:text-4xl text-[#110E0C] mb-4 tracking-wide font-bold">${data.welcome.title}</h2>
          <p id="welcome-paragraph" class="text-sm md:text-base text-[#554D47] leading-relaxed mb-8 max-w-2xl mx-auto">
            ${data.welcome.paragraph}
          </p>
          <button id="welcome-btn" onclick="switchPublicView('${data.welcome.buttonRoute || 'about'}')" class="border-2 border-[#C5A059] text-[#110E0C] px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-[#110E0C] transition-all shadow-sm">
            ${data.welcome.buttonText || 'Read Our Full Story'}
          </button>
        </section>

        <hr class="max-w-[1100px] mx-auto border-t border-[#C29B8A]/30 w-full relative z-10" />

        <section class="relative z-10 max-w-[1240px] mx-auto px-6 py-16">
          <div class="text-center mb-12">
            <span class="text-[#C5A059] text-xs font-semibold uppercase tracking-[0.25em] block mb-1">Mastery & Precision</span>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-[#110E0C]">Signature Craft Specialties</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div class="bg-white/95 backdrop-blur-sm border border-[#C5A059]/20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div class="h-56 overflow-hidden relative">
                  <img src="IMG_2256.jpg" alt="Loc Cultivation" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#110E0C]/60 via-transparent to-transparent"></div>
                  <span class="absolute bottom-3 left-4 text-[#C5A059] font-serif font-bold text-lg">Locs</span>
                </div>
                <div class="p-6">
                  <h3 class="font-serif text-xl font-bold text-[#110E0C] mb-2">Loc Cultivation</h3>
                  <p class="text-xs sm:text-sm text-[#554D47] leading-relaxed mb-6">Starter loc installs, precision retwists, palm rolling, and therapeutic herbal detox rinses designed for long-term root strength.</p>
                </div>
              </div>
              <div class="px-6 pb-6">
                <button onclick="switchPublicView('services')" class="w-full bg-[#C5A059] text-[#110E0C] py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#B08D47] hover:text-white transition-colors rounded-sm">
                  See Loc Menu
                </button>
              </div>
            </div>

            <div class="bg-white/95 backdrop-blur-sm border border-[#C5A059]/20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div class="h-56 overflow-hidden relative">
                  <img src="IMG_5812.jpg" alt="Braid Architecture" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#110E0C]/60 via-transparent to-transparent"></div>
                  <span class="absolute bottom-3 left-4 text-[#C5A059] font-serif font-bold text-lg">Braids</span>
                </div>
                <div class="p-6">
                  <h3 class="font-serif text-xl font-bold text-[#110E0C] mb-2">Braid Architecture</h3>
                  <p class="text-xs sm:text-sm text-[#554D47] leading-relaxed mb-6">Crisp parting, lightweight knotless styles, fulani accents, and protective braids crafted tension-free to preserve fragile edges.</p>
                </div>
              </div>
              <div class="px-6 pb-6">
                <button onclick="switchPublicView('services')" class="w-full bg-[#C5A059] text-[#110E0C] py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#B08D47] hover:text-white transition-colors rounded-sm">
                  See Braid Menu
                </button>
              </div>
            </div>

            <div class="bg-white/95 backdrop-blur-sm border border-[#C5A059]/20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between">
              <div>
                <div class="h-56 overflow-hidden relative">
                  <img src="IMG_4784.jpg" alt="Natural Care and Kids" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#110E0C]/60 via-transparent to-transparent"></div>
                  <span class="absolute bottom-3 left-4 text-[#C5A059] font-serif font-bold text-lg">Natural & Kids</span>
                </div>
                <div class="p-6">
                  <h3 class="font-serif text-xl font-bold text-[#110E0C] mb-2">Natural Care & Kids</h3>
                  <p class="text-xs sm:text-sm text-[#554D47] leading-relaxed mb-6">Hydration steam treatments, silk presses, precision trims, and tender-headed gentle handling for young royalty (Ages 3–12).</p>
                </div>
              </div>
              <div class="px-6 pb-6">
                <button onclick="switchPublicView('services')" class="w-full bg-[#C5A059] text-[#110E0C] py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#B08D47] hover:text-white transition-colors rounded-sm">
                  See Complete Menu
                </button>
              </div>
            </div>

          </div>

          <div class="text-center mt-12">
            <button onclick="switchPublicView('services')" class="bg-[#C5A059] text-[#110E0C] px-10 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#B08D47] hover:text-white transition-all shadow-lg transform hover:-translate-y-0.5 rounded-sm">
              View All Signature Services
            </button>
          </div>
        </section>

        <hr class="max-w-[1100px] mx-auto border-t border-[#C29B8A]/30 w-full relative z-10" />

        <section class="relative z-10 max-w-[1240px] mx-auto px-6 py-16">
          <div class="text-center mb-12">
            <span class="text-[#C29B8A] text-xs font-semibold uppercase tracking-[0.25em] block mb-1">Visual Excellence</span>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-[#110E0C]">Transformation Portfolio Preview</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            
            <div class="bg-white/95 backdrop-blur-sm border border-[#C29B8A]/30 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <div class="overflow-hidden">
                <img id="trans-img-0" src="${data.transformations[0].image}" alt="Loc Transformation" class="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-4 text-center border-t border-[#C29B8A]/20">
                <h4 id="trans-title-0" class="font-serif font-bold text-[#110E0C] text-base">${data.transformations[0].title}</h4>
                <p id="trans-sub-0" class="text-xs text-[#554D47] mt-1">${data.transformations[0].subtitle}</p>
              </div>
            </div>

            <div class="bg-white/95 backdrop-blur-sm border border-[#C29B8A]/30 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <div class="overflow-hidden">
                <img id="trans-img-1" src="${data.transformations[1].image}" alt="Knotless Braids" class="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-4 text-center border-t border-[#C29B8A]/20">
                <h4 id="trans-title-1" class="font-serif font-bold text-[#110E0C] text-base">${data.transformations[1].title}</h4>
                <p id="trans-sub-1" class="text-xs text-[#554D47] mt-1">${data.transformations[1].subtitle}</p>
              </div>
            </div>

            <div class="bg-white/95 backdrop-blur-sm border border-[#C29B8A]/30 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
              <div class="overflow-hidden">
                <img id="trans-img-2" src="${data.transformations[2].image}" alt="Silk Press Transformation" class="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div class="p-4 text-center border-t border-[#C29B8A]/20">
                <h4 id="trans-title-2" class="font-serif font-bold text-[#110E0C] text-base">${data.transformations[2].title}</h4>
                <p id="trans-sub-2" class="text-xs text-[#554D47] mt-1">${data.transformations[2].subtitle}</p>
              </div>
            </div>

          </div>

          <div class="text-center">
            <button onclick="switchPublicView('gallery')" class="inline-block font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] text-[#110E0C] hover:text-[#C5A059] transition-colors border-b-2 border-[#C5A059] pb-1">
              See Full Transformation Portfolio
            </button>
          </div>
        </section>

        <section class="relative z-10 max-w-[1000px] mx-auto px-6 py-8">
          <div class="bg-white/95 border-l-4 border-[#C5A059] border-t border-r border-b border-[#C29B8A]/40 p-8 sm:p-10 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div class="space-y-1">
              <span class="text-[#C5A059] text-[10px] font-semibold uppercase tracking-[0.2em]">Sanctuary Privacy</span>
              <h3 class="font-serif text-lg font-bold text-[#110E0C]">Exclusive Studio Reservation Notice</h3>
              <p class="text-xs sm:text-sm text-[#554D47] leading-relaxed">CHEVY operates as a private 1-on-1 studio suite. To preserve total guest safety and confidentiality, physical address details and access codes are issued automatically via text/email only upon deposit hold clearance.</p>
            </div>
            <button onclick="switchPublicView('contact')" class="border border-[#C5A059] text-[#110E0C] px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#C5A059] whitespace-nowrap transition-colors rounded-sm">
              Read Remaining Rules & Terms
            </button>
          </div>
        </section>

        <section class="relative z-10 max-w-[850px] mx-auto px-6 py-12">
          <div class="bg-[#FDF4F0]/90 backdrop-blur-sm border border-[#C29B8A]/50 p-8 sm:p-12 text-center shadow-md rounded-lg">
            <span class="text-[#C29B8A] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">Private Insiders</span>
            <h2 class="font-serif text-2xl font-bold text-[#110E0C] mb-2">Join The VIP Crown Club</h2>
            <p class="text-xs sm:text-sm text-[#554D47] max-w-[600px] mx-auto mb-6 leading-relaxed">Subscribe to receive exclusive private suite promotion codes, seasonal discount deals, and priority access to weekend reservation slots.</p>

            <form id="home-newsletter-form" class="flex flex-col sm:flex-row gap-3 max-w-[600px] mx-auto">
              <input type="text" id="subscriber-name" placeholder="Your First Name" class="flex-1 p-3 text-xs sm:text-sm border border-[#C29B8A]/60 outline-none focus:border-[#C5A059] bg-white text-[#110E0C] rounded-sm" required />
              <input type="email" id="subscriber-email" placeholder="Your Email Address" class="flex-1 p-3 text-xs sm:text-sm border border-[#C29B8A]/60 outline-none focus:border-[#C5A059] bg-white text-[#110E0C] rounded-sm" required />
              <button type="submit" class="bg-[#C5A059] text-[#110E0C] px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#B08D47] hover:text-white transition-colors rounded-sm">Join VIP List</button>
            </form>
            <div id="newsletter-status-msg" class="mt-4 text-xs font-bold"></div>
          </div>
        </section>

        <footer class="relative z-10 bg-[#110E0C] text-[#FDF8F5] p-12 mt-16 border-t-2 border-[#C5A059]">
          <div class="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
            
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <img src="logo.png" alt="CHEVY" class="h-8 w-auto object-contain" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';" />
                <span class="font-serif text-[#C5A059] tracking-widest text-xl font-bold uppercase hidden">CHEVY</span>
              </div>
              <p class="text-xs text-stone-400 leading-relaxed max-w-sm">
                An upscale private 1-on-1 boutique suite sanctuary specializing in natural hair restoration, artisanal loc maintenance, custom protective braids, and gentle child styling. Honoring your crown with health-first luxury.
              </p>
            </div>

            <div class="space-y-4">
              <h4 class="font-serif text-[#C5A059] text-lg tracking-wider uppercase">Navigation Shortcuts</h4>
              <ul class="space-y-2.5 text-xs uppercase tracking-widest text-stone-300">
                <li><button onclick="switchPublicView('home')" class="hover:text-[#C5A059] transition-colors">Home</button></li>
                <li><button onclick="switchPublicView('about')" class="hover:text-[#C5A059] transition-colors">About Story</button></li>
                <li><button onclick="switchPublicView('services')" class="hover:text-[#C5A059] transition-colors">Service Menu</button></li>
                <li><button onclick="switchPublicView('gallery')" class="hover:text-[#C5A059] transition-colors">Transformations</button></li>
                <li><button onclick="switchPublicView('contact')" class="hover:text-[#C5A059] transition-colors">Contact & Location</button></li>
              </ul>
            </div>

            <div class="space-y-4">
              <h4 class="font-serif text-[#C5A059] text-lg tracking-wider uppercase">Connect Sanctuary</h4>
              <p class="text-xs text-stone-300">Direct Inquiries: <strong class="text-white">754-364-2346</strong></p>
              <div>
                <button onclick="switchPublicView('contact')" class="text-xs text-[#C5A059] underline hover:text-white transition-colors uppercase tracking-wider font-semibold">
                  Terms & Conditions Document
                </button>
              </div>
              
              <div class="flex gap-4 pt-2">
                <a href="https://www.tiktok.com/@chevyhairandbeauty?_r=1&_t=ZT-99GBQ0F6E0L" target="_blank" rel="noopener" aria-label="TikTok Profile" class="w-9 h-9 rounded-full border border-[#C5A059] text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-[#110E0C] transition-all shadow-sm">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.42V8.9a6.34 6.34 0 1 0 6.34 6.34V9.4A8.16 8.16 0 0 0 20 10.7V7.27a4.84 4.84 0 0 1-.41-.58z"/>
                  </svg>
                </a>
                
                <a href="https://www.instagram.com/chevyhairandbeauty?igsi=MTZxd2s0ZGV2Yzh2OQ%3D%3D&utm_source=qr" target="_blank" rel="noopener" aria-label="Instagram Profile" class="w-9 h-9 rounded-full border border-[#C5A059] text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-[#110E0C] transition-all shadow-sm">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a href="https://www.facebook.com/share/19d4Cqo2Lm/?mibextid=wwXIfr" target="_blank" rel="noopener" aria-label="Facebook Profile" class="w-9 h-9 rounded-full border border-[#C5A059] text-[#C5A059] flex items-center justify-center hover:bg-[#C5A059] hover:text-[#110E0C] transition-all shadow-sm">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>

              <p class="text-[11px] italic text-[#C29B8A]/90 leading-relaxed pt-2">
                * Note: Studio location address is private. Full address and parking instructions are transmitted automatically via text/email following verified booking deposit validations.
              </p>
            </div>

          </div>

          <div class="max-w-[1240px] mx-auto pt-6 border-t border-[#C29B8A]/20 text-center text-xs text-stone-500 tracking-wider">
            &copy; 2026 CHEVY Hair & Beauty. All Rights Reserved. Private Boutique Suite.
          </div>
        </footer>

      </div>
    `;
  },

  init: function (viewport) {
    const self = this;
    let activeSlidesData = self.defaultData.heroSlides;

    // 1. DYNAMIC API DATA FETCHING (ADMIN BACKEND INTEGRATION)
    fetch('/api/get-home-content')
      .then(res => {
        if (!res.ok) throw new Error('Network response error');
        return res.json();
      })
      .then(data => {
        if (data) {
          // Update Slideshow Data Ledger
          if (data.heroSlides && data.heroSlides.length === 3) {
            activeSlidesData = data.heroSlides;
            data.heroSlides.forEach((slide, idx) => {
              const slideElem = viewport.querySelector(`#hero-slide-${idx}`);
              if (slideElem && slide.image) {
                slideElem.style.backgroundImage = `url('${slide.image}')`;
              }
            });
            activateSlide(currentSlideIdx);
          }

          // Update Welcome Panel
          if (data.welcome) {
            const wBadge = viewport.querySelector('#welcome-badge');
            const wTitle = viewport.querySelector('#welcome-title');
            const wPara = viewport.querySelector('#welcome-paragraph');
            const wBtn = viewport.querySelector('#welcome-btn');

            if (wBadge && data.welcome.badge) wBadge.textContent = data.welcome.badge;
            if (wTitle && data.welcome.title) wTitle.textContent = data.welcome.title;
            if (wPara && data.welcome.paragraph) wPara.textContent = data.welcome.paragraph;
            if (wBtn && data.welcome.buttonText) wBtn.textContent = data.welcome.buttonText;
          }

          // Update Transformation Portfolio Preview
          if (data.transformations && data.transformations.length === 3) {
            data.transformations.forEach((item, idx) => {
              const imgElem = viewport.querySelector(`#trans-img-${idx}`);
              const titleElem = viewport.querySelector(`#trans-title-${idx}`);
              const subElem = viewport.querySelector(`#trans-sub-${idx}`);

              if (imgElem && item.image) imgElem.src = item.image;
              if (titleElem && item.title) titleElem.textContent = item.title;
              if (subElem && item.subtitle) subElem.textContent = item.subtitle;
            });
          }
        }
      })
      .catch(err => {
        // Silent catch: page uses client fallback defaults if server/endpoint is offline
      });

    // 2. HERO SLIDESHOW CROSSFADE ENGINE
    const slides = viewport.querySelectorAll('.home-hero-slide');
    const dots = viewport.querySelectorAll('.hero-dot-indicator');
    const promoTitle = viewport.querySelector('#hero-promo-title');
    const promoDesc = viewport.querySelector('#hero-promo-desc');
    const promoBtn = viewport.querySelector('#hero-promo-btn');
    let currentSlideIdx = 0;

    function activateSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.remove('opacity-0');
          slide.classList.add('opacity-100');
        } else {
          slide.classList.remove('opacity-100');
          slide.classList.add('opacity-0');
        }
      });

      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('bg-[#C5A059]');
          dot.classList.remove('bg-white/40');
        } else {
          dot.classList.remove('bg-[#C5A059]');
          dot.classList.add('bg-white/40');
        }
      });

      const currentSlideData = activeSlidesData[index] || self.defaultData.heroSlides[index];
      if (currentSlideData) {
        if (promoTitle && currentSlideData.title) promoTitle.textContent = currentSlideData.title;
        if (promoDesc && currentSlideData.desc) promoDesc.textContent = currentSlideData.desc;
        if (promoBtn) {
          if (currentSlideData.buttonText) promoBtn.textContent = currentSlideData.buttonText;
          promoBtn.setAttribute('onclick', `switchPublicView('${currentSlideData.buttonRoute || 'services'}')`);
        }
      }
    }

    if (window.chevyHomeCarouselTimer) {
      clearInterval(window.chevyHomeCarouselTimer);
    }

    if (slides.length > 1) {
      window.chevyHomeCarouselTimer = setInterval(() => {
        currentSlideIdx = (currentSlideIdx + 1) % slides.length;
        activateSlide(currentSlideIdx);
      }, 4000);
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        currentSlideIdx = idx;
        activateSlide(currentSlideIdx);
      });
    });

    // 3. NEWSLETTER VIP INSIDERS ASYNC SUBMIT HANDLER
    const form = viewport.querySelector('#home-newsletter-form');
    const msg = viewport.querySelector('#newsletter-status-msg');

    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const nameInput = viewport.querySelector('#subscriber-name');
        const emailInput = viewport.querySelector('#subscriber-email');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';

        try {
          const res = await fetch('/api/newsletter/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email })
          });
          const result = await res.json();
          if (res.ok) {
            msg.style.color = '#C5A059';
            msg.textContent = result.message;
            form.reset();
          } else {
            msg.style.color = '#e53e3e';
            msg.textContent = result.error || 'Subscription failed.';
          }
        } catch (err) {
          msg.style.color = '#C5A059';
          msg.textContent = `Thank you, ${name}! You are registered on our VIP list.`;
          form.reset();
        }
      });
    }
  }
};