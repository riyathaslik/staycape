// ====================================================
// STAYCAPE TRAVEL COMPANY — Main JavaScript
// ====================================================

// ======================== Navbar ========================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (!navbar) return;

  function updateNav() {
    if (window.scrollY > 60) {
      navbar.classList.remove('transparent');
      navbar.classList.add('solid');
    } else {
      navbar.classList.add('transparent');
      navbar.classList.remove('solid');
    }
  }
  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
    // Close on outside click
    document.addEventListener('click', e => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // Active link
  const path = window.location.pathname;
  document.querySelectorAll('.navbar-nav a, .nav-mobile a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (href === 'index.html' && (path.endsWith('index.html') || path === '/' || path.endsWith('stayc/'))) {
      a.classList.add('active');
    } else if (href === 'about.html' && path.endsWith('about.html')) {
      a.classList.add('active');
    }
  });
}

// ======================== Scroll Animations ========================
function initScrollAnim() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target); // only trigger once
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger').forEach(el => io.observe(el));
}

// ======================== Packages Section ========================
function initPackages() {
  const grid = document.getElementById('packages-grid');
  const tabs = document.querySelectorAll('.pkg-tab');
  if (!grid) return;

  const allPkgs = scGetPackages().filter(p => p.active);
  const settings = scGetSettings();
  let currentFilter = 'all';

  function getBadgeClass(bc) {
    return ['gold','blue','adventure'].includes(bc) ? bc : '';
  }

  function buildCard(pkg) {
    const waMsg = encodeURIComponent(
      `Hello Staycape,\n\nI am interested in the ${pkg.name} package.\nPrice: ${scFormatPrice(pkg.price)}\nDuration: ${pkg.nights} Nights / ${pkg.days} Days.\n\nPlease share the detailed itinerary and booking information.`
    );
    const waLink = `https://wa.me/${settings.whatsapp || '917034378660'}?text=${waMsg}`;

    return `
      <div class="pkg-card reveal">
        <div class="pkg-img">
          <img src="${pkg.image}" alt="${pkg.name} travel package" loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1488085061387-422e29b40080?w=600&h=400&fit=crop'">
          ${pkg.badge ? `<span class="pkg-badge ${getBadgeClass(pkg.badgeClass)}">${pkg.badge}</span>` : ''}
        </div>
        <div class="pkg-body">
          <h3 class="pkg-title">${pkg.name}</h3>
          <div class="pkg-meta">
            <span>🌙 ${pkg.nights} Nights</span>
            <span>☀️ ${pkg.days} Days</span>
          </div>
          <div class="pkg-price">
            <span class="pkg-price-from">from</span>
            <span class="pkg-price-amt">${scFormatPrice(pkg.price)}</span>
            <span class="pkg-price-per">/ person</span>
          </div>
          <button class="pkg-wa-btn" onclick="window.open('${waLink}','_blank')" aria-label="Enquire about ${pkg.name} on WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enquire on WhatsApp
          </button>
        </div>
      </div>`;
  }

  function render(filter) {
    let filtered = filter === 'all' ? allPkgs
      : filter === 'featured' ? allPkgs.filter(p => p.featured)
      : allPkgs.filter(p => p.type === filter);

    grid.innerHTML = filtered.length
      ? filtered.map(buildCard).join('')
      : '<p style="grid-column:1/-1;text-align:center;color:#718096;padding:48px">No packages found.</p>';
    initScrollAnim();
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentFilter = tab.dataset.filter;
      render(currentFilter);
    });
  });
  render('all');
}

