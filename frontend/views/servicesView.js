/**
 * CHEVY Hair & Beauty - Services View Component Module
 * Attached directly to global window.servicesView.
 */

/**
 * CHEVY Hair & Beauty - Services View Component Module
 * Attached directly to global window.servicesView.
 */

// Paste your live connection lines here:
// const supabaseUrl = 'https://supabase.co';
// const supabaseKey = 'YOUR_ACTUAL_PUBLIC_ANON_KEY_HERE';
// const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

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
    globalDiscount: { active: true, type: 'percent', value: 15 }, // 15% OFF Global Promo
    services: [
      {
        id: 101,
        category: 'locs',
        name: 'Loc Retwist & Style (mid-back)',
        description: 'palm-roll retwist and style.',
        duration: 60, // in minutes
        price: 85,
        discountActive: true,
        checkoutUrl: 'https://buy.stripe.com/9B6eVe8E10Etbop6pi1B605'
      },

      {
        id: 102,
        category: 'locs',
        name: 'Starter Loc',
        description: 'Comb-coil or two-strand twist starter loc installation.',
        duration: 60,
        price: 75,
        discountActive: false
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
      // General Add-ons (applicable to all)
      { id: 1, name: 'Deep Herbal Scalp Detox', price: 30, duration: 20, category: 'all' },
      { id: 2, name: 'Oil Hydration Treatment', price: 25, duration: 15, category: 'all' },
      // Category-Specific Add-ons
      { id: 3, name: 'Waist-Length Extension', price: 50, duration: 45, category: 'braids' },
      { id: 4, name: 'Butt-Length Extension', price: 80, duration: 60, category: 'braids' },
      { id: 5, name: 'Loc Repair (Up to 5 Locs)', price: 40, duration: 30, category: 'locs' },
      { id: 6, name: 'Beads & Shell Accents', price: 15, duration: 10, category: 'kids' }
    ],
    stripeUrl: 'https://buy.stripe.com/9B6eVe8E10Etbop6pi1B605'
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
            Explore our service menu of natural hair, loc, and protective braid services. Customize your experience with tailored treatments and reserve your private 1-on-1 session.
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
            <option value="locs">👑 Loc Care & Growth</option>
            <option value="braids">✨ Beautiful, Healthy Braids</option>
            <option value="natural">🌸 Natural Care</option>
            <option value="kids">👑 Kids Braids</option>
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
                  Loc Care & Growth
                </button>
                <button 
                  onclick="window.servicesView.handleCategoryChange('braids')" 
                  data-cat="braids"
                  class="cat-nav-btn text-left px-4 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 text-[#110E0C] hover:bg-[#C5A059]/20 hover:text-[#110E0C]"
                >
                  Beautiful, Healthy Braids
                </button>
                <button 
                  onclick="window.servicesView.handleCategoryChange('natural')" 
                  data-cat="natural"
                  class="cat-nav-btn text-left px-4 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 text-[#110E0C] hover:bg-[#C5A059]/20 hover:text-[#110E0C]"
                >
                  Natural Hair Care
                </button>
                <button 
                  onclick="window.servicesView.handleCategoryChange('kids')" 
                  data-cat="kids"
                  class="cat-nav-btn text-left px-4 py-3 rounded-md text-xs font-bold uppercase tracking-wider transition-all duration-300 text-[#110E0C] hover:bg-[#C5A059]/20 hover:text-[#110E0C]"
                >
                  Kids Braids
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

    const { services, addons, globalDiscount, stripeUrl } = this.servicesData;
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
      const bookingTargetUrl = service.checkoutUrl;

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

        

    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-dashed border-[#C5A059]/30">
          <span class="text-[11px] text-[#110E0C]/70 italic leading-tight text-center sm:text-left">
        * *FIRST-TIME CLIENTS:* Lock your preferred time slot instantly by securing your mandatory deposit below.
        </span>

    <button
        onclick="window.openBookingModal(${service.id})"
        class="w-full sm:w-auto bg-[#C5A059] text-[#110E0C] px-8 py-3.5 font-bold text-center rounded cursor-pointer transition hover:opacity-90">
        Book Now
    </button>
</div>

<div class="mt-3 pt-2 border-t border-dashed border-[#C5A059]/30">
    <span class="text-xs text-[#110E0C]/70 italic block leading-relaxed">
        Note: A non-refundable $25 security deposit is processed via Stripe to lock your appointment seat.
        <button
            onclick="switchPublicView('contact')"
            class="text-[#C5A059] font-bold not-italic hover:underline ml-1">
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

// Global execution trigger for your Tailwind booking window with Client Form Details
// Find the exact service clicked by matching its unique ID number from your fallback data array
    const allServices = window.servicesView.fallbackData.services;
    const selectedService = allServices.find(s => s.id === parseInt(serviceId));

    if (!selectedService) {
        console.error("Could not find service details for ID:", serviceId);
        return;
    }

    let serviceName = selectedService.name;
    let servicePrice = selectedService.price;

    window.activeBooking = {
        serviceId: serviceId,
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

    const mandatoryDeposit = '25.00';
    const todayStr = new Date().toISOString().split('T')[0];

    modalContainer.innerHTML = `
        <div class="bg-[#110E0C] border border-[#C5A059]/30 rounded-xl p-6 w-full max-w-md shadow-2xl relative text-white font-sans my-8">
            <!-- Header Section -->
            <div class="flex justify-between items-center mb-5 pb-2 border-b border-[#C5A059]/20">
                <h2 class="text-lg font-bold tracking-wide text-[#C5A059]">Schedule: ` + serviceName + `</h2>
                <button class="text-gray-400 hover:text-white transition text-xl cursor-pointer" onclick="document.getElementById('custom-booking-portal').remove()">✕</button>
            </div>

            <div class="space-y-4">
                <!-- Client Contact Information Fields -->
                <div class="space-y-3">
                    <label class="text-xs font-semibold tracking-wider text-gray-300 block">CLIENT CONTACT INFORMATION</label>
                    <input type="text" id="client-name" placeholder="Full Name" class="w-full bg-[#1A1512] border border-[#C5A059]/30 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition" required>
                    <div class="grid grid-cols-2 gap-2">
                        <input type="email" id="client-email" placeholder="Email Address" class="w-full bg-[#1A1512] border border-[#C5A059]/30 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition" required>
                        <input type="tel" id="client-phone" placeholder="Phone Number" class="w-full bg-[#1A1512] border border-[#C5A059]/30 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-[#C5A059] transition" required>
                    </div>
                    <textarea id="client-notes" placeholder="Any special notes or requests? (Optional)" rows="2" class="w-full bg-[#1A1512] border border-[#C5A059]/30 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059] transition"></textarea>
                </div>

                <!-- Date Picker Block (With Bright Calendar Picker CSS Override) -->
                <div class="flex flex-col gap-1.5">
                    <label class="text-xs font-semibold tracking-wider text-gray-300">SELECT AN AVAILABLE DATE</label>
                    <input type="date" id="booking-date-input" min="` + todayStr + `" class="w-full bg-[#1A1512] border border-[#C5A059]/40 rounded-lg p-3 text-white focus:outline-none focus:border-[#C5A059] transition [color-scheme:dark]" onchange="window.handleDateSelection(this.value)">
                </div>

                <!-- Time Slot Wrapper Stream -->
                <div id="booking-time-slots" class="space-y-1">
                    <p class="text-xs italic text-gray-400">Please pick a date first to view open hours...</p>
                </div>

                <!-- Financial Statement Overview Row -->
                <div class="bg-[#1A1512] border-l-4 border-[#C5A059] p-4 rounded-r-lg space-y-1.5 text-xs mt-2">
                    <div class="flex justify-between">
                        <span class="text-gray-400">Service Total:</span>
                        <span class="font-bold text-white">$` + servicePrice.toFixed(2) + `</span>
                    </div>
                    <div class="flex justify-between border-t border-gray-800 pt-2">
                        <span class="text-gray-400">Mandatory Security Deposit:</span>
                        <span class="font-bold text-[#E53E3E]">$` + mandatoryDeposit + `</span>
                    </div>
                    <span class="block text-[10px] text-gray-500 leading-tight pt-1">*Deposits are completely non-refundable and lock your seat instantly.</span>
                </div>

                <!-- Checkout Processing Trigger -->
                <button class="w-full py-3.5 bg-[#C5A059] hover:bg-[#B38F48] text-[#110E0C] font-bold rounded-lg tracking-wide transition cursor-pointer disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed shadow-md text-sm" id="submit-booking-checkout" disabled onclick="window.processValidationAndRedirect(` + servicePrice + `, ` + mandatoryDeposit + `)">
                    Secure My Spot & Pay Deposit
                </button>
            </div>
        </div>
    `;


// ==========================================
// UNIFIED ENGINE HOOKS (ATTTACHED DIRECTLY TO WINDOW)
// ==========================================

// 1. Handles showing clean salon hour slots as soon as a calendar square is clicked
window.handleDateSelection = function(dateValue) {
    if (!window.activeBooking) window.activeBooking = {};

    window.activeBooking.selectedDate = dateValue;

    const slotsContainer = document.getElementById('booking-time-slots');
    if (!slotsContainer) return;



      // Standard high-performance salon hour intervals
    const availableHours = ['09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM'];

    let slotsHtml = `<label class="text-sm font-semibold tracking-wider text-gray-300 block mb-2">AVAILABLE HOURS FOR ${dateValue}</label>`;

    for (let i = 0; i < availableHours.length; i++) {
        const timeText = availableHours[i];

        // Render standard clickable buttons for every hour slot
        slotsHtml += `<button type="button" onclick="window.handleTimeSelection(this, '${timeText}')" class="slot-pill py-2.5 border border-[#CSA059]/40 bg-[#01A1512] text-gray-200 text-xs font-medium transition-all hover:bg-[#CSA059]/20">${timeText}</button>`;
    }

    slotsContainer.innerHTML = slotsHtml;
};

// 2. Toggles your gold visual selection styling and unlocks the main checkout button
window.handleTimeSelection = function(buttonElement, timeValue) {
    if (!window.activeBooking) {
        window.activeBooking = {};
    }
    window.activeBooking.selectedTime = timeValue;

    // Clear old gray backgrounds out
    document.querySelectorAll('.slot-pill').forEach(function(btn) {
        btn.classList.remove('bg-[#C5A059]', 'text-[#110E0C]', 'font-bold');
        btn.classList.add('bg-[#1A1512]', 'text-gray-200');
    });

    // Set premium gold background on the active selection
    buttonElement.classList.remove('bg-[#1A1512]', 'text-gray-200');
    buttonElement.classList.add('bg-[#C5A059]', 'text-[#110E0C]', 'font-bold');

    const checkoutBtn = document.getElementById('submit-booking-checkout');
    if (checkoutBtn) {
        checkoutBtn.removeAttribute('disabled');
    }
  }



// 3. Gathers input details and paths directly into local storage before checkout
window.processValidationAndRedirect = async function(totalPrice, depositAmount) {
    const name = document.getElementById('client-name')?.value.trim();
    const email = document.getElementById('client-email')?.value.trim();
    const phone = document.getElementById('client-phone')?.value.trim();
    const notes = document.getElementById('client-notes')?.value.trim() || "";

    if (!name || !email || !phone) {
        alert('Please complete your Name, Email, and Phone Number before securing your appointment slot.');
        return;
    }

    const bookingPayload = {
        clientName: name,
        clientEmail: email,
        clientPhone: phone,
        clientNotes: notes,
        serviceId: window.activeBooking ? window.activeBooking.serviceId : null,
        date: window.activeBooking ? window.activeBooking.selectedDate : null,
        time: window.activeBooking ? window.activeBooking.selectedTime : null,
        amountPaid: depositAmount
    };

try {
        // Send everything directly to your live Supabase table logs
        await supabaseClient
            .from('booked_appointments')
            .insert([
                {
                    date: bookingPayload.date || 'No Date',
                    time_slot: bookingPayload.time || 'No Time',
                    service_details: `Service ID: ${bookingPayload.serviceId} - Client: ${bookingPayload.clientName} (${bookingPayload.clientPhone})`,
                    duration: 90
                }
            ]);
    } catch (dbError) {
        console.log('Database logging skipped:', dbError);
    }

    localStorage.setItem('pending_booking_state', JSON.stringify(bookingPayload));

    // REDIRECT STRIP LINK CHECKPOINT
    window.location.href = "https://buy.stripe.com/9B6eVe8E10Etbop6pi1B605";
};