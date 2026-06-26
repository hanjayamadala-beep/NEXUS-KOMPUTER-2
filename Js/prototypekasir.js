// ===================== DATA PRODUK (dengan SKU & stok) =====================
const products = [
  { id: 1, sku: "ASUS-ROG-G16", name: "ROG Strix G16", brand: "ASUS", price: 22499000, stock: 5, img: "https://dlcdnwebimgs.asus.com/gain/B239AD46-0C86-422B-BF95-B2AC08FE96DF/w750/h470/fwebp" },
  { id: 2, sku: "LEN- X1C-G11", name: "ThinkPad X1 Carbon", brand: "Lenovo", price: 28999000, stock: 3, img: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2023/12/lenovo-thinkpad-x1-carbon-gen-12-header.jpg" },
  { id: 3, sku: "ACER-PRED-H16", name: "Predator Helios 16", brand: "Acer", price: 18799000, stock: 7, img: "https://nusantaratv.com/2023/06/acer-predator-helios-neo-16-1685589787-06-2023.jpg" },
  { id: 4, sku: "APPLE-MBA-M3", name: "MacBook Air M3", brand: "Apple", price: 19999000, stock: 4, img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-config-20220606?wid=820&hei=498&fmt=jpeg&qlt=90&.v=1654122880566" },
  { id: 5, sku: "MSI-RAIDER-GE78", name: "Raider GE78 HX", brand: "MSI", price: 35500000, stock: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmuRKgNCk1V1lLaQWFSXZiTBglcL90Y6CzYQ&s" },
  { id: 6, sku: "DELL-XPS15-OLED", name: "XPS 15 OLED", brand: "Dell", price: 31499000, stock: 1, img: "https://sm.pcmag.com/t/pcmag_au/review/d/dell-xps-1/dell-xps-15-oled-9520_g88x.1920.jpg" },
  { id: 7, sku: "HP-14-I3", name: "HP 14 I3 1315", brand: "HP", price: 7199000, stock: 10, img: "https://els.id/wp-content/uploads/2023/10/HP-14-Silver.png" },
  { id: 8, sku: "ASUS-VIVO-GO14", name: "Vivobook Go 14", brand: "ASUS", price: 7750000, stock: 8, img: "https://media.dinomarket.com/docs/imgTD/2025-12/image1225_191225151202_ll.jpeg" },
  { id: 9, sku: "LEN-IDEAPAD3", name: "Ideapad Slim 3", brand: "Lenovo", price: 7799000, stock: 6, img: "ideaped.png" },
  { id: 10, sku: "ACER-PRED-NEO16", name: "Predator Helios Neo 16", brand: "Acer", price: 18999000, stock: 3, img: "https://i.ibb.co.com/yBcLDYwX/helios-neo-16-removebg-preview.png" }
];

// ===================== KUPON =====================
const coupons = {
  "NEXUS10": 10,   // 10% diskon
  "HEMAT20": 20,   // 20% diskon
  "WELCOME5": 5    // 5% diskon
};

let cart = [];
let appliedCoupon = null;  // { code, percent }

// ===================== RENDER =====================
function renderProducts(filter = "") {
  const grid = document.getElementById("productGrid");
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase()) ||
    p.brand.toLowerCase().includes(filter.toLowerCase()) ||
    p.sku.toLowerCase().includes(filter.toLowerCase())
  );

  grid.innerHTML = filtered.map(p => {
    const habis = p.stock <= 0;
    return `
      <div class="product-card ${habis ? 'out-of-stock' : ''}" onclick="${habis ? '' : `addToCart(${p.id})`}">
        ${habis ? '<span class="stock-badge">Habis</span>' : ''}
        <img src="${p.img}" alt="${p.name}" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22 viewBox=%220 0 80 80%22%3E%3Crect width=%2280%22 height=%2280%22 fill=%22%23f1f5f9%22 rx=%228%22/%3E%3Ctext x=%2240%22 y=%2245%22 text-anchor=%22middle%22 font-family=%22Arial%22 font-size=%2210%22 fill=%22%2394a3b8%22%3E${p.brand}%3C/text%3E%3C/svg%3E';">
        <div class="product-name">${p.brand} ${p.name}</div>
        <div class="product-sku">SKU: ${p.sku}</div>
        <div class="product-price">${formatRupiah(p.price)}</div>
        <div class="product-stock">Stok: ${p.stock}</div>
      </div>
    `;
  }).join('');
}

function renderCart() {
  const container = document.getElementById("cartItems");
  const summary = document.getElementById("cartSummary");
  const itemCount = document.getElementById("itemCount");

  if (cart.length === 0) {
    container.innerHTML = '<p class="text-muted text-center mt-4">Belum ada item</p>';
    summary.style.display = "none";
    itemCount.textContent = "0 item";
    return;
  }

  let totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  itemCount.textContent = totalItems + " item";

  container.innerHTML = cart.map(item => {
    const subtotal = item.price * item.qty;
    return `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2245%22 height=%2245%22 viewBox=%220 0 45 45%22%3E%3Crect width=%2245%22 height=%2245%22 fill=%22%23f1f5f9%22 rx=%224%22/%3E%3Ctext x=%2222%22 y=%2228%22 text-anchor=%22middle%22 font-size=%228%22 fill=%22%2394a3b8%22%3E${item.brand}%3C/text%3E%3C/svg%3E';">
        <div class="cart-item-info">
          <div class="cart-item-name">${item.brand} ${item.name}</div>
          <div class="cart-item-price">${formatRupiah(item.price)} | SKU: ${item.sku}</div>
        </div>
        <div class="cart-item-qty">
          <button onclick="changeQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id}, 1)">+</button>
        </div>
        <div class="cart-item-total">${formatRupiah(subtotal)}</div>
      </div>
    `;
  }).join('');

  updateSummary();
}

function updateSummary() {
  const subtotalAll = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;
  if (appliedCoupon) {
    discountAmount = Math.round(subtotalAll * appliedCoupon.percent / 100);
  }
  const taxable = subtotalAll - discountAmount;
  const tax = Math.round(taxable * 0.11);
  const grandTotal = taxable + tax;

  document.getElementById("subtotal").textContent = formatRupiah(subtotalAll);
  document.getElementById("discount").textContent = formatRupiah(discountAmount);
  document.getElementById("tax").textContent = formatRupiah(tax);
  document.getElementById("grandTotal").textContent = formatRupiah(grandTotal);

  // Tampilkan pesan kupon
  const couponMsg = document.getElementById("couponMsg");
  if (appliedCoupon) {
    couponMsg.innerHTML = `<span class="text-success">Kupon "${appliedCoupon.code}" (${appliedCoupon.percent}%) berhasil diterapkan.</span>`;
  } else {
    couponMsg.innerHTML = '';
  }

  document.getElementById("cartSummary").style.display = "block";
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product || product.stock <= 0) {
    alert("Stok habis!");
    return;
  }

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    if (existing.qty >= product.stock) {
      alert("Stok tidak mencukupi.");
      return;
    }
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  renderCart();
}

