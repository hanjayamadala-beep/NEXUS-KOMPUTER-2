// ===================== DATA GEJALA =====================
const gejalaList = [
  { id: "tidak-nyala", label: "Laptop tidak bisa menyala sama sekali", icon: "🔌" },
  { id: "mati-sendiri", label: "Nyala lalu tiba-tiba mati / restart sendiri", icon: "🔄" },
  { id: "lambat", label: "Performa sangat lambat / lag", icon: "🐢" },
  { id: "overheat", label: "Cepat panas & kipas berisik kencang", icon: "🔥" },
  { id: "bluescreen", label: "Muncul blue screen / sering crash", icon: "💥" },
  { id: "no-display", label: "Tidak ada tampilan di layar (blank/hitam)", icon: "⬛" },
  { id: "layar-bergaris", label: "Layar bergaris, berkedip, atau warna aneh", icon: "📺" },
  { id: "baterai-boros", label: "Baterai cepat habis / tidak mau mengisi", icon: "🔋" },
  { id: "keyboard-error", label: "Keyboard / touchpad tidak respongitsif", icon: "⌨️" },
  { id: "suara-aneh", label: "Muncul suara berisik / klik dari dalam unit", icon: "🔊" },
  { id: "wifi-bermasalah", label: "WiFi / koneksi internet sering putus", icon: "📶" },
  { id: "storage-penuh", label: "Penyimpanan penuh atau file sering hilang/corrupt", icon: "💾" }
];

