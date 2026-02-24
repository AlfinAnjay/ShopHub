// Product Database
const products = [
    { id: 1, name: 'Laptop Pro', category: 'elektronik', price: 8500000, oldPrice: 9999000, rating: 4.8, icon: '💻', discount: -15 },
    { id: 2, name: 'Smartphone X', category: 'elektronik', price: 5500000, oldPrice: 6999000, rating: 4.7, icon: '📱', discount: -21 },
    { id: 3, name: 'Headphones', category: 'elektronik', price: 1200000, oldPrice: 1799000, rating: 4.6, icon: '🎧', discount: -33 },
    { id: 4, name: 'Camera DSLR', category: 'elektronik', price: 4500000, oldPrice: 5999000, rating: 4.9, icon: '📷', discount: -25 },
    { id: 5, name: 'Smart Watch', category: 'elektronik', price: 2500000, oldPrice: 3499000, rating: 4.5, icon: '⌚', discount: -28 },
    { id: 6, name: 'Tablet Plus', category: 'elektronik', price: 3200000, oldPrice: 4299000, rating: 4.8, icon: '📟', discount: -25 },
    
    { id: 7, name: 'T-Shirt Premium', category: 'fashion', price: 250000, oldPrice: 399000, rating: 4.6, icon: '👕', discount: -37 },
    { id: 8, name: 'Jeans Comfortable', category: 'fashion', price: 450000, oldPrice: 599000, rating: 4.7, icon: '👖', discount: -25 },
    { id: 9, name: 'Sneakers Cool', category: 'fashion', price: 600000, oldPrice: 899000, rating: 4.8, icon: '👟', discount: -33 },
    { id: 10, name: 'Jacket Stylish', category: 'fashion', price: 800000, oldPrice: 1199000, rating: 4.9, icon: '🧥', discount: -33 },
    { id: 11, name: 'Cap Fashion', category: 'fashion', price: 150000, oldPrice: 299000, rating: 4.5, icon: '🧢', discount: -50 },
    { id: 12, name: 'Bag Trendy', category: 'fashion', price: 550000, oldPrice: 899000, rating: 4.7, icon: '👜', discount: -39 },
    
    { id: 13, name: 'Sofa Comfort', category: 'rumah', price: 3500000, oldPrice: 4999000, rating: 4.8, icon: '🛋️', discount: -30 },
    { id: 14, name: 'Lamp Modern', category: 'rumah', price: 450000, oldPrice: 699000, rating: 4.6, icon: '💡', discount: -36 },
    { id: 15, name: 'Plant Decoration', category: 'rumah', price: 280000, oldPrice: 449000, rating: 4.7, icon: '🌿', discount: -38 },
    { id: 16, name: 'Mirror Wall', category: 'rumah', price: 500000, oldPrice: 799000, rating: 4.5, icon: '🪞', discount: -37 },
    { id: 17, name: 'Curtain Elegant', category: 'rumah', price: 350000, oldPrice: 599000, rating: 4.6, icon: '🪟', discount: -42 },
    { id: 18, name: 'Rug Comfortable', category: 'rumah', price: 800000, oldPrice: 1299000, rating: 4.8, icon: '🧵', discount: -38 },
    
    { id: 19, name: 'Vitamin Suplemen', category: 'kesehatan', price: 150000, oldPrice: 249000, rating: 4.7, icon: '💊', discount: -40 },
    { id: 20, name: 'Face Mask', category: 'kesehatan', price: 50000, oldPrice: 99000, rating: 4.6, icon: '😷', discount: -49 },
    { id: 21, name: 'Hand Sanitizer', category: 'kesehatan', price: 75000, oldPrice: 149000, rating: 4.5, icon: '🧼', discount: -50 },
    { id: 22, name: 'Thermometer', category: 'kesehatan', price: 250000, oldPrice: 399000, rating: 4.8, icon: '🌡️', discount: -37 },
    
    { id: 23, name: 'Dumbbell Set', category: 'olahraga', price: 800000, oldPrice: 1299000, rating: 4.8, icon: '🏋️', discount: -38 },
    { id: 24, name: 'Yoga Mat', category: 'olahraga', price: 250000, oldPrice: 399000, rating: 4.7, icon: '🧘', discount: -37 },
    { id: 25, name: 'Running Shoes', category: 'olahraga', price: 700000, oldPrice: 999000, rating: 4.9, icon: '🏃', discount: -30 },
    { id: 26, name: 'Bicycle Pro', category: 'olahraga', price: 1500000, oldPrice: 2299000, rating: 4.8, icon: '🚴', discount: -35 },
    
    { id: 27, name: 'Coffee Premium', category: 'makanan', price: 120000, oldPrice: 199000, rating: 4.7, icon: '☕', discount: -40 },
    { id: 28, name: 'Chocolate Premium', category: 'makanan', price: 80000, oldPrice: 149000, rating: 4.8, icon: '🍫', discount: -46 },
    { id: 29, name: 'Cheese Gourmet', category: 'makanan', price: 300000, oldPrice: 499000, rating: 4.6, icon: '🧀', discount: -40 },
    { id: 30, name: 'Wine Selection', category: 'makanan', price: 450000, oldPrice: 699000, rating: 4.8, icon: '🍷', discount: -36 },
];

