/* =========================================================
   PRODUCTOS
========================================================= */

const products = [
    {
        id: 1,
        name: "Lenovo Idea Pro",
        category: "Laptops",
        price: 1599,
        oldPrice: 1799,
        image: "fotos/foto1.jpg",
        badge: "OFERTA",
        description:
            "Laptop ideal para estudio, programación, oficina y productividad.",
        specs: {
            "Categoría": "Laptop",
            "Uso": "Estudio",
            "Almacenamiento": "SSD",
            "Conectividad": "Wi-Fi"
        }
    },

    {
        id: 2,
        name: "UltraBook X14",
        category: "Laptops",
        price: 2199,
        oldPrice: 2399,
        image: "fotos/foto2.jpg",
        badge: "TOP",
        description:
            "Equipo portátil potente y ligero para productividad y trabajo.",
        specs: {
            "Categoría": "Laptop",
            "Formato": "14 pulgadas",
            "Uso": "Productividad",
            "Conectividad": "Wi-Fi"
        }
    },

    {
        id: 3,
        name: "Tablet Vision 11",
        category: "Tablets",
        price: 899,
        oldPrice: 999,
        image: "fotos/foto3.jpg",
        badge: "OFERTA",
        description:
            "Pantalla amplia para estudiar, trabajar, navegar y entretenerte.",
        specs: {
            "Categoría": "Tablet",
            "Pantalla": "11 pulgadas",
            "Uso": "Multimedia",
            "Conectividad": "Wi-Fi"
        }
    },

    {
        id: 4,
        name: "Tablet Air Mini",
        category: "Tablets",
        price: 699,
        oldPrice: null,
        image: "fotos/foto3.jpg",
        badge: null,
        description:
            "Tablet compacta para estudiar y llevarla cómodamente a cualquier lugar.",
        specs: {
            "Categoría": "Tablet",
            "Formato": "Compacta",
            "Uso": "Estudio",
            "Conectividad": "Wi-Fi"
        }
    },

    {
        id: 5,
        name: "Phantom Mouse",
        category: "Periféricos",
        price: 79,
        oldPrice: 99,
        image: "fotos/foto1.jpg",
        badge: "OFERTA",
        description:
            "Mouse cómodo y preciso para trabajo, estudio y gaming.",
        specs: {
            "Categoría": "Mouse",
            "Uso": "Trabajo",
            "Diseño": "Ergonómico",
            "Conexión": "USB"
        }
    },

    {
        id: 6,
        name: "Mechanical K87",
        category: "Periféricos",
        price: 149,
        oldPrice: null,
        image: "fotos/foto2.jpg",
        badge: "NUEVO",
        description:
            "Teclado mecánico compacto con respuesta rápida y diseño moderno.",
        specs: {
            "Categoría": "Teclado",
            "Formato": "Compacto",
            "Uso": "Gaming",
            "Conexión": "USB"
        }
    },

    {
        id: 7,
        name: "ChargeCore 65W",
        category: "Energía",
        price: 59,
        oldPrice: 79,
        image: "fotos/foto3.jpg",
        badge: "OFERTA",
        description:
            "Cargador rápido de 65W para mantener tus dispositivos listos.",
        specs: {
            "Categoría": "Cargador",
            "Potencia": "65W",
            "Uso": "Carga rápida",
            "Formato": "Portátil"
        }
    },

    {
        id: 8,
        name: "PowerCell 20000",
        category: "Energía",
        price: 99,
        oldPrice: null,
        image: "fotos/foto1.jpg",
        badge: null,
        description:
            "Batería portátil de alta capacidad para tus dispositivos.",
        specs: {
            "Categoría": "Power Bank",
            "Capacidad": "20 000 mAh",
            "Uso": "Portátil",
            "Carga": "USB"
        }
    },

    {
        id: 9,
        name: "Router Nova AX",
        category: "Redes",
        price: 269,
        oldPrice: null,
        image: "fotos/foto2.jpg",
        badge: "TOP",
        description:
            "Router moderno pensado para conexiones rápidas y estables.",
        specs: {
            "Categoría": "Router",
            "Uso": "Hogar",
            "Red": "Wi-Fi",
            "Enfoque": "Conectividad"
        }
    },

    {
        id: 10,
        name: "SSD Flash 1TB",
        category: "Redes",
        price: 299,
        oldPrice: 339,
        image: "fotos/foto3.jpg",
        badge: "OFERTA",
        description:
            "Almacenamiento rápido de 1 TB para mejorar tu equipo.",
        specs: {
            "Categoría": "SSD",
            "Capacidad": "1 TB",
            "Uso": "Almacenamiento",
            "Tipo": "Flash"
        }
    }
];


