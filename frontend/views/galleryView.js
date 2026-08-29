/**
 * CHEVY Hair & Beauty - Dynamic Gallery View Component Module
 * Attached directly to global window.galleryView.
 */

window.galleryView = {
  // Administrative Failsafe: 15 Default Hair Transformation Assets & Labels
  defaultImages: [
    {
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
      title: 'Micro Loc Maintenance',
      category: 'Loc Cultivation'
    },
    {
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      title: 'Tension-Free Knotless Braids',
      category: 'Braid Architecture'
    },
    {
      url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
      title: 'Silk Press & Hydration Steam',
      category: 'Natural Care'
    },
    {
      url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
      title: 'Starter Loc Cultivation',
      category: 'Loc Cultivation'
    },
    {
      url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
      title: 'Fulani Tribal Cornrows',
      category: 'Braid Architecture'
    },
    {
      url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
      title: 'Gentle Royalty Kids Braids',
      category: 'Kids Care'
    },
    {
      url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
      title: 'Herbal Detox & Loc Retwist',
      category: 'Loc Cultivation'
    },
    {
      url: 'https://images.unsplash.com/photo-1584297091622-af8e5ad23062?auto=format&fit=crop&w=800&q=80',
      title: 'Boho Goddess Knotless',
      category: 'Braid Architecture'
    },
    {
      url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&w=800&q=80',
      title: 'Botanical Scalp Treatment & Trim',
      category: 'Natural Care'
    },
    {
      url: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=800&q=80',
      title: 'Tender-Headed Kids Twists',
      category: 'Kids Care'
    },
    {
      url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80',
      title: 'Loc Petal Updo Styling',
      category: 'Loc Cultivation'
    },
    {
      url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
      title: 'Lemonade Feed-In Braids',
      category: 'Braid Architecture'
    },
    {
      url: 'https://images.unsplash.com/photo-1523263685547-506f2f723134?auto=format&fit=crop&w=800&q=80',
      title: 'Thermal Silk Press & Curvature',
      category: 'Natural Care'
    },
    {
      url: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
      title: 'Kids Beaded Protective Style',
      category: 'Kids Care'
    },
    {
      url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80',
      title: 'Interlocking & Root Repair',
      category: 'Loc Cultivation'
    }
  ],

  // Store active image collection
  currentImages: [],

  render: function () {
    // Default to failsafe array if current collection is empty
    const displayList = (this.currentImages && this.currentImages.length > 0) 
      ? this.currentImages 
      : this.defaultImages;

    return `
      <div class="bg-[#FDF8F5] text-[#110E0C] min-h-screen flex flex-col font-sans antialiased relative overflow-hidden selection:bg-[#C5A059] selection:text-[#110E0C]">

        <div class="absolute -top-20 -right-20 w-[600px] h-[600px] pointer-events-none z-0 opacity-15 rounded-full blur-3xl bg-gradient-to-br from-[#C29B8A] via-[#C5A059] to-[#FDF8F5]"></div>
        <div class="absolute top-[40%] -left-32 w-[650px] h-[650px] pointer-events-none z-0 opacity-10 rounded-full blur-3xl bg-gradient-to-tr from-[#C29B8A] via-[#C5A059] to-transparent"></div>

        <svg class="absolute top-24 right-10 w-12 h-12 text-[#C5A059]/30 pointer-events-none z-0 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C10.5 2 6 2 4 4.5S2 10 4 12c2 2 6.5 1 8-1.5 1.5 2.5 6 3.5 8 1.5s2-5 0-7.5-6.5-2.5-8-.5zm0 15c-1.5 2.5-6 3.5-8 1.5s-2-5 0-7.5c2-2.5 6.5-1 8 1.5 1.5-2.5 6-3.5 8-1.5s2 5 0 7.5-6.5 1-8-1.5z"/>
        </svg>

        <svg class="absolute bottom-[30%] left-8 w-14 h-14 text-[#C29B8A]/25 pointer-events-none z-0 transform -rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 4.5C10.5 2 6 2 4 4.5S2 10 4 12c2 2 6.5 1 8-1.5 1.5 2.5 6 3.5 8 1.5s2-5 0-7.5-6.5-2.5-8-.5zm0 15c-1.5 2.5-6 3.5-8 1.5s-2-5 0-7.5c2-2.5 6.5-1 8 1.5 1.5-2.5 6-3.5 8-1.5s2 5 0 7.5-6.5 1-8-1.5z"/>
        </svg>

        <section class="relative z-10 pt-12 pb-6 px-6 text-center max-w-4xl mx-auto">
          <span class="text-[#C29B8A] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">Visual Excellence</span>
          <h1 class="font-serif text-3xl sm:text-5xl font-bold text-[#110E0C] tracking-wide mb-4">Crown Portfolio</h1>
          <p class="text-xs sm:text-sm text-[#554D47] leading-relaxed max-w-xl mx-auto">
            A visual gallery of healthy crown transformations, artisanal braid architectures, and loc cultivations crafted in our private sanctuary.
          </p>
          <div class="w-24 h-0.5 bg-[#C5A059]/40 mx-auto mt-6"></div>
        </section>

        <main class="relative z-10 flex-1 max-w-6xl w-full mx-auto p-4 sm:p-6 md:p-8">
          <div id="gallery-grid-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            ${displayList.map((item) => `
              <div class="bg-white/95 backdrop-blur-sm border border-[#C29B8A]/30 overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between transform hover:-translate-y-1">
                <div class="overflow-hidden relative aspect-[4/5] bg-[#F5EBE6]">
                  <img 
                    src="${item.url || item}" 
                    alt="${item.title || 'Crown Transformation'}" 
                    class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#110E0C]/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  
                  ${item.category ? `
                    <span class="absolute top-3 left-3 bg-[#110E0C]/80 backdrop-blur-md text-[#C5A059] border border-[#C5A059]/40 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full shadow-sm">
                      ${item.category}
                    </span>
                  ` : ''}
                </div>

                <div class="p-4 text-center border-t border-[#C29B8A]/20 bg-white/90">
                  <h3 class="font-serif font-bold text-[#110E0C] text-sm sm:text-base tracking-wide">
                    ${item.title || 'Crown Transformation'}
                  </h3>
                  <p class="text-[11px] text-[#C29B8A] font-semibold uppercase tracking-wider mt-1">
                    CHEVY Hair & Beauty
                  </p>
                </div>
              </div>
            `).join('')}
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
    this.fetchGalleryImages(viewport);
  },

  /**
   * Fetches image data from Python Flask API or preserves administrative fallback data.
   */
  fetchGalleryImages: function (viewport) {
    const self = this;
    
    fetch('/api/get-gallery-images')
      .then(response => {
        if (!response.ok) throw new Error('API server returned error status');
        return response.json();
      })
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          self.currentImages = data;
          self.refreshGrid(viewport);
        }
      })
      .catch(error => {
        console.log('Backend API server unavailable. Displaying administrative failsafe 15-item layout.', error);
        self.currentImages = self.defaultImages;
      });
  },

  /**
   * Dynamically updates grid when data is received without re-rendering entire layout shell
   */
  refreshGrid: function (viewport) {
    const gridContainer = (viewport || document).querySelector('#gallery-grid-container');
    if (!gridContainer) return;

    const displayList = (this.currentImages && this.currentImages.length > 0) 
      ? this.currentImages 
      : this.defaultImages;

    gridContainer.innerHTML = displayList.map((item) => `
      <div class="bg-white/95 backdrop-blur-sm border border-[#C29B8A]/30 overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between transform hover:-translate-y-1">
        <div class="overflow-hidden relative aspect-[4/5] bg-[#F5EBE6]">
          <img 
            src="${item.url || item}" 
            alt="${item.title || 'Crown Transformation'}" 
            class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
            onerror="this.src='https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-[#110E0C]/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
          
          ${item.category ? `
            <span class="absolute top-3 left-3 bg-[#110E0C]/80 backdrop-blur-md text-[#C5A059] border border-[#C5A059]/40 text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full shadow-sm">
              ${item.category}
            </span>
          ` : ''}
        </div>

        <div class="p-4 text-center border-t border-[#C29B8A]/20 bg-white/90">
          <h3 class="font-serif font-bold text-[#110E0C] text-sm sm:text-base tracking-wide">
            ${item.title || 'Crown Transformation'}
          </h3>
          <p class="text-[11px] text-[#C29B8A] font-semibold uppercase tracking-wider mt-1">
            CHEVY Hair & Beauty
          </p>
        </div>
      </div>
    `).join('');
  }
};