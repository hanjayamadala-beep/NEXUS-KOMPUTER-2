// ===================== DATA LANGKAH QUIZ =====================
const quizSteps = [
  {
    key: "kebutuhan",
    question: "Laptop ini akan paling sering dipakai untuk apa?",
    options: [
      { value: "gaming", icon: "🎮", label: "Gaming" },
      { value: "desain", icon: "🎨", label: "Desain & Editing" },
      { value: "kuliah", icon: "📚", label: "Kuliah & Tugas" },
      { value: "kantor", icon: "💼", label: "Kerja Kantoran" },
      { value: "programming", icon: "💻", label: "Programming" }
    ]
  },
  {
    key: "budget",
    question: "Berapa kira-kira budget yang kamu siapkan?",
    options: [
      { value: "b1", icon: "💵", label: "< Rp 15 Juta" },
      { value: "b2", icon: "💵", label: "Rp 15 - 25 Juta" },
      { value: "b3", icon: "💵", label: "Rp 25 - 35 Juta" },
      { value: "b4", icon: "💵", label: "> Rp 35 Juta" }
    ]
  },
  {
    key: "prioritas",
    question: "Mana yang paling penting buat kamu?",
    options: [
      { value: "performa", icon: "⚡", label: "Performa Maksimal" },
      { value: "portable", icon: "🪶", label: "Ringan & Portable" },
      { value: "baterai", icon: "🔋", label: "Baterai Tahan Lama" },
      { value: "harga", icon: "💰", label: "Harga Terjangkau" }
    ]
  },
  {
    key: "os",
    question: "Preferensi sistem operasi?",
    options: [
      { value: "windows", icon: "🪟", label: "Windows" },
      { value: "macos", icon: "🍎", label: "macOS" },
      { value: "bebas", icon: "🤷", label: "Tidak Masalah" }
    ]
  }
];

// ===================== DATA LAPTOP =====================
const laptopData = [
  {
    id: 1,
    brand: "ASUS",
    name: "ROG Strix G16",
    img: "https://dlcdnwebimgs.asus.com/gain/B239AD46-0C86-422B-BF95-B2AC08FE96DF/w750/h470/fwebp",
    price: "Rp 22.499.000",
    priceNumeric: 22499000,
    specs: ["RTX 4070", "i9-13980HX", "32GB DDR5", "1TB NVMe"],
    usecases: ["gaming"],
    performanceScore: 9,
    weightKg: 2.3,
    batteryWh: 90,
    os: "windows",
    desc: "Laptop gaming flagship dengan Intel Core i9 Gen-13 dan NVIDIA RTX 4070, cocok untuk gamer yang menginginkan performa tinggi dengan layar 165Hz yang mulus.",
    fullSpecs: [
      ["Prosesor", "Intel Core i9-13980HX"],
      ["GPU", "NVIDIA RTX 4070 8GB"],
      ["RAM", "32GB DDR5"],
      ["Storage", "1TB NVMe SSD"],
      ["Layar", '16" FHD 165Hz'],
      ["Berat", "2.3 kg"]
    ]
  },
  {
    id: 2,
    brand: "LENOVO",
    name: "ThinkPad X1 Carbon",
    img: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/12/lenovo-thinkpad-x1-carbon-gen-12-header.jpg",
    price: "Rp 28.999.000",
    priceNumeric: 28999000,
    specs: ["Intel Iris Xe", "Core i7-1365U", "16GB LPDDR5", "512GB SSD"],
    usecases: ["kantor", "kuliah", "programming"],
    performanceScore: 6,
    weightKg: 1.12,
    batteryWh: 57,
    os: "windows",
    desc: "Laptop bisnis premium yang sangat tipis dan ringan, bodi serat karbon dengan ketahanan MIL-SPEC. Pilihan terbaik untuk profesional mobile.",
    fullSpecs: [
      ["Prosesor", "Intel Core i7-1365U"],
      ["GPU", "Intel Iris Xe"],
      ["RAM", "16GB LPDDR5"],
      ["Storage", "512GB NVMe SSD"],
      ["Layar", '14" WUXGA'],
      ["Berat", "1.12 kg"]
    ]
  },
  {
    id: 3,
    brand: "ACER",
    name: "Predator Helios 16",
    img: "https://nusantaratv.com/2023/06/acer-predator-helios-neo-16-1685589787-06-2023.jpg",
    price: "Rp 18.799.000",
    priceNumeric: 18799000,
    specs: ["RTX 4060", "i7-13700HX", "16GB DDR5", "512GB NVMe"],
    usecases: ["gaming"],
    performanceScore: 7,
    weightKg: 2.6,
    batteryWh: 76,
    os: "windows",
    desc: "Performa gaming kelas menengah-atas dengan harga lebih terjangkau. RTX 4060 mampu menjalankan game AAA dengan setting tinggi.",
    fullSpecs: [
      ["Prosesor", "Intel Core i7-13700HX"],
      ["GPU", "NVIDIA RTX 4060 8GB"],
      ["RAM", "16GB DDR5"],
      ["Storage", "512GB NVMe SSD"],
      ["Layar", '16" WUXGA 165Hz'],
      ["Berat", "2.6 kg"]
    ]
  },
  {
    id: 4,
    brand: "APPLE",
    name: "MacBook Air M3",
    img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1654122880566",
    price: "Rp 19.999.000",
    priceNumeric: 19999000,
    specs: ["Apple M3", "8-Core GPU", "16GB RAM", "512GB SSD"],
    usecases: ["kuliah", "kantor", "programming", "desain"],
    performanceScore: 7,
    weightKg: 1.24,
    batteryWh: 52.6,
    os: "macos",
    desc: "Chip M3 yang efisien, baterai hingga 18 jam, dan desain tanpa kipas. Performa luar biasa dalam bodi yang sangat tipis dan ringan.",
    fullSpecs: [
      ["Prosesor", "Apple M3"],
      ["GPU", "8-Core GPU"],
      ["RAM", "16GB Unified Memory"],
      ["Storage", "512GB SSD"],
      ["Layar", '13.6" Liquid Retina'],
      ["Berat", "1.24 kg"]
    ]
  },
  {
    id: 5,
    brand: "MSI",
    name: "Raider GE78 HX",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuRKgNCk1V1lLaQWFSXZiTBglcL90Y6CzYQ&s",
    price: "Rp 35.500.000",
    priceNumeric: 35500000,
    specs: ["RTX 4080", "i9-14900HX", "64GB DDR5", "2TB NVMe"],
    usecases: ["gaming", "desain"],
    performanceScore: 10,
    weightKg: 2.9,
    batteryWh: 99.9,
    os: "windows",
    desc: "Monster gaming sejati dengan RTX 4080 dan Intel Core i9 generasi terbaru. Pilihan bagi yang menginginkan performa absolut.",
    fullSpecs: [
      ["Prosesor", "Intel Core i9-14900HX"],
      ["GPU", "NVIDIA RTX 4080 12GB"],
      ["RAM", "64GB DDR5"],
      ["Storage", "2TB NVMe SSD"],
      ["Layar", '17.3" QHD+ 240Hz'],
      ["Berat", "2.9 kg"]
    ]
  },
  {
    id: 6,
    brand: "DELL",
    name: "XPS 15 OLED",
    img: "https://sm.pcmag.com/t/pcmag_au/review/d/dell-xps-1/dell-xps-15-oled-9520_g88x.1920.jpg",
    price: "Rp 31.499.000",
    priceNumeric: 31499000,
    specs: ["RTX 4060", "i7-13700H", "16GB DDR5", "1TB SSD"],
    usecases: ["desain", "programming"],
    performanceScore: 8,
    weightKg: 1.86,
    batteryWh: 86,
    os: "windows",
    desc: "Layar OLED 3.5K yang memukau dengan akurasi warna DCI-P3 100%. Pilihan terbaik untuk desainer grafis, editor video, dan kreator konten.",
    fullSpecs: [
      ["Prosesor", "Intel Core i7-13700H"],
      ["GPU", "NVIDIA RTX 4060 8GB"],
      ["RAM", "16GB DDR5"],
      ["Storage", "1TB NVMe SSD"],
      ["Layar", '15.6" 3.5K OLED'],
      ["Berat", "1.86 kg"]
    ]
  }
];

