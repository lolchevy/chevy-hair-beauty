/**
 * CHEVY Hair & Beauty - Storefront Page Customizer Module
 * Attached directly to global window.adminCustomizer namespace.
 */

window.adminCustomizer = {
  // Default Failsafe Datasets for Page Customizer (Expanded for 3 Hero Carousel Slots & Gallery Captions)
  defaultContent: {
    // Panel 1: Hero Carousel Sliders (3 Slots)
    hero_title_1: "Precision Hair Architecture & Luxury Loc Care",
    hero_subtitle_1: "Elevating your crown with bespoke protective styling, palm-roll cultivation, and silk press treatments in a private suite.",
    hero_btn_text_1: "Reserve Your Sanctuary Experience",
    hero_bg_image_1: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",

    hero_title_2: "Artisanal Braid Designs & Edge Preservation",
    hero_subtitle_2: "Tension-free knotless braids, scalp hydration therapy, and custom parting patterns crafted for lasting health.",
    hero_btn_text_2: "Explore Braid Packages",
    hero_bg_image_2: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80",

    hero_title_3: "Botanical Scalp Detox & Thermal Silk Press",
    hero_subtitle_3: "Infusing deep moisture steam, organic essential oils, and lightweight silk press finishes for radiant shine.",
    hero_btn_text_3: "Book Hydration Session",
    hero_bg_image_3: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=1600&q=80",

    // Panel 2: The CHEVY Experience
    about_title: "The CHEVY Experience",
    about_text: "Founded on the art of healthy hair preservation and luxurious crown cultivation, CHEVY offers an intimate, one-on-one sanctuary environment. Every session is tailored to your scalp chemistry and lifestyle.",
    about_image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",

    // Panel 3: Studio Safety & Protocols
    terms_cancellation: "Cancellations must be processed 24 hours prior to your scheduled sanctuary time. Deposits are non-refundable for late cancellations.",
    terms_lateness: "A 15-minute grace period is provided. Arrivals beyond 15 minutes may require rescheduling to preserve session quality.",
    terms_prep: "Please arrive with your hair detangled and ready for scalp detox analysis unless booking an all-inclusive package.",

    // Panel 4: Signature Craft Services Previewer
    teaser_locs_title: "Loc Care & Cultivation",
    teaser_locs_desc: "Herbal detox washes, precision retwists, and organic oil sealing for thriving locs.",
    teaser_locs_image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",

    teaser_braids_title: "Braid Architecture",
    teaser_braids_desc: "Lightweight, tension-free knotless braids and parting designs built for edge preservation.",
    teaser_braids_image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",

    teaser_natural_title: "Natural Hair & Silk Press",
    teaser_natural_desc: "Hydration steam therapy, custom treatments, precision trims, and silky thermal styling.",
    teaser_natural_image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",

    // Panel 5: Gallery Transformation Previewer
    gallery_headline: "Real Transformations, Pure Confidence",
    gallery_img_1: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    gallery_caption_1: "Fresh Crisp Retwist Execution",
    gallery_img_2: "https://images.unsplash.com/photo-1605980776566-0486c3b96346?auto=format&fit=crop&w=800&q=80",
    gallery_caption_2: "Precision Parting Knotless Braids",
    gallery_img_3: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    gallery_caption_3: "Hydration Steam & Thermal Silk Finish"
  },

  // State registry for working media data URLs or backend file paths
  mediaState: {},

  render: function (ledgerContainer, workspaceContainer) {
    const rawStore = (window.adminStore && window.adminStore.data) ? window.adminStore.data : null;
    const content = (rawStore && rawStore.page_content) ? rawStore.page_content : this.defaultContent;

    // Initialize working media state if empty
    if (Object.keys(this.mediaState).length === 0) {
      this.mediaState = {
        hero_bg_image_1: content.hero_bg_image_1 || content.hero_bg_image || this.defaultContent.hero_bg_image_1,
        hero_bg_image_2: content.hero_bg_image_2 || this.defaultContent.hero_bg_image_2,
        hero_bg_image_3: content.hero_bg_image_3 || this.defaultContent.hero_bg_image_3,
        about_image: content.about_image || this.defaultContent.about_image,
        teaser_locs_image: content.teaser_locs_image || this.defaultContent.teaser_locs_image,
        teaser_braids_image: content.teaser_braids_image || this.defaultContent.teaser_braids_image,
        teaser_natural_image: content.teaser_natural_image || this.defaultContent.teaser_natural_image,
        gallery_img_1: content.gallery_img_1 || this.defaultContent.gallery_img_1,
        gallery_img_2: content.gallery_img_2 || this.defaultContent.gallery_img_2,
        gallery_img_3: content.gallery_img_3 || this.defaultContent.gallery_img_3
      };
    }

    // ZONE 2: MIDDLE LEDGER SUMMARY PANEL
    if (ledgerContainer) {
      ledgerContainer.innerHTML = `
        <div class="border-b border-[#C29B8A]/30 pb-3 flex justify-between items-center">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-[#C29B8A]">Ledger Navigation</span>
            <h3 class="font-serif font-bold text-sm text-[#110E0C]">Page Customizer</h3>
          </div>
          <span class="bg-[#C5A059] text-[#110E0C] text-[10px] font-bold px-2 py-0.5 rounded-full">
            5 Panels
          </span>
        </div>

        <div class="p-3.5 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/30 text-xs space-y-2 mt-2">
          <span class="text-[10px] font-bold uppercase text-[#C29B8A] block">Storefront Status</span>
          <div class="font-serif font-bold text-lg text-[#110E0C]">Live Layout Engine</div>
          <p class="text-[11px] text-[#554D47] leading-relaxed">
            Directly edits copywriting, 3-slide hero banners, craft previews, and gallery captions on <code class="bg-stone-100 px-1 py-0.5 rounded text-[#C5A059]">homeView.js</code>.
          </p>
        </div>
      `;
    }

    // ZONE 3: MAIN WORKSPACE CANVAS (5 COLLAPSIBLE CARDS)
    if (workspaceContainer) {
      workspaceContainer.innerHTML = `
        <div class="space-y-6 max-w-5xl mx-auto selection:bg-[#C5A059] selection:text-[#110E0C]">
          
          <!-- WORKSPACE TOP HEADER -->
          <div class="border-b border-[#C29B8A]/30 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-1">
                Storefront Copywriting & Media Architect
              </span>
              <h1 class="font-serif text-2xl sm:text-3xl font-bold text-[#110E0C]">
                Landing Page Content Customizer
              </h1>
            </div>

            <button 
              onclick="window.adminCustomizer.commitChangesLive()" 
              class="inline-flex items-center justify-center bg-[#C5A059] text-[#110E0C] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] rounded-lg shadow-md hover:bg-[#B08D47] hover:text-white transition-all transform hover:-translate-y-0.5"
            >
              ✨ Commit Changes Live
            </button>
          </div>

          <!-- PANEL 1: HERO AD SLIDE CAROUSEL (3 SLOTS) -->
          <div class="bg-white border border-[#C5A059]/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <div 
              onclick="window.adminCustomizer.togglePanel('panel-1')" 
              class="flex justify-between items-center cursor-pointer select-none"
            >
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-[#FDF8F5] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center font-bold text-xs">1</span>
                <div>
                  <h3 class="font-serif font-bold text-lg text-[#110E0C]">Hero Slide Carousel Configuration (3-Slide Loop)</h3>
                  <p class="text-xs text-[#554D47]">Headlines, taglines, CTA buttons, and background photos for all 3 hero rotation slots</p>
                </div>
              </div>
              <span id="icon-panel-1" class="text-lg text-[#C5A059] font-bold">┼</span>
            </div>

            <div id="content-panel-1" class="hidden pt-6 mt-4 border-t border-[#C29B8A]/20 space-y-6">
              
              <!-- SLIDE CAROUSEL SLOT #1 -->
              <div class="p-4 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/20 space-y-4">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">Slide Carousel Slot #1</span>
                <div>
                  <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Main Hero Title Headline</label>
                  <input 
                    type="text" 
                    id="custom-hero-title-1" 
                    value="${(content.hero_title_1 || content.hero_title || '').replace(/"/g, '&quot;')}" 
                    class="w-full p-3 bg-white text-xs font-serif font-bold rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                  />
                </div>
                <div>
                  <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Sub-Hero Narrative Tagline</label>
                  <textarea 
                    id="custom-hero-subtitle-1" 
                    rows="2" 
                    class="w-full p-3 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] resize-none"
                  >${content.hero_subtitle_1 || content.hero_subtitle || ''}</textarea>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">CTA Booking Button Label</label>
                    <input 
                      type="text" 
                      id="custom-hero-btn-1" 
                      value="${(content.hero_btn_text_1 || content.hero_btn_text || '').replace(/"/g, '&quot;')}" 
                      class="w-full p-3 bg-white text-xs font-semibold rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Hero Background Image</label>
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-lg overflow-hidden border border-[#C29B8A]/30 shrink-0 bg-stone-100">
                        <img id="prev-hero-img-1" src="${this.mediaState.hero_bg_image_1}" class="w-full h-full object-cover" />
                      </div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onchange="window.adminCustomizer.handleFileSelect(this, 'hero_bg_image_1', 'prev-hero-img-1')"
                        class="w-full p-2 bg-white rounded-lg border border-[#C29B8A]/30 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F5EBE6] file:text-[#110E0C] hover:file:bg-[#C29B8A]/20 cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- SLIDE CAROUSEL SLOT #2 -->
              <div class="p-4 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/20 space-y-4">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">Slide Carousel Slot #2</span>
                <div>
                  <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Main Hero Title Headline</label>
                  <input 
                    type="text" 
                    id="custom-hero-title-2" 
                    value="${(content.hero_title_2 || '').replace(/"/g, '&quot;')}" 
                    class="w-full p-3 bg-white text-xs font-serif font-bold rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                  />
                </div>
                <div>
                  <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Sub-Hero Narrative Tagline</label>
                  <textarea 
                    id="custom-hero-subtitle-2" 
                    rows="2" 
                    class="w-full p-3 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] resize-none"
                  >${content.hero_subtitle_2 || ''}</textarea>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">CTA Booking Button Label</label>
                    <input 
                      type="text" 
                      id="custom-hero-btn-2" 
                      value="${(content.hero_btn_text_2 || '').replace(/"/g, '&quot;')}" 
                      class="w-full p-3 bg-white text-xs font-semibold rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Hero Background Image</label>
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-lg overflow-hidden border border-[#C29B8A]/30 shrink-0 bg-stone-100">
                        <img id="prev-hero-img-2" src="${this.mediaState.hero_bg_image_2}" class="w-full h-full object-cover" />
                      </div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onchange="window.adminCustomizer.handleFileSelect(this, 'hero_bg_image_2', 'prev-hero-img-2')"
                        class="w-full p-2 bg-white rounded-lg border border-[#C29B8A]/30 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F5EBE6] file:text-[#110E0C] hover:file:bg-[#C29B8A]/20 cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <!-- SLIDE CAROUSEL SLOT #3 -->
              <div class="p-4 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/20 space-y-4">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">Slide Carousel Slot #3</span>
                <div>
                  <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Main Hero Title Headline</label>
                  <input 
                    type="text" 
                    id="custom-hero-title-3" 
                    value="${(content.hero_title_3 || '').replace(/"/g, '&quot;')}" 
                    class="w-full p-3 bg-white text-xs font-serif font-bold rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                  />
                </div>
                <div>
                  <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Sub-Hero Narrative Tagline</label>
                  <textarea 
                    id="custom-hero-subtitle-3" 
                    rows="2" 
                    class="w-full p-3 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] resize-none"
                  >${content.hero_subtitle_3 || ''}</textarea>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">CTA Booking Button Label</label>
                    <input 
                      type="text" 
                      id="custom-hero-btn-3" 
                      value="${(content.hero_btn_text_3 || '').replace(/"/g, '&quot;')}" 
                      class="w-full p-3 bg-white text-xs font-semibold rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>
                  <div>
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Hero Background Image</label>
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-lg overflow-hidden border border-[#C29B8A]/30 shrink-0 bg-stone-100">
                        <img id="prev-hero-img-3" src="${this.mediaState.hero_bg_image_3}" class="w-full h-full object-cover" />
                      </div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onchange="window.adminCustomizer.handleFileSelect(this, 'hero_bg_image_3', 'prev-hero-img-3')"
                        class="w-full p-2 bg-white rounded-lg border border-[#C29B8A]/30 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F5EBE6] file:text-[#110E0C] hover:file:bg-[#C29B8A]/20 cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- PANEL 2: THE CHEVY EXPERIENCE -->
          <div class="bg-white border border-[#C5A059]/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <div 
              onclick="window.adminCustomizer.togglePanel('panel-2')" 
              class="flex justify-between items-center cursor-pointer select-none"
            >
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-[#FDF8F5] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center font-bold text-xs">2</span>
                <div>
                  <h3 class="font-serif font-bold text-lg text-[#110E0C]">The CHEVY Experience Welcome Section</h3>
                  <p class="text-xs text-[#554D47]">Brand heritage text, philosophy statement, and featured suite photograph</p>
                </div>
              </div>
              <span id="icon-panel-2" class="text-lg text-[#C5A059] font-bold">┼</span>
            </div>

            <div id="content-panel-2" class="hidden pt-6 mt-4 border-t border-[#C29B8A]/20 space-y-4">
              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Experience Section Headline</label>
                <input 
                  type="text" 
                  id="custom-about-title" 
                  value="${(content.about_title || '').replace(/"/g, '&quot;')}" 
                  class="w-full p-3 bg-[#FDF8F5] text-xs font-serif font-bold rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                />
              </div>

              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Brand Philosophy & Sanctuary Narrative</label>
                <textarea 
                  id="custom-about-text" 
                  rows="3" 
                  class="w-full p-3 bg-[#FDF8F5] text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] resize-none"
                >${content.about_text || ''}</textarea>
              </div>

              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Featured Suite Portrait Photo</label>
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-lg overflow-hidden border border-[#C29B8A]/30 shrink-0 bg-stone-100">
                    <img id="prev-about-img" src="${this.mediaState.about_image}" class="w-full h-full object-cover" />
                  </div>
                  <input 
                    type="file" 
                    accept="image/*" 
                    onchange="window.adminCustomizer.handleFileSelect(this, 'about_image', 'prev-about-img')"
                    class="w-full p-2 bg-white rounded-lg border border-[#C29B8A]/30 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F5EBE6] file:text-[#110E0C] hover:file:bg-[#C29B8A]/20 cursor-pointer" 
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- PANEL 3: PRIVATE STUDIO SAFETY & CANCELLATION PROTOCOLS -->
          <div class="bg-white border border-[#C5A059]/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <div 
              onclick="window.adminCustomizer.togglePanel('panel-3')" 
              class="flex justify-between items-center cursor-pointer select-none"
            >
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-[#FDF8F5] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center font-bold text-xs">3</span>
                <div>
                  <h3 class="font-serif font-bold text-lg text-[#110E0C]">Private Studio Safety & Cancellation Terms</h3>
                  <p class="text-xs text-[#554D47]">Deposit policies, late arrival grace periods, and scalp prep guidelines</p>
                </div>
              </div>
              <span id="icon-panel-3" class="text-lg text-[#C5A059] font-bold">┼</span>
            </div>

            <div id="content-panel-3" class="hidden pt-6 mt-4 border-t border-[#C29B8A]/20 space-y-4">
              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Cancellation & Deposit Policy</label>
                <textarea 
                  id="custom-terms-cancel" 
                  rows="2" 
                  class="w-full p-3 bg-[#FDF8F5] text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] resize-none"
                >${content.terms_cancellation || ''}</textarea>
              </div>

              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Lateness Grace Period Protocol</label>
                <textarea 
                  id="custom-terms-late" 
                  rows="2" 
                  class="w-full p-3 bg-[#FDF8F5] text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] resize-none"
                >${content.terms_lateness || ''}</textarea>
              </div>

              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Client Prep & Scalp Readiness Guidelines</label>
                <textarea 
                  id="custom-terms-prep" 
                  rows="2" 
                  class="w-full p-3 bg-[#FDF8F5] text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] resize-none"
                >${content.terms_prep || ''}</textarea>
              </div>
            </div>
          </div>

          <!-- PANEL 4: LANDING PAGE SIGNATURE CRAFT SERVICES PREVIEWER -->
          <div class="bg-white border border-[#C5A059]/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <div 
              onclick="window.adminCustomizer.togglePanel('panel-4')" 
              class="flex justify-between items-center cursor-pointer select-none"
            >
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-[#FDF8F5] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center font-bold text-xs">4</span>
                <div>
                  <h3 class="font-serif font-bold text-lg text-[#110E0C]">Landing Page Signature Craft Services Previewer</h3>
                  <p class="text-xs text-[#554D47]">Edit titles, descriptions, and teaser photos for homepage specialty cards</p>
                </div>
              </div>
              <span id="icon-panel-4" class="text-lg text-[#C5A059] font-bold">┼</span>
            </div>

            <div id="content-panel-4" class="hidden pt-6 mt-4 border-t border-[#C29B8A]/20 space-y-6">
              
              <!-- CRAFT ROW 1: LOC CULTIVATION -->
              <div class="p-4 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/20 space-y-3">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">Craft Card 1 — Loc Care & Cultivation</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Teaser Title</label>
                    <input 
                      type="text" 
                      id="custom-teaser-locs-title" 
                      value="${(content.teaser_locs_title || '').replace(/"/g, '&quot;')}" 
                      class="w-full p-2.5 bg-white text-xs font-serif font-bold rounded-lg border border-[#C29B8A]/30 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Teaser Photo Image</label>
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-lg overflow-hidden border border-[#C29B8A]/30 shrink-0 bg-stone-100">
                        <img id="prev-teaser-locs-img" src="${this.mediaState.teaser_locs_image}" class="w-full h-full object-cover" />
                      </div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onchange="window.adminCustomizer.handleFileSelect(this, 'teaser_locs_image', 'prev-teaser-locs-img')"
                        class="w-full p-2 bg-white rounded-lg border border-[#C29B8A]/30 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F5EBE6] file:text-[#110E0C] hover:file:bg-[#C29B8A]/20 cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Short Teaser Summary Description</label>
                  <textarea 
                    id="custom-teaser-locs-desc" 
                    rows="2" 
                    class="w-full p-2.5 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none resize-none"
                  >${content.teaser_locs_desc || ''}</textarea>
                </div>
              </div>

              <!-- CRAFT ROW 2: BRAID ARCHITECTURE -->
              <div class="p-4 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/20 space-y-3">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">Craft Card 2 — Braid Architecture</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Teaser Title</label>
                    <input 
                      type="text" 
                      id="custom-teaser-braids-title" 
                      value="${(content.teaser_braids_title || '').replace(/"/g, '&quot;')}" 
                      class="w-full p-2.5 bg-white text-xs font-serif font-bold rounded-lg border border-[#C29B8A]/30 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Teaser Photo Image</label>
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-lg overflow-hidden border border-[#C29B8A]/30 shrink-0 bg-stone-100">
                        <img id="prev-teaser-braids-img" src="${this.mediaState.teaser_braids_image}" class="w-full h-full object-cover" />
                      </div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onchange="window.adminCustomizer.handleFileSelect(this, 'teaser_braids_image', 'prev-teaser-braids-img')"
                        class="w-full p-2 bg-white rounded-lg border border-[#C29B8A]/30 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F5EBE6] file:text-[#110E0C] hover:file:bg-[#C29B8A]/20 cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Short Teaser Summary Description</label>
                  <textarea 
                    id="custom-teaser-braids-desc" 
                    rows="2" 
                    class="w-full p-2.5 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none resize-none"
                  >${content.teaser_braids_desc || ''}</textarea>
                </div>
              </div>

              <!-- CRAFT ROW 3: NATURAL HAIR CARE -->
              <div class="p-4 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/20 space-y-3">
                <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">Craft Card 3 — Natural Hair Care & Silk Press</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Teaser Title</label>
                    <input 
                      type="text" 
                      id="custom-teaser-natural-title" 
                      value="${(content.teaser_natural_title || '').replace(/"/g, '&quot;')}" 
                      class="w-full p-2.5 bg-white text-xs font-serif font-bold rounded-lg border border-[#C29B8A]/30 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Teaser Photo Image</label>
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-lg overflow-hidden border border-[#C29B8A]/30 shrink-0 bg-stone-100">
                        <img id="prev-teaser-natural-img" src="${this.mediaState.teaser_natural_image}" class="w-full h-full object-cover" />
                      </div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        onchange="window.adminCustomizer.handleFileSelect(this, 'teaser_natural_image', 'prev-teaser-natural-img')"
                        class="w-full p-2 bg-white rounded-lg border border-[#C29B8A]/30 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#F5EBE6] file:text-[#110E0C] hover:file:bg-[#C29B8A]/20 cursor-pointer" 
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Short Teaser Summary Description</label>
                  <textarea 
                    id="custom-teaser-natural-desc" 
                    rows="2" 
                    class="w-full p-2.5 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none resize-none"
                  >${content.teaser_natural_desc || ''}</textarea>
                </div>
              </div>

            </div>
          </div>

          <!-- PANEL 5: LANDING PAGE GALLERY TRANSFORMATION PREVIEWER WITH TEXT CAPTION INPUTS -->
          <div class="bg-white border border-[#C5A059]/30 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
            <div 
              onclick="window.adminCustomizer.togglePanel('panel-5')" 
              class="flex justify-between items-center cursor-pointer select-none"
            >
              <div class="flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-[#FDF8F5] text-[#C5A059] border border-[#C5A059]/30 flex items-center justify-center font-bold text-xs">5</span>
                <div>
                  <h3 class="font-serif font-bold text-lg text-[#110E0C]">Landing Page Gallery Transformation Previewer</h3>
                  <p class="text-xs text-[#554D47]">Edit main headline, swap 3 featured client photo thumbnails, and customize photo text captions</p>
                </div>
              </div>
              <span id="icon-panel-5" class="text-lg text-[#C5A059] font-bold">┼</span>
            </div>

            <div id="content-panel-5" class="hidden pt-6 mt-4 border-t border-[#C29B8A]/20 space-y-4">
              <div>
                <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Gallery Section Main Headline</label>
                <input 
                  type="text" 
                  id="custom-gallery-headline" 
                  value="${(content.gallery_headline || '').replace(/"/g, '&quot;')}" 
                  class="w-full p-3 bg-[#FDF8F5] text-xs font-serif font-bold rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                />
              </div>

              <!-- 3 SIDE-BY-SIDE THUMBNAIL IMAGE UPLOADER BOXES WITH TEXT CAPTION INPUT FIELDS -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                
                <!-- FEATURED PHOTO 1 CORE -->
                <div class="p-3.5 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/20 space-y-3">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block">Featured Photo 1</span>
                  <div class="aspect-square rounded-lg overflow-hidden border border-stone-200 bg-stone-100 shadow-inner">
                    <img id="prev-gallery-1" src="${this.mediaState.gallery_img_1}" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Upload Asset</label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onchange="window.adminCustomizer.handleFileSelect(this, 'gallery_img_1', 'prev-gallery-1')"
                      class="w-full p-2 bg-white rounded-lg border border-[#C29B8A]/30 text-xs file:mr-2 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-[10px] file:font-semibold file:bg-[#F5EBE6] file:text-[#110E0C] hover:file:bg-[#C29B8A]/20 cursor-pointer" 
                    />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Photo 1 Caption/Wording</label>
                    <input 
                      type="text" 
                      id="custom-gallery-caption-1" 
                      placeholder="e.g., Fresh Crisp Retwist Execution" 
                      value="${(content.gallery_caption_1 || '').replace(/"/g, '&quot;')}" 
                      class="w-full p-2.5 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] font-medium"
                    />
                  </div>
                </div>

                <!-- FEATURED PHOTO 2 CORE -->
                <div class="p-3.5 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/20 space-y-3">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block">Featured Photo 2</span>
                  <div class="aspect-square rounded-lg overflow-hidden border border-stone-200 bg-stone-100 shadow-inner">
                    <img id="prev-gallery-2" src="${this.mediaState.gallery_img_2}" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Upload Asset</label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onchange="window.adminCustomizer.handleFileSelect(this, 'gallery_img_2', 'prev-gallery-2')"
                      class="w-full p-2 bg-white rounded-lg border border-[#C29B8A]/30 text-xs file:mr-2 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-[10px] file:font-semibold file:bg-[#F5EBE6] file:text-[#110E0C] hover:file:bg-[#C29B8A]/20 cursor-pointer" 
                    />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Photo 2 Caption/Wording</label>
                    <input 
                      type="text" 
                      id="custom-gallery-caption-2" 
                      placeholder="e.g., Precision Parting Knotless Braids" 
                      value="${(content.gallery_caption_2 || '').replace(/"/g, '&quot;')}" 
                      class="w-full p-2.5 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] font-medium"
                    />
                  </div>
                </div>

                <!-- FEATURED PHOTO 3 CORE -->
                <div class="p-3.5 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/20 space-y-3">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#C5A059] block">Featured Photo 3</span>
                  <div class="aspect-square rounded-lg overflow-hidden border border-stone-200 bg-stone-100 shadow-inner">
                    <img id="prev-gallery-3" src="${this.mediaState.gallery_img_3}" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Upload Asset</label>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onchange="window.adminCustomizer.handleFileSelect(this, 'gallery_img_3', 'prev-gallery-3')"
                      class="w-full p-2 bg-white rounded-lg border border-[#C29B8A]/30 text-xs file:mr-2 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-[10px] file:font-semibold file:bg-[#F5EBE6] file:text-[#110E0C] hover:file:bg-[#C29B8A]/20 cursor-pointer" 
                    />
                  </div>
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Photo 3 Caption/Wording</label>
                    <input 
                      type="text" 
                      id="custom-gallery-caption-3" 
                      placeholder="e.g., Hydration Steam & Thermal Silk Finish" 
                      value="${(content.gallery_caption_3 || '').replace(/"/g, '&quot;')}" 
                      class="w-full p-2.5 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] font-medium"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>

          <!-- SUCCESS TOAST BANNER -->
          <div id="customizer-toast" class="hidden bg-emerald-900 text-emerald-100 p-4 rounded-xl border border-emerald-500/50 flex items-center justify-between text-xs font-bold animate-fadeIn">
            <span>✨ Storefront copy, 3-slide hero parameters, and gallery photo captions committed live to memory!</span>
            <span class="text-emerald-300">Auto-Synced</span>
          </div>

        </div>
      `;
    }
  },

  init: function (ledgerContainer, workspaceContainer) {
    this.render(ledgerContainer, workspaceContainer);
  },

  togglePanel: function (panelId) {
    const content = document.getElementById(`content-${panelId}`);
    const icon = document.getElementById(`icon-${panelId}`);
    if (!content || !icon) return;

    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.textContent = '─';
    } else {
      content.classList.add('hidden');
      icon.textContent = '┼';
    }
  },

  handleFileSelect: function (input, stateKey, previewImgId) {
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    const objectUrl = URL.createObjectURL(file);

    this.mediaState[stateKey] = objectUrl;

    if (previewImgId) {
      const prevImg = document.getElementById(previewImgId);
      if (prevImg) prevImg.src = objectUrl;
    }
  },

  commitChangesLive: async function () {
    const updated = {
      hero_title_1: document.getElementById('custom-hero-title-1')?.value || '',
      hero_subtitle_1: document.getElementById('custom-hero-subtitle-1')?.value || '',
      hero_btn_text_1: document.getElementById('custom-hero-btn-1')?.value || '',
      hero_bg_image_1: this.mediaState.hero_bg_image_1 || '',

      hero_title_2: document.getElementById('custom-hero-title-2')?.value || '',
      hero_subtitle_2: document.getElementById('custom-hero-subtitle-2')?.value || '',
      hero_btn_text_2: document.getElementById('custom-hero-btn-2')?.value || '',
      hero_bg_image_2: this.mediaState.hero_bg_image_2 || '',

      hero_title_3: document.getElementById('custom-hero-title-3')?.value || '',
      hero_subtitle_3: document.getElementById('custom-hero-subtitle-3')?.value || '',
      hero_btn_text_3: document.getElementById('custom-hero-btn-3')?.value || '',
      hero_bg_image_3: this.mediaState.hero_bg_image_3 || '',

      about_title: document.getElementById('custom-about-title')?.value || '',
      about_text: document.getElementById('custom-about-text')?.value || '',
      about_image: this.mediaState.about_image || '',

      terms_cancellation: document.getElementById('custom-terms-cancel')?.value || '',
      terms_lateness: document.getElementById('custom-terms-late')?.value || '',
      terms_prep: document.getElementById('custom-terms-prep')?.value || '',

      teaser_locs_title: document.getElementById('custom-teaser-locs-title')?.value || '',
      teaser_locs_desc: document.getElementById('custom-teaser-locs-desc')?.value || '',
      teaser_locs_image: this.mediaState.teaser_locs_image || '',

      teaser_braids_title: document.getElementById('custom-teaser-braids-title')?.value || '',
      teaser_braids_desc: document.getElementById('custom-teaser-braids-desc')?.value || '',
      teaser_braids_image: this.mediaState.teaser_braids_image || '',

      teaser_natural_title: document.getElementById('custom-teaser-natural-title')?.value || '',
      teaser_natural_desc: document.getElementById('custom-teaser-natural-desc')?.value || '',
      teaser_natural_image: this.mediaState.teaser_natural_image || '',

      gallery_headline: document.getElementById('custom-gallery-headline')?.value || '',
      gallery_img_1: this.mediaState.gallery_img_1 || '',
      gallery_caption_1: document.getElementById('custom-gallery-caption-1')?.value || '',
      gallery_img_2: this.mediaState.gallery_img_2 || '',
      gallery_caption_2: document.getElementById('custom-gallery-caption-2')?.value || '',
      gallery_img_3: this.mediaState.gallery_img_3 || '',
      gallery_caption_3: document.getElementById('custom-gallery-caption-3')?.value || ''
    };

    // Maintain backward compatibility for single hero keys
    updated.hero_title = updated.hero_title_1;
    updated.hero_subtitle = updated.hero_subtitle_1;
    updated.hero_btn_text = updated.hero_btn_text_1;
    updated.hero_bg_image = updated.hero_bg_image_1;

    // Update Global Store State
    if (!window.adminStore) window.adminStore = {};
    if (!window.adminStore.data) window.adminStore.data = {};
    window.adminStore.data.page_content = updated;

    // Persist to Server API if on HTTP/HTTPS
    if (!window.adminStore.isLocalFileProtocol) {
      try {
        for (const [key, val] of Object.entries(updated)) {
          await fetch('/api/admin/update-content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key_name: key, value_text: val })
          });
        }
      } catch (err) {
        console.error('Error persisting customizer updates to server:', err);
      }
    }

    // Trigger Toast Banner
    const toast = document.getElementById('customizer-toast');
    if (toast) {
      toast.classList.remove('hidden');
      setTimeout(() => toast.classList.add('hidden'), 3500);
    }
  }
};