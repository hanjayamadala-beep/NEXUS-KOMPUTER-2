// ============================================
// DATA PRODUK
// ============================================
const laptopSVG = (color1, color2) => `
<svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="10" width="160" height="100" rx="4" fill="#f1f5f9" stroke="${color1}" stroke-width="1.5"/>
  <rect x="28" y="18" width="144" height="84" rx="2" fill="#e2e8f0"/>
  <rect x="30" y="20" width="140" height="80" rx="1" fill="#f8fafc"/>
  <line x1="30" y1="60" x2="170" y2="60" stroke="${color1}" stroke-width="0.4" stroke-dasharray="4,3"/>
  <line x1="100" y1="20" x2="100" y2="100" stroke="${color1}" stroke-width="0.4" stroke-dasharray="4,3"/>
  <circle cx="100" cy="60" r="12" fill="none" stroke="${color1}" stroke-width="1.2"/>
  <circle cx="100" cy="60" r="5" fill="${color1}" opacity="0.5"/>
  <rect x="10" y="110" width="180" height="10" rx="2" fill="#e2e8f0" stroke="${color2}" stroke-width="1"/>
  <rect x="75" y="110" width="50" height="3" rx="1" fill="${color2}" opacity="0.4"/>
  <rect x="32" y="30" width="30" height="2" rx="1" fill="${color1}" opacity="0.4"/>
  <rect x="32" y="36" width="20" height="2" rx="1" fill="${color1}" opacity="0.25"/>
  <rect x="138" y="30" width="30" height="2" rx="1" fill="${color2}" opacity="0.4"/>
  <rect x="138" y="36" width="20" height="2" rx="1" fill="${color2}" opacity="0.25"/>
</svg>`;