function changeQty(productId, delta) {
  const item = cart.find(item => item.id === productId);
  if (!item) return;

  const product = products.find(p => p.id === productId);
  const newQty = item.qty + delta;

  if (newQty <= 0) {
    cart = cart.filter(i => i.id !== productId);
    renderCart();
    return;
  }

  if (newQty > product.stock) {
    alert("Stok tidak mencukupi. Stok tersedia: " + product.stock);
    return;
  }

  item.qty = newQty;
  renderCart();
}

// ===================== KUPON =====================
function applyCoupon() {
  const code = document.getElementById("couponInput").value.trim().toUpperCase();
  const couponMsg = document.getElementById("couponMsg");

  if (!code) {
    couponMsg.innerHTML = '<span class="text-danger">Masukkan kode kupon.</span>';
    return;
  }

  if (coupons.hasOwnProperty(code)) {
    appliedCoupon = { code: code, percent: coupons[code] };
    updateSummary();
  } else {
    appliedCoupon = null;
    couponMsg.innerHTML = '<span class="text-danger">Kupon tidak valid.</span>';
    updateSummary();
  }
}

// ===================== CHECKOUT =====================
function checkout() {
  if (cart.length === 0) {
    alert("Keranjang masih kosong!");
    return;
  }

  // Kurangi stok
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (product) {
      product.stock -= item.qty;
      if (product.stock < 0) product.stock = 0;  // jaga-jaga
    }
  });

  // Hitung nilai akhir
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;
  let discountPercent = 0;
  if (appliedCoupon) {
    discountPercent = appliedCoupon.percent;
    discountAmount = Math.round(subtotal * discountPercent / 100);
  }
  const taxable = subtotal - discountAmount;
  const tax = Math.round(taxable * 0.11);
  const grandTotal = taxable + tax;

  // Buat nomor transaksi
  const transactionId = "TRX-" + Date.now().toString(36).toUpperCase() + "-" + Math.random().toString(36).substring(2, 5).toUpperCase();
  const now = new Date();
  const dateStr = now.toLocaleDateString("id-ID", { day: 'numeric', month: 'long', year: 'numeric' });
  const timeStr = now.toLocaleTimeString("id-ID", { hour: '2-digit', minute: '2-digit' });

  // Struk HTML
  const receiptHTML = `
    <div class="modal-header">
      <h5 class="modal-title">🧾 Struk Pembelian</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      <p><strong>NEXUS Store</strong></p>
      <p>${dateStr} ${timeStr} | No: ${transactionId}</p>
      <table class="table table-sm">
        <thead><tr><th>Item</th><th>Qty</th><th class="text-end">Subtotal</th></tr></thead>
        <tbody>
          ${cart.map(item => `
            <tr>
              <td>${item.brand} ${item.name}<br><small>${item.sku}</small></td>
              <td>${item.qty}</td>
              <td class="text-end">${formatRupiah(item.price * item.qty)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <hr>
      <div class="d-flex justify-content-between"><span>Subtotal</span><span>${formatRupiah(subtotal)}</span></div>
      ${discountAmount > 0 ? `<div class="d-flex justify-content-between"><span>Diskon (${discountPercent}%)</span><span>-${formatRupiah(discountAmount)}</span></div>` : ''}
      <div class="d-flex justify-content-between"><span>PPN 11%</span><span>${formatRupiah(tax)}</span></div>
      <div class="d-flex justify-content-between fw-bold mt-2"><span>Total</span><span>${formatRupiah(grandTotal)}</span></div>
      <p class="text-muted small mt-3">Terima kasih telah berbelanja di Nexus!<br>Garansi resmi berlaku dengan SKU.</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline-secondary" data-bs-dismiss="modal">Tutup</button>
      <button class="btn btn-primary" id="doneBtn">Selesai & Bersihkan</button>
    </div>
  `;

  document.getElementById("receiptContent").innerHTML = receiptHTML;
  const modal = new bootstrap.Modal(document.getElementById("receiptModal"));
  modal.show();

  // Event setelah modal tampil
  document.getElementById("doneBtn").addEventListener("click", function() {
    clearCart();
    bootstrap.Modal.getInstance(document.getElementById("receiptModal")).hide();
    renderProducts(document.getElementById("searchInput").value); // refresh tampilan stok
  });
}

function clearCart() {
  cart = [];
  appliedCoupon = null;
  document.getElementById("couponInput").value = "";
  renderCart();
}

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// ===================== EVENT LISTENER =====================
document.addEventListener("DOMContentLoaded", function () {
  renderProducts();

  document.getElementById("searchInput").addEventListener("input", function (e) {
    renderProducts(e.target.value);
  });

  document.getElementById("searchBtn").addEventListener("click", function () {
    renderProducts(document.getElementById("searchInput").value);
  });

  document.getElementById("applyCouponBtn").addEventListener("click", applyCoupon);

  document.getElementById("checkoutBtn").addEventListener("click", checkout);
});