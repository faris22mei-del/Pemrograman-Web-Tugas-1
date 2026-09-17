/* ShopKu app.js - vanilla JS */
var PRODUCTS = [
  {id:1, name:"iPhone 13 128GB Midnight - Garansi Resmi iBox", cat:"Elektronik", price:9499000, old:10999000, rating:4.9, sold:"10RB+", stock:25, mall:true, flash:true, img:"https://picsum.photos/seed/shopku-hp1/500/500", desc:"Chip A15 Bionic, kamera ganda 12MP, baterai tahan seharian. Garansi resmi 1 tahun.", varian:["Midnight","Starlight","Blue"]},
  {id:2, name:"Sepatu Running Pria Breathable - Ringan dan Empuk", cat:"Olahraga", price:249000, old:499000, rating:4.8, sold:"25RB+", stock:120, mall:true, flash:true, img:"https://picsum.photos/seed/shopku-sepatu/500/500", desc:"Mesh breathable, sol anti-slip, cocok untuk lari harian dan gym.", varian:["Hitam","Putih","Navy"]},
  {id:3, name:"Skincare Brightening Serum Niacinamide 10% 20ml", cat:"Kecantikan", price:89000, old:159000, rating:4.9, sold:"50RB+", stock:300, mall:true, flash:true, img:"https://picsum.photos/seed/shopku-skincare/500/500", desc:"Mencerahkan dalam 14 hari, BPOM, cocok semua jenis kulit.", varian:["20ml","30ml"]},
  {id:4, name:"Kaos Oversize Cotton Combed 30s Premium", cat:"Fashion", price:59000, old:129000, rating:4.7, sold:"30RB+", stock:500, mall:false, flash:true, img:"https://picsum.photos/seed/shopku-kaos/500/500", desc:"Bahan adem, sablon plastisol awet, size M-XXL.", varian:["Hitam","Putih","Cream","Sage"]},
  {id:5, name:"Kopi Susu Gula Aren 1 Liter - Fresh Setiap Hari", cat:"Makanan", price:45000, old:65000, rating:4.8, sold:"15RB+", stock:80, mall:false, flash:false, img:"https://picsum.photos/seed/shopku-kopi/500/500", desc:"Espresso double shot + susu full cream + aren asli.", varian:["Less Sugar","Normal","Extra Shot"]},
  {id:6, name:"Laptop Gaming RTX 4050 16/512GB 144Hz", cat:"Elektronik", price:14499000, old:16999000, rating:4.9, sold:"2RB+", stock:12, mall:true, flash:false, img:"https://picsum.photos/seed/shopku-laptop/500/500", desc:"Ryzen 7 + RTX 4050, layar 144Hz, garansi 2 tahun.", varian:["16/512","32/1TB"]},
  {id:7, name:"Tas Selempang Wanita Kulit Premium Anti Air", cat:"Fashion", price:129000, old:259000, rating:4.6, sold:"8RB+", stock:90, mall:false, flash:false, img:"https://picsum.photos/seed/shopku-tas/500/500", desc:"Kulit sintetis grade A, tali adjustable, muat HP + dompet.", varian:["Coklat","Hitam","Beige"]},
  {id:8, name:"Air Fryer 5L Low Watt - Tanpa Minyak", cat:"Rumah", price:649000, old:1299000, rating:4.8, sold:"12RB+", stock:45, mall:true, flash:true, img:"https://picsum.photos/seed/shopku-airfryer/500/500", desc:"8 menu otomatis, timer digital, garansi 1 tahun.", varian:["Hitam","Putih"]},
  {id:9, name:"Boneka Beruang Jumbo 1 Meter Super Lembut", cat:"Ibu & Bayi", price:99000, old:199000, rating:4.7, sold:"5RB+", stock:60, mall:false, flash:false, img:"https://picsum.photos/seed/shopku-boneka/500/500", desc:"Bahan yelvo lembut, isian dakron full, aman untuk anak.", varian:["Coklat","Pink","Cream"]},
  {id:10, name:"Jam Tangan Smartwatch AMOLED 1.85 inci Bluetooth Call", cat:"Elektronik", price:349000, old:799000, rating:4.7, sold:"20RB+", stock:150, mall:true, flash:true, img:"https://picsum.photos/seed/shopku-watch/500/500", desc:"AMOLED 1.85 inci, monitor jantung + SpO2, baterai 7 hari.", varian:["Hitam","Silver"]},
  {id:11, name:"Paket Skincare Glow Up 5in1 - Untuk Pemula", cat:"Kecantikan", price:149000, old:299000, rating:4.8, sold:"18RB+", stock:200, mall:true, flash:false, img:"https://picsum.photos/seed/shopku-glow/500/500", desc:"Facial wash, toner, serum, moisturizer, sunscreen.", varian:["Normal","Acne","Bright"]},
  {id:12, name:"Dumbbell Set 20kg - Bisa Bongkar Pasang", cat:"Olahraga", price:329000, old:549000, rating:4.8, sold:"7RB+", stock:70, mall:false, flash:false, img:"https://picsum.photos/seed/shopku-gym/500/500", desc:"Plat besi lapis karet, handle anti-slip.", varian:["10kg","20kg","30kg"]},
  {id:13, name:"Beras Premium 5kg - Pulen dan Wangi", cat:"Makanan", price:68000, old:85000, rating:4.6, sold:"40RB+", stock:400, mall:false, flash:false, img:"https://picsum.photos/seed/shopku-beras/500/500", desc:"Panen baru, tanpa pemutih, langsung dari petani.", varian:["5kg","10kg"]},
  {id:14, name:"Kemeja Linen Pria Lengan Panjang - Adem", cat:"Fashion", price:119000, old:229000, rating:4.7, sold:"9RB+", stock:110, mall:false, flash:false, img:"https://picsum.photos/seed/shopku-kemeja/500/500", desc:"Linen premium, jahitan rapi, size S-XXL.", varian:["Putih","Sage","Navy","Hitam"]},
  {id:15, name:"Vacuum Cleaner Mini Portable Wireless", cat:"Rumah", price:189000, old:399000, rating:4.6, sold:"11RB+", stock:85, mall:true, flash:true, img:"https://picsum.photos/seed/shopku-vacuum/500/500", desc:"Daya hisap 9000Pa, 3 kepala brush, USB-C fast charging.", varian:["Putih","Grey"]},
  {id:16, name:"Popok Bayi Premium S40 - Extra Dry", cat:"Ibu & Bayi", price:52000, old:78000, rating:4.9, sold:"60RB+", stock:600, mall:true, flash:false, img:"https://picsum.photos/seed/shopku-popok/500/500", desc:"Daya serap 12 jam, anti bocor, hypoallergenic.", varian:["S40","M34","L30"]}
];