// ===================== DATA KASUS KERUSAKAN =====================
const kasusKerusakan = [
  {
    id: 1,
    judul: "Adaptor / Power Supply Bermasalah",
    severity: "sedang",
    gejala: ["tidak-nyala"],
    deskripsi: "Laptop sama sekali tidak merespon saat tombol power ditekan. Kemungkinan besar disebabkan oleh adaptor charger yang rusak atau jalur power di motherboard yang bermasalah.",
    solusi: [
      "Coba ganti dengan adaptor charger lain yang sesuai watt-nya",
      "Cek kabel power dan port charging dari kotoran/kerusakan fisik",
      "Lepas baterai (jika removable) lalu coba nyalakan hanya dengan adaptor",
      "Jika masih tidak merespon, kemungkinan ada komponen power circuit motherboard yang bermasalah"
    ],
    butuhGantiPart: true,
    part: [{ nama: "Adaptor Charger Original 65W", harga: "Rp 250.000 - 400.000" }]
  },
  {
    id: 2,
    judul: "Kerusakan Motherboard / IC Power",
    severity: "berat",
    gejala: ["tidak-nyala", "mati-sendiri"],
    deskripsi: "Kombinasi gejala tidak menyala dan mati sendiri biasanya mengindikasikan kerusakan pada motherboard, terutama bagian IC power atau jalur distribusi listrik.",
    solusi: [
      "Lakukan pengecekan jalur power menggunakan multimeter oleh teknisi",
      "Cek apakah ada komponen motherboard yang gosong atau menggembung",
      "Jika kerusakan ringan, IC power masih bisa diperbaiki/diganti",
      "Jika kerusakan parah, pertimbangkan penggantian motherboard"
    ],
    butuhGantiPart: true,
    part: [
      { nama: "Service IC Power Motherboard", harga: "Rp 300.000 - 600.000" },
      { nama: "Motherboard Pengganti (jika rusak total)", harga: "Rp 2.000.000 - 4.500.000" }
    ]
  },
  {
    id: 3,
    judul: "Modul RAM Kotor / Bermasalah",
    severity: "ringan",
    gejala: ["lambat", "mati-sendiri", "bluescreen"],
    deskripsi: "Performa lambat disertai restart mendadak dan blue screen sering disebabkan oleh modul RAM yang kotor pada slotnya atau mulai mengalami kerusakan.",
    solusi: [
      "Bersihkan pin RAM menggunakan penghapus pensil lalu pasang ulang",
      "Jika ada lebih dari satu modul, coba pasang satu per satu untuk mendeteksi modul yang rusak",
      "Jalankan Windows Memory Diagnostic untuk tes RAM",
      "Jika tetap bermasalah, ganti dengan modul RAM baru"
    ],
    butuhGantiPart: true,
    part: [
      { nama: "RAM DDR4 8GB", harga: "Rp 350.000 - 500.000" },
      { nama: "RAM DDR5 8GB", harga: "Rp 500.000 - 700.000" }
    ]
  },
  {
    id: 4,
    judul: "Storage (SSD/HDD) Bad Sector",
    severity: "sedang",
    gejala: ["lambat", "bluescreen", "storage-penuh"],
    deskripsi: "Laptop terasa sangat lambat, file sering corrupt, dan kadang muncul blue screen — ini adalah tanda umum penyimpanan (HDD/SSD) sudah mulai mengalami bad sector.",
    solusi: [
      "Cek kesehatan storage menggunakan software seperti CrystalDiskInfo",
      "Backup data penting secepatnya sebelum data hilang",
      "Jalankan CHKDSK untuk mendeteksi & memperbaiki sektor rusak sementara",
      "Jika status storage sudah 'Caution' atau 'Bad', segera ganti dengan SSD baru"
    ],
    butuhGantiPart: true,
    part: [
      { nama: "SSD SATA 512GB", harga: "Rp 350.000 - 450.000" },
      { nama: "SSD NVMe 512GB", harga: "Rp 450.000 - 600.000" }
    ]
  },
  {
    id: 5,
    judul: "Overheat - Thermal Paste Kering / Kipas Kotor",
    severity: "ringan",
    gejala: ["overheat", "mati-sendiri", "suara-aneh"],
    deskripsi: "Laptop cepat panas, kipas berputar sangat kencang dan berisik, kadang mati sendiri saat suhu terlalu tinggi. Umumnya disebabkan debu yang menumpuk di heatsink atau thermal paste yang sudah mengering.",
    solusi: [
      "Bersihkan kipas & heatsink dari debu menggunakan kuas/blower",
      "Ganti thermal paste pada processor dan GPU",
      "Pastikan ventilasi udara laptop tidak tertutup saat digunakan",
      "Gunakan cooling pad tambahan untuk pemakaian berat/jangka panjang"
    ],
    butuhGantiPart: true,
    part: [
      { nama: "Thermal Paste + Jasa Bersih", harga: "Rp 80.000 - 150.000" },
      { nama: "Kipas/Fan Pengganti (jika sudah rusak)", harga: "Rp 150.000 - 300.000" }
    ]
  },
  {
    id: 6,
    judul: "VGA / GPU Bermasalah",
    severity: "berat",
    gejala: ["no-display", "overheat", "layar-bergaris"],
    deskripsi: "Tidak ada tampilan sama sekali atau layar bergaris disertai suhu yang sangat tinggi mengindikasikan kerusakan pada GPU (kartu grafis), baik yang dedicated maupun onboard di motherboard.",
    solusi: [
      "Coba sambungkan ke monitor eksternal untuk memastikan sumber masalah",
      "Reflow/reball chip GPU bisa menjadi solusi sementara",
      "Jika GPU dedicated, modul VGA bisa diganti",
      "Jika GPU onboard motherboard, perbaikan lebih kompleks dan biayanya lebih tinggi"
    ],
    butuhGantiPart: true,
    part: [
      { nama: "VGA Card Dedicated Pengganti", harga: "Rp 1.500.000 - 3.500.000" },
      { nama: "Reball/Reflow Chip GPU", harga: "Rp 400.000 - 700.000" }
    ]
  },
  {
    id: 7,
    judul: "Panel LCD / Layar Rusak",
    severity: "sedang",
    gejala: ["layar-bergaris", "no-display"],
    deskripsi: "Layar menampilkan garis-garis, berkedip, atau gambar pecah biasanya disebabkan oleh panel LCD yang rusak atau kabel fleksibel layar yang kendor/putus.",
    solusi: [
      "Cek dengan menyambungkan ke monitor eksternal — jika tampilan normal, masalah ada di layar laptop",
      "Periksa kabel fleksibel LCD, kemungkinan kendor atau perlu diganti",
      "Jika panel sudah rusak/pecah, lakukan penggantian panel LCD"
    ],
    butuhGantiPart: true,
    part: [
      { nama: 'Panel LCD 14" FHD', harga: "Rp 650.000 - 900.000" },
      { nama: 'Panel LCD 15.6" FHD', harga: "Rp 700.000 - 1.000.000" },
      { nama: "Kabel Fleksibel LCD", harga: "Rp 80.000 - 150.000" }
    ]
  },
  {
    id: 8,
    judul: "Baterai Drop / Soak",
    severity: "ringan",
    gejala: ["baterai-boros"],
    deskripsi: "Baterai cepat habis meski sudah dicas penuh, atau bahkan tidak mau mengisi sama sekali. Ini menandakan sel baterai sudah drop/soak akibat usia pemakaian.",
    solusi: [
      "Cek kesehatan baterai melalui BIOS atau software seperti BatteryInfoView",
      "Lakukan kalibrasi ulang baterai (full charge lalu full discharge)",
      "Jika kapasitas sudah di bawah 50% dari kapasitas awal, sebaiknya ganti baterai"
    ],
    butuhGantiPart: true,
    part: [
      { nama: "Baterai Original", harga: "Rp 450.000 - 750.000" },
      { nama: "Baterai KW/Compatible", harga: "Rp 250.000 - 400.000" }
    ]
  },
  {
    id: 9,
    judul: "Keyboard / Touchpad Rusak",
    severity: "ringan",
    gejala: ["keyboard-error"],
    deskripsi: "Beberapa tombol keyboard tidak berfungsi atau touchpad tidak merespon sentuhan. Umumnya disebabkan kotoran/cairan yang masuk, atau koneksi fleksibel yang kendor.",
    solusi: [
      "Bersihkan keyboard dari debu/kotoran menggunakan kuas halus atau air compressor",
      "Cek pengaturan touchpad di Device Manager, update driver jika perlu",
      "Jika ada kerusakan fisik (tombol patah/cairan masuk), lakukan penggantian"
    ],
    butuhGantiPart: true,
    part: [
      { nama: "Keyboard Pengganti", harga: "Rp 200.000 - 350.000" },
      { nama: "Touchpad/Trackpad Module", harga: "Rp 150.000 - 250.000" }
    ]
  },
  {
    id: 10,
    judul: "Modul WiFi Bermasalah / Driver Usang",
    severity: "ringan",
    gejala: ["wifi-bermasalah"],
    deskripsi: "Koneksi WiFi sering putus-putus biasanya disebabkan oleh driver yang usang. Namun jika setelah update driver masih bermasalah, kemungkinan modul WiFi (WLAN card) mengalami kerusakan fisik.",
    solusi: [
      "Update driver WiFi ke versi terbaru melalui Device Manager",
      "Reset network settings di Windows",
      "Coba di lokasi/jaringan WiFi lain untuk memastikan bukan masalah router",
      "Jika tetap bermasalah, ganti modul WiFi card"
    ],
    butuhGantiPart: true,
    part: [{ nama: "WiFi Card M.2 Internal", harga: "Rp 120.000 - 200.000" }]
  },
  {
    id: 11,
    judul: "Virus/Malware atau Sistem Operasi Corrupt",
    severity: "sedang",
    gejala: ["lambat", "bluescreen", "storage-penuh", "mati-sendiri"],
    deskripsi: "Jika storage masih sehat namun laptop tetap lambat, sering crash, dan penyimpanan cepat penuh tanpa sebab yang jelas, kemungkinan sistem terinfeksi virus/malware atau file sistem operasi sudah corrupt.",
    solusi: [
      "Scan penuh menggunakan antivirus terpercaya (Windows Defender/Malwarebytes)",
      "Hapus aplikasi/file mencurigakan dan bersihkan startup program",
      "Jalankan System File Checker (sfc /scannow) untuk perbaikan file sistem",
      "Jika kerusakan sistem parah, lakukan install ulang Windows"
    ],
    butuhGantiPart: false,
    part: []
  }
];

