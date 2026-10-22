/**
 * CHEVY Hair & Beauty - Production Storefront Engine
 * File Location: frontend/views/servicesView.js
 * Aesthetic: Premium Luxury Black & Gold (#110E0C, #C5A059, #1A1512)
 * Features: Local Menus, 15% First-Time Client Discount, Flat $25 Deposit, Inline Tailwind Registration Modal
 */

window.servicesView = {
    activeCategory: 'ALL SPECIALTIES',
    isInitialized: false, // Prevents the browser crash loop entirely

    // Core local database backup to ensure the storefront displays immediately
    fallbackData: {
        categories: [
            { id: 'all', name: 'ALL SPECIALTIES' },
            { id: 'loc-care', name: 'LOC CARE & GROWTH' },
            { id: 'braids', name: 'BEAUTIFUL, HEALTHY BRAIDS' },
            { id: 'natural', name: 'NATURAL CARE & GROWTh' },
            { id: 'kids', name: 'Gentle Kids style' }

        ],
        services: [
            {
                id: 101,
                category: 'LOC CARE & GROWTH',
                name: 'LOC RETWIST & STYLE',
                price: 85.00,
                duration: '1.5 hrs',
                description: 'palm-roll retwist and style.'
            },
            {
                id: 102,
                category: 'LOC CARE & GROWTH',
                name: 'STARTER LOC',
                price: 75.00,
                duration: '1 hr',
                description: 'Comb-coil or two-strand twist starter loc installation.'
            },

            {
              id: 103,
              category: 'locs',
              name: 'Loc Retwist & Style (butt length)',
              description: 'palm-roll retwist and style.',
              duration: 60,
              price: 100,
              discountActive: false
              },

              {
        id: 104,
        category: 'locs',
        name: 'Interlocs & Style (shoulder length)',
        description: 'interlocs and style.',
        duration: 90,
        price: 100,
        discountActive: false
      },

      {
        id: 105,
        category: 'locs',
        name: 'Interlocs & Style (mid-back)',
        description: 'interlocs and style.',
        duration: 90,
        price: 120,
        discountActive: false
      },

      {
        id: 106,
        category: 'locs',
        name: 'Interlocs & Style (butt length)',
        description: 'interlocs and style.',
        duration: 60,
        price: 140,
        discountActive: false
      },

{
        id: 107,
        category: 'locs',
        name: 'Sister Loc',
        description: 'Sister starter loc installation.',
        duration: 48,
        price: 850,
        discountActive: false
      },

      {
        id: 108,
        category: 'locs',
        name: 'Small Locs Installation',
        description: 'Crocret loc installation.',
        duration: 48,
        price: 1000,
        discountActive: false
      },

      {
        id: 109,
        category: 'locs',
        name: 'Medium Locs Installation',
        description: 'Crochet starter loc installation.',
        duration: 60,
        price: 800,
        discountActive: false
      },

      {
        id: 201,
        category: 'braids',
        name: 'Small Knotless Braids',
        description: 'Lightweight, tension-free knotless protective braids.',
        duration: 240,
        price: 210,
        discountActive: true
      },

      {
        id: 202,
        category: 'braids',
        name: 'Smedium Knotless Braids',
        description: 'Lightweight, tension-free knotless protective braids.',
        duration: 240,
        price: 190,
        discountActive: true
      },

      {
        id: 203,
        category: 'braids',
        name: 'Medium Knotless Braids',
        description: 'Lightweight, tension-free knotless protective braids.',
        duration: 240,
        price: 175,
        discountActive: true
      },

      {
        id: 204,
        category: 'braids',
        name: 'Large Knotless Braids',
        description: 'Lightweight, tension-free knotless protective braids.',
        duration: 240,
        price: 155,
        discountActive: true
      },

      {
        id: 205,
        category: 'braids',
        name: 'Small Box Braids',
        description: 'Lightweight, tension-free box braids.',
        duration: 210,
        price: 195,
        discountActive: false
      },

      {
        id: 206,
        category: 'braids',
        name: 'Smedium Box Braids',
        description: 'Lightweight, tension-free box braids.',
        duration: 240,
        price: 180,
        discountActive: true
      },

      {
        id: 207,
        category: 'braids',
        name: 'Medium Box Braids',
        description: 'Lightweight, tension-free box braids.',
        duration: 240,
        price: 170,
        discountActive: true
      },

      {
        id: 208,
        category: 'braids',
        name: 'Large Box Braids',
        description: 'Lightweight, tension-free box braids.',
        duration: 240,
        price: 145,
        discountActive: true
      },

      {
        id: 209,
        category: 'braids',
        name: 'Large Rope Twist',
        description: 'Lightweight, tension-free rope twist.',
        duration: 240,
        price: 165,
        discountActive: true
      },

      {
        id: 210,
        category: 'braids',
        name: 'Medium Rope Twist',
        description: 'Lightweight, tension-free rope twist.',
        duration: 240,
        price: 185,
        discountActive: true
      },

      {
        id: 211,
        category: 'braids',
        name: 'Smedium Rope Twist',
        description: 'Lightweight, tension-free rope twist.',
        duration: 240,
        price: 200,
        discountActive: true
      },

      {
        id: 212,
        category: 'braids',
        name: 'Small Rope Twist',
        description: 'Lightweight, tension-free rope twist.',
        duration: 240,
        price: 230,
        discountActive: true
      },

      {
        id: 213,
        category: 'braids',
        name: 'Large Stitch Braid',
        description: 'Lightweight, tension-free stitch braid.',
        duration: 240,
        price: 125,
        discountActive: true
      },

      {
        id: 214,
        category: 'braids',
        name: 'Medium Stitch Braid',
        description: 'Lightweight, tension-free stitch braid.',
        duration: 240,
        price: 145,
        discountActive: true
      },

      {
        id: 215,
        category: 'braids',
        name: 'Small Stitch Braid',
        description: 'Lightweight, tension-free stitch braid.',
        duration: 240,
        price: 165,
        discountActive: true
      },

      {
        id: 216,
        category: 'braids',
        name: 'Crochet',
        description: 'Lightweight, tension-free crochet installation.',
        duration: 240,
        price: 130,
        discountActive: true
      },

      {
        id: 217,
        category: 'braids',
        name: 'Large Boho Braids',
        description: 'Lightweight, tension-free boho braids.',
        duration: 240,
        price: 165,
        discountActive: true
      },

      {
        id: 218,
        category: 'braids',
        name: 'Medium Boho Braids',
        description: 'Lightweight, tension-free boho braids.',
        duration: 240,
        price: 185,
        discountActive: true
      },

      {
        id: 219,
        category: 'braids',
        name: 'Smedium Boho Braids',
        description: 'Lightweight, tension-free boho braids.',
        duration: 240,
        price: 210,
        discountActive: true
      },

      {
        id: 220,
        category: 'braids',
        name: 'Small Boho Braids',
        description: 'Lightweight, tension-free boho braids.',
        duration: 240,
        price: 230,
        discountActive: true
      },

      {
        id: 221,
        category: 'braids',
        name: 'Half Braids with Sew-in',
        description: 'Braids in front with sew-in in the back.',
        duration: 240,
        price: 185,
        discountActive: true
      },

      {
        id: 222,
        category: 'braids',
        name: '2 Stitch Braid',
        description: 'Braids in front with sew-in in the back.',
        duration: 240,
        price: 75,
        discountActive: true
      },

      {
        id: 223,
        category: 'braids',
        name: 'Large Feed-In',
        description: 'Large feed-in style.',
        duration: 240,
        price: 145,
        discountActive: true
      },

      {
        id: 224,
        category: 'braids',
        name: 'Medium Feed-In',
        description: 'Medium feed-in style.',
        duration: 240,
        price: 165,
        discountActive: true
      },

      {
        id: 225,
        category: 'braids',
        name: 'Small Feed-In',
        description: 'Small feed-in style.',
        duration: 240,
        price: 185,
        discountActive: true
      },

      {
        id: 226,
        category: 'braids',
        name: 'Large Lemonade Braids',
        description: 'Large lemonade braids.',
        duration: 240,
        price: 155,
        discountActive: true
      },

      {
        id: 227,
        category: 'braids',
        name: 'Medium Lemonade Braids',
        description: 'Medium lemonade braids.',
        duration: 240,
        price: 175,
        discountActive: true
      },

      {
        id: 228,
        category: 'braids',
        name: 'Small Lemonade Braids',
        description: 'Small lemonade braids.',
        duration: 240,
        price: 195,
        discountActive: true
      },

      {
        id: 229,
        category: 'braids',
        name: 'Mimi Kinki Twist(Small)',
        description: 'Mimi Kinki twist style.',
        duration: 240,
        price: 170,
        discountActive: true
      },

      {
        id: 230,
        category: 'braids',
        name: 'Mimi Kinki Twist(Medium)',
        description: 'Mimi Kinki twist style.',
        duration: 240,
        price: 150,
        discountActive: true
      },

      {
        id: 231,
        category: 'braids',
        name: 'Mimi Kinki Twist(Large)',
        description: 'Mimi Kinki twist style.',
        duration: 240,
        price: 135,
        discountActive: true
      },

      {
        id: 232,
        category: 'braids',
        name: 'Long Kinki Twist(Small)',
        description: 'Long Kinki twist style.',
        duration: 240,
        price: 200,
        discountActive: true
      },

      {
        id: 233,
        category: 'braids',
        name: 'Long Kinki Twist(Medium)',
        description: 'Long Kinki twist style.',
        duration: 240,
        price: 185,
        discountActive: true
      },

      {
        id: 234,
        category: 'braids',
        name: 'Long Kinki Twist(Large)',
        description: 'Long Kinki twist style.',
        duration: 240,
        price: 170,
        discountActive: true
      },

      {
        id: 234,
        category: 'braids',
        name: 'Long Kinki Twist(Large)',
        description: 'Long Kinki twist style.',
        duration: 240,
        price: 170,
        discountActive: true
      },

       {
        id: 235,
        category: 'braids',
        name: 'Fulani Braids(Small)',
        description: 'Fulani braids style.',
        duration: 240,
        price: 185,
        discountActive: true
      },

       {
        id: 236,
        category: 'braids',
        name: 'Fulani Braids(Medium)',
        description: 'Fulani braids style.',
        duration: 240,
        price: 170,
        discountActive: true
      },

       {
        id: 237,
        category: 'braids',
        name: 'Fulani Braids(Large)',
        description: 'Fulani braids style.',
        duration: 240,
        price: 155,
        discountActive: true
      },
      
{
        id: 301,
        category: 'natural',
        name: 'Silk Ponytail',
        description: 'Silk press with ponytail included.',
        duration: 90,
        price: 95,
        discountActive: false
      },

      {
        id: 302,
        category: 'natural',
        name: 'Wash-and-Go',
        description: 'wash-and-go style.',
        duration: 90,
        price: 40,
        discountActive: false
      },

      {
        id: 303,
        category: 'natural',
        name: 'Twist-Out',
        description: 'twist-out style.',
        duration: 90,
        price: 125,
        discountActive: false
      },

{
        id: 304,
        category: 'natural',
        name: 'Flexi-Rod',
        description: 'flexi-rod style.',
        duration: 90,
        price: 125,
        discountActive: false
      },

      {
        id: 305,
        category: 'natural',
        name: 'Roller Sets',
        description: 'roller set style.',
        duration: 90,
        price: 115,
        discountActive: false
      },

      {
        id: 306,
        category: 'natural',
        name: 'Natural ponytail',
        description: 'Natural ponytail style.',
        duration: 90,
        price: 65,
        discountActive: false
      },

      {
        id: 307,
        category: 'natural',
        name: 'Large Flat Twists',
        description: 'Natural flat twists.',
        duration: 90,
        price: 70,
        discountActive: false
      },

      {
        id: 308,
        category: 'natural',
        name: 'Medium Flat Twists',
        description: 'Natural flat twists.',
        duration: 90,
        price: 80,
        discountActive: false
      },

      {
        id: 309,
        category: 'natural',
        name: 'Small Flat Twists',
        description: 'Natural flat twists.',
        duration: 90,
        price: 90,
        discountActive: false
      },

      {
        id: 310,
        category: 'natural',
        name: 'Large Cornrow',
        description: 'Natural Braids',
        duration: 90,
        price: 65,
        discountActive: false
      },

       {
        id: 311,
        category: 'natural',
        name: 'Medium Cornrow',
        description: 'Natural Braids',
        duration: 90,
        price: 75,
        discountActive: false
      },

 {
        id: 312,
        category: 'natural',
        name: 'Small Cornrow',
        description: 'Natural Braids',
        duration: 90,
        price: 90,
        discountActive: false
      },

       {
        id: 313,
        category: 'natural',
        name: 'Large Natural Twist',
        description: 'Natural Braids',
        duration: 90,
        price: 80,
        discountActive: false
      },

       {
        id: 314,
        category: 'natural',
        name: 'Medium Natural Twist',
        description: 'Natural Braids',
        duration: 90,
        price: 95,
        discountActive: false
      },

       {
        id: 315,
        category: 'natural',
        name: 'Smedium Natural Twist',
        description: 'Natural Braids',
        duration: 90,
        price: 110,
        discountActive: false
      },

       {
        id: 316,
        category: 'natural',
        name: 'Small Natural Twist',
        description: 'Natural Braids',
        duration: 90,
        price: 125,
        discountActive: false
      },

 {
        id: 317,
        category: 'natural',
        name: 'Color touch up',
        description: 'Roots touch up',
        duration: 90,
        price: 45,
        discountActive: false
      },

       {
        id: 318,
        category: 'natural',
        name: 'Single Process color',
        description: 'Single process color application.',
        duration: 90,
        price: 95,
        discountActive: false
      },

       {
        id: 319,
        category: 'natural',
        name: 'Sew in',
        description: 'Sew-in installation with style.',
        duration: 90,
        price: 130,
        discountActive: false
      },

        {
        id: 320,
        category: 'natural',
        name: 'Individual Plait(Small)',
        description: 'Individual plait style.',
        duration: 90,
        price: 110,
        discountActive: false
      },

        {
        id: 321,
        category: 'natural',
        name: 'Smedium Individual Plait',
        description: 'Smedium individual plait style.',
        duration: 90,
        price: 100,
        discountActive: false
      },

        {
        id: 322,
        category: 'natural',
        name: 'Individual Plait(Medium)',
        description: 'Individual plait style.',
        duration: 90,
        price: 90,
        discountActive: false
      },

        {
        id: 323,
        category: 'natural',
        name: 'Individual Plait(Large)',
        description: 'Individual plait style.',
        duration: 90,
        price: 75,
        discountActive: false
      },

            {
        id: 401,
        category: 'kids',
        name: 'Gentle Kids Style (Ages 3–12...Small)',
        description: 'Patient, tension-free protective cornrows or twists for children.',
        duration: 105,
        price: 85,
        discountActive: false
      },

       {
        id: 402,
        category: 'kids',
        name: 'Gentle Kids Style (Ages 3–12...Medium)',
        description: 'Patient, tension-free protective cornrows or twists for children.',
        duration: 105,
        price: 75,
        discountActive: false
      },

       {
        id: 403,
        category: 'kids',
        name: 'Gentle Kids Style (Ages 3–12...Large)',
        description: 'Patient, tension-free protective cornrows or twists for children.',
        duration: 105,
        price: 65,
        discountActive: false
      }

        ],
        addons: [
            { id: 'detox', name: 'Deep Herbal Scalp Detox', price: 30.00 },
            { id: 'hydration', name: 'Oil Hydration Treatment', price: 25.00 },
            { id: 'repair', name: 'Loc Repair (Up to 5 Locs)', price: 40.00 }
        ]
    },

    // In-memory state tracking to prevent component rendering lockups
    servicesData: [],
    selectedAddons: {},
    bookingState: {
        serviceId: null,
        calculatedTotalPrice: null,
        selectedDate: null,
        selectedTime: null
    },

    // Standard high-performance operational timeline arrays
    availableHours: ['09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'],

    /**
     * Initializes the storefront layout arrays defensively
     */
    init: function() {
        // Stop execution if initialization has already run successfully
        if (this.isInitialized) return;

        this.servicesData = this.fallbackData.services;
        this.selectedAddons = {};

        // Setup initial default tracking arrays for all services
        this.servicesData.forEach(function(service) {
            window.servicesView.selectedAddons[service.id] = [];
        });

        this.isInitialized = true;
    },

    /**
     * Mounts the main categories tabs and responsive grids cleanly onto the screen layout
     */
    render: function(container) {
        if (!container) return;

        // Safety execution loop check to verify data layers exist
        if (!this.isInitialized) {
            this.init();
        }

        let html = '<div class="min-h-screen bg-[#FAF8F5] text-[#110E0C] font-sans antialiased py-12 px-4 sm:px-6 lg:px-8">';
        html += '<div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">';

        // Sidebar Category Control Tabs
        html += '<div class="w-full lg:w-1/4 flex flex-col gap-3 bg-white p-6 rounded-xl border border-gray-200/80 shadow-sm h-fit">';
        html += '<h3 class="text-xs font-bold tracking-widest text-[#110E0C]/40 uppercase mb-2">CATEGORIES</h3>';

        this.fallbackData.categories.forEach(function(cat) {
            const isActive = window.servicesView.activeCategory === cat.name;
            html += '<button onclick="window.handleCategoryChange(\'' + cat.name + '\')" class="w-full text-left px-4 py-3 text-xs font-bold tracking-wider rounded-lg transition duration-200 ' +
                    (isActive ? 'bg-[#C5A059] text-[#110E0C] shadow-sm' : 'bg-transparent text-[#110E0C]/70 hover:bg-gray-50') + '">' + cat.name + '</button>';
        });

        // Fixed Brand Integrity Blueprint Label Box
        html += '<div class="mt-6 pt-6 border-t border-gray-100">';
        html += '<div class="bg-[#110E0C] text-white border border-[#C5A059]/30 p-4 rounded-lg space-y-2">';
        html += '<h4 class="text-[11px] font-bold tracking-widest text-[#C5A059] uppercase">SUITE GUARANTEE</h4>';
        html += '<p class="text-[11px] text-gray-400 leading-relaxed">Private 1-on-1 session. Undivided focus, zero waiting delays.</p>';
        html += '</div></div></div>';

        // Main Services Grid Column Wrapper
        html += '<div class="w-full lg:w-3/4 flex flex-col gap-6">';

        const filteredServices = this.servicesData.filter(function(service) {
            if (window.servicesView.activeCategory === 'ALL SPECIALTIES') return true;
            return service.category === window.servicesView.activeCategory;
        });

        if (filteredServices.length === 0) {
            html += '<div class="bg-white rounded-xl p-12 text-center border border-gray-200/60 shadow-sm"><p class="text-sm font-medium text-gray-400">No specialties found under this display category.</p></div>';
        } else {
            filteredServices.forEach(function(service) {
                // Interactive dynamic price updates (15% off base + enhancements sum)
                const currentAddonIds = window.servicesView.selectedAddons[service.id] || [];
                let addonTotal = 0;
                currentAddonIds.forEach(function(addonId) {
                    const found = window.servicesView.fallbackData.addons.find(function(a) { return a.id === addonId; });
                    if (found) addonTotal += found.price;
                });

                const basePlusAddons = service.price + addonTotal;
                const dynamicDiscountedTotal = (basePlusAddons * 0.85).toFixed(2);

                html += '<div class="bg-white rounded-xl border border-gray-200/80 shadow-sm p-6 flex flex-col gap-5 hover:border-gray-300 transition duration-200">';

                // Card Header Block
                html += '<div class="flex justify-between items-start gap-4">';
                html += '<div>';
                html += '<span class="text-[10px] font-bold tracking-widest text-[#C5A059] uppercase block mb-1">' + service.category + '</span>';
                html += '<h3 class="text-lg font-extrabold text-[#110E0C] tracking-wide uppercase">' + service.name + '</h3>';
                html += '<p class="text-xs text-gray-500 mt-1 lowercase italic">' + service.description + '</p>';
                html += '</div>';
                html += '<div class="text-right flex flex-col items-end">';
                html += '<span class="text-sm text-gray-400 line-through font-medium">$' + basePlusAddons.toFixed(2) + '</span>';
                html += '<span class="text-xl font-black text-[#110E0C] tracking-tight">$' + dynamicDiscountedTotal + '</span>';
                html += '<span class="text-[10px] text-gray-400 font-bold tracking-wider mt-0.5"><i class="far fa-clock mr-1"></i>' + service.duration + '</span>';
                html += '</div></div>';

                // Enhancements Checkbox Layout Element
                html += '<div class="bg-[#FAF8F5] border border-gray-200/50 rounded-lg p-4">';
                html += '<h4 class="text-[10px] font-bold tracking-wider text-[#110E0C]/50 uppercase mb-3">CUSTOM STYLE ADD-ON & ENHANCEMENTS</h4>';
                html += '<div class="grid grid-cols-1 md:grid-cols-3 gap-3">';

                window.servicesView.fallbackData.addons.forEach(function(addon) {
                    const isChecked = currentAddonIds.includes(addon.id);
                    html += '<label class="flex items-center gap-2.5 bg-white p-3 rounded-md border border-gray-200/60 shadow-sm cursor-pointer transition select-none hover:border-gray-300">';
                    html += '<input type="checkbox" ' + (isChecked ? 'checked' : '') + ' onclick="window.handleAddonToggle(' + service.id + ', \'' + addon.id + '\')" class="accent-[#C5A059] h-4 w-4 rounded cursor-pointer">';
                    html += '<div class="flex flex-col"><span class="text-[11px] font-bold text-[#110E0C]/80 leading-snug">' + addon.name + '</span>';
                    html += '<span class="text-[10px] text-[#C5A059] font-extrabold mt-0.5">+$' + addon.price.toFixed(0) + '</span></div>';
                    html += '</label>';
                });

                html += '</div></div>';

                // Promotional Alert Context Subtitle Container
                html += '<div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-dashed border-gray-100">';
                html += '<span class="text-[11px] text-gray-500 font-medium italic leading-relaxed text-center sm:text-left">';
                html += '* *FIRST-TIME CLIENTS:* You save 15% on your services! Secure your flat $25 deposit below to lock your sanctuary suite seat.';
                html += '</span>';

                // Execution Action Button Trigger
                html += '<button onclick="window.openBookingModal(' + service.id + ', ' + dynamicDiscountedTotal + ')" class="w-full sm:w-auto bg-[#C5A059] text-[#110E0C] px-8 py-3.5 text-xs font-black tracking-widest text-center uppercase rounded shadow-sm hover:opacity-90 transition duration-200 cursor-pointer">Book Now</button>';
                html += '</div></div>';
            });
        }

        html += '</div></div></div>';
        container.innerHTML = html;
    },

    /**
     * Intercepts and toggles optional addon ids cleanly without memory loss
     */
    handleAddonToggle: function(serviceId, addonId) {
        if (!this.selectedAddons[serviceId]) {
            this.selectedAddons[serviceId] = [];
        }

        const index = this.selectedAddons[serviceId].indexOf(addonId);
        if (index > -1) {
            this.selectedAddons[serviceId].splice(index, 1);
        } else {
          this.selectedAddons[serviceId].push(addonId);
        }
        const activeContainer = document.getElementById('services-view-container') || document.getElementById('app') || document.body;
    this.render(activeContainer);
}
};
          // =========================================================================
