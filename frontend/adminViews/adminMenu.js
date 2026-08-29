/**
 * CHEVY Hair & Beauty - Executive Service Menu & Add-On Architect Module
 * Attached directly to global window.adminMenu namespace.
 */

window.adminMenu = {
  render: function (ledgerContainer, workspaceContainer) {
    const rawStore = (window.adminStore && window.adminStore.data) ? window.adminStore.data : null;
    
    // Default Failsafe Datasets
    const categories = (rawStore && rawStore.categories && rawStore.categories.length > 0)
      ? rawStore.categories
      : [
          { id: 1, name: 'Loc Cultivation', slug: 'locs' },
          { id: 2, name: 'Braid Architecture', slug: 'braids' },
          { id: 3, name: 'Natural Care & Silk Press', slug: 'natural' },
          { id: 4, name: 'Gentle Kids Royalty', slug: 'kids' }
        ];

    const services = (rawStore && rawStore.services && rawStore.services.length > 0)
      ? rawStore.services
      : [
          { id: 101, category_slug: 'locs', title: 'Loc Retwist & Scalp Detox Therapy', description: 'Comprehensive palm-roll retwist with herbal detox wash.', duration_text: '2 hrs', duration_mins: 120, base_price: 130.0, setmore_url: 'https://chevyhairandbeauty.setmore.com' },
          { id: 102, category_slug: 'braids', title: 'Mid-Back Knotless Braids', description: 'Lightweight, tension-free protective braids crafted for edge preservation.', duration_text: '4 hrs', duration_mins: 240, base_price: 240.0, setmore_url: 'https://chevyhairandbeauty.setmore.com' },
          { id: 103, category_slug: 'natural', title: 'Hydration Steam & Silk Press', description: 'Deep moisture steam therapy, massage, trim, and silky finish.', duration_text: '1 hr 30 mins', duration_mins: 90, base_price: 125.0, setmore_url: 'https://chevyhairandbeauty.setmore.com' }
        ];

    const addons = (rawStore && rawStore.addons && rawStore.addons.length > 0)
      ? rawStore.addons
      : [
          { id: 1, title: 'Deep Herbal Scalp Detox', extra_price: 30.0, extra_duration_mins: 20, assignment_type: 'global', assignment_target: 'all' },
          { id: 2, title: 'Waist-Length Extension', extra_price: 50.0, extra_duration_mins: 45, assignment_type: 'category', assignment_target: 'braids' }
        ];

    const selectedFolder = (window.adminStore && window.adminStore.selectedFolder) ? window.adminStore.selectedFolder : 'all';

    // ZONE 2: MIDDLE LEDGER SUMMARY & CATEGORY SELECTOR (DESKTOP PANEL)
    if (ledgerContainer) {
      ledgerContainer.innerHTML = `
        <div class="border-b border-[#C29B8A]/30 pb-3 flex justify-between items-center">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-[#C29B8A]">Menu Ledger</span>
            <h3 class="font-serif font-bold text-sm text-[#110E0C]">Category Folders</h3>
          </div>
          <button onclick="window.adminMenu.toggleFolderForm('desktop')" class="bg-[#C5A059] text-[#110E0C] px-2.5 py-1 text-[10px] font-bold uppercase rounded-md shadow-sm hover:bg-[#B08D47] transition-all">
            + Folder
          </button>
        </div>

        <!-- Desktop Inline Create Category Folder Panel -->
        <div id="inline-folder-form-desktop" class="hidden bg-[#FDF4F0] p-3.5 rounded-xl border border-[#C5A059]/40 space-y-2">
          <span class="text-[10px] font-bold uppercase tracking-wider text-[#110E0C] block">Create Specialty Folder</span>
          <input 
            type="text" 
            id="new-folder-name-desktop" 
            placeholder="Folder Name (e.g. Loc Care)" 
            class="w-full p-2.5 text-xs bg-white rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
          />
          <div class="flex gap-2 pt-1">
            <button onclick="window.adminMenu.saveCategoryFolder('desktop')" class="flex-1 bg-[#110E0C] text-[#C5A059] py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-md">
              Save
            </button>
            <button onclick="window.adminMenu.toggleFolderForm('desktop')" class="bg-stone-200 text-stone-700 px-3 py-1.5 text-[10px] font-bold uppercase rounded-md">
              Cancel
            </button>
          </div>
        </div>

        <!-- Folder Selection Stream -->
        <div class="space-y-1.5 pt-1">
          <button 
            onclick="window.adminMenu.selectCategoryFolder('all')" 
            class="w-full text-left p-3 text-xs font-bold uppercase rounded-xl border transition-all ${selectedFolder === 'all' ? 'bg-[#C5A059] text-[#110E0C] shadow-sm border-[#C5A059]' : 'bg-[#FDF8F5] text-stone-700 border-[#C29B8A]/20 hover:border-[#C5A059]/40'}"
          >
            ✨ All Signature Services (${services.length})
          </button>

          ${categories.map(c => {
            const count = services.filter(s => s.category_slug === c.slug).length;
            const isSelected = selectedFolder === c.slug;
            return `
              <div class="flex items-center justify-between p-3 rounded-xl border transition-all ${isSelected ? 'bg-[#C5A059] text-[#110E0C] border-[#C5A059] shadow-sm' : 'bg-[#FDF8F5] text-stone-700 border-[#C29B8A]/20 hover:border-[#C5A059]/40'} text-xs font-bold uppercase">
                <button onclick="window.adminMenu.selectCategoryFolder('${c.slug}')" class="flex-1 text-left truncate">
                  ${c.name} (${count})
                </button>
                <button onclick="window.adminMenu.deleteCategoryFolder('${c.slug}')" class="text-red-600 font-bold px-1 hover:text-red-800 transition-colors">
                  ✕
                </button>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    // Filter services based on selected ledger category
    const filteredServices = services.filter(s => selectedFolder === 'all' || s.category_slug === selectedFolder);

    // ZONE 3: ASYMMETRICAL WORKSPACE SPLIT (WIDE FORM/CATALOG STREAM + SIDE ADD-ON CANVAS)
    if (workspaceContainer) {
      workspaceContainer.innerHTML = `
        <div class="space-y-6 sm:space-y-8 max-w-7xl mx-auto selection:bg-[#C5A059] selection:text-[#110E0C]">
          
          <!-- WORKSPACE TOP BAR -->
          <div class="border-b border-[#C29B8A]/30 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-1">
                Active Category: ${selectedFolder.toUpperCase()}
              </span>
              <h1 class="font-serif text-2xl sm:text-3xl font-bold text-[#110E0C]">
                Service Architecture & Add-On Console
              </h1>
            </div>
            
            <button 
              onclick="window.adminMenu.toggleServiceForm()" 
              class="inline-flex items-center justify-center bg-[#110E0C] text-[#C5A059] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] rounded-lg shadow-md hover:bg-stone-900 transition-all transform hover:-translate-y-0.5"
            >
              + Create New Service
            </button>
          </div>

          <!-- 1. HORIZONTAL TOUCH-SCROLLING MOBILE CATEGORY RIBBON (<768px ONLY) -->
          <div class="flex md:hidden flex-col gap-2">
            <div class="flex flex-row overflow-x-auto gap-3 py-3 px-1 scrollbar-none mb-2 items-center">
              <button 
                onclick="window.adminMenu.selectCategoryFolder('all')"
                class="whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-all ${selectedFolder === 'all' ? 'bg-[#C5A059] text-[#110E0C] font-bold border-[#C5A059] shadow-sm' : 'bg-white border-[#C29B8A]/30 text-[#110E0C]'}"
              >
                ✨ All (${services.length})
              </button>

              ${categories.map(c => {
                const count = services.filter(s => s.category_slug === c.slug).length;
                const isSelected = selectedFolder === c.slug;
                return `
                  <button 
                    onclick="window.adminMenu.selectCategoryFolder('${c.slug}')"
                    class="whitespace-nowrap px-4 py-2 rounded-full border text-sm font-medium transition-all ${isSelected ? 'bg-[#C5A059] text-[#110E0C] font-bold border-[#C5A059] shadow-sm' : 'bg-white border-[#C29B8A]/30 text-[#110E0C]'}"
                  >
                    ${c.name} (${count})
                  </button>
                `;
              }).join('')}

              <!-- Phone Folder Inserter Pill Trigger -->
              <button 
                onclick="window.adminMenu.toggleFolderForm('mobile')"
                class="whitespace-nowrap px-4 py-2 rounded-full bg-[#110E0C] text-[#C5A059] border border-[#C5A059] text-sm font-bold flex items-center justify-center gap-1.5 shrink-0 shadow-sm"
              >
                <span>➕</span> Folder
              </button>
            </div>

            <!-- Mobile Inline Create Folder Panel -->
            <div id="inline-folder-form-mobile" class="hidden bg-[#FDF4F0] p-4 rounded-xl border border-[#C5A059]/40 space-y-3 mb-4">
              <span class="text-xs font-bold uppercase tracking-wider text-[#110E0C] block">Create New Specialty Folder</span>
              <input 
                type="text" 
                id="new-folder-name-mobile" 
                placeholder="Folder Name (e.g., Loc Care)" 
                class="w-full p-3 text-xs bg-white rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              />
              <div class="flex gap-2">
                <button onclick="window.adminMenu.saveCategoryFolder('mobile')" class="flex-1 bg-[#110E0C] text-[#C5A059] py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg">
                  Save Folder
                </button>
                <button onclick="window.adminMenu.toggleFolderForm('mobile')" class="bg-stone-200 text-stone-700 px-4 py-2.5 text-xs font-bold uppercase rounded-lg">
                  Cancel
                </button>
              </div>
            </div>
          </div>

          <!-- ASYMMETRICAL TWO-COLUMN LAYOUT GRID (2/3 CONTENT STREAM, 1/3 ADD-ON SIDE CANVAS) -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            <!-- LEFT STREAM: SERVICE CREATION FORM & ACTIVE CARDS CATALOG (2 COLS) -->
            <div class="lg:col-span-2 space-y-8">
              
              <!-- EXPANDABLE INLINE SERVICE FORM CARD -->
              <div id="service-form-card" class="hidden bg-white border-2 border-[#C5A059] p-6 sm:p-8 rounded-2xl shadow-xl space-y-6 animate-fadeIn">
                <div class="flex justify-between items-center border-b border-[#C29B8A]/20 pb-4">
                  <div>
                    <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block mb-0.5">Sanctuary Configuration</span>
                    <h3 class="font-serif text-xl font-bold text-[#110E0C]">✨ CREATE NEW SERVICE OFFERING</h3>
                  </div>
                  <button 
                    onclick="window.adminMenu.toggleServiceForm()" 
                    class="text-xs font-bold uppercase tracking-wider text-stone-400 hover:text-[#110E0C] bg-stone-100 px-3 py-1.5 rounded-md"
                  >
                    Cancel Edit
                  </button>
                </div>

                <div class="space-y-4">
                  <!-- SERVICE TITLE & CATEGORY SLUG -->
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="sm:col-span-2">
                      <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Service Style Title *</label>
                      <input 
                        type="text" 
                        id="form-service-title" 
                        placeholder="e.g., Mid-Back Lightweight Knotless Braids" 
                        class="w-full p-3 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                        required
                      />
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Folder Category *</label>
                      <select 
                        id="form-service-category" 
                        class="w-full p-3 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] font-semibold"
                      >
                        ${categories.map(c => `<option value="${c.slug}">${c.name}</option>`).join('')}
                      </select>
                    </div>
                  </div>

                  <!-- FINANCIAL & RUNTIME DURATION SELECTION -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Baseline Price ($ USD) *</label>
                      <input 
                        type="number" 
                        step="0.01" 
                        id="form-service-price" 
                        placeholder="240.00" 
                        class="w-full p-3 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                        required
                      />
                    </div>

                    <div>
                      <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Est. Time Duration *</label>
                      <select 
                        id="form-service-duration" 
                        class="w-full p-3 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                      >
                        <option value="45m | 45">45 Minutes</option>
                        <option value="1 hr | 60">1 Hour</option>
                        <option value="1 hr 30 mins | 90">1 Hour 30 Minutes</option>
                        <option value="2 hrs | 120" selected>2 Hours</option>
                        <option value="2 hrs 30 mins | 150">2 Hours 30 Minutes</option>
                        <option value="3 hrs | 180">3 Hours</option>
                        <option value="3 hrs 30 mins | 210">3 Hours 30 Minutes</option>
                        <option value="4 hrs | 240">4 Hours</option>
                        <option value="5 hrs | 300">5 Hours</option>
                      </select>
                    </div>
                  </div>

                  <!-- THE SERVICE PROMO CONSOLE -->
                  <div class="bg-[#FDF8F5] border border-[#C5A059]/30 p-4 rounded-xl space-y-3">
                    <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059] block">Service Promo Console</span>
                    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Promo Discount</label>
                        <select id="form-promo-active" class="w-full p-2.5 bg-white text-xs rounded-lg border border-[#C29B8A]/30">
                          <option value="false">Standard Price</option>
                          <option value="true">Enable Discount Slash</option>
                        </select>
                      </div>

                      <div>
                        <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Discount Unit</label>
                        <select id="form-promo-type" class="w-full p-2.5 bg-white text-xs rounded-lg border border-[#C29B8A]/30">
                          <option value="percent">Percentage (%)</option>
                          <option value="dollar">Dollar ($ USD)</option>
                        </select>
                      </div>

                      <div>
                        <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Discount Value</label>
                        <input 
                          type="number" 
                          step="0.1" 
                          id="form-promo-value" 
                          placeholder="15" 
                          class="w-full p-2.5 bg-white text-xs rounded-lg border border-[#C29B8A]/30"
                        />
                      </div>
                    </div>

                    <div>
                      <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Promo Expiration Date</label>
                      <input 
                        type="date" 
                        id="form-promo-expiration" 
                        class="w-full sm:w-1/2 p-2.5 bg-white text-xs rounded-lg border border-[#C29B8A]/30 text-[#110E0C]"
                      />
                    </div>
                  </div>

                  <!-- SETMORE DEEP LINKING PATHWAY -->
                  <div>
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Setmore Direct Booking Deep Link</label>
                    <input 
                      type="url" 
                      id="form-service-setmore" 
                      placeholder="https://booking.setmore.com/schedule/services/..." 
                      class="w-full p-3 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                    />
                  </div>

                  <!-- DESCRIPTION TEXTAREA -->
                  <div>
                    <label class="block text-[11px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">Service Narrative & Scalp Care Details</label>
                    <textarea 
                      id="form-service-description" 
                      rows="3" 
                      placeholder="Specify precision parting, detox rinse details, and hair preservation techniques included..." 
                      class="w-full p-3 bg-white text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C] resize-none"
                    ></textarea>
                  </div>

                  <button 
                    onclick="window.adminMenu.saveServiceOffering()" 
                    class="w-full bg-[#C5A059] text-[#110E0C] py-3.5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#B08D47] hover:text-white transition-all rounded-lg shadow-md"
                  >
                    Publish Service Offering
                  </button>
                </div>
              </div>

              <!-- ACTIVE SERVICES CATALOG LIST -->
              <div class="space-y-4">
                <div class="flex justify-between items-center">
                  <h3 class="font-serif font-bold text-lg text-[#110E0C]">Active Service Cards (${filteredServices.length})</h3>
                  <span class="text-xs text-[#554D47] italic">1-on-1 Dedicated Suite Services</span>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  ${filteredServices.map(s => `
                    <div class="bg-white border border-[#C5A059]/30 p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-3 relative group">
                      <div>
                        <div class="flex justify-between items-start mb-1">
                          <span class="text-[9px] font-bold uppercase tracking-wider text-[#C5A059] bg-[#FDF8F5] px-2 py-0.5 rounded border border-[#C5A059]/20">
                            ${s.category_slug}
                          </span>
                          <button 
                            onclick="window.adminMenu.deleteServiceOffering(${s.id})" 
                            class="text-red-600 font-bold text-xs hover:text-red-800 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                        <h4 class="font-serif font-bold text-base text-[#110E0C] mt-1">${s.title}</h4>
                        <p class="text-xs text-[#554D47] mt-1 line-clamp-2 leading-relaxed">${s.description}</p>
                      </div>

                      <div class="pt-3 border-t border-stone-100 flex justify-between items-center text-xs">
                        <span class="font-serif font-bold text-lg text-[#110E0C]">$${s.base_price.toFixed(2)}</span>
                        <span class="text-[#554D47] font-semibold text-[11px]">⏱ ${s.duration_text}</span>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

            </div>

            <!-- RIGHT COLUMN: HOVER-READY ADD-ON SIDE CANVAS (1 COL) -->
            <div class="space-y-6">
              
              <!-- ADD-ON CREATOR FORM CARD -->
              <div class="bg-white border border-[#C5A059]/30 p-6 rounded-2xl shadow-md space-y-4 hover:border-[#C5A059] transition-all">
                <div class="border-b border-[#C29B8A]/20 pb-3">
                  <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C29B8A] block">Enhancement Registry</span>
                  <h3 class="font-serif font-bold text-lg text-[#110E0C]">Register Add-On</h3>
                </div>

                <div class="space-y-3">
                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Add-On Name *</label>
                    <input 
                      type="text" 
                      id="form-addon-title" 
                      placeholder="e.g., Deep Herbal Scalp Detox" 
                      class="w-full p-3 bg-[#FDF8F5] text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                    />
                  </div>

                  <div class="grid grid-cols-2 gap-2">
                    <div>
                      <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Extra Price ($) *</label>
                      <input 
                        type="number" 
                        step="0.01" 
                        id="form-addon-price" 
                        placeholder="30.00" 
                        class="w-full p-3 bg-[#FDF8F5] text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      />
                    </div>
                    <div>
                      <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Extra Mins *</label>
                      <input 
                        type="number" 
                        id="form-addon-duration" 
                        placeholder="20" 
                        class="w-full p-3 bg-[#FDF8F5] text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Scope Boundary Assignment *</label>
                    <select 
                      id="form-addon-scope" 
                      onchange="window.adminMenu.handleAddonScopeChange(this.value)"
                      class="w-full p-3 bg-[#FDF8F5] text-xs rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] font-medium"
                    >
                      <option value="global|all">Global for All Services</option>
                      <option value="category|folder">This Entire Category Folder</option>
                      <option value="service|card">This Individual Service Card</option>
                    </select>
                  </div>

                  <div id="addon-scope-target-wrap" class="hidden">
                    <label class="block text-[10px] font-bold uppercase text-[#110E0C] mb-1">Target Scope Entity</label>
                    <select id="form-addon-target" class="w-full p-3 bg-[#FDF8F5] text-xs rounded-lg border border-[#C29B8A]/30"></select>
                  </div>

                  <button 
                    onclick="window.adminMenu.saveAddonOffering()" 
                    class="w-full bg-[#110E0C] text-[#C5A059] py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-900 transition-all rounded-lg shadow-sm mt-1"
                  >
                    Attach Add-On
                  </button>
                </div>
              </div>

              <!-- ADD-ONS LEDGER LIST -->
              <div class="bg-white border border-[#C29B8A]/30 p-6 rounded-2xl shadow-sm space-y-4">
                <h4 class="font-serif font-bold text-base text-[#110E0C]">Registered Add-Ons (${addons.length})</h4>
                <div class="space-y-2.5">
                  ${addons.map(a => `
                    <div class="p-3 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/20 flex justify-between items-center text-xs space-y-0.5">
                      <div>
                        <span class="text-[9px] font-bold uppercase tracking-wider text-[#C29B8A] block">
                          ${a.assignment_type}: ${a.assignment_target || 'All'}
                        </span>
                        <strong class="text-[#110E0C] block mt-0.5">${a.title}</strong>
                        <span class="text-[#C5A059] font-bold text-[11px]">+$${a.extra_price.toFixed(2)} (+${a.extra_duration_mins}m)</span>
                      </div>
                      <button 
                        onclick="window.adminMenu.deleteAddonOffering(${a.id})" 
                        class="text-red-600 font-bold hover:text-red-800 transition-colors text-xs px-2 py-1"
                      >
                        ✕
                      </button>
                    </div>
                  `).join('')}
                </div>
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

  selectCategoryFolder: function (slug) {
    if (window.adminStore) {
      window.adminStore.selectedFolder = slug;
    }
    if (window.fetchAdminState) {
      window.fetchAdminState();
    } else {
      this.render(document.getElementById('admin-ledger'), document.getElementById('admin-workspace'));
    }
  },

  toggleFolderForm: function (context) {
    const targetId = context === 'mobile' ? 'inline-folder-form-mobile' : 'inline-folder-form-desktop';
    const form = document.getElementById(targetId);
    if (form) form.classList.toggle('hidden');
  },

  saveCategoryFolder: async function (context) {
    const inputId = context === 'mobile' ? 'new-folder-name-mobile' : 'new-folder-name-desktop';
    const input = document.getElementById(inputId);
    if (!input || !input.value.trim()) return;

    const name = input.value.trim();
    const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '');

    if (window.adminStore && window.adminStore.isLocalFileProtocol) {
      if (window.adminStore.data && window.adminStore.data.categories) {
        window.adminStore.data.categories.push({ id: Date.now(), name, slug });
      }
      this.toggleFolderForm(context);
      this.selectCategoryFolder(slug);
      return;
    }

    try {
      await fetch('/api/admin/category/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, slug })
      });
      if (window.fetchAdminState) window.fetchAdminState();
    } catch (err) {
      console.error('Error saving category folder:', err);
    }
  },

  deleteCategoryFolder: async function (slug) {
    if (window.adminStore && window.adminStore.isLocalFileProtocol) {
      if (window.adminStore.data && window.adminStore.data.categories) {
        window.adminStore.data.categories = window.adminStore.data.categories.filter(c => c.slug !== slug);
      }
      this.selectCategoryFolder('all');
      return;
    }

    try {
      await fetch('/api/admin/category/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug })
      });
      if (window.fetchAdminState) window.fetchAdminState();
    } catch (err) {
      console.error('Error deleting category folder:', err);
    }
  },

  toggleServiceForm: function () {
    const form = document.getElementById('service-form-card');
    if (form) form.classList.toggle('hidden');
  },

  saveServiceOffering: async function () {
    const title = document.getElementById('form-service-title').value.trim();
    const category_slug = document.getElementById('form-service-category').value;
    const base_price = parseFloat(document.getElementById('form-service-price').value || 0);
    
    const rawDuration = document.getElementById('form-service-duration').value;
    const [duration_text, duration_mins_str] = rawDuration.split(' | ');
    const duration_mins = parseInt(duration_mins_str || 120);

    const discountActive = document.getElementById('form-promo-active').value === 'true';
    const discountType = document.getElementById('form-promo-type').value;
    const discountValue = parseFloat(document.getElementById('form-promo-value').value || 0);
    const setmore_url = document.getElementById('form-service-setmore').value.trim();
    const description = document.getElementById('form-service-description').value.trim();

    if (!title) return;

    const payload = {
      title,
      category_slug,
      base_price,
      duration_text,
      duration_mins,
      discountActive,
      discountType,
      discountValue,
      setmore_url,
      description
    };

    if (window.adminStore && window.adminStore.isLocalFileProtocol) {
      if (window.adminStore.data && window.adminStore.data.services) {
        window.adminStore.data.services.push({ id: Date.now(), ...payload, click_count: 0 });
      }
      this.toggleServiceForm();
      this.render(document.getElementById('admin-ledger'), document.getElementById('admin-workspace'));
      return;
    }

    try {
      await fetch('/api/admin/service/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (window.fetchAdminState) window.fetchAdminState();
    } catch (err) {
      console.error('Error saving service offering:', err);
    }
  },

  deleteServiceOffering: async function (id) {
    if (window.adminStore && window.adminStore.isLocalFileProtocol) {
      if (window.adminStore.data && window.adminStore.data.services) {
        window.adminStore.data.services = window.adminStore.data.services.filter(s => s.id !== id);
      }
      this.render(document.getElementById('admin-ledger'), document.getElementById('admin-workspace'));
      return;
    }

    try {
      await fetch('/api/admin/service/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (window.fetchAdminState) window.fetchAdminState();
    } catch (err) {
      console.error('Error deleting service offering:', err);
    }
  },

  handleAddonScopeChange: function (value) {
    const wrap = document.getElementById('addon-scope-target-wrap');
    const targetSelect = document.getElementById('form-addon-target');
    if (!wrap || !targetSelect) return;

    const [type] = value.split('|');
    if (type === 'global') {
      wrap.classList.add('hidden');
      return;
    }

    wrap.classList.remove('hidden');
    targetSelect.innerHTML = '';

    const store = (window.adminStore && window.adminStore.data) ? window.adminStore.data : {};
    if (type === 'category' && store.categories) {
      store.categories.forEach(c => {
        targetSelect.innerHTML += `<option value="${c.slug}">${c.name}</option>`;
      });
    } else if (type === 'service' && store.services) {
      store.services.forEach(s => {
        targetSelect.innerHTML += `<option value="${s.id}">${s.title}</option>`;
      });
    }
  },

  saveAddonOffering: async function () {
    const title = document.getElementById('form-addon-title').value.trim();
    const extra_price = parseFloat(document.getElementById('form-addon-price').value || 0);
    const extra_duration_mins = parseInt(document.getElementById('form-addon-duration').value || 0);
    const scopeVal = document.getElementById('form-addon-scope').value;
    const [assignment_type] = scopeVal.split('|');
    
    const targetSelect = document.getElementById('form-addon-target');
    const assignment_target = (assignment_type === 'global') ? 'all' : (targetSelect ? targetSelect.value : 'all');

    if (!title) return;

    const payload = { title, extra_price, extra_duration_mins, assignment_type, assignment_target };

    if (window.adminStore && window.adminStore.isLocalFileProtocol) {
      if (window.adminStore.data && window.adminStore.data.addons) {
        window.adminStore.data.addons.push({ id: Date.now(), ...payload });
      }
      this.render(document.getElementById('admin-ledger'), document.getElementById('admin-workspace'));
      return;
    }

    try {
      await fetch('/api/admin/addon/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (window.fetchAdminState) window.fetchAdminState();
    } catch (err) {
      console.error('Error saving addon offering:', err);
    }
  },

  deleteAddonOffering: async function (id) {
    if (window.adminStore && window.adminStore.isLocalFileProtocol) {
      if (window.adminStore.data && window.adminStore.data.addons) {
        window.adminStore.data.addons = window.adminStore.data.addons.filter(a => a.id !== id);
      }
      this.render(document.getElementById('admin-ledger'), document.getElementById('admin-workspace'));
      return;
    }

    try {
      await fetch('/api/admin/addon/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (window.fetchAdminState) window.fetchAdminState();
    } catch (err) {
      console.error('Error deleting addon offering:', err);
    }
  }
};