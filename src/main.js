
    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Drawer open/close (Right slide)
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('drawerOverlay');
    const openBtn = document.getElementById('openDrawer');
    const closeBtn = document.getElementById('closeDrawer');

    function openDrawer() {
      drawer.classList.add('open');
      overlay.classList.add('show');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden'; // lock background
    }
    function closeDrawer() {
      drawer.classList.remove('open');
      overlay.classList.remove('show');
      drawer.setAttribute('aria-hidden', 'true');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = ''; // restore
    }
    openBtn && openBtn.addEventListener('click', openDrawer);
    closeBtn && closeBtn.addEventListener('click', closeDrawer);
    overlay && overlay.addEventListener('click', closeDrawer);

    // Smooth scroll for internal anchors
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.length > 1) {
          e.preventDefault();
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // close drawer automatically on link click (mobile)
          closeDrawer();
        }
      });
    });

    // Brochure download (main & secondary)
    function downloadBrochure(url) {
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Samriddhi_Daksh_Avenue_Brochure.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    // primary brochure button in hero
    document.getElementById('downloadBrochureBtn')?.addEventListener('click', function (e) {
      e.preventDefault();
      // local uploaded file path (as requested)
      downloadBrochure('https://media.githubusercontent.com/media/geek-o-geek/noidaluxhomes/refs/heads/main/mnt/data/brochure_images/brochure.pdf');
    });
    // secondary brochure button in form
    document.getElementById('downloadBrochureSecondary')?.addEventListener('click', function (e) {
      e.preventDefault();
      downloadBrochure('https://media.githubusercontent.com/media/geek-o-geek/noidaluxhomes/refs/heads/main/mnt/data/brochure_images/brochure.pdf');
    });
    // third brochure button in form
    document.getElementById('downloadBrochureBtn1')?.addEventListener('click', function (e) {
      e.preventDefault();
      downloadBrochure('https://media.githubusercontent.com/media/geek-o-geek/noidaluxhomes/refs/heads/main/mnt/data/brochure_images/brochure.pdf');
    });
    // fourth brochure button in form
    document.getElementById('downloadBrochureBtn2')?.addEventListener('click', function (e) {
      e.preventDefault();
      downloadBrochure('https://media.githubusercontent.com/media/geek-o-geek/noidaluxhomes/refs/heads/main/mnt/data/brochure_images/brochure.pdf');
    });

    // Enquiry form submit -> WhatsApp + success
    document.getElementById('enquiryForm').addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();

      if (phone.length < 10) { alert('Enter a valid phone number.'); return; }

      const message = `Hello, I am interested in Samriddhi Daksh Avenue (Sector 150 Noida).%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email || 'Not Provided'}%0APlease share details.`;
      const whatsappNumber = '918979333131';
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

      document.getElementById('formSuccess').style.display = 'block';
      this.reset();
      document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth' });
      // payload for CRM (console)
      console.log({ name, phone, email, project: 'Samriddhi Daksh Avenue - Sector 150 Noida', timestamp: new Date().toISOString() });
    });

    // Floating enquiry button smooth scroll
    document.getElementById('floating-enquiry-btn')?.addEventListener('click', function (e) {
      const target = document.querySelector('#lead-form');
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });

    // Accessibility: close drawer with ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeDrawer();
    });

    // Prevent accidental horizontal scroll due to transforms on iOS Safari
    document.documentElement.style.webkitOverflowScrolling = 'touch';
 
  // Elements
  const waQrModal = document.getElementById('waQrModal');
  const waCloseBtn = document.getElementById('waCloseBtn');
  const overlayToggle = (show) => {
    if (show) {
      waQrModal.classList.add('open');
      waQrModal.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
    } else {
      waQrModal.classList.remove('open');
      waQrModal.setAttribute('aria-hidden','true');
      document.body.style.overflow='';
    }
  };

  waCloseBtn.addEventListener('click', (e) => {
    overlayToggle(false);
  });

  // Close on outside click
  waQrModal.addEventListener('click', (e) => {
    if (e.target === waQrModal) overlayToggle(false);
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlayToggle(false);
  });

  // Progressive enhancement: if image missing, hide QR button
  const qrImg = document.getElementById('waQrImage');
  qrImg.addEventListener('error', () => {
    // hide qr btn if image not available
    const wrapper = document.querySelector('.wa-fab .wa-qr');
    if (wrapper) wrapper.style.display = 'none';
  });

  // Optional: track clicks (analytics) - example console log
  document.getElementById('waChatBtn').addEventListener('click', () => {
    console.log('WhatsApp CTA clicked');
    // fire analytics event here (gtag/pixel)
  });

  // create overlay dynamically
  var overlay1 = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.innerHTML = '<img src="" class="zoomable" />';
  document.body.appendChild(overlay1);

  // handle zoom click
  document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', () => {
      overlay.style.display = 'flex';
      overlay.querySelector('img').src = img.src;
    });
  });

  // close on click
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';
  });

  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const closeBtn1 = document.getElementById('lightbox-close');

  closeBtn1.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  const images = Array.from(document.querySelectorAll('.gallery-grid img'));
  const nextBtn = document.getElementById('lightbox-next');
  const prevBtn = document.getElementById('lightbox-prev');

  var currentIndex = 0;

  const galleryItems = document.querySelectorAll('.gallery-item img');

  /**
   * Opens the lightbox modal at the given index.
   * @param {number} index - Index of the image to open in the lightbox.
   */
  function openLightbox(index) {
    currentIndex = index;
    modalImg.src = images[currentIndex].src;
    modal.style.display = 'flex';
  }


  images.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
  });

  // Click outside image closes lightbox
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
  });

  // Keyboard controls
  document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex') {
      if (e.key === "ArrowRight") nextBtn.click();
      if (e.key === "ArrowLeft") prevBtn.click();
      if (e.key === "Escape") modal.style.display = 'none';
    }
  });