var CATS = [
  {n:"Elektronik", c:"#4F46E5", i:"M13 10V3L4 14h7v7l9-11h-7z"},
  {n:"Fashion", c:"#EC4899", i:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"},
  {n:"Kecantikan", c:"#F59E0B", i:"M12 2l2.4 7.2H22l-6.2 4.5 2.4 7.3L12 16.5 5.8 21l2.4-7.3L2 9.2h7.6z"},
  {n:"Makanan", c:"#059669", i:"M7 2v20M4 2h6M17 2c-2 2-3 5-3 8 0 2 1 4 3 4 2 0 3-2 3-4 0-3-1-6-3-8z"},
  {n:"Rumah", c:"#0EA5E9", i:"M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5M9 21v-6h6v6"},
  {n:"Olahraga", c:"#EF4444", i:"M6.5 6.5 17.5 17.5M4 4l3 3M20 20l-3-3M2 12h4M18 12h4M12 2v4M12 18v4"},
  {n:"Ibu & Bayi", c:"#8B5CF6", i:"M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11z"}
];

function loadJSON(key, fb){
  try{
    var v = JSON.parse(localStorage.getItem(key));
    return (v === null || v === undefined) ? fb : v;
  }catch(e){ return fb; }
}
function save(){
  try{
    localStorage.setItem("shopku_cart", JSON.stringify(state.cart));
    localStorage.setItem("shopku_wish", JSON.stringify(state.wish));
  }catch(e){ /* storage penuh / nonaktif: tetap jalan tanpa persist */ }
}
function validCart(raw){
  if(!Array.isArray(raw)) return [];
  return raw.filter(function(c){
    if(!c || typeof c.id !== "number" || typeof c.qty !== "number") return false;
    var p = null;
    for(var i=0;i<PRODUCTS.length;i++){ if(PRODUCTS[i].id===c.id){ p=PRODUCTS[i]; break; } }
    if(!p) return false;
    if(typeof c.varian !== "string" || p.varian.indexOf(c.varian) < 0) c.varian = p.varian[0];
    c.qty = Math.max(1, Math.min(p.stock, Math.floor(c.qty) || 1));
    return true;
  });
}
function validWish(raw){
  if(!Array.isArray(raw)) return [];
  return raw.filter(function(id){
    for(var i=0;i<PRODUCTS.length;i++){ if(PRODUCTS[i].id===id) return true; }
    return false;
  });
}

var state = {
  cat:"Semua", q:"", sort:"populer", shown:10,
  cart:[], wish:[],
  modalId:null, modalVarian:null, qty:1
};
state.cart = validCart(loadJSON("shopku_cart", []));
state.wish = validWish(loadJSON("shopku_wish", []));

function $(s){ return document.querySelector(s); }
function $all(s){ return Array.prototype.slice.call(document.querySelectorAll(s)); }
function rp(n){ return "Rp" + Number(n).toLocaleString("id-ID"); }
function disc(p){ if(!p.old || p.old <= p.price) return 0; return Math.round((1 - p.price/p.old)*100); }
function esc(s){
  return String(s).replace(/[&<>"']/g, function(c){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
  });
}
function findP(id){
  for(var i=0;i<PRODUCTS.length;i++){ if(PRODUCTS[i].id===id) return PRODUCTS[i]; }
  return null;
}
function soldToNum(s){
  var m = String(s).match(/([\d.,]+)\s*RB/i);
  if(m) return parseFloat(m[1].replace(",",".")) * 1000;
  var n = parseFloat(s);
  return isNaN(n) ? 0 : n;
}

function toast(msg){
  var box = $("#toasts");
  if(!box) return;
  var t = document.createElement("div");
  t.className = "toast"; t.textContent = msg;
  box.appendChild(t);
  setTimeout(function(){ if(t.parentNode) t.parentNode.removeChild(t); }, 2600);
}

/* ---------- KATEGORI ---------- */
function renderCats(){
  $("#catGrid").innerHTML = CATS.map(function(c){
    return '<button type="button" class="cat" data-cat="' + esc(c.n) + '" aria-label="Kategori ' + esc(c.n) + '">' +
      '<span class="ic" style="background:' + c.c + '"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="' + c.i + '"/></svg></span>' +
      '<span class="lbl">' + esc(c.n) + '</span></button>';
  }).join("");
  var chips = ["Semua"].concat(CATS.map(function(c){ return c.n; }));
  $("#catChips").innerHTML = chips.map(function(c){
    return '<button type="button" class="chip' + (state.cat===c ? " on" : "") + '" data-chip="' + esc(c) + '" aria-pressed="' + (state.cat===c) + '">' + esc(c) + '</button>';
  }).join("");
}

/* ---------- PRODUK ---------- */
function filtered(){
  var q = state.q.toLowerCase();
  var list = PRODUCTS.filter(function(p){
    return (state.cat==="Semua" || p.cat===state.cat) &&
      (q === "" || p.name.toLowerCase().indexOf(q) !== -1);
  });
  var by = {
    termurah:function(a,b){ return a.price-b.price; },
    termahal:function(a,b){ return b.price-a.price; },
    rating:function(a,b){ return b.rating-a.rating; },
    diskon:function(a,b){ return disc(b)-disc(a); },
    populer:function(a,b){ return soldToNum(b.sold)-soldToNum(a.sold); }
  };
  return list.sort(by[state.sort] || by.populer);
}
function heartSVG(on){
  return '<svg viewBox="0 0 24 24" width="18" height="18" fill="' + (on ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
}
function cardHTML(p){
  var w = state.wish.indexOf(p.id) !== -1;
  return '<article class="card">' +
    '<div class="card-media">' +
      '<img src="' + p.img + '" alt="' + esc(p.name) + '" width="500" height="500" loading="lazy" onerror="this.onerror=null;this.src=\'https://picsum.photos/seed/fallback' + p.id + '/500/500\'"/>' +
      '<span class="disc">-' + disc(p) + '%</span>' +
      '<button type="button" class="fav' + (w ? " on" : "") + '" data-fav="' + p.id + '" aria-label="Wishlist: ' + esc(p.name) + '" aria-pressed="' + w + '">' + heartSVG(w) + '</button>' +
    '</div>' +
    '<div class="card-body">' +
      '<div class="card-name" data-open="' + p.id + '" style="cursor:pointer" role="button" tabindex="0" aria-label="Lihat detail ' + esc(p.name) + '">' + esc(p.name) + '</div>' +
      '<div><span class="price">' + rp(p.price) + '</span> <span class="old">' + rp(p.old) + '</span></div>' +
      '<div class="card-meta"><span class="stars" aria-label="Rating ' + p.rating + '">&#9733; ' + p.rating + '</span><span>Terjual ' + esc(p.sold) + '</span></div>' +
      '<div class="card-foot"><span class="mall">' + (p.mall ? "Star+" : "Lokal") + '</span><button type="button" class="add" data-add="' + p.id + '">+ Keranjang</button></div>' +
    '</div></article>';
}
function renderProducts(){
  var list = filtered();
  $("#resultInfo").textContent = list.length
    ? (list.length + " produk ditemukan" + (state.q ? ' untuk \u201C' + state.q + '\u201D' : ""))
    : "Produk tidak ditemukan. Coba kata kunci lain.";
  $("#productGrid").innerHTML = list.slice(0, state.shown).map(cardHTML).join("") ||
    '<div class="empty">Tidak ada produk. <button type="button" class="btn btn-outline" id="resetF">Reset Filter</button></div>';
  $("#loadMore").style.display = list.length > state.shown ? "" : "none";
  var rf = $("#resetF");
  if(rf) rf.onclick = resetFilter;
}
function resetFilter(){
  state.cat = "Semua"; state.q = ""; state.shown = 10;
  $("#searchInput").value = ""; $("#searchInputM").value = "";
  $("#suggestBox").hidden = true;
  renderAll();
}
function renderFlash(){
  var list = PRODUCTS.filter(function(p){ return p.flash; });
  $("#flashRow").innerHTML = list.map(function(p){
    return '<div class="f-card" data-open="' + p.id + '" style="cursor:pointer" role="button" tabindex="0" aria-label="Flash sale: ' + esc(p.name) + '">' +
      '<img src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy" onerror="this.onerror=null;this.src=\'https://picsum.photos/seed/fallback' + p.id + '/500/500\'"/>' +
      '<div class="f-body"><div class="price">' + rp(p.price) + '</div><div class="old">' + rp(p.old) + '</div>' +
      '<div class="bar" aria-hidden="true"><i style="width:' + Math.min(95, disc(p)+40) + '%"></i></div><div class="small muted">Terjual ' + esc(p.sold) + '</div></div></div>';
  }).join("");
}
function renderAll(){ renderCats(); renderProducts(); renderFlash(); updateBadges(); }

/* ---------- WISHLIST & CART ---------- */
function cartTotal(){
  return state.cart.reduce(function(a,c){
    var p = findP(c.id);
    return a + (p ? p.price * c.qty : 0);
  }, 0);
}
function updateBadges(){
  var n = state.cart.reduce(function(a,c){ return a + c.qty; }, 0);
  $("#cartCount").textContent = n;
  $("#cartTitleCount").textContent = n;
  $("#wishCount").hidden = state.wish.length === 0;
  $("#wishCount").textContent = state.wish.length;
  var total = cartTotal();
  $("#cartTotal").textContent = rp(total);
  $("#shipNote").textContent = total >= 30000
    ? "Selamat! Kamu dapat GRATIS ONGKIR."
    : "Belanja " + rp(30000 - total) + " lagi untuk gratis ongkir";
}
function addToCart(id, qty, varian){
  qty = qty || 1;
  var p = findP(id);
  if(!p) return;
  var key = varian || p.varian[0];
  if(p.varian.indexOf(key) < 0) key = p.varian[0];
  var ex = null;
  for(var i=0;i<state.cart.length;i++){ if(state.cart[i].id===id && state.cart[i].varian===key){ ex = state.cart[i]; break; } }
  if(ex) ex.qty = Math.min(p.stock, ex.qty + qty);
  else state.cart.push({id:id, qty:Math.min(qty, p.stock), varian:key});
  save(); updateBadges(); renderCart();
  toast(p.name.slice(0, 32) + " masuk keranjang");
}
function renderCart(){
  var box = $("#cartItems");
  if(!state.cart.length){
    box.innerHTML = '<div class="empty"><p>Keranjang masih kosong.</p><p class="small">Yuk, cari barang impianmu!</p></div>';
    return;
  }
  box.innerHTML = state.cart.map(function(c, i){
    var p = findP(c.id);
    if(!p) return "";
    return '<div class="cart-item">' +
      '<img src="' + p.img + '" alt="' + esc(p.name) + '" onerror="this.onerror=null;this.src=\'https://picsum.photos/seed/fallback' + p.id + '/100/100\'"/>' +
      '<div><div class="t">' + esc(p.name.slice(0, 40)) + '</div><div class="small muted">' + esc(c.varian) + '</div>' +
      '<div class="price">' + rp(p.price) + '</div>' +
      '<div class="stepper" style="margin-top:6px"><button type="button" data-dec="' + i + '" aria-label="Kurangi">-</button><span>' + c.qty + '</span><button type="button" data-inc="' + i + '" aria-label="Tambah">+</button></div></div>' +
      '<button type="button" class="icon-btn cart-del" data-del="' + i + '" aria-label="Hapus dari keranjang">&times;</button>' +
    '</div>';
  }).join("");
}

/* ---------- DRAWER & MODAL ---------- */
function openCart(){ renderCart(); $("#cartDrawer").hidden = false; $("#overlay").hidden = false; document.body.style.overflow = "hidden"; }
function closeAll(){
  $("#cartDrawer").hidden = true; $("#pModal").hidden = true; $("#cModal").hidden = true;
  $("#overlay").hidden = true; $("#suggestBox").hidden = true;
  document.body.style.overflow = "";
}
function openProduct(id){
  var p = findP(id);
  if(!p) return;
  state.modalId = id; state.modalVarian = p.varian[0]; state.qty = 1;
  var img = $("#mImg");
  img.onerror = function(){ this.onerror = null; this.src = "https://picsum.photos/seed/shopku-fallback/600/600"; };
  img.src = p.img; img.alt = p.name;
  $("#mDisc").textContent = "-" + disc(p) + "%";
  $("#mName").textContent = p.name;
  $("#mRating").textContent = "\u2605 " + p.rating;
  $("#mSold").textContent = "Terjual " + p.sold;
  $("#mPrice").textContent = rp(p.price);
  $("#mDesc").textContent = p.desc;
  $("#mStock").textContent = "Stok " + p.stock;
  $("#qVal").textContent = "1";
  $("#mVarian").innerHTML = p.varian.map(function(v, i){
    return '<button type="button" class="' + (i===0 ? "on" : "") + '" data-v="' + esc(v) + '" aria-pressed="' + (i===0) + '">' + esc(v) + '</button>';
  }).join("");
  $("#pModal").hidden = false; $("#overlay").hidden = false; document.body.style.overflow = "hidden";
}

/* ---------- EVENTS (delegasi: satu aksi per klik) ---------- */
document.addEventListener("click", function(e){
  var t = e.target;
  function q(sel){ return t.closest ? t.closest(sel) : null; }
  var el;
  if((el = q("[data-cat]"))){ state.cat = el.dataset.cat; state.shown = 10; renderAll(); document.querySelector("#produk").scrollIntoView({behavior:"smooth"}); return; }
  if((el = q("[data-chip]"))){ state.cat = el.dataset.chip; state.shown = 10; renderAll(); return; }
  if((el = q("[data-add]"))){ e.stopPropagation(); addToCart(parseInt(el.dataset.add, 10)); return; }
  if((el = q("[data-fav]"))){
    e.stopPropagation();
    var id = parseInt(el.dataset.fav, 10);
    var at = state.wish.indexOf(id);
    if(at === -1) state.wish.push(id); else state.wish.splice(at, 1);
    save(); renderProducts(); updateBadges();
    return;
  }
  if((el = q("[data-v]"))){
    state.modalVarian = el.dataset.v;
    $all("#mVarian button").forEach(function(b){
      var on = (b === el);
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", on);
    });
    return;
  }
  if((el = q("[data-dec]"))){
    var c1 = state.cart[parseInt(el.dataset.dec, 10)];
    if(c1){ c1.qty--; if(c1.qty < 1) state.cart.splice(state.cart.indexOf(c1), 1); }
    save(); updateBadges(); renderCart(); return;
  }
  if((el = q("[data-inc]"))){
    var c2 = state.cart[parseInt(el.dataset.inc, 10)];
    if(c2){ var p2 = findP(c2.id); if(p2) c2.qty = Math.min(p2.stock, c2.qty + 1); }
    save(); updateBadges(); renderCart(); return;
  }
  if((el = q("[data-del]"))){
    var idx = parseInt(el.dataset.del, 10);
    if(!isNaN(idx)) state.cart.splice(idx, 1);
    save(); updateBadges(); renderCart(); return;
  }
  if((el = q("[data-scroll]"))){
    var tgt = document.querySelector(el.dataset.scroll);
    if(tgt) tgt.scrollIntoView({behavior:"smooth"});
    return;
  }
  if((el = q("[data-d]"))){ go(parseInt(el.dataset.d, 10)); return; }
  if((el = q("[data-open]"))){ openProduct(parseInt(el.dataset.open, 10)); return; }
});
document.addEventListener("keydown", function(e){
  if(e.key === "Escape"){ closeAll(); return; }
  if((e.key === "Enter" || e.key === " ") && e.target && e.target.matches && e.target.matches("[data-open]")){
    e.preventDefault();
    openProduct(parseInt(e.target.dataset.open, 10));
  }
});

$("#cartBtn").onclick = openCart;
$("#closeCart").onclick = closeAll;
$("#overlay").onclick = closeAll;
$("#closeModal").onclick = closeAll;
$("#closeCheckout").onclick = closeAll;
$("#clearCart").onclick = function(){ state.cart = []; save(); updateBadges(); renderCart(); };
$("#qMin").onclick = function(){ state.qty = Math.max(1, state.qty - 1); $("#qVal").textContent = state.qty; };
$("#qPlus").onclick = function(){
  var p = findP(state.modalId);
  state.qty = Math.min(p ? p.stock : 99, state.qty + 1);
  $("#qVal").textContent = state.qty;
};
$("#mAdd").onclick = function(){ if(state.modalId===null) return; addToCart(state.modalId, state.qty, state.modalVarian); closeAll(); openCart(); };
$("#mBuy").onclick = function(){ if(state.modalId===null) return; addToCart(state.modalId, state.qty, state.modalVarian); closeAll(); startCheckout(); };
$("#loadMore").onclick = function(){ state.shown += 10; renderProducts(); };
$("#sortSel").onchange = function(e){ state.sort = e.target.value; renderProducts(); };
$("#wishBtn").onclick = function(){
  toast(state.wish.length
    ? (state.wish.length + " barang di wishlist")
    : "Wishlist kosong - ketuk ikon hati di produk favoritmu");
};

/* search + saran (pakai ID, bukan nama mentah -> aman dari tanda kutip) */
function doSearch(v){ state.q = String(v).trim(); state.shown = 10; renderProducts(); }
function updateSuggest(v){
  var box = $("#suggestBox");
  v = String(v).trim().toLowerCase();
  if(!v){ box.hidden = true; box.innerHTML = ""; return; }
  var s = PRODUCTS.filter(function(p){ return p.name.toLowerCase().indexOf(v) !== -1; }).slice(0, 6);
  box.innerHTML = s.map(function(p){
    return '<li role="option" tabindex="0" data-sid="' + p.id + '">' + esc(p.name.slice(0, 48)) + '</li>';
  }).join("");
  box.hidden = s.length === 0;
}
function pickSuggest(id){
  var p = findP(id);
  if(!p) return;
  $("#searchInput").value = p.name;
  $("#suggestBox").hidden = true;
  doSearch(p.name);
}
$("#searchBtn").onclick = function(){ doSearch($("#searchInput").value); };
$("#searchInput").addEventListener("input", function(e){ updateSuggest(e.target.value); doSearch(e.target.value); });
$("#searchInput").addEventListener("keydown", function(e){ if(e.key === "Enter"){ $("#suggestBox").hidden = true; doSearch(e.target.value); } });
$("#suggestBox").addEventListener("click", function(e){
  var li = e.target.closest ? e.target.closest("[data-sid]") : null;
  if(li) pickSuggest(parseInt(li.dataset.sid, 10));
});
$("#suggestBox").addEventListener("keydown", function(e){
  var li = e.target.closest ? e.target.closest("[data-sid]") : null;
  if(li && (e.key === "Enter" || e.key === " ")){ e.preventDefault(); pickSuggest(parseInt(li.dataset.sid, 10)); }
});
$("#searchBtnM").onclick = function(){ doSearch($("#searchInputM").value); document.querySelector("#produk").scrollIntoView({behavior:"smooth"}); };
$("#searchInputM").addEventListener("keydown", function(e){
  if(e.key === "Enter"){ doSearch(e.target.value); document.querySelector("#produk").scrollIntoView({behavior:"smooth"}); }
});
$("#searchInputM").addEventListener("input", function(e){ doSearch(e.target.value); });

/* checkout */
function startCheckout(){
  if(!state.cart.length){ toast("Keranjang kosong!"); return; }
  $("#checkoutMain").hidden = false; $("#orderSuccess").hidden = true;
  var total = cartTotal();
  $("#sumItems").innerHTML = state.cart.map(function(c){
    var p = findP(c.id);
    if(!p) return "";
    return '<div><span>' + esc(p.name.slice(0, 30)) + ' &times;' + c.qty + '</span><b>' + rp(p.price * c.qty) + '</b></div>';
  }).join("") + '<div><span>Ongkos kirim</span><b>' + (total >= 30000 ? "GRATIS" : rp(9000)) + '</b></div>';
  $("#checkoutTotal").textContent = rp(total >= 30000 ? total : total + 9000);
  $("#cModal").hidden = false; $("#overlay").hidden = false;
  document.body.style.overflow = "hidden";
}
$("#checkoutBtn").onclick = startCheckout;
$("#placeOrder").onclick = function(){
  var nama = $("#fNama").value.trim(), al = $("#fAlamat").value.trim(), err = $("#formErr");
  if(nama.length < 3){ err.hidden = false; err.textContent = "Isi nama penerima (min. 3 huruf)."; return; }
  if(al.length < 10){ err.hidden = false; err.textContent = "Alamat kurang lengkap (min. 10 karakter)."; return; }
  err.hidden = true;
  $("#orderId").textContent = "SK" + Date.now().toString().slice(-8);
  $("#checkoutMain").hidden = true; $("#orderSuccess").hidden = false;
  state.cart = []; save(); updateBadges(); renderCart();
};
$("#okOrder").onclick = closeAll;
$("#topNotif").onclick = function(e){ e.preventDefault(); toast("Ada 3 voucher baru menunggumu!"); };

/* carousel */
var slide = 0; var N = 3;
function go(i){
  slide = ((i % N) + N) % N;
  $("#slides").style.transform = "translateX(-" + (slide * 100) + "%)";
  $("#carDots").innerHTML = [0, 1, 2].map(function(k){
    return '<button type="button" role="tab" aria-selected="' + (k===slide) + '" aria-label="Banner ' + (k+1) + '" class="' + (k===slide ? "on" : "") + '" data-d="' + k + '"></button>';
  }).join("");
}
$("#carPrev").onclick = function(){ go(slide - 1); };
$("#carNext").onclick = function(){ go(slide + 1); };
setInterval(function(){ if(!document.hidden) go(slide + 1); }, 5000);

/* countdown flash 2 jam */
var sec = 2 * 3600;
setInterval(function(){
  sec = sec > 0 ? sec - 1 : 2 * 3600;
  function pad(n){ return String(n).padStart(2, "0"); }
  $("#countdown").textContent = pad(Math.floor(sec/3600)) + ":" + pad(Math.floor(sec % 3600 / 60)) + ":" + pad(sec % 60);
}, 1000);

/* init */
go(0); renderAll(); renderCart();
console.log("ShopKu ready - 16 produk, cart tersimpan di localStorage");