// ISOLATED GLOBAL WORKFLOW FUNCTIONS (BOUND TO WINDOW TO PREVENT ERRORS)
// =========================================================================

/**
 * Handles category state shifts safely across runtime loops
 */
window.handleCategoryChange = function(categoryName) {
    window.servicesView.activeCategory = categoryName;
    const container = document.getElementById('services-view-container') || document.getElementById('app') || document.body;
    window.servicesView.render(container);
};

/**
 * Maps out and injects the high-contrast Tailwind client registration form container
 */
window.openBookingModal = function(serviceId, calculatedTotal) {
    const service = window.servicesView.servicesData.find(function(s) { return s.id === serviceId; });
    const fallbackTitle = service ? service.name : "Luxury Salon Package";
    const finalPrice = calculatedTotal ? parseFloat(calculatedTotal) : (service ? service.price : 85.00);

    window.servicesView.bookingState = {
        serviceId: serviceId,
        calculatedTotalPrice: finalPrice,
        selectedDate: null,
        selectedTime: null
    };

    let modalContainer = document.getElementById('custom-booking-portal');
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'custom-booking-portal';
        modalContainer.className = 'fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto';
        document.body.appendChild(modalContainer);
    }

    const todayStr = new Date().toISOString().split('T');

    modalContainer.innerHTML = `
        <div class="bg-[#110E0C] border border-[#C5A059]/30 rounded-xl p-6 w-full max-w-md shadow-2xl relative text-white font-sans my-8">
            <div class="flex justify-between items-center mb-5 pb-2 border-b border-[#C5A059]/20">
                <h2 class="text-sm font-bold tracking-widest text-[#C5A059] uppercase">Schedule: ` + fallbackTitle + `</h2>
                <button class="text-gray-400 hover:text-white transition text-xl cursor-pointer" onclick="document.getElementById('custom-booking-portal').remove()">✕</button>
            </div>

            <div class="space-y-4">
                <div class="space-y-2.5">
                    <label class="text-[10px] font-bold tracking-widest text-gray-400 block uppercase">CLIENT CONTACT INFORMATION</label>
                    <input type="text" id="client-name" placeholder="Full Name" class="w-full bg-[#1A1512] border border-[#C5A059]/20 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059] transition" required>
                    <div class="grid grid-cols-2 gap-2">
                        <input type="email" id="client-email" placeholder="Email Address" class="w-full bg-[#1A1512] border border-[#C5A059]/20 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059] transition" required>
                        <input type="tel" id="client-phone" placeholder="Phone Number" class="w-full bg-[#1A1512] border border-[#C5A059]/20 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059] transition" required>
                    </div>
                    <textarea id="client-notes" placeholder="Any specific hair notes or suite entry requests? (Optional)" rows="2" class="w-full bg-[#1A1512] border border-[#C5A059]/20 rounded-lg p-2.5 text-[11px] text-white focus:outline-none focus:border-[#C5A059] transition"></textarea>
                </div>

                <div class="flex flex-col gap-1.5">
                    <label class="text-[10px] font-bold tracking-widest text-gray-400 uppercase">SELECT AN AVAILABLE DATE</label>
                    <input type="date" id="booking-date-input" min="` + todayStr + `" class="w-full bg-[#1A1512] border border-[#C5A059]/30 rounded-lg p-3 text-xs text-white focus:outline-none focus:border-[#C5A059] transition [color-scheme:dark]" onchange="window.handleDateSelection(this.value)">
                </div>

                <div id="booking-time-slots" class="space-y-1">
                    <p class="text-[11px] italic text-gray-400">Please choose a service date above to see available hours...</p>
                </div>

                <div class="bg-[#1A1512] border-l-4 border-[#C5A059] p-4 rounded-r-lg space-y-1.5 text-xs mt-2">
                    <div class="flex justify-between">
                        <span class="text-gray-400">Calculated Service Total:</span>
                        <span class="font-bold text-white">$` + finalPrice.toFixed(2) + `</span>
                    </div>
                    <div class="flex justify-between border-t border-gray-800 pt-2">
                        <span class="text-gray-400">Mandatory Reservation Deposit:</span>
                        <span class="font-bold text-[#E53E3E]">$25.00</span>
                    </div>
                    <span class="block text-[9px] text-gray-500 leading-tight pt-1">*Deposits are processed securely via Stripe. Balance due upon treatment completion.</span>
                </div>

                <button class="w-full py-3.5 bg-[#C5A059] hover:bg-[#B38F48] text-[#110E0C] text-xs font-black tracking-widest uppercase rounded-lg transition cursor-pointer disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed shadow-md" id="submit-booking-checkout" disabled onclick="window.processValidationAndRedirect()">
                    Secure My Spot & Pay Deposit
                </button>
            </div>
        </div>
    `;
};