const budgetRanges = {
  b1: [0, 15000000],
  b2: [15000000, 25000000],
  b3: [25000000, 35000000],
  b4: [35000000, Infinity]
};
const budgetIndex = { b1: 0, b2: 1, b3: 2, b4: 3 };

// ===================== STATE =====================
let currentStep = 0;
const answers = {};

// ===================== RENDER =====================
function renderQuiz() {
  document.getElementById('quizSteps').innerHTML = quizSteps.map((step, i) => `
    <div class="quiz-step ${i === currentStep ? 'active' : ''}" data-step="${i}">
      <div class="quiz-question">${step.question}</div>
      <div class="row g-3">
        ${step.options.map(opt => `
          <div class="col-6 col-md-${step.options.length <= 3 ? 4 : 3}">
            <div class="option-card ${answers[step.key] === opt.value ? 'selected' : ''}"
                 data-key="${step.key}" data-value="${opt.value}">
              <span class="icon">${opt.icon}</span>
              <span class="label">${opt.label}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById('progressFill').style.width = ((currentStep + 1) / quizSteps.length * 100) + '%';
  document.getElementById('btnBack').disabled = currentStep === 0;
  document.getElementById('btnNext').disabled = !answers[quizSteps[currentStep].key];
  document.getElementById('btnNext').textContent = currentStep === quizSteps.length - 1 ? 'Lihat Rekomendasi →' : 'Lanjut →';

  // Event delegation untuk pilihan
  document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', function() {
      const key = this.dataset.key;
      const value = this.dataset.value;
      pilihJawaban(key, value);
    });
  });
}

function pilihJawaban(key, value) {
  answers[key] = value;
  renderQuiz();
}

function langkahBerikutnya() {
  if (!answers[quizSteps[currentStep].key]) return;
  if (currentStep < quizSteps.length - 1) {
    currentStep++;
    renderQuiz();
  } else {
    hitungRekomendasi();
  }
}