// Global Variables
let cart = [];
let wishlist = [];
let currentFilter = 'all';
let currentSort = 'newest';

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistModal = document.getElementById('wishlistModal');
const closeWishlist = document.getElementById('closeWishlist');
const productModal = document.getElementById('productModal');
const closeProduct = document.getElementById('closeProduct');
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutBtn = document.getElementById('checkoutBtn');
const themeToggle = document.getElementById('themeToggle');
const scrollTop = document.getElementById('scrollTop');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const loadingIndicator = document.getElementById('loadingIndicator');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sortSelect');
const searchInput = document.getElementById('searchInput');
const notification = document.getElementById('notification');
const cartCount = document.getElementById('cartCount');
const wishlistCount = document.getElementById('wishlistCount');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    renderProducts(products);
    updateCart();
    updateWishlist();
    
    // Hide loading indicator
    setTimeout(() => {
        loadingIndicator.classList.add('hidden');
    }, 500);
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    updateThemeIcon();
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.add('light-mode');
    }
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// Render Products
function renderProducts(productsToRender) {
    productsGrid.innerHTML = '';
    
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">Produk tidak ditemukan</p>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <span>${product.icon}</span>
                ${product.discount ? `<span class="product-badge">${product.discount}%</span>` : ''}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-rating">★★★★★ (${product.rating})</div>
                <div class="product-price">
                    <span class="price-current">Rp ${product.price.toLocaleString('id-ID')}</span>
                    <span class="price-original">Rp ${product.oldPrice.toLocaleString('id-ID')}</span>
                </div>
                <div class="product-actions">
                    <button class="btn-small btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                    <button class="btn-small btn-wishlist ${wishlist.some(item => item.id === product.id) ? 'active' : ''}" 
                            onclick="toggleWishlist(${product.id})">
                        <i class="fas ${wishlist.some(item => item.id === product.id) ? 'fa-heart' : 'far fa-heart'}"></i>
                    </button>
                    <button class="btn-small btn-view" onclick="showProductDetail(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Filter Products
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        updateProductsDisplay();
    });
});

// Sort Products
sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    updateProductsDisplay();
});

function updateProductsDisplay() {
    let filtered = products;

    if (currentFilter !== 'all') {
        filtered = products.filter(p => p.category === currentFilter);
    }

    filtered = sortProducts(filtered);
    renderProducts(filtered);
}

function sortProducts(productsToSort) {
    const sorted = [...productsToSort];
    
    switch (currentSort) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'popular':
            return sorted.sort((a, b) => b.id - a.id);
        default:
            return sorted;
    }
}