/* =========================================================
   ELEMENTOS
========================================================= */

const productGrid = document.getElementById("productGrid");
const emptyProducts = document.getElementById("emptyProducts");

const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");

const filters = document.querySelectorAll(".filter");
const categoryCards = document.querySelectorAll(".category-card");

const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");
const cartItemsCount = document.getElementById("cartItemsCount");

const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const closeCart = document.getElementById("closeCart");
const clearCart = document.getElementById("clearCart");

const pageOverlay = document.getElementById("pageOverlay");

const productModal = document.getElementById("productModal");
const modalImage = document.getElementById("modalImage");
const modalCategory = document.getElementById("modalCategory");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const modalSpecs = document.getElementById("modalSpecs");
const modalPrice = document.getElementById("modalPrice");
const modalOldPrice = document.getElementById("modalOldPrice");
const modalAdd = document.getElementById("modalAdd");
const closeModal = document.getElementById("closeModal");

const themeBtn = document.getElementById("themeBtn");

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastText = document.getElementById("toastText");

const backTop = document.getElementById("backTop");

const chatToggle = document.getElementById("chatToggle");
const chatBox = document.getElementById("chatBox");
const chatClose = document.getElementById("chatClose");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");


/* =========================================================
   ESTADO
========================================================= */

let currentCategory = "Todos";
let selectedProduct = null;

let cart = JSON.parse(
    localStorage.getItem("neonbyteCart")
) || [];

let favorites = JSON.parse(
    localStorage.getItem("neonbyteFavorites")
) || [];


/* =========================================================
   HELPERS
========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
        minimumFractionDigits: 2
    }).format(price);

}


function escapeHTML(text) {

    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;

function showToast(title, message) {

    toastTitle.textContent = title;
    toastText.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);

}


/* =========================================================
   PRODUCTOS
========================================================= */

function getFilteredProducts() {

    let result = [...products];

    const search = searchInput.value
        .trim()
        .toLowerCase();

    if (search) {

        result = result.filter(product =>

            product.name.toLowerCase().includes(search) ||

            product.category
                .toLowerCase()
                .includes(search) ||

            product.description
                .toLowerCase()
                .includes(search)

        );

    }

    if (currentCategory !== "Todos") {

        result = result.filter(
            product => product.category === currentCategory
        );

    }

    switch (sortSelect.value) {

        case "low":
            result.sort(
                (a, b) => a.price - b.price
            );
            break;

        case "high":
            result.sort(
                (a, b) => b.price - a.price
            );
            break;

        case "name":
            result.sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name,
                        "es"
                    )
            );
            break;

        default:
            break;
    }

    return result;
}


function renderProducts() {

    const filtered = getFilteredProducts();

    if (filtered.length === 0) {

        productGrid.innerHTML = "";
        emptyProducts.hidden = false;

        return;
    }

    emptyProducts.hidden = true;

    productGrid.innerHTML = filtered
        .map(product => {

            const isFavorite =
                favorites.includes(product.id);

            return `
                <article
                    class="product-card"
                    data-id="${product.id}"
                >

                    <div class="product-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                        >

                        ${
                            product.badge
                            ? `
                                <span class="product-badge">
                                    ${product.badge}
                                </span>
                            `
                            : ""
                        }

                        <button
                            type="button"
                            class="favorite-btn ${
                                isFavorite ? "active" : ""
                            }"
                            data-action="favorite"
                            data-id="${product.id}"
                            aria-label="Agregar a favoritos"
                        >
                            ${isFavorite ? "♥" : "♡"}
                        </button>

                    </div>


                    <div class="product-info">

                        <div class="product-category">
                            ${product.category}
                        </div>

                        <h3>
                            ${product.name}
                        </h3>

                        <p class="product-description">
                            ${product.description}
                        </p>


                        <div class="product-bottom">

                            <div class="product-price">

                                <strong>
                                    ${formatPrice(product.price)}
                                </strong>

                                ${
                                    product.oldPrice
                                    ? `
                                        <span class="product-old-price">
                                            ${formatPrice(product.oldPrice)}
                                        </span>
                                    `
                                    : ""
                                }

                            </div>


                            <button
                                type="button"
                                class="product-add"
                                data-action="add"
                                data-id="${product.id}"
                                title="Agregar al carrito"
                            >
                                +
                            </button>

                        </div>

                    </div>

                </article>
            `;

        })
        .join("");

}