/**
 * Renders the responsive hour pill collection dynamically on valid state selection
 */
window.handleDateSelection = function(dateValue) {
    if (!window.servicesView.bookingState) return;
    window.servicesView.bookingState.selectedDate = dateValue;

    const slotsContainer = document.getElementById('booking-time-slots');
    if (!slotsContainer) return;

    let slotsHtml = '<label class="text-[10px] font-bold tracking-widest text-gray-400 block mb-2 uppercase">AVAILABLE CALENDAR SLOTS FOR ' + dateValue + ':</label><div class="grid grid-cols-3 gap-2">';

    for (let i = 0; i < window.servicesView.availableHours.length; i++) {
        const time = window.servicesView.availableHours[i];
        slotsHtml += '<button type="button" class="slot-pill py-2 border border-[#C5A059]/20 bg-[#1A1512] text-gray-200 text-[11px] font-bold tracking-wider rounded transition cursor-pointer text-center hover:bg-[#C5A059]/10" onclick="window.handleTimeSelection(this, \'' + time + '\')">' + time + '</button>';
    }

    slotsHtml += '</div>';
    slotsContainer.innerHTML = slotsHtml;
};

/**
 * Enforces visual click active triggers and unlocks main payment checkout buttons
 */
window.handleTimeSelection = function(buttonElement, timeValue) {
    if (!window.servicesView.bookingState) return;
    window.servicesView.bookingState.selectedTime = timeValue;

    document.querySelectorAll('.slot-pill').forEach(function(btn) {
        btn.classList.remove('bg-[#C5A059]', 'text-[#110E0C]', 'font-black');
        btn.classList.add('bg-[#1A1512]', 'text-gray-200');
    });

    buttonElement.classList.remove('bg-[#1A1512]', 'text-gray-200');
    buttonElement.classList.add('bg-[#C5A059]', 'text-[#110E0C]', 'font-black');

    const checkoutBtn = document.getElementById('submit-booking-checkout');
    if (checkoutBtn) {
        checkoutBtn.removeAttribute('disabled');
    }
};