function langkahSebelumnya() {
  if (currentStep > 0) {
    currentStep--;
    renderQuiz();
    document.getElementById('hasilRekomendasi').innerHTML = '';
  }
}

// ===================== SKORING =====================
function hitungSkor(laptop) {
  let skor = 0;

  if (laptop.usecases.includes(answers.kebutuhan)) skor += 40;

  const range = budgetRanges[answers.budget];
  if (laptop.priceNumeric >= range[0] && laptop.priceNumeric < range[1]) {
    skor += 30;
  } else {
    let laptopBand = "b4";
    for (const key in budgetRanges) {
      const r = budgetRanges[key];
      if (laptop.priceNumeric >= r[0] && laptop.priceNumeric < r[1]) {
        laptopBand = key;
        break;
      }
    }
    const diff = Math.abs(budgetIndex[laptopBand] - budgetIndex[answers.budget]);
    skor += Math.max(0, 30 - diff * 15);
  }

  if (answers.prioritas === "performa") skor += laptop.performanceScore * 3;
  if (answers.prioritas === "portable") skor += Math.max(0, (3 - laptop.weightKg) * 10);
  if (answers.prioritas === "baterai") skor += laptop.batteryWh / 3;
  if (answers.prioritas === "harga") skor += Math.max(0, (40000000 - laptop.priceNumeric) / 300000);

  if (answers.os === "windows" && laptop.os === "windows") skor += 15;
  if (answers.os === "macos" && laptop.os === "macos") skor += 15;

  return skor;
}

function hitungRekomendasi() {
  const hasil = laptopData
    .map(l => ({ ...l, skor: hitungSkor(l) }))
    .sort((a, b) => b.skor - a.skor)
    .slice(0, 3);

  const labelRank = ["🏆 Paling Cocok", "👍 Rekomendasi #2", "✓ Rekomendasi #3"];

  document.getElementById('hasilRekomendasi').innerHTML = `
    <h5 class="fw-bold text-center mb-1">Rekomendasi Untukmu</h5>
    <p class="text-muted text-center mb-4" style="font-size:0.9rem;">Berdasarkan jawaban kamu, ini laptop yang paling sesuai</p>
    <div class="row g-3">
      ${hasil.map((l, i) => `
        <div class="col-12 col-md-4">
          <div class="product-card" data-laptop-id="${l.id}">
            <div class="card-image"><img src="${l.img}" alt="${l.name}"></div>
            <div class="card-body">
              <div class="rank-tag">${labelRank[i]}</div>
              <div class="card-brand">${l.brand}</div>
              <div class="card-name">${l.name}</div>
              <div class="card-specs">${l.specs.map(s => `<span class="spec-chip">${s}</span>`).join('')}</div>
              <div class="card-footer">
                <div class="price">${l.price}</div>
                <button class="btn btn-primary btn-sm">Detail →</button>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="text-center mt-4">
      <button class="btn btn-outline-secondary me-2" id="btnUlangiQuiz">↺ Ulangi Quiz</button>
      <a href="Home.html" class="btn btn-primary">Lihat Semua Katalog</a>
    </div>
  `;

  // Event delegation untuk product card
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function() {
      const id = parseInt(this.dataset.laptopId);
      tampilkanDetailLaptop(id);
    });
  });

  document.getElementById('btnUlangiQuiz').addEventListener('click', ulangiQuiz);
  document.getElementById('hasilRekomendasi').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function tampilkanDetailLaptop(id) {
  const l = laptopData.find(x => x.id === id);
  if (!l) return;

  document.getElementById('laptopModalContent').innerHTML = `
    <div class="modal-header">
      <h5 class="modal-title fw-bold">${l.brand} ${l.name}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
    </div>
    <div class="modal-body">
      <div class="row g-3 align-items-start mb-3">
        <div class="col-12 col-md-5">
          <div class="card-image" style="border-radius:8px;"><img src="${l.img}" alt="${l.name}"></div>
        </div>
        <div class="col-12 col-md-7">
          <div class="fs-4 fw-bold text-primary mb-2">${l.price}</div>
          <p class="text-muted" style="font-size:0.9rem;">${l.desc}</p>
        </div>
      </div>
      <hr>
      <table class="specs-table">
        ${l.fullSpecs.map(([k, v]) => `<tr><td>${k}</td><td>${v}</td></tr>`).join('')}
      </table>
    </div>
    <div class="modal-footer">
      <a href="Home.html" class="btn btn-primary w-100">Lihat di Katalog Lengkap</a>
    </div>
  `;

  const modal = new bootstrap.Modal(document.getElementById('laptopModal'));
  modal.show();
}

function ulangiQuiz() {
  currentStep = 0;
  Object.keys(answers).forEach(k => delete answers[k]);
  document.getElementById('hasilRekomendasi').innerHTML = '';
  renderQuiz();
  document.querySelector('.quiz-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===================== EVENT LISTENER =====================
document.addEventListener('DOMContentLoaded', function() {
  renderQuiz();

  document.getElementById('btnNext').addEventListener('click', langkahBerikutnya);
  document.getElementById('btnBack').addEventListener('click', langkahSebelumnya);
});