// ===================== FUNGSI UTAMA =====================
function renderGejala() {
  const grid = document.getElementById('gejalaGrid');
  if (!grid) return;
  grid.innerHTML = gejalaList.map(g => `
    <div class="col-12 col-sm-6 col-lg-4">
      <label class="symptom-card">
        <input type="checkbox" class="gejala-input" value="${g.id}"
          onchange="this.closest('.symptom-card').classList.toggle('checked', this.checked)">
        <span class="icon">${g.icon}</span>
        <span class="label">${g.label}</span>
      </label>
    </div>
  `).join('');
}

function badgeKelas(severity) {
  if (severity === "ringan") return "bg-success";
  if (severity === "sedang") return "bg-warning text-dark";
  return "bg-danger";
}

function labelSeverity(severity) {
  if (severity === "ringan") return "Ringan";
  if (severity === "sedang") return "Sedang";
  return "Berat";
}

function analisaKerusakan() {
  const checked = Array.from(document.querySelectorAll('.gejala-input:checked')).map(c => c.value);
  const hasil = document.getElementById('hasilAnalisa');

  if (checked.length === 0) {
    hasil.innerHTML = `<div class="alert alert-warning mt-3">Silakan pilih minimal satu gejala yang dialami laptop/komputer kamu.</div>`;
    hasil.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const skor = kasusKerusakan.map(k => {
    const cocok = k.gejala.filter(g => checked.includes(g));
    const union = new Set([...k.gejala, ...checked]).size;
    const jaccard = union === 0 ? 0 : cocok.length / union;
    return { ...k, jaccard, jumlahCocok: cocok.length };
  }).filter(k => k.jumlahCocok > 0).sort((a, b) => b.jaccard - a.jaccard);

  if (skor.length === 0) {
    hasil.innerHTML = `<div class="alert alert-info mt-3">Kombinasi gejala yang dipilih belum cocok dengan database kami. Sebaiknya bawa unit langsung ke teknisi untuk pengecekan manual.</div>`;
    hasil.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }

  const top = skor.slice(0, 3);
  hasil.innerHTML = `
    <hr class="my-4">
    <div class="step-title">Hasil Analisa — ${top.length} kemungkinan kerusakan ditemukan</div>
    <div class="row g-3">
      ${top.map(k => `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="result-card">
            <span class="badge ${badgeKelas(k.severity)}">Tingkat ${labelSeverity(k.severity)}</span>
            <h6>${k.judul}</h6>
            <p class="text-muted small mb-3">${k.deskripsi.slice(0, 95)}...</p>
            <button class="btn btn-primary btn-sm w-100" onclick="tampilkanDetail(${k.id})">Lihat Detail &amp; Solusi →</button>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  hasil.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function tampilkanDetail(id) {
  const k = kasusKerusakan.find(x => x.id === id);
  if (!k) return;

  const modalContent = document.getElementById('detailModalContent');
  modalContent.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="badge ${badgeKelas(k.severity)} mb-2">Tingkat ${labelSeverity(k.severity)}</span>
        <h5 class="modal-title">${k.judul}</h5>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
    </div>
    <div class="modal-body">
      <p class="text-muted">${k.deskripsi}</p>
      <h6 class="fw-bold mb-2">Langkah Penyelesaian</h6>
      <ol class="solusi-list">${k.solusi.map(s => `<li>${s}</li>`).join('')}</ol>
      ${k.butuhGantiPart ? `
        <h6 class="fw-bold mt-4 mb-2">Part yang Mungkin Perlu Diganti</h6>
        <table class="table table-sm part-table">
          <thead><tr><th>Komponen</th><th class="text-end">Estimasi Harga</th></tr></thead>
          <tbody>${k.part.map(p => `<tr><td>${p.nama}</td><td class="text-end">${p.harga}</td></tr>`).join('')}</tbody>
        </table>
        <p class="text-muted small mb-0">* Estimasi harga komponen pasaran, harga aktual dapat berbeda tergantung merek dan kondisi pasar.</p>
      ` : `<div class="alert alert-success mt-3 mb-0">Tidak perlu ganti komponen — cukup perbaikan software/pembersihan sistem secara rutin.</div>`}
    </div>
    <div class="modal-footer">
      <a href="https://wa.me/6289601979806" target="_blank" rel="noopener" class="btn btn-primary w-100">💬 Konsultasi dengan Teknisi via WhatsApp</a>
    </div>
  `;

  const modal = new bootstrap.Modal(document.getElementById('detailModal'));
  modal.show();
}

function resetPilihan() {
  document.querySelectorAll('.gejala-input').forEach(c => {
    c.checked = false;
    c.closest('.symptom-card').classList.remove('checked');
  });
  document.getElementById('hasilAnalisa').innerHTML = '';
}

// ===================== EVENT LISTENER =====================
document.addEventListener('DOMContentLoaded', function() {
  renderGejala();

  document.getElementById('btnAnalisa').addEventListener('click', analisaKerusakan);
  document.getElementById('btnReset').addEventListener('click', resetPilihan);
});