/* =========================================================
   CLICK PRODUCTOS
========================================================= */

productGrid.addEventListener("click", event => {

    const actionElement =
        event.target.closest("[data-action]");

    if (!actionElement) return;

    const id = Number(
        actionElement.dataset.id
    );

    const action =
        actionElement.dataset.action;

    if (action === "add") {

        addToCart(id);

    }

    if (action === "favorite") {

        toggleFavorite(id);

    }

});


productGrid.addEventListener("dblclick", event => {

    const card =
        event.target.closest(".product-card");

    if (!card) return;

    openProduct(
        Number(card.dataset.id)
    );

});


/* =========================================================
   FILTROS
========================================================= */

filters.forEach(filter => {

    filter.addEventListener("click", () => {

        currentCategory =
            filter.dataset.category;

        filters.forEach(item => {

            item.classList.toggle(
                "active",
                item === filter
            );

        });

        renderProducts();

    });

});


categoryCards.forEach(card => {

    card.addEventListener("click", () => {

        currentCategory =
            card.dataset.category;

        filters.forEach(filter => {

            filter.classList.toggle(
                "active",
                filter.dataset.category === currentCategory
            );

        });

        renderProducts();

        document
            .getElementById("productos")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


searchInput.addEventListener(
    "input",
    renderProducts
);

sortSelect.addEventListener(
    "change",
    renderProducts
);


/* =========================================================
   FAVORITOS
========================================================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

        showToast(
            "Favorito eliminado",
            "Quitamos el producto de tus favoritos."
        );

    } else {

        favorites.push(id);

        showToast(
            "Guardado",
            "Producto agregado a favoritos."
        );

    }

    localStorage.setItem(
        "neonbyteFavorites",
        JSON.stringify(favorites)
    );

    renderProducts();

}


/* =========================================================
   CARRITO
========================================================= */

function addToCart(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;

    const existing =
        cart.find(
            item => item.id === id
        );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id,
            quantity: 1
        });

    }

    saveCart();
    renderCart();

    showToast(
        "Producto agregado",
        `${product.name} está en tu carrito.`
    );

}


function decreaseQuantity(id) {

    const item =
        cart.find(
            item => item.id === id
        );

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );

    }

    saveCart();
    renderCart();

}


function increaseQuantity(id) {

    const item =
        cart.find(
            item => item.id === id
        );

    if (!item) return;

    item.quantity++;

    saveCart();
    renderCart();

}


function removeFromCart(id) {

    const product =
        products.find(
            item => item.id === id
        );

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();
    renderCart();

    if (product) {

        showToast(
            "Producto eliminado",
            `${product.name} fue quitado del carrito.`
        );

    }

}


function saveCart() {

    localStorage.setItem(
        "neonbyteCart",
        JSON.stringify(cart)
    );

}


