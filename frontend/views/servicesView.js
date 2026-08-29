/**
 * CHEVY Hair & Beauty - Services View Component Module
 * Attached directly to global window.servicesView.
 */

window.servicesView = {
  // Application State
  activeCategory: 'all',
  servicesData: null,
  selectedAddons: {}, // Maps service.id -> Set of selected addon IDs

  // Fallback Mock Data for Standalone Testing
  fallbackData: {
    categories: [
      { id: 'locs', name: 'Loc Cultivation' },
      { id: 'braids', name: 'Braid Architecture' },
      { id: 'natural', name: 'Natural Care & Silk Press' },
      { id: 'kids', name: 'Gentle Kids Royalty' }
    ],
    globalDiscount: { active: true, type: 'percent', value: 10 }, // 10% OFF Global Promo
    services: [
      {
        id: 101,
        category: 'locs',
        name: 'Loc Retwist & Scalp Therapy',
        description: 'Comprehensive palm-roll retwist accompanied by a deep herbal scalp detox wash and organic essential oil seal.',
        duration: 120, // in minutes
        price: 130,
        discountActive: true
      },
      {
        id: 102,
        category: 'locs',
        name: 'Starter Loc Cultivation',
        description: 'Precision comb-coil or two-strand twist starter loc installation with customized parting architecture.',
        duration: 180,
        price: 210,
        discountActive: false
      },
      {
        id: 201,
        category: 'braids',
        name: 'Mid-Back Knotless Braids',
        description: 'Lightweight, tension-free knotless protective braids crafted for optimal edge preservation and longevity.',
        duration: 240,
        price: 240,
        discountActive: true
      },
      {
        id: 202,
        category: 'braids',
        name: 'Fulani Tribal Braids',
        description: 'Artisanal front tribal cornrows with back knotless braids, finished with dipped ends and scalp oil.',
        duration: 210,
        price: 260,
        discountActive: false
      },
      {
        id: 301,
        category: 'natural',
        name: 'Hydration Steam & Silk Press',
        description: 'Deep penetrating moisture steam treatment, invigorating scalp massage, precision end trim, and silky finish.',
        duration: 90,
        price: 125,
        discountActive: false
      },
      {
        id: 401,
        category: 'kids',
        name: 'Gentle Royalty Kids Style (Ages 3–12)',
        description: 'Patient, tender-headed care featuring lightweight, tension-free protective cornrows or twists for children.',
        duration: 105,
        price: 95,
        discountActive: false
      }
    ],
    addons: [
      // General Add-ons (applicable to all)
      { id: 1, name: 'Deep Herbal Scalp Detox', price: 30, duration: 20, category: 'all' },
      { id: 2, name: 'Hot Oil Hydration Treatment', price: 25, duration: 15, category: 'all' },
      // Category-Specific Add-ons
      { id: 3, name: 'Waist-Length Extension', price: 50, duration: 45, category: 'braids' },
      { id: 4, name: 'Butt-Length Extension', price: 80, duration: 60, category: 'braids' },
      { id: 5, name: 'Loc Repair (Up to 5 Locs)', price: 40, duration: 30, category: 'locs' },
      { id: 6, name: 'Beads & Shell Accents', price: 15, duration: 10, category: 'kids' }
    ],
    setmoreUrl: 'https://chevyhairandbeauty.setmore.com'
  },

  render: function () {
    return `
      <div class="bg-gradient-to-tr from-[#FDF8F5] via-[#F5EBE6] to-[#FDF8F5] text-[#110E0C] min-h-screen flex flex-col font-sans antialiased relative overflow-hidden selection:bg-[#C5A059] selection:text-[#110E0C]">

        <div class="absolute -top-20 -right-20 w-[600px] h-[600px] pointer-events-none z-0 opacity-15 rounded-full blur-3xl bg-gradient-to-br from-[#C29B8A] via-[#C5A059] to-[#FDF8F5]"></div>
        <div class="absolute top-[40%] -left-32 w-[650px] h-[650px] pointer-events-none z-0 opacity-10 rounded-full blur-3xl bg-gradient-to-tr from-[#C29B8A] via-[#C5A059] to-transparent"></div>

        <svg class="absolute top-12 left-10 w-64 h-64 text-[#C5A059]/15 pointer-events-none z-0" fill="none" stroke="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="48" stroke-width="0.5" stroke-dasharray="2,2"/>
          <circle cx="50" cy="50" r="36" stroke-width="0.5"/>
        </svg>
        <svg class="absolute bottom-20 right-10 w-80 h-80 text-[#C29B8A]/15 pointer-events-none z-0" fill="none" stroke="currentColor" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke-width="0.5"/>
          <path d="M50 0 V100 M0 50 H100" stroke-width="0.3"/>
        </svg>

        <section class="relative z-10 pt-12 pb-6 px-6 text-center max-w-4xl mx-auto">
          <span class="text-[#C29B8A] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">Artisanal Menu</span>
          <h1 class="font-serif text-3xl sm:text-5xl font-bold text-[#110E0C] tracking-wide mb-4">Signature Services</h1>
          <p class="text-xs sm:text-sm text-[#554D47] leading-relaxed max-w-xl mx-auto">
            Explore our curated menu of natural hair, loc, and protective braid services. Customize your experience with tailored treatments and reserve your private 1-on-1 session.
          </p>
          <div class="w-24 h-0.5 bg-[#C5A059]/40 mx-auto mt-6"></div>
        </section>

        <div class="block md:hidden sticky top-0 z-30 bg-[#FDF8F5]/95 backdrop-blur-md border-b border-[#C29B8A]/30 py-3 px-4 shadow-sm">
          <label for="mobile-category-select" class="block text-[10px] font-bold uppercase tracking-widest text-[#C29B8A] mb-1">Select Service Category</label>
          <select 
            id="mobile-category-select" 
            onchange="window.servicesView.handleCategoryChange(this.value)"
            class="w-full bg-white border border-[#C5A059]/40 text-[#110E0C] text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded-sm shadow-sm outline-none focus:border-[#C5A059]"
          >
            <option value="all">✨ All Signature Specialties</option>
            <option value="locs">👑 Loc Cultivation</option>
            <option value="braids">✨ Braid Architecture</option>
            <option value="natural">🌸 Natural Care & Silk Press</option>
            <option value="kids">👑 Gentle Kids Royalty</option>
          </select>
        </div>

        <main class="relative z-10 flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 md:p-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

            <aside class="hidden md:block sticky top-24 col-span-1 bg-white/80 backdrop-blur-md border border-[#C5A059]/30 rounded-lg p-6 shadow-lg space-y-6">
              <div class="border-b border-[#C29B8A]/30 pb-3">
                <h3 class="font-serif font-bold text-lg text-[#110E0C]">Categories</h3>
                <span class="text-[10px] uppercase tracking-widest text-[#C29B8A]">Filter Specialties</span>
              </div>

              <nav id="desktop-category-nav" class="flex flex-col space-y-2">
                <button 
                  onclick="window.servicesView.handleCategoryChange('all')" 
                  data-cat="all"
                  class="cat-nav-btn text-left px-4 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 bg-[#C5A059] text-[#110E0C] shadow-sm"
                >
                  All Specialties
                </button>
                <button 
                  onclick="window.servicesView.handleCategoryChange('locs')" 
                  data-cat="locs"
                  class="cat-nav-btn text-left px-4 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 text-[#110E0C] hover:bg-[#C5A059]/20 hover:text-[#110E0C]"
                >
                  Loc Cultivation
                </button>
                <button 
                  onclick="window.servicesView.handleCategoryChange('braids')" 
                  data-cat="braids"
                  class="cat-nav-btn text-left px-4 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 text-[#110E0C] hover:bg-[#C5A059]/20 hover:text-[#110E0C]"
                >
                  Braid Architecture
                </button>
                <button 
                  onclick="window.servicesView.handleCategoryChange('natural')" 
                  data-cat="natural"
                  class="cat-nav-btn text-left px-4 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 text-[#110E0C] hover:bg-[#C5A059]/20 hover:text-[#110E0C]"
                >
                  Natural & Silk Press
                </button>
                <button 
                  onclick="window.servicesView.handleCategoryChange('kids')" 
                  data-cat="kids"
                  class="cat-nav-btn text-left px-4 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 text-[#110E0C] hover:bg-[#C5A059]/20 hover:text-[#110E0C]"
                >
                  Gentle Kids Royalty
                </button>
              </nav>

              <div class="bg-[#FDF4F0] border border-[#C29B8A]/40 p-4 rounded-md text-center space-y-1">
                <span class="text-[10px] font-bold uppercase tracking-widest text-[#C5A059] block">Suite Guarantee</span>
                <p class="text-[11px] text-[#554D47] leading-tight">Private 1-on-1 session. Undivided focus, zero waiting delays.</p>
              </div>
            </aside>

            <section class="col-span-1 md:col-span-3 space-y-6">
              
              <div id="service-portal-list" class="space-y-6">
                <div class="text-center py-12">
                  <span class="text-xs uppercase tracking-widest text-[#C29B8A]">Loading Signature Menu...</span>
                </div>
              </div>

            </section>

          </div>
        </main>

        <div class="max-w-6xl mx-auto w-full px-6 py-12">
          <div class="border-t border-[#C29B8A]/30"></div>
        </div>

      </div>
    `;
  },

  init: function (viewport) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.fetchServicesData();
  },

  /**
   * Fetches data from Python Flask API or falls back gracefully to hardcoded mock data.
   */
  fetchServicesData: function () {
    const self = this;
    fetch('/api/get-services')
      .then(response => {
        if (!response.ok) throw new Error('API server returned error status');
        return response.json();
      })
      .then(data => {
        self.servicesData = data;
        self.renderPortal();
      })
      .catch(error => {
        console.log('Backend API server unavailable. Loading fallback static dataset.', error);
        self.servicesData = self.fallbackData;
        self.renderPortal();
      });
  },

  /**
   * Handles Category Swapping (Desktop & Mobile)
   */
  handleCategoryChange: function (categoryKey) {
    this.activeCategory = categoryKey;

    // Update Desktop Sidebar Highlights
    const buttons = document.querySelectorAll('.cat-nav-btn');
    buttons.forEach(btn => {
      const cat = btn.getAttribute('data-cat');
      if (cat === categoryKey) {
        btn.classList.add('bg-[#C5A059]', 'text-[#110E0C]', 'shadow-sm');
        btn.classList.remove('hover:bg-[#C5A059]/20');
      } else {
        btn.classList.remove('bg-[#C5A059]', 'shadow-sm');
        btn.classList.add('hover:bg-[#C5A059]/20');
      }
    });

    // Sync Mobile Dropdown Selector
    const mobileSelect = document.getElementById('mobile-category-select');
    if (mobileSelect && mobileSelect.value !== categoryKey) {
      mobileSelect.value = categoryKey;
    }

    this.renderPortal();
  },

  /**
   * Handles Addon Checkbox Toggle & Dynamic Calculation
   */
  toggleAddon: function (serviceId, addonId) {
    if (!this.selectedAddons[serviceId]) {
      this.selectedAddons[serviceId] = new Set();
    }

    const addonSet = this.selectedAddons[serviceId];
    if (addonSet.has(addonId)) {
      addonSet.delete(addonId);
    } else {
      addonSet.add(addonId);
    }

    this.renderPortal();
  },

  /**
   * Helper: Formats duration minutes into human-readable hours and minutes.
   */
  formatDuration: function (totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    if (hours > 0 && mins > 0) return `${hours} hrs ${mins} mins`;
    if (hours > 0) return `${hours} hrs`;
    return `${mins} mins`;
  },

  /**
   * Main Dynamic Portal Renderer
   */
  renderPortal: function () {
    const container = document.getElementById('service-portal-list');
    if (!container || !this.servicesData) return;

    const { services, addons, globalDiscount, setmoreUrl } = this.servicesData;
    const self = this;

    // Filter services based on active category selection
    const filteredServices = services.filter(service => {
      if (self.activeCategory === 'all') return true;
      return service.category === self.activeCategory;
    });

    if (filteredServices.length === 0) {
      container.innerHTML = `
        <div class="bg-white/80 border border-[#C5A059]/20 rounded-lg p-12 text-center shadow-md">
          <p class="font-serif text-lg font-bold text-[#110E0C] mb-2">No Specialty Styles Found</p>
          <p class="text-xs text-[#554D47]">Please select another category from the menu filter bar.</p>
        </div>
      `;
      return;
    }

    let html = '';

    filteredServices.forEach(service => {
      const activeAddonIds = self.selectedAddons[service.id] || new Set();

      // Determine applicable add-ons (General + Service/Category Specific)
      const applicableAddons = addons.filter(addon => {
        return addon.category === 'all' || addon.category === service.category;
      });

      // Calculate add-on price and duration additions
      let addonExtraPrice = 0;
      let addonExtraDuration = 0;
      const selectedAddonDetails = [];

      applicableAddons.forEach(addon => {
        if (activeAddonIds.has(addon.id)) {
          addonExtraPrice += addon.price;
          addonExtraDuration += addon.duration;
          selectedAddonDetails.push(`${addon.name} (+$${addon.price})`);
        }
      });

      // Price Calculations (Original Base Price + Addons)
      const originalBaseTotal = service.price + addonExtraPrice;
      let finalDiscountedTotal = originalBaseTotal;
      let hasDiscountApplied = false;

      // Check if global promo discount is active
      if (service.discountActive || (globalDiscount && globalDiscount.active)) {
        hasDiscountApplied = true;
        if (globalDiscount.type === 'percent') {
          const discountAmount = (service.price * (globalDiscount.value / 100));
          finalDiscountedTotal = (service.price - discountAmount) + addonExtraPrice;
        } else if (globalDiscount.type === 'flat') {
          finalDiscountedTotal = Math.max(0, (service.price - globalDiscount.value)) + addonExtraPrice;
        }
      }

      const totalDurationMins = service.duration + addonExtraDuration;
      const formattedDuration = self.formatDuration(totalDurationMins);

      // Build Setmore Redirect URL with Remark Parameters
      const bookingRemarks = encodeURIComponent(
        `Service: ${service.name} | Total: $${finalDiscountedTotal.toFixed(2)} | Duration: ${formattedDuration}` +
        (selectedAddonDetails.length > 0 ? ` | Addons: ${selectedAddonDetails.join(', ')}` : '')
      );
      const bookingTargetUrl = `${setmoreUrl || 'https://booking.setmore.com'}?remarks=${bookingRemarks}`;

      // Build Service Row Template
      html += `
        <div class="bg-white/95 backdrop-blur-sm border border-[#C5A059]/25 rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 relative group">
          
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-[#C29B8A]/20 pb-4 mb-4">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C29B8A] block mb-1">
                ${service.category} Specialty
              </span>
              <h3 class="font-serif text-xl sm:text-2xl font-bold text-[#110E0C] leading-snug">
                ${service.name}
              </h3>
            </div>

            <div class="text-left sm:text-right flex-shrink-0">
              <div class="flex items-center sm:justify-end gap-2">
                ${hasDiscountApplied ? `
                  <span class="text-xs sm:text-sm text-red-500/80 line-through font-semibold">
                    $${originalBaseTotal.toFixed(2)}
                  </span>
                  <span class="font-serif text-2xl font-bold text-[#C5A059]">
                    $${finalDiscountedTotal.toFixed(2)}
                  </span>
                ` : `
                  <span class="font-serif text-2xl font-bold text-[#110E0C]">
                    $${originalBaseTotal.toFixed(2)}
                  </span>
                `}
              </div>
              <span class="text-[11px] font-semibold text-[#554D47] tracking-wide block mt-0.5">
                ⏱ ${formattedDuration}
              </span>
            </div>
          </div>

          <p class="text-xs sm:text-sm text-[#554D47] leading-relaxed mb-6">
            ${service.description}
          </p>

          ${applicableAddons.length > 0 ? `
            <div class="bg-[#FDF8F5] border border-[#C5A059]/20 rounded-lg p-4 mb-6">
              <span class="text-[11px] font-bold uppercase tracking-wider text-[#110E0C] block mb-3">
                Custom Style Add-Ons & Enhancements
              </span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                ${applicableAddons.map(addon => {
                  const isChecked = activeAddonIds.has(addon.id);
                  return `
                    <label class="flex items-center gap-2.5 p-2.5 bg-white border ${isChecked ? 'border-[#C5A059] bg-[#C5A059]/5' : 'border-[#C29B8A]/20'} rounded-md cursor-pointer hover:border-[#C5A059]/60 transition-all text-xs">
                      <input 
                        type="checkbox" 
                        ${isChecked ? 'checked' : ''} 
                        onchange="window.servicesView.toggleAddon(${service.id}, ${addon.id})"
                        class="w-4 h-4 rounded border-[#C5A059] text-[#C5A059] focus:ring-[#C5A059]"
                      />
                      <span class="flex-1 font-medium text-[#110E0C]">${addon.name}</span>
                      <span class="font-bold text-[#C5A059] whitespace-nowrap">+$${addon.price}</span>
                    </label>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}

          <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-[#C29B8A]/20">
            <span class="text-[10px] text-[#C29B8A] italic leading-tight text-center sm:text-left">
              * Your custom discount balance will be manually verified at your appointment.
            </span>

            <a 
              href="${bookingTargetUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="w-full sm:w-auto bg-[#C5A059] text-[#110E0C] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#B08D47] hover:text-white transition-all transform hover:-translate-y-0.5 shadow-md text-center rounded-sm"
            >
              Book Now
            </a>
          </div>

          <div class="mt-3 pt-2 border-t border-dashed border-[#C29B8A]/30">
            <span class="text-xs text-[#110E0C]/70 italic block leading-relaxed">
              Note: A non-refundable deposit is required via Setmore to lock your 1-on-1 block. By booking, you verify compliance with our strict 15-minute arrival threshold and private guest boundaries. 
              <button 
                onclick="switchPublicView('contact')" 
                class="text-[#C5A059] font-bold not-italic hover:underline ml-1 inline-block"
              >
                View Full Studio Policies
              </button>
            </span>
          </div>

        </div>
      `;
    });

    container.innerHTML = html;
  }
};