// Search Products
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filtered);
});

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showNotification(`${product.name} ditambahkan ke keranjang`);
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartItemsContainer.innerHTML = '';
        document.getElementById('cartSummary').style.display = 'none';
        return;
    }

    emptyCart.style.display = 'none';
    document.getElementById('cartSummary').style.display = 'block';
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image">${item.icon}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span style="padding: 0 0.5rem;">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Hapus</button>
                </div>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    updateCartSummary();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCart();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    showNotification('Produk dihapus dari keranjang');
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = Math.floor(subtotal * 0.1);
    const shipping = subtotal > 500000 ? 0 : 25000;
    const total = subtotal + tax + shipping;

    document.getElementById('subtotal').textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
    document.getElementById('tax').textContent = `Rp ${tax.toLocaleString('id-ID')}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'Gratis' : `Rp ${shipping.toLocaleString('id-ID')}`;
    document.getElementById('total').textContent = `Rp ${total.toLocaleString('id-ID')}`;
}

// Cart Modal
cartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('Keranjang Anda kosong');
        return;
    }
    cartModal.classList.remove('active');
    checkoutModal.classList.add('active');
});

closeCheckout.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
});

// Checkout Form
document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('Order data:', data);
    showNotification('Pesanan berhasil! Terima kasih telah berbelanja');
    
    cart = [];
    updateCart();
    checkoutModal.classList.remove('active');
    e.target.reset();
});

// Wishlist Functions
function toggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = wishlist.find(item => item.id === productId);

    if (existingItem) {
        wishlist = wishlist.filter(item => item.id !== productId);
        showNotification(`${product.name} dihapus dari wishlist`);
    } else {
        wishlist.push(product);
        showNotification(`${product.name} ditambahkan ke wishlist`);
    }

    updateWishlist();
    updateProductsDisplay();
}

function updateWishlist() {
    const wishlistItemsContainer = document.getElementById('wishlistItems');
    const emptyWishlist = document.getElementById('emptyWishlist');
    
    wishlistCount.textContent = wishlist.length;

    if (wishlist.length === 0) {
        emptyWishlist.style.display = 'block';
        wishlistItemsContainer.innerHTML = '';
        return;
    }

    emptyWishlist.style.display = 'none';
    wishlistItemsContainer.innerHTML = '';

    wishlist.forEach(item => {
        const wishlistItem = document.createElement('div');
        wishlistItem.className = 'wishlist-item';
        wishlistItem.innerHTML = `
            <div class="wishlist-item-image">${item.icon}</div>
            <div class="wishlist-item-info">
                <div class="wishlist-item-name">${item.name}</div>
                <div class="wishlist-item-price">Rp ${item.price.toLocaleString('id-ID')}</div>
                <button class="wishlist-item-btn" onclick="addToCart(${item.id})">
                    Beli Sekarang
                </button>
            </div>
        `;
        wishlistItemsContainer.appendChild(wishlistItem);
    });
}

// Wishlist Modal
wishlistBtn.addEventListener('click', () => {
    wishlistModal.classList.add('active');
});

closeWishlist.addEventListener('click', () => {
    wishlistModal.classList.remove('active');
});

// Product Detail
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    const detailContainer = document.getElementById('productDetail');
    
    const reviews = [
        'Sangat memuaskan, produk berkualitas tinggi',
        'Pengiriman cepat dan packaging aman',
        'Harga terjangkau untuk kualitas yang bagus',
        'Sudah 3 kali beli, selalu puas'
    ];

    detailContainer.innerHTML = `
        <div class="detail-image">${product.icon}</div>
        <div class="detail-info">
            <h2>${product.name}</h2>
            <div class="detail-rating">★★★★★ ${product.rating} (425 ulasan)</div>
            <div class="detail-price">
                <span class="detail-price-current">Rp ${product.price.toLocaleString('id-ID')}</span>
                <span class="detail-price-original">Rp ${product.oldPrice.toLocaleString('id-ID')}</span>
                <span style="color: var(--danger); font-weight: bold;">${product.discount}%</span>
            </div>
            <div class="detail-description">
                Produk berkualitas premium dengan standar internasional. Garansi resmi dan layanan purna jual terbaik. 
                Tersedia berbagai pilihan warna dan ukuran sesuai kebutuhan Anda.
            </div>
            <div class="detail-specs">
                <p><strong>Kategori:</strong> ${product.category}</p>
                <p><strong>Stok:</strong> 100+ tersedia</p>
                <p><strong>Pengiriman:</strong> 3-5 hari kerja</p>
                <p><strong>Garansi:</strong> 12 bulan</p>
            </div>
            <div class="detail-buttons">
                <button class="btn-detail buy" onclick="addToCart(${product.id}); closeProductModal();">
                    <i class="fas fa-shopping-cart"></i> Beli Sekarang
                </button>
                <button class="btn-detail favorite" onclick="toggleWishlist(${product.id})">
                    <i class="fas fa-heart"></i> Wishlist
                </button>
            </div>
            <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border);">
                <h4>Ulasan Pembeli</h4>
                <div style="margin-top: 1rem;">
                    ${reviews.map(review => `
                        <div style="margin-bottom: 0.75rem; padding: 0.75rem; background: var(--bg-secondary); border-radius: 8px;">
                            <div style="color: var(--accent); margin-bottom: 0.25rem;">★★★★★</div>
                            <p style="color: var(--text-light); font-size: 0.9rem;">${review}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    productModal.classList.add('active');
}

function closeProductModal() {
    productModal.classList.remove('active');
}

closeProduct.addEventListener('click', closeProductModal);

// Flash Sale
function renderFlashSale() {
    const flashSaleGrid = document.getElementById('flashSaleGrid');
    const flashSaleProducts = products.sort(() => Math.random() - 0.5).slice(0, 8);
    
    flashSaleGrid.innerHTML = '';
    flashSaleProducts.forEach(product => {
        const item = document.createElement('div');
        item.className = 'flash-sale-item';
        item.innerHTML = `
            <div class="flash-sale-image">
                ${product.icon}
                <span class="flash-sale-discount">${Math.abs(product.discount)}%</span>
            </div>
            <div class="flash-sale-info">
                <div class="flash-sale-name">${product.name}</div>
                <div class="flash-sale-price">Rp ${product.price.toLocaleString('id-ID')}</div>
                <button class="flash-sale-btn" onclick="addToCart(${product.id})">
                    Beli
                </button>
            </div>
        `;
        flashSaleGrid.appendChild(item);
    });
}

// Modal Close on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === cartModal) cartModal.classList.remove('active');
    if (e.target === wishlistModal) wishlistModal.classList.remove('active');
    if (e.target === productModal) productModal.classList.remove('active');
    if (e.target === checkoutModal) checkoutModal.classList.remove('active');
});

// Notification
function showNotification(message) {
    document.getElementById('notificationText').textContent = message;
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Newsletter
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('Terima kasih! Anda berhasil subscribe');
    e.target.reset();
});

// Categories Click
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        const filterBtn = document.querySelector(`.filter-btn[data-filter="${category}"]`);
        if (filterBtn) {
            filterBtn.click();
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll to Top
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hamburger Menu
hamburger.addEventListener('click', () => {
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scroll Navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        navMenu.style.display = 'none';
    });
});

// Render Flash Sale
renderFlashSale();

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cartModal.classList.remove('active');
        wishlistModal.classList.remove('active');
        productModal.classList.remove('active');
        checkoutModal.classList.remove('active');
    }
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Sticky Header
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ============ ADVANCED FEATURES ============

// Promo Code System
const promoCodes = {
    'SAVE50': { discount: 50, type: 'percentage' },
    'FREESHIP': { discount: 0, type: 'shipping' },
    'WELCOME20': { discount: 20, type: 'percentage' },
    'SAVE100': { discount: 100000, type: 'fixed' }
};

let appliedPromo = null;

document.getElementById('applyPromoBtn').addEventListener('click', () => {
    const code = document.getElementById('promoCode').value.toUpperCase();
    
    if (promoCodes[code]) {
        appliedPromo = { code, ...promoCodes[code] };
        showNotification(`Kode promo "${code}" berhasil diterapkan!`);
        updateCartSummary();
        document.getElementById('promoCode').value = '';
    } else {
        showNotification('Kode promo tidak valid');
    }
});

// Promo Modal
document.getElementById('promoBtn').addEventListener('click', () => {
    document.getElementById('promoModal').classList.add('active');
});

document.getElementById('closePromo').addEventListener('click', () => {
    document.getElementById('promoModal').classList.remove('active');
});

// Order Tracking
document.getElementById('trackBtn2').addEventListener('click', () => {
    document.getElementById('trackingModal').classList.add('active');
});

document.getElementById('closeTracking').addEventListener('click', () => {
    document.getElementById('trackingModal').classList.remove('active');
});

document.getElementById('trackBtn').addEventListener('click', () => {
    const trackingNumber = document.getElementById('trackingNumber').value;
    if (trackingNumber.trim()) {
        document.getElementById('trackingResult').style.display = 'block';
        showNotification(`Pelacakan pesanan #${trackingNumber} berhasil!`);
    } else {
        showNotification('Masukkan nomor pesanan terlebih dahulu');
    }
});