const products = [
  {
    id: 1,
    brand: "ASUS",
    name: "ROG Strix G16",
    category: "gaming",
    img: "https://i.ibb.co.com/6RZS5Jqb/10-DEE269-0-AA9-4-DB8-A555-4696-BC4-F5767-removebg-preview.png",
    badge: "hot",
    badgeClass: "badge-hot",
    price: "Rp 22.499.000",
    priceOld: "Rp 25.000.000",
    specs: ["RTX 4070", "i9-13980HX", "32GB DDR5", "1TB NVMe"],
    color1: "#1d4ed8",
    color2: "#64748b",
    desc: "Laptop gaming flagship ROG Strix G16 hadir dengan Intel Core i9 Gen-13 dan NVIDIA RTX 4070. Pilihan terbaik bagi gamer yang menginginkan performa tinggi dengan layar 165Hz yang mulus.",
    fullSpecs: [
      ["Prosesor", "Intel Core i9-13980HX (24 Core)"],
      ["GPU", "NVIDIA RTX 4070 8GB GDDR6"],
      ["RAM", "32GB DDR5 4800MHz"],
      ["Storage", "1TB NVMe PCIe 4.0 SSD"],
      ["Layar", '16" FHD 165Hz IPS Anti-Glare'],
      ["Baterai", "90Wh, 240W Adaptor"],
      ["OS", "Windows 11 Home"],
      ["Garansi", "2 Tahun Resmi ASUS"],
      ["Berat", "2.3 kg"]
    ]
  },
  {
    id: 2,
    brand: "LENOVO",
    name: "ThinkPad X1 Carbon",
    category: "workstation",
    img: "https://i.ibb.co.com/dsJxWJBW/Lenovo-Think-Pad-X1-2-removebg-preview.png",
    badge: "new",
    badgeClass: "badge-new",
    price: "Rp 28.999.000",
    priceOld: null,
    specs: ["Intel Iris Xe", "Core i7-1365U", "16GB LPDDR5", "512GB SSD"],
    color1: "#475569",
    color2: "#1d4ed8",
    desc: "ThinkPad X1 Carbon Gen 11 adalah laptop bisnis premium yang menonjol karena desain tipis, bodi serat karbon, dan ketahanan MIL-SPEC. Pilihan terbaik untuk profesional mobile.",
    fullSpecs: [
      ["Prosesor", "Intel Core i7-1365U (12 Core)"],
      ["GPU", "Intel Iris Xe Graphics"],
      ["RAM", "16GB LPDDR5 5200MHz"],
      ["Storage", "512GB NVMe PCIe 4.0 SSD"],
      ["Layar", '14" WUXGA IPS 400nits Anti-Glare'],
      ["Baterai", "57Wh, Rapid Charge 80% in 1hr"],
      ["OS", "Windows 11 Pro"],
      ["Garansi", "3 Tahun Resmi Lenovo"],
      ["Berat", "1.12 kg (Super Tipis!)"]
    ]
  },
  {
    id: 3,
    brand: "ACER",
    name: "Predator Helios 16",
    category: "gaming",
    img: "https://i.ibb.co.com/yBcLDYwX/helios-neo-16-removebg-preview.png",
    badge: "sale",
    badgeClass: "badge-sale",
    price: "Rp 18.799.000",
    priceOld: "Rp 21.000.000",
    specs: ["RTX 4060", "i7-13700HX", "16GB DDR5", "512GB NVMe"],
    color1: "#dc2626",
    color2: "#1d4ed8",
    desc: "Acer Predator Helios 16 menghadirkan performa gaming kelas menengah-atas dengan harga terjangkau. RTX 4060 membuatnya mampu menjalankan game AAA dengan setting tinggi.",
    fullSpecs: [
      ["Prosesor", "Intel Core i7-13700HX (16 Core)"],
      ["GPU", "NVIDIA RTX 4060 8GB GDDR6"],
      ["RAM", "16GB DDR5 4800MHz (up to 32GB)"],
      ["Storage", "512GB NVMe PCIe 4.0 SSD"],
      ["Layar", '16" WUXGA 165Hz IPS'],
      ["Baterai", "76Wh, 330W Adaptor"],
      ["OS", "Windows 11 Home"],
      ["Garansi", "2 Tahun Resmi Acer"],
      ["Berat", "2.6 kg"]
    ]
  },
  {
    id: 4,
    brand: "APPLE",
    name: "MacBook Air M3",
    category: "tipis",
    img: "https://i.ibb.co.com/hxbpJwHT/images-removebg-preview-2.png",
    badge: "new",
    badgeClass: "badge-new",
    price: "Rp 19.999.000",
    priceOld: null,
    specs: ["Apple M3", "8-Core GPU", "16GB RAM", "512GB SSD"],
    color1: "#94a3b8",
    color2: "#475569",
    desc: "MacBook Air M3 hadir dengan chip M3 yang revolusioner, baterai hingga 18 jam, dan desain tanpa kipas angin. Performa luar biasa dalam bodi yang sangat tipis dan ringan.",
    fullSpecs: [
      ["Prosesor", "Apple M3 (8-Core CPU)"],
      ["GPU", "8-Core GPU Apple"],
      ["RAM", "16GB Unified Memory"],
      ["Storage", "512GB SSD"],
      ["Layar", '13.6" Liquid Retina 2560x1664'],
      ["Baterai", "52.6Wh, hingga 18 jam"],
      ["OS", "macOS Sonoma"],
      ["Garansi", "1 Tahun Resmi Apple (AppleCare+)"],
      ["Berat", "1.24 kg"]
    ]
  },
  {
    id: 5,
    brand: "MSI",
    name: "Raider GE78 HX",
    category: "gaming",
    img: "MSI-.png",
    badge: "hot",
    badgeClass: "badge-hot",
    price: "Rp 35.500.000",
    priceOld: "Rp 38.000.000",
    specs: ["RTX 4080", "i9-14900HX", "64GB DDR5", "2TB NVMe"],
    color1: "#dc2626",
    color2: "#475569",
    desc: "MSI Raider GE78 HX adalah monster gaming sejati. Dipersenjatai RTX 4080 dan Intel Core i9 gen terbaru, laptop ini merupakan pilihan bagi gamer hardcore yang menginginkan performa absolut.",
    fullSpecs: [
      ["Prosesor", "Intel Core i9-14900HX (24 Core)"],
      ["GPU", "NVIDIA RTX 4080 12GB GDDR6"],
      ["RAM", "64GB DDR5 5600MHz"],
      ["Storage", "2TB NVMe PCIe 4.0 SSD (RAID 0)"],
      ["Layar", '17.3" QHD+ 240Hz MiniLED'],
      ["Baterai", "99.9Wh, 280W Adaptor"],
      ["OS", "Windows 11 Pro"],
      ["Garansi", "2 Tahun Resmi MSI"],
      ["Berat", "2.9 kg"]
    ]
  },
  {
    id: 6,
    brand: "DELL",
    name: "XPS 15 OLED",
    category: "workstation",
    img: "https://i.ibb.co.com/MDPx7XQn/Gear-Dell-XPS-15-OLED-1-removebg-preview.png",
    badge: null,
    badgeClass: "",
    price: "Rp 31.499.000",
    priceOld: null,
    specs: ["RTX 4060", "i7-13700H", "16GB DDR5", "1TB SSD"],
    color1: "#1d4ed8",
    color2: "#64748b",
    desc: "Dell XPS 15 OLED menghadirkan layar OLED 3.5K yang memukau dengan akurasi warna DCI-P3 100%. Pilihan terbaik untuk desainer grafis, editor video, dan kreator konten profesional.",
    fullSpecs: [
      ["Prosesor", "Intel Core i7-13700H (14 Core)"],
      ["GPU", "NVIDIA RTX 4060 8GB GDDR6"],
      ["RAM", "16GB DDR5 4800MHz"],
      ["Storage", "1TB NVMe PCIe 4.0 SSD"],
      ["Layar", '15.6" 3.5K OLED Touch, DCI-P3 100%'],
      ["Baterai", "86Wh, USB-C 130W Charging"],
      ["OS", "Windows 11 Home"],
      ["Garansi", "1 Tahun Resmi Dell"],
      ["Berat", "1.86 kg"]
    ]
  }
];