function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="cart-empty">

                <div>
                    <strong>
                        Tu carrito está vacío.
                    </strong>

                    <span>
                        Agrega productos para comenzar.
                    </span>
                </div>

            </div>
        `;

    } else {

        cartItems.innerHTML = cart
            .map(item => {

                const product =
                    products.find(
                        product =>
                            product.id === item.id
                    );

                if (!product) return "";

                return `
                    <div class="cart-item">

                        <div class="cart-item-img">

                            <img
                                src="${product.image}"
                                alt="${product.name}"
                            >

                        </div>


                        <div class="cart-item-info">

                            <h4>
                                ${product.name}
                            </h4>

                            <p>
                                ${formatPrice(product.price)}
                            </p>


                            <div class="quantity-box">

                                <button
                                    type="button"
                                    data-cart-action="decrease"
                                    data-id="${product.id}"
                                >
                                    −
                                </button>

                                <span>
                                    ${item.quantity}
                                </span>

                                <button
                                    type="button"
                                    data-cart-action="increase"
                                    data-id="${product.id}"
                                >
                                    +
                                </button>

                            </div>

                        </div>


                        <button
                            type="button"
                            class="cart-remove"
                            data-cart-action="remove"
                            data-id="${product.id}"
                            aria-label="Eliminar producto"
                        >
                            ×
                        </button>

                    </div>
                `;

            })
            .join("");

    }


    let total = 0;
    let quantity = 0;

    cart.forEach(item => {

        const product =
            products.find(
                product =>
                    product.id === item.id
            );

        if (!product) return;

        total +=
            product.price * item.quantity;

        quantity += item.quantity;

    });


    cartTotal.textContent =
        formatPrice(total);

    cartCount.textContent =
        quantity;

    cartItemsCount.textContent =
        quantity;

}


cartItems.addEventListener("click", event => {

    const button =
        event.target.closest(
            "[data-cart-action]"
        );

    if (!button) return;

    const id =
        Number(button.dataset.id);

    const action =
        button.dataset.cartAction;

    if (action === "decrease") {
        decreaseQuantity(id);
    }

    if (action === "increase") {
        increaseQuantity(id);
    }

    if (action === "remove") {
        removeFromCart(id);
    }

});


clearCart.addEventListener("click", () => {

    if (cart.length === 0) return;

    cart = [];

    saveCart();
    renderCart();

    showToast(
        "Carrito vacío",
        "Todos los productos fueron eliminados."
    );

});


/* =========================================================
   ABRIR / CERRAR CARRITO
========================================================= */

function openCart() {

    cartDrawer.classList.add("open");
    pageOverlay.classList.add("active");

}

function closeCartDrawer() {

    cartDrawer.classList.remove("open");
    pageOverlay.classList.remove("active");

}

cartBtn.addEventListener(
    "click",
    openCart
);

closeCart.addEventListener(
    "click",
    closeCartDrawer
);

pageOverlay.addEventListener(
    "click",
    closeCartDrawer
);


/* =========================================================
   MODAL PRODUCTO
========================================================= */

function openProduct(id) {

    selectedProduct =
        products.find(
            product => product.id === id
        );

    if (!selectedProduct) return;

    modalImage.src =
        selectedProduct.image;

    modalImage.alt =
        selectedProduct.name;

    modalCategory.textContent =
        selectedProduct.category;

    modalName.textContent =
        selectedProduct.name;

    modalDescription.textContent =
        selectedProduct.description;

    modalPrice.textContent =
        formatPrice(
            selectedProduct.price
        );


    if (selectedProduct.oldPrice) {

        modalOldPrice.textContent =
            formatPrice(
                selectedProduct.oldPrice
            );

    } else {

        modalOldPrice.textContent = "";

    }


    modalSpecs.innerHTML =
        Object.entries(
            selectedProduct.specs
        )
        .map(([name, value]) => {

            return `
                <div class="spec-item">

                    <span>
                        ${name}
                    </span>

                    <strong>
                        ${value}
                    </strong>

                </div>
            `;

        })
        .join("");


    productModal.classList.add("active");
    document.body.classList.add("no-scroll");

}


function closeProductModal() {

    productModal.classList.remove("active");
    document.body.classList.remove("no-scroll");

}


closeModal.addEventListener(
    "click",
    closeProductModal
);


productModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            productModal
        ) {
            closeProductModal();
        }

    }
);


modalAdd.addEventListener("click", () => {

    if (!selectedProduct) return;

    addToCart(
        selectedProduct.id
    );

    closeProductModal();

});


document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeProductModal();
            closeCartDrawer();

        }

    }
);


/* =========================================================
   THEME
========================================================= */

const savedTheme =
    localStorage.getItem(
        "neonbyteTheme"
    );

if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

}


function updateThemeIcon() {

    themeBtn.textContent =
        document.body.classList.contains(
            "light-mode"
        )
            ? "☾"
            : "☼";

}


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );

        const isLight =
            document.body.classList.contains(
                "light-mode"
            );

        localStorage.setItem(
            "neonbyteTheme",
            isLight
                ? "light"
                : "dark"
        );

        updateThemeIcon();

    }
);

updateThemeIcon();


/* =========================================================
   MENÚ
========================================================= */

menuBtn.addEventListener(
    "click",
    () => {

        const open =
            nav.classList.toggle("open");

        menuBtn.setAttribute(
            "aria-expanded",
            String(open)
        );

        menuBtn.textContent =
            open ? "×" : "☰";

    }
);


document.querySelectorAll(
    ".nav a"
).forEach(link => {

    link.addEventListener(
        "click",
        () => {

            nav.classList.remove(
                "open"
            );

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuBtn.textContent = "☰";

        }
    );

});


/* =========================================================
   COUNTDOWN
========================================================= */

let offerEnd =
    localStorage.getItem(
        "neonbyteOfferEnd"
    );

if (!offerEnd) {

    const end = new Date();

    end.setDate(
        end.getDate() + 5
    );

    end.setHours(
        23,
        59,
        59,
        999
    );

    offerEnd =
        end.getTime();

    localStorage.setItem(
        "neonbyteOfferEnd",
        offerEnd
    );

} else {

    offerEnd =
        Number(offerEnd);

}


const daysEl =
    document.getElementById("days");

const hoursEl =
    document.getElementById("hours");

const minutesEl =
    document.getElementById("minutes");

const secondsEl =
    document.getElementById("seconds");


function updateCountdown() {

    const difference =
        offerEnd - Date.now();


    if (difference <= 0) {

        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";

        return;

    }


    const days =
        Math.floor(
            difference / 86400000
        );

    const hours =
        Math.floor(
            difference % 86400000 / 3600000
        );

    const minutes =
        Math.floor(
            difference % 3600000 / 60000
        );

    const seconds =
        Math.floor(
            difference % 60000 / 1000
        );


    daysEl.textContent =
        String(days).padStart(
            2,
            "0"
        );

    hoursEl.textContent =
        String(hours).padStart(
            2,
            "0"
        );

    minutesEl.textContent =
        String(minutes).padStart(
            2,
            "0"
        );

    secondsEl.textContent =
        String(seconds).padStart(
            2,
            "0"
        );

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================================================
   CHAT
========================================================= */

const chatKnowledge = [

    {
        keys: [
            "hola",
            "buenas",
            "hey",
            "ola"
        ],
        answer:
            "¡Hola! 👋 Soy el asistente de NEONBYTE. ¿Qué tecnología estás buscando?"
    },

    {
        keys: [
            "producto",
            "productos",
            "catalogo",
            "catálogo"
        ],
        answer:
            "Tenemos laptops, tablets, periféricos, energía y productos de redes."
    },

    {
        keys: [
            "laptop",
            "laptops",
            "portatil",
            "portátil"
        ],
        answer:
            "Tenemos Lenovo Idea Pro desde S/ 1,599 y UltraBook X14 desde S/ 2,199."
    },

    {
        keys: [
            "lenovo",
            "idea pro"
        ],
        answer:
            "La Lenovo Idea Pro está en S/ 1,599 y anteriormente estaba en S/ 1,799."
    },

    {
        keys: [
            "ultrabook",
            "x14"
        ],
        answer:
            "La UltraBook X14 está en S/ 2,199 y anteriormente estaba en S/ 2,399."
    },

    {
        keys: [
            "tablet",
            "tablets"
        ],
        answer:
            "Tenemos Tablet Air Mini desde S/ 699 y Tablet Vision 11 desde S/ 899."
    },

    {
        keys: [
            "mouse"
        ],
        answer:
            "El Phantom Mouse cuesta S/ 79 y está en promoción desde S/ 99."
    },

    {
        keys: [
            "teclado",
            "keyboard"
        ],
        answer:
            "El Mechanical K87 cuesta S/ 149."
    },

    {
        keys: [
            "cargador",
            "carga",
            "65w"
        ],
        answer:
            "El ChargeCore 65W cuesta S/ 59 y aparece con precio anterior de S/ 79."
    },

    {
        keys: [
            "powerbank",
            "power bank",
            "bateria",
            "batería"
        ],
        answer:
            "El PowerCell 20000 cuesta S/ 99."
    },

    {
        keys: [
            "router",
            "wifi",
            "wi-fi",
            "internet"
        ],
        answer:
            "Tenemos el Router Nova AX a S/ 269 para mejorar tu conectividad."
    },

    {
        keys: [
            "ssd",
            "disco",
            "almacenamiento"
        ],
        answer:
            "El SSD Flash 1TB cuesta S/ 299 y tiene una promoción desde S/ 339."
    },

    {
        keys: [
            "precio",
            "precios",
            "cuesta",
            "cuanto",
            "cuánto"
        ],
        answer:
            "Tenemos productos desde S/ 59. Pregúntame por una categoría o producto específico."
    },

    {
        keys: [
            "barato",
            "económico",
            "economico"
        ],
        answer:
            "El producto de menor precio del catálogo actualmente es el ChargeCore 65W a S/ 59."
    },

    {
        keys: [
            "oferta",
            "descuento",
            "promocion",
            "promoción"
        ],
        answer:
            "Sí ⚡ Tenemos productos en oferta como Lenovo Idea Pro, Phantom Mouse, ChargeCore 65W y SSD Flash 1TB."
    },

    {
        keys: [
            "comprar",
            "compra"
        ],
        answer:
            "Puedes agregar productos al carrito y luego entrar a 'Continuar pedido', o usar nuestro formulario."
    },

    {
        keys: [
            "pedido",
            "pedidos"
        ],
        answer:
            "Puedes hacer tu pedido desde formulario.html. El formulario prepara automáticamente el mensaje para WhatsApp."
    },

    {
        keys: [
            "whatsapp",
            "wsp",
            "wasap"
        ],
        answer:
            "Nuestro WhatsApp oficial es +51 929 647 116."
    },

    {
        keys: [
            "telefono",
            "teléfono",
            "numero",
            "número"
        ],
        answer:
            "Nuestro número de contacto es +51 929 647 116."
    },

    {
        keys: [
            "pagina",
            "página",
            "web",
            "sitio",
            "website"
        ],
        answer:
            "Nuestra página oficial es suc07.github.io/proyecto2029/."
    },

    {
        keys: [
            "envio",
            "envío",
            "delivery"
        ],
        answer:
            "Los envíos se coordinan según la ciudad y el tipo de pedido. Puedes consultarlo directamente por WhatsApp."
    },

    {
        keys: [
            "lima"
        ],
        answer:
            "Lima es nuestra principal ciudad de atención."
    },

    {
        keys: [
            "chiclayo"
        ],
        answer:
            "También contamos con presencia en Chiclayo, Lambayeque."
    },

    {
        keys: [
            "tarapoto"
        ],
        answer:
            "También contamos con presencia en Tarapoto, San Martín."
    },

    {
        keys: [
            "cajamarca"
        ],
        answer:
            "También contamos con presencia en Cajamarca."
    },

    {
        keys: [
            "huancayo"
        ],
        answer:
            "También contamos con presencia en Huancayo, Junín."
    },

    {
        keys: [
            "mayorista",
            "mayoristas"
        ],
        answer:
            "Sí. Puedes seleccionar 'Mayorista' en el formulario y dejar la cantidad que necesitas."
    },

    {
        keys: [
            "minorista",
            "minorista"
        ],
        answer:
            "También puedes realizar compras minoristas desde nuestro formulario."
    },

    {
        keys: [
            "unidad",
            "unidades"
        ],
        answer:
            "Sí, puedes solicitar una sola unidad mediante el formulario."
    },

    {
        keys: [
            "carrito"
        ],
        answer:
            "Puedes abrir el carrito desde el ícono 🛒 de la parte superior. Allí puedes modificar cantidades o eliminar productos."
    },

    {
        keys: [
            "favorito",
            "favoritos"
        ],
        answer:
            "Puedes guardar tus productos favoritos con el ícono ♡ que aparece en cada tarjeta."
    },

    {
        keys: [
            "horario",
            "hora",
            "atencion",
            "atención"
        ],
        answer:
            "Para confirmar un horario de atención específico, puedes escribir al WhatsApp oficial."
    },

    {
        keys: [
            "original",
            "nuevo",
            "nuevos"
        ],
        answer:
            "NEONBYTE muestra productos seleccionados para estudio, trabajo, productividad y uso tecnológico."
    },

    {
        keys: [
            "estudio",
            "estudiar"
        ],
        answer:
            "Para estudiar, una opción interesante es la Lenovo Idea Pro. También puedes revisar nuestras tablets."
    },

    {
        keys: [
            "programacion",
            "programación",
            "programar",
            "codigo",
            "código"
        ],
        answer:
            "Para programación, una laptop es la mejor categoría para empezar. Puedes revisar la Lenovo Idea Pro y UltraBook X14."
    },

    {
        keys: [
            "gaming",
            "juego",
            "jugar"
        ],
        answer:
            "Para gaming puedes complementar tu equipo con el Mechanical K87 y Phantom Mouse. Para una laptop gaming específica, consúltanos por WhatsApp."
    },

    {
        keys: [
            "redes",
            "red"
        ],
        answer:
            "En Redes tenemos Router Nova AX y SSD Flash 1TB."
    },

    {
        keys: [
            "energia",
            "energía"
        ],
        answer:
            "En Energía encontrarás ChargeCore 65W y PowerCell 20000."
    },

    {
        keys: [
            "periferico",
            "periférico",
            "perifericos",
            "periféricos"
        ],
        answer:
            "En Periféricos tenemos Phantom Mouse y Mechanical K87."
    },

    {
        keys: [
            "qr",
            "codigo qr",
            "código qr"
        ],
        answer:
            "El QR que aparece en la página dirige directamente al sitio oficial de NEONBYTE."
    },

    {
        keys: [
            "gracias",
            "graciass"
        ],
        answer:
            "¡De nada! 😎 Estamos para ayudarte."
    },

    {
        keys: [
            "quienes",
            "quiénes",
            "nosotros"
        ],
        answer:
            "NEONBYTE es una propuesta de tienda tecnológica enfocada en productos útiles, modernos y accesibles."
    },

    {
        keys: [
            "neonbyte",
            "neon byte"
        ],
        answer:
            "NEONBYTE ⚡ Tecnología que se siente."
    },

    {
        keys: [
            "ayuda",
            "ayudar"
        ],
        answer:
            "Claro. Pregúntame por productos, precios, categorías, pedidos, WhatsApp, ciudades o envíos."
    },

    {
        keys: [
            "contacto",
            "contactar"
        ],
        answer:
            "Puedes contactarnos por WhatsApp al +51 929 647 116 o mediante el formulario."
    }

];


function getBotAnswer(question) {

    const normalized =
        question
            .toLowerCase()
            .normalize("NFD")
            .replace(
                /[\u0300-\u036f]/g,
                ""
            );

    const match =
        chatKnowledge.find(item =>

            item.keys.some(key => {

                const cleanKey =
                    key
                        .toLowerCase()
                        .normalize("NFD")
                        .replace(
                            /[\u0300-\u036f]/g,
                            ""
                        );

                return normalized.includes(
                    cleanKey
                );

            })

        );


    if (match) {
        return match.answer;
    }


    return (
        "Puedo ayudarte con productos, precios, " +
        "pedidos, WhatsApp, envíos y categorías. " +
        "Prueba preguntándome por una laptop, tablet o precio."
    );

}


function appendChatMessage(
    message,
    type
) {

    const bubble =
        document.createElement("div");

    bubble.className =
        `chat-bubble ${type}`;

    bubble.textContent =
        message;

    chatMessages.appendChild(
        bubble
    );

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


function sendChatMessage() {

    const message =
        chatInput.value.trim();

    if (!message) return;

    appendChatMessage(
        message,
        "user"
    );

    chatInput.value = "";

    setTimeout(() => {

        appendChatMessage(
            getBotAnswer(message),
            "bot"
        );

    }, 350);

}


chatToggle.addEventListener(
    "click",
    () => {

        chatBox.classList.toggle(
            "open"
        );

        if (
            chatBox.classList.contains("open")
        ) {
            chatInput.focus();
        }

    }
);


chatClose.addEventListener(
    "click",
    () => {

        chatBox.classList.remove(
            "open"
        );

    }
);


chatSend.addEventListener(
    "click",
    sendChatMessage
);


chatInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            sendChatMessage();
        }

    }
);


document.querySelectorAll(
    ".chat-suggestions button"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            chatInput.value =
                button.dataset.question;

            sendChatMessage();

        }
    );

});


/* =========================================================
   BACK TOP
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 550) {

            backTop.classList.add(
                "show"
            );

        } else {

            backTop.classList.remove(
                "show"
            );

        }

    }
);


backTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================================
   INICIALIZACIÓN
========================================================= */

renderProducts();
renderCart();