// Live Chat
let chatMessages = [];

document.getElementById('chatSend').addEventListener('click', () => {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message) {
        const messagesContainer = document.getElementById('chatMessages');
        
        // Add user message
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-message user';
        userMsg.innerHTML = `<p>${message}</p>`;
        messagesContainer.appendChild(userMsg);
        
        // Bot reply after delay
        setTimeout(() => {
            const botMsg = document.createElement('div');
            botMsg.className = 'chat-message bot';
            const replies = [
                'Kami akan membantu Anda sesegera mungkin! 😊',
                'Terima kasih atas pertanyaannya!',
                'Apakah ada yang lain yang bisa kami bantu?',
                'Tim customer service kami siap membantu 24/7'
            ];
            botMsg.innerHTML = `<p>${replies[Math.floor(Math.random() * replies.length)]}</p>`;
            messagesContainer.appendChild(botMsg);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 500);
        
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
});

document.getElementById('chatInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('chatSend').click();
    }
});

document.getElementById('chatToggle').addEventListener('click', () => {
    const widget = document.getElementById('chatWidget');
    const messagesContainer = document.getElementById('chatMessages');
    
    if (messagesContainer.style.display === 'none') {
        messagesContainer.style.display = 'flex';
        document.querySelector('.chat-input-group').style.display = 'flex';
        document.getElementById('chatToggle').textContent = '−';
    } else {
        messagesContainer.style.display = 'none';
        document.querySelector('.chat-input-group').style.display = 'none';
        document.getElementById('chatToggle').textContent = '+';
    }
});