// ============================================
// FUNGSI PRODUK
// ============================================
function renderProducts(filter) {
  const grid = document.getElementById('productGrid');
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  
  grid.innerHTML = filtered.map(p => `
    <div class="product-card" data-category="${p.category}" onclick="openModal(${p.id})">
      <div class="card-image">
        ${p.img ? `<img src="${p.img}" alt="${p.name}" style="max-height:160px;max-width:90%;object-fit:contain;" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22100%22 viewBox=%220 0 120 100%22%3E%3Crect width=%22120%22 height=%22100%22 fill=%22%23f1f5f9%22 rx=%226%22/%3E%3Crect x=%2215%22 y=%2215%22 width=%2290%22 height=%2265%22 fill=%22%23e2e8f0%22 rx=%223%22/%3E%3Ctext x=%2260%22 y=%2255%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2212%22 fill=%22%2394a3b8%22%3E${p.brand}%3C/text%3E%3C/svg%3E';">` : laptopSVG(p.color1, p.color2)}
        ${p.badge ? `<div class="badge ${p.badgeClass}">${p.badge === 'hot' ? '🔥 TERLARIS' : p.badge === 'new' ? '✦ BARU' : '% DISKON'}</div>` : ''}
      </div>
      <div class="card-body">
        <div class="card-brand">${p.brand}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-specs">
          ${p.specs.map(s => `<span class="spec-chip">${s}</span>`).join('')}
        </div>
        <div class="card-footer">
          <div>
            <div class="price">${p.price}</div>
            ${p.priceOld ? `<div class="price-old">${p.priceOld}</div>` : ''}
          </div>
          <button class="btn-detail" type="button" onclick="event.stopPropagation(); openModal(${p.id})">Detail →</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProducts(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(cat);
}

function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-grid">
      <div class="nx-modal-visual">${p.img ? `<img src="${p.img}" alt="${p.name}" style="max-height:180px;max-width:90%;object-fit:contain;" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22100%22 viewBox=%220 0 120 100%22%3E%3Crect width=%22120%22 height=%22100%22 fill=%22%23f1f5f9%22 rx=%226%22/%3E%3Crect x=%2215%22 y=%2215%22 width=%2290%22 height=%2265%22 fill=%22%23e2e8f0%22 rx=%223%22/%3E%3Ctext x=%2260%22 y=%2255%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2212%22 fill=%22%2394a3b8%22%3E${p.brand}%3C/text%3E%3C/svg%3E';">` : laptopSVG(p.color1, p.color2)}</div>
      <div>
        <div class="nx-modal-brand">${p.brand}</div>
        <div class="nx-modal-name">${p.name}</div>
        <div class="nx-modal-price">${p.price}</div>
        ${p.priceOld ? `<div class="nx-modal-price-old">${p.priceOld}</div>` : ''}
        <div class="nx-modal-desc">${p.desc}</div>
        <div class="card-specs">
          ${p.specs.map(s => `<span class="spec-chip">${s}</span>`).join('')}
        </div>
      </div>
    </div>
    <div class="nx-modal-specs-full">
      <div class="specs-title">// Spesifikasi Lengkap</div>
      <table class="specs-table">
        ${p.fullSpecs.map(([k,v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
      </table>
    </div>
    <button class="btn-buy" onclick="alert('Fitur pembelian segera hadir! Hubungi WA: 0812-3456-7890')">
      ⚡ Beli Sekarang — ${p.price}
    </button>
  `;
  
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================
// CAROUSEL
// ============================================
const carouselSlides = [
  {
    id: 1,
    brand: "ASUS ROG",
    name: "ROG Strix G16",
    tag: "🔥 Terlaris",
    tagColor: "#ff3b5c",
    desc: "Laptop gaming flagship dengan Intel Core i9 Gen-13 & RTX 4070. Layar 165Hz super mulus untuk pengalaman gaming terbaik.",
    specs: ["RTX 4070", "i9-13980HX", "32GB DDR5", "1TB NVMe", "165Hz IPS"],
    price: "Rp 22.499.000",
    priceOld: "Rp 25.000.000",
    img: "https://i.ibb.co.com/6RZS5Jqb/10-DEE269-0-AA9-4-DB8-A555-4696-BC4-F5767-removebg-preview.png",
    bg: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)",
    glow: "#6366f1",
    accentColor: "#818cf8",
    floatNum: "10%",
    floatLabel: "Hemat",
    productId: 1
  },
  {
    id: 2,
    brand: "LENOVO",
    name: "ThinkPad X1 Carbon",
    tag: "✦ Baru",
    tagColor: "#1d4ed8",
    desc: "Laptop bisnis premium ultra-tipis, bodi serat karbon MIL-SPEC. Performa handal untuk profesional mobile yang menuntut lebih.",
    specs: ["Intel Iris Xe", "Core i7-1365U", "16GB LPDDR5", "512GB SSD", "3 Thn Garansi"],
    price: "Rp 28.999.000",
    priceOld: null,
    img: "https://i.ibb.co.com/dsJxWJBW/Lenovo-Think-Pad-X1-2-removebg-preview.png",
    bg: "linear-gradient(135deg, #0f172a 0%, #0c1a2e 50%, #0f172a 100%)",
    glow: "#1d4ed8",
    accentColor: "#60a5fa",
    floatNum: "1.12kg",
    floatLabel: "Super Ringan",
    productId: 2
  },
  {
    id: 3,
    brand: "ACER",
    name: "Predator Helios 16",
    tag: "% Diskon",
    tagColor: "#059669",
    desc: "Performa gaming kelas menengah-atas dengan harga kompetitif. RTX 4060 siap menjalankan game AAA dengan setting tertinggi.",
    specs: ["RTX 4060", "i7-13700HX", "16GB DDR5", "512GB NVMe", "165Hz IPS"],
    price: "Rp 18.799.000",
    priceOld: "Rp 21.000.000",
    img: "https://i.ibb.co.com/yBcLDYwX/helios-neo-16-removebg-preview.png",
    bg: "linear-gradient(135deg, #0f172a 0%, #1a0000 50%, #0f172a 100%)",
    glow: "#dc2626",
    accentColor: "#f87171",
    floatNum: "11%",
    floatLabel: "Diskon",
    productId: 3
  },
  {
    id: 4,
    brand: "APPLE",
    name: "MacBook Air M3",
    tag: "✦ Baru",
    tagColor: "#6366f1",
    desc: "Chip M3 revolusioner, baterai hingga 18 jam, tanpa kipas angin — performa luar biasa dalam desain yang tipis dan elegan.",
    specs: ["Apple M3", "8-Core GPU", "16GB RAM", "512GB SSD", "18 Jam Baterai"],
    price: "Rp 19.999.000",
    priceOld: null,
    img: "https://i.ibb.co.com/hxbpJwHT/images-removebg-preview-2.png",
    bg: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
    glow: "#94a3b8",
    accentColor: "#cbd5e1",
    floatNum: "18 Jam",
    floatLabel: "Baterai",
    productId: 4
  },
  {
    id: 5,
    brand: "MSI",
    name: "Raider GE78 HX",
    tag: "🔥 Terlaris",
    tagColor: "#dc2626",
    desc: "Monster gaming sejati — RTX 4080 + Core i9-14900HX + 64GB DDR5. Performa absolut untuk gamer hardcore tanpa kompromi.",
    specs: ["RTX 4080", "i9-14900HX", "64GB DDR5", "2TB NVMe", "240Hz QHD+"],
    price: "Rp 35.500.000",
    priceOld: "Rp 38.000.000",
    img: "MSI-.png",
    bg: "linear-gradient(135deg, #0f172a 0%, #1a0505 50%, #0f172a 100%)",
    glow: "#dc2626",
    accentColor: "#fca5a5",
    floatNum: "7%",
    floatLabel: "Hemat",
    productId: 5
  },
  {
    id: 6,
    brand: "DELL",
    name: "XPS 15 OLED",
    tag: "⭐ Premium",
    tagColor: "#0891b2",
    desc: "Layar OLED 3.5K dengan akurasi warna DCI-P3 100%. Pilihan sempurna untuk desainer grafis dan kreator konten profesional.",
    specs: ["RTX 4060", "i7-13700H", "16GB DDR5", "1TB SSD", "3.5K OLED"],
    price: "Rp 31.499.000",
    priceOld: null,
    img: "https://i.ibb.co.com/MDPx7XQn/Gear-Dell-XPS-15-OLED-1-removebg-preview.png",
    bg: "linear-gradient(135deg, #0f172a 0%, #0c1e2e 50%, #0f172a 100%)",
    glow: "#0891b2",
    accentColor: "#38bdf8",
    floatNum: "100%",
    floatLabel: "DCI-P3",
    productId: 6
  }
];

let currentSlide = 0;
let autoSlideTimer = null;

function buildCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots = document.getElementById('carouselDots');

  track.innerHTML = carouselSlides.map(s => {
    const specsHtml = s.specs.map(sp => '<span class="slide-spec-chip">' + sp + '</span>').join('');
    const priceOldHtml = s.priceOld ? '<span class="slide-price-old">' + s.priceOld + '</span>' : '';
    
    return `<div class="carousel-slide" style="background: ${s.bg};">
      <div class="slide-bg-glow" style="background: ${s.glow};"></div>
      <div class="slide-float-badge" style="top:1.5rem; right:2rem;">
        <div class="float-badge-num" style="color:${s.accentColor}">${s.floatNum}</div>
        <div class="float-badge-label">${s.floatLabel}</div>
      </div>
      <div class="slide-content">
        <div class="slide-tag" style="background:${s.tagColor}22; color:${s.tagColor}; border:1px solid ${s.tagColor}55;">${s.tag}</div>
        <div class="slide-brand" style="color:${s.accentColor};">${s.brand}</div>
        <div class="slide-name">${s.name}</div>
        <div class="slide-desc">${s.desc}</div>
        <div class="slide-specs-row">${specsHtml}</div>
        <div class="slide-price-row"><span class="slide-price">${s.price}</span>${priceOldHtml}</div>
        <div class="slide-btns">
          <button class="slide-btn-primary" data-open-modal="${s.productId}" style="background:${s.accentColor}; color:#0f172a;">Lihat Detail →</button>
          <button class="slide-btn-outline" data-scroll-products="1">Semua Produk</button>
        </div>
      </div>
      <div class="slide-visual"><img src="${s.img}" alt="${s.name}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22150%22 viewBox=%220 0 200 150%22%3E%3Crect width=%22200%22 height=%22150%22 fill=%22%231e293b%22 rx=%2212%22/%3E%3Crect x=%2230%22 y=%2225%22 width=%22140%22 height=%22100%22 fill=%22%23334455%22 rx=%226%22/%3E%3Ctext x=%22100%22 y=%2285%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2216%22 fill=%22%2364798b%22%3E${s.brand}%3C/text%3E%3C/svg%3E';"></div>
    </div>`;
  }).join('');

  // Event delegation untuk tombol carousel
  track.addEventListener('click', function(e) {
    const btnDetail = e.target.closest('[data-open-modal]');
    const btnScroll = e.target.closest('[data-scroll-products]');
    
    if (btnDetail) {
      e.stopPropagation();
      openModal(parseInt(btnDetail.getAttribute('data-open-modal')));
    }
    if (btnScroll) {
      e.stopPropagation();
      document.querySelector('section').scrollIntoView({ behavior: 'smooth' });
    }
  });

  dots.innerHTML = carouselSlides.map((_, i) => {
    return `<button class="carousel-dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></button>`;
  }).join('');

  dots.addEventListener('click', function(e) {
    const dot = e.target.closest('[data-slide]');
    if (dot) {
      resetAutoSlide();
      goToSlide(parseInt(dot.getAttribute('data-slide')));
    }
  });

  startAutoSlide();
}

function goToSlide(idx) {
  const totalSlides = carouselSlides.length;
  currentSlide = ((idx % totalSlides) + totalSlides) % totalSlides;
  document.getElementById('carouselTrack').style.transform = `translateX(-${currentSlide * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((d, i) => {
    d.classList.toggle('active', i === currentSlide);
  });
}

function carouselMove(dir) {
  resetAutoSlide();
  goToSlide(currentSlide + dir);
}

function startAutoSlide() {
  autoSlideTimer = setInterval(() => goToSlide(currentSlide + 1), 4500);
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  startAutoSlide();
}

// ============================================
// PROMO MINGGU INI - SLIDER
// ============================================
let pmgIdx = 0;
let pmgVisible = 4;
let pmgTotal = 5;

function pmgMove(dir) {
  const track = document.getElementById('pmgTrack');
  if (!track) return;
  
  const card = track.querySelector('.pmg-card');
  if (!card) return;
  
  const w = card.offsetWidth + Math.round(parseFloat(getComputedStyle(track).gap) || 14);
  pmgIdx = Math.max(0, Math.min(pmgIdx + dir, pmgTotal - pmgVisible));
  track.style.transform = `translateX(-${pmgIdx * w}px)`;
}

// ============================================
// TOUCH SWIPE SUPPORT
// ============================================
let touchStartX = 0;
document.getElementById('heroCarousel').addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
});

document.getElementById('heroCarousel').addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    carouselMove(diff > 0 ? 1 : -1);
  }
});

// ============================================
// KEYBOARD SHORTCUT
// ============================================
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModalDirect();
});

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  renderProducts('all');
  buildCarousel();
  
  // Responsive promo slider
  function updatePromoVisible() {
    const width = window.innerWidth;
    if (width < 600) pmgVisible = 1;
    else if (width < 900) pmgVisible = 2;
    else pmgVisible = 4;
    pmgIdx = 0;
    document.getElementById('pmgTrack').style.transform = 'translateX(0)';
  }
  
  updatePromoVisible();
  window.addEventListener('resize', updatePromoVisible);
});