/**
 * Gathers user fields safely, validates structures, records storage data, and executes direct Stripe linking
 */
window.processValidationAndRedirect = function() {
    const name = document.getElementById('client-name')?.value.trim();
    const email = document.getElementById('client-email')?.value.trim();
    const phone = document.getElementById('client-phone')?.value.trim();
    const notes = document.getElementById('client-notes')?.value.trim() || "";

    if (!name || !email || !phone) {
        alert('Please fill out your complete contact parameters to lock your seat.');
        return;
    }

    const pendingPayload = {
        client: { name: name, email: email, phone: phone, notes: notes },
        booking: window.servicesView.bookingState,
        timestamp: new Date().toISOString()
    };

    localStorage.setItem('pending_booking_state', JSON.stringify(pendingPayload));

    // Validate slot availability with your smart backend engine first
    fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pendingPayload)
    })
    .then(async function(response) {
        const data = await response.json();
        if (response.ok) {
            // Success! The calendar slot is officially yours on your server, launch Stripe!
            window.location.href = "https://buy.stripe.com/fZu14o6vT5YN8cdaFy1B607";
        } else {
            // Overbooking protection fired! Warn user instantly
            alert(data.message || 'This specific time slot was just locked by another client. Please refresh and select another calendar hour!');
        }
    })
    .catch(function(err) {
        console.error("Failsafe activated:", err);
        window.location.href = "https://buy.stripe.com/fZu14o6vT5YN8cdaFy1B607";
    });
};


// =========================================================================
// DEFENSIVE DOM MOUNT TRIGGER (GUARANTEES RENDERING UNDER ALL ENVIRONMENT LAUNCHES)
// =========================================================================
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('services-view-container') || document.getElementById('app') || document.querySelector('main') || document.body;
    if (container && window.servicesView) {
        window.servicesView.render(container);
    }
});

// =========================================================================
// ROUTER ENGINE COMPATIBILITY LINK (BRIDGES YOUR STOREFRONT INTEGRATION)
// =========================================================================

/**
 * The standard routing system initializer expected by your main app router.
 * This sets your default data array parameters and triggers page building.
 */
window.servicesView.init = function() {
    // Explicitly check fallback configuration layers to prevent blank states
    if (!this.servicesData || this.servicesData.length === 0) {
        this.servicesData = this.fallbackData.services;
    }

    // Set validation execution tracking flags
    this.isInitialized = true;

    // Locate the dynamic viewing viewport setup by your app router
    const targetViewport = document.getElementById('services-view-container')
                        || document.getElementById('app')
                        || document.getElementById('main-content')
                        || document.querySelector('main');

    if (targetViewport) {
        // Execute clean DOM markup parsing without calling init again
        window.servicesView.render(targetViewport);
    }
};