// Size and Color Selection
let selectedSize = null;
let selectedColor = null;

document.querySelectorAll('.size-option').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.size-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = btn.dataset.size;
    });
});

document.querySelectorAll('.color-option').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.color-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedColor = btn.dataset.color;
    });
});

document.getElementById('confirmOptionsBtn').addEventListener('click', () => {
    if (selectedSize && selectedColor) {
        showNotification(`Ukuran ${selectedSize} dan warna dipilih!`);
        document.getElementById('optionsModal').classList.remove('active');
    } else {
        showNotification('Pilih ukuran dan warna terlebih dahulu');
    }
});

document.getElementById('closeOptions').addEventListener('click', () => {
    document.getElementById('optionsModal').classList.remove('active');
});

// Loyalty Program
let loyaltyPoints = 0;

document.getElementById('loyaltyBtn2').addEventListener('click', () => {
    loyaltyPoints = Math.floor(Math.random() * 1000);
    document.getElementById('currentPoints').textContent = loyaltyPoints;
    
    const progress = (loyaltyPoints / 1000) * 100;
    document.getElementById('progressFill').style.width = Math.min(progress, 100) + '%';
    
    const remaining = Math.max(0, 1000 - loyaltyPoints);
    if (remaining > 0) {
        document.getElementById('pointsInfo').textContent = `${remaining} poin lagi untuk mendapat rewards eksklusif!`;
    } else {
        document.getElementById('pointsInfo').textContent = 'Selamat! Anda sudah bisa menukar rewards!';
    }
    
    document.getElementById('loyaltyModal').classList.add('active');
});

document.getElementById('closeLoyalty').addEventListener('click', () => {
    document.getElementById('loyaltyModal').classList.remove('active');
});

document.querySelectorAll('.btn-redeem').forEach(btn => {
    btn.addEventListener('click', () => {
        showNotification('Reward berhasil ditukar! Cek email Anda untuk kode promo');
    });
});

