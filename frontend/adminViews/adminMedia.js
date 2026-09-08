/**
 * CHEVY Hair & Beauty - Executive Portfolio Media Canvas Module
 * Attached directly to global window.adminMedia namespace.
 */

window.adminMedia = {
  // Comprehensive Default Dataset (15+ High-Resolution Salon Transformation Cores)
  defaultMedia: [
    { id: 1, url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80', title: 'Meticulous Loc Retwist', category: 'Loc Cultivation', mediaType: 'image' },
    { id: 2, url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80', title: 'Knotless Braids Style', category: 'Braid Architecture', mediaType: 'image' },
    { id: 3, url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80', title: 'Silk Press & Steam Hydration', category: 'Natural Care', mediaType: 'image' },
    { id: 4, url: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80', title: 'Boho Goddess Knotless', category: 'Braid Architecture', mediaType: 'image' },
    { id: 5, url: 'https://images.unsplash.com/photo-1605980776566-0486c3b96346?auto=format&fit=crop&w=800&q=80', title: 'Starter Loc Coils', category: 'Loc Cultivation', mediaType: 'image' },
    { id: 6, url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80', title: 'Fulani Tribal Braids', category: 'Braid Architecture', mediaType: 'image' },
    { id: 7, url: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80', title: 'Gentle Royalty Kids Braids', category: 'Kids Care', mediaType: 'image' },
    { id: 8, url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80', title: 'Scalp Detox & Palm Roll', category: 'Loc Cultivation', mediaType: 'image' },
    { id: 9, url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800&q=80', title: 'Precision Parting Architecture', category: 'Braid Architecture', mediaType: 'image' },
    { id: 10, url: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&w=800&q=80', title: 'Botanical Hair & Scalp Steam', category: 'Natural Care', mediaType: 'image' },
    { id: 11, url: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=800&q=80', title: 'Crown Loc Style & Barrel Twist', category: 'Loc Cultivation', mediaType: 'image' },
    { id: 12, url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80', title: 'Lemonade Feed-In Braids', category: 'Braid Architecture', mediaType: 'image' },
    { id: 13, url: 'https://images.unsplash.com/photo-1500840218059-b1d0017596c3?auto=format&fit=crop&w=800&q=80', title: 'Tender-Headed Kids Beads', category: 'Kids Care', mediaType: 'image' },
    { id: 14, url: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80', title: 'Micro Loc Retwist', category: 'Loc Cultivation', mediaType: 'image' },
    { id: 15, url: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=800&q=80', title: 'Luxury Silk Finish Trim', category: 'Natural Care', mediaType: 'image' }
  ],

  editingCaptionId: null,
  pendingDeleteId: null,

  render: function (ledgerContainer, workspaceContainer) {
    const rawStore = (window.adminStore && window.adminStore.data) ? window.adminStore.data : null;
    
    // Use Store Media Array if Present & Non-Empty; Otherwise Fall Back to 15+ Core Dataset
    const mediaList = (rawStore && rawStore.media && rawStore.media.length > 0)
      ? rawStore.media
      : this.defaultMedia;

    // ZONE 2: MIDDLE LEDGER SUMMARY PANEL
    if (ledgerContainer) {
      ledgerContainer.innerHTML = `
        <div class="border-b border-[#C29B8A]/30 pb-3 flex justify-between items-center">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-widest text-[#C29B8A]">Ledger Navigation</span>
            <h3 class="font-serif font-bold text-sm text-[#110E0C]">Portfolio Media</h3>
          </div>
          <span class="bg-[#C5A059] text-[#110E0C] text-[10px] font-bold px-2 py-0.5 rounded-full">
            ${mediaList.length} Items
          </span>
        </div>

        <div class="p-3.5 bg-[#FDF8F5] rounded-xl border border-[#C29B8A]/30 text-xs space-y-2 mt-2">
          <span class="text-[10px] font-bold uppercase text-[#C29B8A] block">Media Storage Health</span>
          <div class="font-serif font-bold text-2xl text-[#110E0C]">${mediaList.length} Assets</div>
          <p class="text-[11px] text-[#554D47] leading-relaxed">
            Optimized for smartphone viewports. Auto-synced with client gallery.
          </p>
        </div>
      `;
    }

    // ZONE 3: MAIN WORKSPACE CANVAS (ASYMMETRICAL HUB SPLIT)
    if (workspaceContainer) {
      workspaceContainer.innerHTML = `
        <div class="space-y-8 max-w-7xl mx-auto selection:bg-[#C5A059] selection:text-[#110E0C]">
          
          <!-- WORKSPACE TOP HEADER -->
          <div class="border-b border-[#C29B8A]/30 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C5A059] block mb-1">
                Visual Showcase Hub
              </span>
              <h1 class="font-serif text-2xl sm:text-3xl font-bold text-[#110E0C]">
                Portfolio Media Canvas
              </h1>
            </div>

            <button 
              onclick="window.adminMedia.triggerFilePicker()" 
              class="inline-flex items-center justify-center bg-[#C5A059] text-[#110E0C] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] rounded-lg shadow-md hover:bg-[#B08D47] hover:text-white transition-all transform hover:-translate-y-0.5"
            >
              + Upload Media
            </button>
          </div>

          <!-- ASYMMETRICAL 1/4 AND 3/4 LAYOUT GRID -->
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            
            <!-- SECTION 1: SELECTION SIDEBAR (1/4 WIDTH) -->
            <div class="lg:col-span-1 space-y-6">
              
              <div class="bg-white border border-[#C5A059]/30 p-6 rounded-2xl shadow-md space-y-5">
                <div class="border-b border-[#C29B8A]/20 pb-3">
                  <span class="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C29B8A] block">
                    Optimization Engine
                  </span>
                  <h3 class="font-serif font-bold text-lg text-[#110E0C] mt-0.5">
                    Video Loop Optimization Controller
                  </h3>
                </div>

                <div class="space-y-4">
                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">
                      Max Video Loop Boundary
                    </label>
                    <select 
                      id="video-loop-boundary" 
                      class="w-full p-3 bg-[#FDF8F5] text-xs font-semibold rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                    >
                      <option value="15s">[ 15 Seconds Clip ]</option>
                      <option value="30s" selected>[ 30 Seconds Clip ]</option>
                      <option value="60s">[ 60 Seconds Clip ]</option>
                    </select>
                    <p class="text-[10px] text-[#554D47] italic mt-1.5 leading-normal">
                      Trimming video reels below 30s optimizes mobile data loading speeds and ensures instant playback for clients on smartphone viewports.
                    </p>
                  </div>

                  <div>
                    <label class="block text-[10px] font-bold uppercase tracking-wider text-[#110E0C] mb-1">
                      Target Style Category
                    </label>
                    <select 
                      id="media-target-category" 
                      class="w-full p-3 bg-[#FDF8F5] text-xs font-semibold rounded-lg border border-[#C29B8A]/30 focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#110E0C]"
                    >
                      <option value="Crown Transformation">Crown Transformation</option>
                      <option value="Loc Cultivation">Loc Cultivation</option>
                      <option value="Braid Architecture">Braid Architecture</option>
                      <option value="Natural Care">Natural Care</option>
                      <option value="Kids Care">Kids Care</option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- INLINE PURGE VALIDATION DIALOG (NO BROWSER ALERTS) -->
              <div id="inline-purge-dialog" class="hidden bg-white border-2 border-red-500/40 p-5 rounded-2xl shadow-xl space-y-3 animate-fadeIn">
                <div class="flex items-center gap-2 text-red-600">
                  <span class="text-base">⚠️</span>
                  <h4 class="font-serif font-bold text-sm">Purge Media Asset?</h4>
                </div>
                <p class="text-xs text-[#554D47] leading-relaxed">
                  This action will permanently delete this asset from memory and remove it from the client-facing gallery grid layout.
                </p>
                <div class="flex gap-2 pt-1">
                  <button 
                    onclick="window.adminMedia.confirmPurgeMedia()" 
                    class="flex-1 bg-red-600 text-white py-2 text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-red-700 transition-colors shadow-sm"
                  >
                    Confirm Delete
                  </button>
                  <button 
                    onclick="window.adminMedia.cancelPurgeMedia()" 
                    class="bg-stone-200 text-stone-700 px-3 py-2 text-xs font-bold uppercase rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>

            </div>

            <!-- SECTION 2: PREMIUM VISUAL MEDIA GRID (3/4 WIDTH) -->
            <div class="lg:col-span-3">
              
              <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                
                <!-- SLOT 1: MASTER CHAMPAGNE GOLD DASHED UPLOAD BUTTON CARD -->
                <div 
                  onclick="window.adminMedia.triggerFilePicker()" 
                  class="border-2 border-dashed border-[#C5A059] rounded-xl flex flex-col items-center justify-center p-6 text-center cursor-pointer bg-white hover:bg-[#F5EBE6] transition-all duration-300 aspect-square shadow-sm group hover:scale-[1.02]"
                >
                  <div class="w-12 h-12 rounded-full bg-[#C5A059]/15 text-[#C5A059] flex items-center justify-center font-bold text-2xl mb-2 group-hover:bg-[#C5A059] group-hover:text-white transition-all">
                    +
                  </div>
                  <span class="text-xs font-bold uppercase tracking-[0.15em] text-[#110E0C] block">
                    Upload Asset
                  </span>
                  <span class="text-[10px] text-[#554D47] mt-1">
                    Photo Image or Video Clip
                  </span>
                </div>

                <!-- POPULATED GALLERY ARCHIVE TILES WITH INLINE EDITABLE CAPTION DRAWERS & FLOATING TRASH CAN TRIGGERS -->
                ${mediaList.map(m => {
                  const isEditingThis = this.editingCaptionId === m.id;
                  return `
                    <div class="flex flex-col bg-white rounded-xl border border-[#C5A059]/30 p-2 shadow-sm hover:shadow-md transition-all">
                      
                      <!-- THUMBNAIL CONTAINER -->
                      <div class="relative aspect-square rounded-lg overflow-hidden bg-stone-100 group">
                        ${m.mediaType === 'video' ? `
                          <video src="${m.url}" class="w-full h-full object-cover" muted></video>
                          <span class="absolute bottom-2 left-2 bg-[#110E0C]/80 text-[#C5A059] text-[9px] font-bold px-2 py-0.5 rounded backdrop-blur-sm">
                            [ ${m.videoDuration || 'Video'} ]
                          </span>
                        ` : `
                          <img src="${m.url}" alt="${m.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        `}

                        <!-- CATEGORY OVERLAY BADGE -->
                        <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#110E0C]/80 via-[#110E0C]/30 to-transparent p-2.5 pt-5 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                          <span class="text-[9px] font-bold uppercase tracking-widest text-[#C5A059] block">${m.category}</span>
                        </div>

                        <!-- SOPHISTICATED FLOATING RED TRASH CAN TRIGGER -->
                        <button 
                          onclick="window.adminMedia.requestPurgeMedia(${m.id})" 
                          class="absolute top-2.5 right-2.5 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 hover:scale-110 transition-all z-10"
                          title="Purge Media Asset"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                          </svg>
                        </button>
                      </div>

                      <!-- IN-LINE TEXT OVERLAY CAPTION DRAWER ROW -->
                      <div class="flex items-center justify-between mt-2 pt-1 border-t border-[#C29B8A]/10 min-h-[36px] px-1">
                        ${isEditingThis ? `
                          <input 
                            type="text" 
                            id="caption-input-${m.id}" 
                            value="${m.title.replace(/"/g, '&quot;')}" 
                            class="w-full p-1 text-sm bg-white rounded border border-[#C5A059] text-[#110E0C] focus:outline-none shadow-inner"
                            onkeydown="if(event.key==='Enter') window.adminMedia.saveCaption(${m.id})"
                            onblur="window.adminMedia.saveCaption(${m.id})"
                          />
                        ` : `
                          <div 
                            onclick="window.adminMedia.enableCaptionEdit(${m.id})" 
                            class="flex items-center justify-between w-full cursor-pointer group/caption"
                          >
                            <span class="text-xs font-semibold text-[#110E0C] truncate font-sans tracking-tight pr-1" title="${m.title}">
                              ${m.title}
                            </span>
                            <span class="text-[#C5A059] text-xs ml-2 cursor-pointer hover:scale-110 transition-transform shrink-0 flex items-center">
                              ✏️
                            </span>
                          </div>
                        `}
                      </div>

                    </div>
                  `;
                }).join('')}

              </div>

            </div>

          </div>

        </div>

        <!-- HIDDEN FILE INPUT ELEMENT FOR DIRECT UPLOADS -->
        <input 
          type="file" 
          id="hidden-media-file-input" 
          accept="image/*,video/*" 
          class="hidden" 
          onchange="window.adminMedia.handleFileSelected(this)"
        />
      `;

      // Auto-focus input if an active inline caption edit was initiated
      if (this.editingCaptionId) {
        setTimeout(() => {
          const inputEl = document.getElementById(`caption-input-${this.editingCaptionId}`);
          if (inputEl) {
            inputEl.focus();
            inputEl.select();
          }
        }, 50);
      }
    }
  },

  init: function (ledgerContainer, workspaceContainer) {
    this.render(ledgerContainer, workspaceContainer);
  },

  enableCaptionEdit: function (id) {
    this.editingCaptionId = id;
    this.render(document.getElementById('admin-ledger'), document.getElementById('admin-workspace'));
  },

  saveCaption: async function (id) {
    if (this.editingCaptionId !== id) return;
    const inputEl = document.getElementById(`caption-input-${id}`);
    if (!inputEl) {
      this.editingCaptionId = null;
      return;
    }

    const newTitle = inputEl.value.trim() || 'Untitled Style Transformation';
    this.editingCaptionId = null;

    // Update Local Data Structures (Failsafe & Local Protocol Support)
    if (window.adminStore && window.adminStore.data && window.adminStore.data.media) {
      const item = window.adminStore.data.media.find(m => m.id === id);
      if (item) item.title = newTitle;
    }
    const localItem = this.defaultMedia.find(m => m.id === id);
    if (localItem) localItem.title = newTitle;

    // Persist to Python Flask Backend API when running on HTTP/HTTPS
    if (window.adminStore && !window.adminStore.isLocalFileProtocol) {
      try {
        await fetch('/api/admin/update-content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            key_name: `media_title_${id}`,
            value_text: newTitle
          })
        });
      } catch (err) {
        console.error('Error syncing updated caption to server:', err);
      }
    }

    this.render(document.getElementById('admin-ledger'), document.getElementById('admin-workspace'));
  },

  triggerFilePicker: function () {
    const input = document.getElementById('hidden-media-file-input');
    if (input) input.click();
  },

      handleFileSelected: async function (input) {
        if (!input.files || input.files.length === 0) return;
        const file = input.files[0];

        const categorySelect = document.getElementById('media-target-category');
        const category = categorySelect ? categorySelect.value : 'Crown Transformation';

        const boundarySelect = document.getElementById('video-loop-boundary');
        const videoDuration = boundarySelect ? boundarySelect.value : '30s';

        const isVideo = file.type.startsWith('video/');
        const title = file.name.split('.')[0].replace(/[-_]/g, ' ') || "New Transformation Asset";

        const mockObj = {
            id: Date.now(),
            url: URL.createObjectURL(file),
            file: file,
            title: title,
            category: category,
            mediaType: isVideo ? 'Video' : 'Image',
            videoDuration: isVideo ? videoDuration : null
        };

        if (window.adminStore && window.adminStore.data) {
            if (!window.adminStore.data.media) {
                window.adminStore.data.media = [];
            }
            window.adminStore.data.media.unshift(mockObj);
        }

        this.render(document.getElementById('admin-ledger'), document.getElementById('admin-workspace'));

        // Backend Live API Multi-part Form Pipeline
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('title', title);
            formData.append('category', category);
            formData.append('media_type', isVideo ? 'Video' : 'Image');
            formData.append('video_duration', videoDuration);
            
      const res = await fetch('/api/admin/upload-media', {
        method: 'POST',
        body: formData
      });

      if (res.ok && window.fetchAdminState) {
        window.fetchAdminState();
      }
    } catch (err) {
      console.error('Error uploading portfolio media asset:', err);
    }
  },

  requestPurgeMedia: function (id) {
    this.pendingDeleteId = id;
    const dialog = document.getElementById('inline-purge-dialog');
    if (dialog) dialog.classList.remove('hidden');
  },

  cancelPurgeMedia: function () {
    this.pendingDeleteId = null;
    const dialog = document.getElementById('inline-purge-dialog');
    if (dialog) dialog.classList.add('hidden');
  },

  confirmPurgeMedia: async function () {
    if (!this.pendingDeleteId) return;
    const id = this.pendingDeleteId;
    this.pendingDeleteId = null;

    const dialog = document.getElementById('inline-purge-dialog');
    if (dialog) dialog.classList.add('hidden');

    // Local Protocol Failsafe Mode
    if (window.adminStore && window.adminStore.isLocalFileProtocol) {
      if (window.adminStore.data && window.adminStore.data.media) {
        window.adminStore.data.media = window.adminStore.data.media.filter(m => m.id !== id);
      } else {
        this.defaultMedia = this.defaultMedia.filter(m => m.id !== id);
      }
      this.render(document.getElementById('admin-ledger'), document.getElementById('admin-workspace'));
      return;
    }

    // Backend Live API Purge Route
    try {
      await fetch(`/api/admin/delete-media/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (window.fetchAdminState) window.fetchAdminState();
    } catch (err) {
      console.error('Error purging portfolio media asset:', err);
    }
  }
};