// ======================== Destination Showcase ========================
function initDestinations() {
  const track = document.querySelector('.dest-track');
  if (!track) return;

  const dests = [
    { name: 'Sri Lanka',  img: 'https://images.unsplash.com/photo-1580181692722-b0ced30b1970?w=400&h=550&fit=crop&q=80' },
    { name: 'Malaysia',   img: 'https://images.unsplash.com/photo-1596422405526-9c8a89e24b83?w=400&h=550&fit=crop&q=80' },
    { name: 'Thailand',   img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&h=550&fit=crop&q=80' },
    { name: 'Bali',       img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=550&fit=crop&q=80' },
    { name: 'Vietnam',    img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=550&fit=crop&q=80' },
    { name: 'Japan',      img: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=550&fit=crop&q=80' },
    { name: 'Kashmir',    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=550&fit=crop&q=80' },
    { name: 'Manali',     img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=550&fit=crop&q=80' },
    { name: 'Munnar',     img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=550&fit=crop&q=80' },
    { name: 'Goa',        img: 'https://images.unsplash.com/photo-1512343479164-96a54c0e5a21?w=400&h=550&fit=crop&q=80' },
    { name: 'Africa',     img: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=550&fit=crop&q=80' },
  ];

  // Duplicate for seamless loop
  const all = [...dests, ...dests];
  track.innerHTML = all.map(d => `
    <div class="dest-card">
      <img src="${d.img}" alt="${d.name}" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1488085061387-422e29b40080?w=400&h=550&fit=crop'">
      <div class="dest-overlay">
        <span class="dest-name">${d.name}</span>
      </div>
    </div>`
  ).join('');
}

// ======================== Testimonials Carousel ========================
function initTestimonials() {
  const track = document.querySelector('.t-track');
  const dotsWrap = document.querySelector('.t-dots');
  const prevBtn = document.querySelector('.t-prev');
  const nextBtn = document.querySelector('.t-next');
  if (!track) return;

  const testimonials = scGetTestimonials().filter(t => t.active);
  if (!testimonials.length) {
    document.querySelector('.testimonials-section')?.remove();
    return;
  }

  let current = 0;
  let autoTimer;

  function stars(n) { return '★'.repeat(n) + '☆'.repeat(5 - n); }
  function initial(name) { return name ? name.charAt(0).toUpperCase() : '?'; }

  // Render slides
  track.innerHTML = testimonials.map(t => `
    <div class="t-slide">
      <div class="t-card">
        ${t.photo
          ? `<div class="t-avatar"><img src="${t.photo}" alt="${t.name}" loading="lazy"></div>`
          : `<div class="t-avatar-placeholder">${initial(t.name)}</div>`
        }
        <div class="t-stars">${stars(t.rating)}</div>
        <p class="t-text">"${t.review}"</p>
        <div class="t-name">${t.name}</div>
        <div class="t-dest">✈ ${t.destination}</div>
      </div>
    </div>`
  ).join('');

  // Render dots
  if (dotsWrap) {
    dotsWrap.innerHTML = testimonials.map((_, i) =>
      `<div class="t-dot ${i === 0 ? 'active' : ''}" data-idx="${i}" role="button" aria-label="Go to testimonial ${i+1}"></div>`
    ).join('');
    dotsWrap.querySelectorAll('.t-dot').forEach(d =>
      d.addEventListener('click', () => goTo(+d.dataset.idx))
    );
  }

  function goTo(idx) {
    current = (idx + testimonials.length) % testimonials.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsWrap?.querySelectorAll('.t-dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 5500); }
  function stopAuto()  { clearInterval(autoTimer); }

  if (prevBtn) prevBtn.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });

  // Touch / swipe
  let touchX = 0;
  track.addEventListener('touchstart', e => { touchX = e.touches[0].clientX; stopAuto(); }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 45) goTo(current + (diff > 0 ? 1 : -1));
    startAuto();
  });

  document.querySelector('.t-slider')?.addEventListener('mouseenter', stopAuto);
  document.querySelector('.t-slider')?.addEventListener('mouseleave', startAuto);

  startAuto();
}

// ======================== Review Form ========================
function initReviewForm() {
  const form = document.getElementById('review-form');
  if (!form) return;

  const starBtns = form.querySelectorAll('.star-btn');
  let selectedRating = 0;

  starBtns.forEach(btn => {
    btn.addEventListener('mouseenter', () => {
      const v = +btn.dataset.v;
      starBtns.forEach((s, i) => { s.textContent = i < v ? '★' : '☆'; s.style.color = i < v ? '#F5A623' : '#D1D5DB'; });
    });
    btn.addEventListener('mouseleave', () => {
      starBtns.forEach((s, i) => { s.textContent = i < selectedRating ? '★' : '☆'; s.style.color = i < selectedRating ? '#F5A623' : '#D1D5DB'; });
    });
    btn.addEventListener('click', () => {
      selectedRating = +btn.dataset.v;
      starBtns.forEach((s, i) => { s.textContent = i < selectedRating ? '★' : '☆'; s.style.color = i < selectedRating ? '#F5A623' : '#D1D5DB'; });
    });
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!selectedRating) { scToast('Please select a star rating.', 'warning'); return; }

    const name = document.getElementById('r-name').value.trim();
    const contact = document.getElementById('r-contact').value.trim();
    const dest = document.getElementById('r-dest').value.trim();
    const review = document.getElementById('r-review').value.trim();

    if (!name || !dest || !review) { scToast('Please fill in all required fields.', 'warning'); return; }

    const entry = {
      id: Date.now(), name, contact, destination: dest,
      rating: selectedRating, review,
      date: new Date().toISOString().split('T')[0],
      status: 'pending', photo: ''
    };

    const pending = scGetPendingReviews();
    pending.push(entry);
    localStorage.setItem('staycape_reviews_pending', JSON.stringify(pending));

    scToast('Thank you! Your review is pending admin approval.', 'success');
    form.reset();
    selectedRating = 0;
    starBtns.forEach(s => { s.textContent = '☆'; s.style.color = '#D1D5DB'; });
  });
}

// ======================== Inject Settings ========================
function injectSettings() {
  const s = scGetSettings();

  document.querySelectorAll('[data-sc-phone1]').forEach(el => { el.textContent = s.phone1 || '+91 7034 378 660'; });
  document.querySelectorAll('[data-sc-phone2]').forEach(el => { el.textContent = s.phone2 || '+91 9744 030 890'; });
  document.querySelectorAll('[data-sc-email]').forEach(el => { el.textContent = s.email || 'staycapes@gmail.com'; el.href = 'mailto:' + (s.email || 'staycapes@gmail.com'); });
  document.querySelectorAll('[data-sc-address]').forEach(el => { el.textContent = s.address || 'Kondotty, Kerala'; });
  document.querySelectorAll('[data-sc-website]').forEach(el => { el.textContent = s.website || 'staycape.in'; });

  // WhatsApp float & buttons
  const msg = encodeURIComponent('Hello Staycape, I am interested in your travel packages. Please share more details.');
  const wa = s.whatsapp || '917034378660';
  document.querySelectorAll('[data-sc-wa]').forEach(el => { el.href = `https://wa.me/${wa}?text=${msg}`; });

  // Social
  if (s.instagram) document.querySelectorAll('[data-sc-instagram]').forEach(el => { el.href = s.instagram; el.style.display = 'flex'; });
  else document.querySelectorAll('[data-sc-instagram]').forEach(el => el.style.display = 'none');
  if (s.facebook) document.querySelectorAll('[data-sc-facebook]').forEach(el => { el.href = s.facebook; el.style.display = 'flex'; });
  else document.querySelectorAll('[data-sc-facebook]').forEach(el => el.style.display = 'none');
}

// ======================== Toast ========================
function scToast(msg, type = 'success') {
  document.querySelector('.sc-toast')?.remove();
  const toast = document.createElement('div');
  toast.className = `sc-toast${type === 'warning' ? ' warning' : ''}`;
  toast.innerHTML = `<span>${type === 'success' ? '✓' : '⚠'}</span><span>${msg}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all .3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4200);
}

// ======================== Smooth Scroll ========================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 88;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

// ======================== INIT ========================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnim();
  initPackages();
  initDestinations();
  initTestimonials();
  initReviewForm();
  injectSettings();
  initSmoothScroll();
});