// Product Reviews
let currentRating = 0;

document.querySelectorAll('.stars-input i').forEach(star => {
    star.addEventListener('click', () => {
        currentRating = parseInt(star.dataset.rating);
        document.querySelectorAll('.stars-input i').forEach((s, index) => {
            if (index < currentRating) {
                s.classList.remove('far');
                s.classList.add('fas');
                s.classList.add('active');
            } else {
                s.classList.add('far');
                s.classList.remove('fas');
                s.classList.remove('active');
            }
        });
    });
    
    star.addEventListener('mouseover', () => {
        const rating = parseInt(star.dataset.rating);
        document.querySelectorAll('.stars-input i').forEach((s, index) => {
            if (index < rating) {
                s.classList.remove('far');
                s.classList.add('fas');
            } else {
                s.classList.add('far');
                s.classList.remove('fas');
            }
        });
    });
});

document.querySelector('.stars-input').addEventListener('mouseleave', () => {
    document.querySelectorAll('.stars-input i').forEach((s, index) => {
        if (index < currentRating) {
            s.classList.remove('far');
            s.classList.add('fas');
        } else {
            s.classList.add('far');
            s.classList.remove('fas');
        }
    });
});

document.querySelector('.btn-submit-review').addEventListener('click', () => {
    const text = document.getElementById('reviewText').value;
    if (text.trim() && currentRating > 0) {
        const reviewsList = document.getElementById('reviewsList');
        const newReview = document.createElement('div');
        newReview.className = 'review-item';
        const stars = '★'.repeat(currentRating) + '☆'.repeat(5 - currentRating);
        newReview.innerHTML = `
            <div class="review-header">
                <strong>Anda</strong>
                <span class="review-rating">${stars}</span>
            </div>
            <p class="review-text">${text}</p>
            <small>Baru saja</small>
        `;
        reviewsList.insertBefore(newReview, reviewsList.firstChild);
        showNotification('Terima kasih! Ulasan Anda telah diposting');
        document.getElementById('reviewText').value = '';
        currentRating = 0;
    } else {
        showNotification('Berikan rating dan tulis ulasan terlebih dahulu');
    }
});

let closeReviews = document.getElementById('closeReviews');
if (closeReviews) {
    closeReviews.addEventListener('click', () => {
        document.getElementById('reviewsModal').classList.remove('active');
    });
}

// Product Comparison
let comparisonProducts = [];

document.getElementById('compareBtn').addEventListener('click', () => {
    if (cart.length >= 2) {
        comparisonProducts = cart.slice(0, 2);
        
        document.getElementById('compProduct1').textContent = comparisonProducts[0].name;
        document.getElementById('compPrice1').textContent = `Rp ${comparisonProducts[0].price.toLocaleString('id-ID')}`;
        document.getElementById('compRating1').textContent = `${comparisonProducts[0].rating}★`;
        document.getElementById('compCategory1').textContent = comparisonProducts[0].category;
        
        document.getElementById('compProduct2').textContent = comparisonProducts[1].name;
        document.getElementById('compPrice2').textContent = `Rp ${comparisonProducts[1].price.toLocaleString('id-ID')}`;
        document.getElementById('compRating2').textContent = `${comparisonProducts[1].rating}★`;
        document.getElementById('compCategory2').textContent = comparisonProducts[1].category;
        
        document.getElementById('comparisonModal').classList.add('active');
    } else {
        showNotification('Tambahkan minimal 2 produk ke keranjang untuk membandingkan');
    }
});

document.getElementById('closeComparison').addEventListener('click', () => {
    document.getElementById('comparisonModal').classList.remove('active');
});

// Performance Monitoring
console.log('%c🛒 ShopHub E-Commerce Platform', 'color: #ff6b35; font-size: 1.5rem; font-weight: bold;');
console.log('%c✨ Advanced Features Loaded:', 'color: #10b981; font-size: 1rem;');
console.log('%cPromo Codes | Order Tracking | Live Chat | Loyalty Program | Reviews | Comparison', 'color: #3b82f6;');
console.log('%cPage loaded successfully! 🚀', 'color: #10b981; font-size: 1rem;');
