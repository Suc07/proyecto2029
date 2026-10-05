/* =====================================================
   NEONBYTE
   JAVASCRIPT COMPLETO
===================================================== */


/* =====================================================
   PRODUCTOS
===================================================== */

const products = [

    {
        id: 1,
        name: "Lenovo Idea Pro",
        category: "Laptops",
        price: 1599,
        oldPrice: 1799,
        image: "fotos/foto1.jpg",
        description: "Laptop equilibrada para estudio, trabajo y productividad.",
        specs: [
            "Procesador de alto rendimiento",
            "Memoria RAM para multitarea",
            "Almacenamiento SSD",
            "Pantalla Full HD"
        ]
    },

    {
        id: 2,
        name: "UltraBook X14",
        category: "Laptops",
        price: 2199,
        oldPrice: 2399,
        image: "fotos/foto2.jpg",
        description: "Diseño portátil con potencia para usuarios exigentes.",
        specs: [
            "Pantalla 14 pulgadas",
            "Diseño ultradelgado",
            "SSD de alta velocidad",
            "Ideal para productividad"
        ]
    },

    {
        id: 3,
        name: "Tablet Vision 11",
        category: "Tablets",
        price: 899,
        oldPrice: 999,
        image: "fotos/foto3.jpg",
        description: "Tablet de gran pantalla para entretenimiento y estudio.",
        specs: [
            "Pantalla de 11 pulgadas",
            "Diseño moderno",
            "Batería de larga duración",
            "Conectividad inalámbrica"
        ]
    },

    {
        id: 4,
        name: "Tablet Air Mini",
        category: "Tablets",
        price: 699,
        image: "fotos/foto1.jpg",
        description: "Compacta, ligera y perfecta para llevar todos los días.",
        specs: [
            "Diseño compacto",
            "Pantalla táctil",
            "Batería portátil",
            "Ideal para estudiantes"
        ]
    },

    {
        id: 5,
        name: "Phantom Mouse",
        category: "Periféricos",
        price: 79,
        oldPrice: 99,
        image: "fotos/foto2.jpg",
        description: "Mouse preciso para trabajo, estudio y gaming casual.",
        specs: [
            "Alta precisión",
            "Diseño ergonómico",
            "Conexión rápida",
            "Uso diario"
        ]
    },

    {
        id: 6,
        name: "Mechanical K87",
        category: "Periféricos",
        price: 149,
        image: "fotos/foto3.jpg",
        description: "Teclado mecánico compacto con respuesta rápida.",
        specs: [
            "Formato compacto",
            "Teclas mecánicas",
            "Diseño resistente",
            "Respuesta rápida"
        ]
    },

    {
        id: 7,
        name: "ChargeCore 65W",
        category: "Energía",
        price: 59,
        oldPrice: 79,
        image: "fotos/foto1.jpg",
        description: "Cargador compacto para mantener tus dispositivos activos.",
        specs: [
            "Potencia de 65W",
            "Diseño compacto",
            "Carga rápida",
            "Fácil de transportar"
        ]
    },

    {
        id: 8,
        name: "PowerCell 20000",
        category: "Energía",
        price: 99,
        image: "fotos/foto2.jpg",
        description: "Power bank para llevar energía contigo.",
        specs: [
            "Capacidad de 20000 mAh",
            "Diseño portátil",
            "Múltiples conexiones",
            "Ideal para viajes"
        ]
    },

    {
        id: 9,
        name: "Router Nova AX",
        category: "Redes",
        price: 269,
        image: "fotos/foto3.jpg",
        description: "Conectividad inalámbrica para mejorar tu red.",
        specs: [
            "Tecnología WiFi moderna",
            "Mayor cobertura",
            "Conexión estable",
            "Ideal para hogares"
        ]
    },

    {
        id: 10,
        name: "SSD Flash 1TB",
        category: "Redes",
        price: 299,
        oldPrice: 339,
        image: "fotos/foto1.jpg",
        description: "Almacenamiento rápido para ampliar tu espacio.",
        specs: [
            "Capacidad de 1TB",
            "Tecnología SSD",
            "Alta velocidad",
            "Ideal para computadoras"
        ]
    }

];


/* =====================================================
   VARIABLES
===================================================== */

const productsGrid =
    document.getElementById("productsGrid");

const productSearch =
    document.getElementById("productSearch");

const sortProducts =
    document.getElementById("sortProducts");

const filters =
    document.querySelectorAll(".filter");


let currentFilter = "Todos";

let cart =
    JSON.parse(
        localStorage.getItem("neonbyteCart")
    ) || [];


/* =====================================================
   FORMATO MONEDA
===================================================== */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "es-PE",
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    ).format(price);

}


/* =====================================================
   MOSTRAR PRODUCTOS
===================================================== */

function renderProducts() {

    let list = [...products];

    const search =
        productSearch.value
            .toLowerCase()
            .trim();


    if (currentFilter !== "Todos") {

        list = list.filter(
            product =>
                product.category === currentFilter
        );

    }


    if (search) {

        list = list.filter(product =>

            product.name
                .toLowerCase()
                .includes(search)

            ||

            product.category
                .toLowerCase()
                .includes(search)

            ||

            product.description
                .toLowerCase()
                .includes(search)

        );

    }


    switch (sortProducts.value) {

        case "low":

            list.sort(
                (a,b) =>
                    a.price - b.price
            );

            break;


        case "high":

            list.sort(
                (a,b) =>
                    b.price - a.price
            );

            break;


        case "name":

            list.sort(
                (a,b) =>
                    a.name.localeCompare(b.name)
            );

            break;

    }


    if (list.length === 0) {

        productsGrid.innerHTML = `

            <div class="empty-products">

                <h3>
                    No encontramos productos
                </h3>

                <p>
                    Intenta con otra búsqueda.
                </p>

            </div>

        `;

        return;

    }


    productsGrid.innerHTML =
        list.map(product => `

            <article class="product-card">

                ${
                    product.oldPrice
                    ?
                    `<span class="product-badge">
                        OFERTA
                    </span>`
                    :
                    ""
                }

                <div class="product-image">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                    >

                </div>


                <div class="product-info">

                    <span class="product-category">
                        ${product.category}
                    </span>

                    <h3>
                        ${product.name}
                    </h3>

                    <p class="product-description">
                        ${product.description}
                    </p>


                    <div class="product-price">

                        <strong>
                            S/ ${formatPrice(product.price)}
                        </strong>

                        ${
                            product.oldPrice
                            ?
                            `<del>
                                S/ ${formatPrice(product.oldPrice)}
                            </del>`
                            :
                            ""
                        }

                    </div>


                    <div class="product-actions">

                        <button
                            class="add-cart"
                            data-id="${product.id}">
                            Agregar al carrito
                        </button>

                        <button
                            class="view-product"
                            data-id="${product.id}"
                            title="Ver producto">
                            ↗
                        </button>

                    </div>

                </div>

            </article>

        `).join("");


    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    addToCart(
                        Number(button.dataset.id)
                    );

                }
            );

        });


    document
        .querySelectorAll(".view-product")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    openProductModal(
                        Number(button.dataset.id)
                    );

                }
            );

        });

}


/* =====================================================
   FILTROS
===================================================== */

filters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filters.forEach(
                item =>
                    item.classList.remove("active")
            );

            button.classList.add("active");

            currentFilter =
                button.dataset.filter;

            renderProducts();

        }
    );

});


/* =====================================================
   BUSCADOR
===================================================== */

productSearch.addEventListener(
    "input",
    renderProducts
);


/* =====================================================
   ORDENAR
===================================================== */

sortProducts.addEventListener(
    "change",
    renderProducts
);


/* =====================================================
   CATEGORÍAS
===================================================== */

document
    .querySelectorAll(".category-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.category;

                currentFilter = category;

                filters.forEach(
                    button => {

                        button.classList.toggle(
                            "active",
                            button.dataset.filter === category
                        );

                    }
                );

                document
                    .getElementById("productos")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

                renderProducts();

            }
        );

    });


document
    .querySelectorAll("[data-category]")
    .forEach(link => {

        if (
            link.classList.contains("filter") ||
            link.classList.contains("category-card")
        ) {
            return;
        }

        link.addEventListener(
            "click",
            () => {

                const category =
                    link.dataset.category;

                currentFilter = category;

                filters.forEach(
                    button => {

                        button.classList.toggle(
                            "active",
                            button.dataset.filter === category
                        );

                    }
                );

                renderProducts();

            }
        );

    });


/* =====================================================
   CARRITO
===================================================== */

const cartBtn =
    document.getElementById("cartBtn");

const cartClose =
    document.getElementById("cartClose");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartOverlay =
    document.getElementById("cartOverlay");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");


function saveCart() {

    localStorage.setItem(
        "neonbyteCart",
        JSON.stringify(cart)
    );

}


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
            id: product.id,
            quantity: 1
        });

    }


    saveCart();

    renderCart();

    showToast(
        `${product.name} agregado al carrito`
    );

}


function changeQuantity(id, amount) {

    const item =
        cart.find(
            product => product.id === id
        );

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product =>
                    product.id !== id
            );

    }


    saveCart();

    renderCart();

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();

    renderCart();

}


function renderCart() {

    if (cart.length === 0) {

        cartItems.innerHTML = `

            <div class="empty-cart">

                <span>🛒</span>

                <h3>
                    Tu carrito está vacío
                </h3>

                <p>
                    Agrega productos para comenzar.
                </p>

            </div>

        `;

        cartCount.textContent = "0";

        cartTotal.textContent = "S/ 0.00";

        return;

    }


    let total = 0;

    let quantityTotal = 0;


    cartItems.innerHTML =
        cart.map(item => {

            const product =
                products.find(
                    p => p.id === item.id
                );

            if (!product) return "";

            const subtotal =
                product.price *
                item.quantity;

            total += subtotal;

            quantityTotal +=
                item.quantity;


            return `

                <div class="cart-item">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div>

                        <h4>
                            ${product.name}
                        </h4>

                        <div class="cart-item-price">
                            S/ ${formatPrice(subtotal)}
                        </div>

                        <div class="quantity">

                            <button
                                data-minus="${product.id}">
                                −
                            </button>

                            <span>
                                ${item.quantity}
                            </span>

                            <button
                                data-plus="${product.id}">
                                +
                            </button>

                        </div>

                    </div>


                    <button
                        class="remove-item"
                        data-remove="${product.id}">
                        ×
                    </button>

                </div>

            `;

        }).join("");


    cartCount.textContent =
        quantityTotal;

    cartTotal.textContent =
        `S/ ${formatPrice(total)}`;


    document
        .querySelectorAll("[data-minus]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeQuantity(
                        Number(button.dataset.minus),
                        -1
                    );

                }
            );

        });


    document
        .querySelectorAll("[data-plus]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    changeQuantity(
                        Number(button.dataset.plus),
                        1
                    );

                }
            );

        });


    document
        .querySelectorAll("[data-remove]")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    removeFromCart(
                        Number(button.dataset.remove)
                    );

                }
            );

        });

}


function openCart() {

    cartDrawer.classList.add("active");

    cartOverlay.classList.add("active");

}

function closeCart() {

    cartDrawer.classList.remove("active");

    cartOverlay.classList.remove("active");

}


cartBtn.addEventListener(
    "click",
    openCart
);

cartClose.addEventListener(
    "click",
    closeCart
);

cartOverlay.addEventListener(
    "click",
    closeCart
);


/* =====================================================
   MODAL
===================================================== */

const productModal =
    document.getElementById("productModal");

const modalClose =
    document.getElementById("modalClose");

const modalContent =
    document.getElementById("modalContent");


function openProductModal(id) {

    const product =
        products.find(
            item => item.id === id
        );

    if (!product) return;


    modalContent.innerHTML = `

        <div class="modal-product">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div>

                <span class="section-tag">
                    ${product.category}
                </span>

                <h2>
                    ${product.name}
                </h2>

                <p>
                    ${product.description}
                </p>

                <div class="modal-price">
                    S/ ${formatPrice(product.price)}
                </div>

                <ul class="spec-list">

                    ${
                        product.specs
                            .map(
                                spec =>
                                    `<li>✓ ${spec}</li>`
                            )
                            .join("")
                    }

                </ul>

                <button
                    class="add-cart modal-add"
                    data-id="${product.id}"
                    style="
                        width:100%;
                        margin-top:20px;
                    ">
                    Agregar al carrito
                </button>

            </div>

        </div>

    `;


    productModal.classList.add("active");


    document
        .querySelector(".modal-add")
        .addEventListener(
            "click",
            () => {

                addToCart(product.id);

                productModal.classList.remove(
                    "active"
                );

            }
        );

}


modalClose.addEventListener(
    "click",
    () => {

        productModal.classList.remove(
            "active"
        );

    }
);


productModal.addEventListener(
    "click",
    event => {

        if (
            event.target === productModal
        ) {

            productModal.classList.remove(
                "active"
            );

        }

    }
);


/* =====================================================
   TOAST
===================================================== */

const toast =
    document.getElementById("toast");


let toastTimeout;


function showToast(message) {

    toast.querySelector("p")
        .textContent = message;

    toast.classList.add("active");


    clearTimeout(toastTimeout);


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "active"
                );

            },
            2500
        );

}


/* =====================================================
   CHECKOUT
===================================================== */

const checkoutBtn =
    document.getElementById("checkoutBtn");


checkoutBtn.addEventListener(
    "click",
    () => {

        if (cart.length === 0) {

            showToast(
                "Tu carrito está vacío"
            );

            return;

        }


        showToast(
            "Pedido preparado correctamente"
        );

    }
);


/* =====================================================
   TEMA
===================================================== */

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light"
        );


        if (
            document.body.classList.contains("light")
        ) {

            themeBtn.textContent = "☾";

        } else {

            themeBtn.textContent = "☀";

        }

    }
);


/* =====================================================
   MENÚ MOBILE
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const mainNav =
    document.getElementById("mainNav");


menuBtn.addEventListener(
    "click",
    () => {

        mainNav.classList.toggle(
            "active"
        );

    }
);


mainNav
    .querySelectorAll("a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "active"
                );

            }
        );

    });


/* =====================================================
   NEWSLETTER
===================================================== */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


newsletterForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const email =
            document.getElementById(
                "newsletterEmail"
            ).value.trim();


        if (!email) return;


        showToast(
            "¡Suscripción realizada correctamente!"
        );


        newsletterForm.reset();

    }
);


/* =====================================================
   COUNTDOWN
===================================================== */

let offerDate =
    new Date();

offerDate.setDate(
    offerDate.getDate() + 3
);


function updateCountdown() {

    const now =
        new Date();

    const difference =
        offerDate - now;


    if (difference <= 0) {

        offerDate =
            new Date();

        offerDate.setDate(
            offerDate.getDate() + 3
        );

        return;

    }


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (difference /
                (1000 * 60 * 60)) % 24
        );

    const minutes =
        Math.floor(
            (difference /
                (1000 * 60)) % 60
        );

    const seconds =
        Math.floor(
            (difference /
                1000) % 60
        );


    document.getElementById(
        "days"
    ).textContent =
        String(days).padStart(2, "0");


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(2, "0");


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(2, "0");


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(2, "0");

}


setInterval(
    updateCountdown,
    1000
);

updateCountdown();


/* =====================================================
   BOTÓN ARRIBA
===================================================== */

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

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


/* =====================================================
   CHAT BOX
   50 PREGUNTAS
===================================================== */

const chatToggle =
    document.getElementById(
        "chatToggle"
    );

const chatBox =
    document.getElementById(
        "chatBox"
    );

const chatClose =
    document.getElementById(
        "chatClose"
    );

const chatMessages =
    document.getElementById(
        "chatMessages"
    );

const chatInput =
    document.getElementById(
        "chatInput"
    );

const chatSend =
    document.getElementById(
        "chatSend"
    );


/* =========================================
   50 PREGUNTAS
========================================= */

const chatbotData = [

    {
        q: "¿Qué productos venden?",
        keywords: [
            "productos",
            "venden",
            "venta",
            "tienen"
        ],
        a: "En NEONBYTE encontrarás laptops, tablets, mouse, teclados, cargadores, power banks, routers, almacenamiento y diferentes accesorios tecnológicos."
    },

    {
        q: "¿Qué laptops tienen?",
        keywords: [
            "laptop",
            "laptops",
            "computadora",
            "computadoras"
        ],
        a: "Contamos con diferentes opciones de laptops para estudio, trabajo y uso diario. Puedes revisar nuestra sección de Laptops para conocer los modelos disponibles."
    },

    {
        q: "¿Venden tablets?",
        keywords: [
            "tablet",
            "tablets"
        ],
        a: "Sí 📱. NEONBYTE cuenta con tablets de diferentes tamaños y características para estudio, entretenimiento y productividad."
    },

    {
        q: "¿Venden mouse?",
        keywords: [
            "mouse",
            "raton",
            "ratón"
        ],
        a: "Sí 🖱️. Tenemos mouse para uso diario y opciones pensadas para usuarios que buscan mayor precisión."
    },

    {
        q: "¿Venden teclados?",
        keywords: [
            "teclado",
            "teclados"
        ],
        a: "Sí ⌨️. Tenemos teclados convencionales y opciones mecánicas para diferentes tipos de usuarios."
    },

    {
        q: "¿Venden cargadores?",
        keywords: [
            "cargador",
            "cargadores",
            "carga"
        ],
        a: "Sí 🔌. Contamos con soluciones de carga para diferentes dispositivos."
    },

    {
        q: "¿Venden power banks?",
        keywords: [
            "power bank",
            "powerbank",
            "bateria portatil",
            "bateria"
        ],
        a: "Sí 🔋. Tenemos power banks para mantener tus dispositivos cargados cuando estás fuera de casa."
    },

    {
        q: "¿Venden routers?",
        keywords: [
            "router",
            "routers",
            "wifi",
            "wi-fi",
            "internet"
        ],
        a: "Sí 📡. En la categoría Redes encontrarás routers y equipos relacionados con conectividad."
    },

    {
        q: "¿Venden discos SSD?",
        keywords: [
            "ssd",
            "disco",
            "discos",
            "almacenamiento"
        ],
        a: "Sí 💾. Contamos con soluciones de almacenamiento como SSD para mejorar capacidad y rendimiento."
    },

    {
        q: "¿Qué categorías tienen?",
        keywords: [
            "categorias",
            "categorias",
            "categoria"
        ],
        a: "Tenemos Laptops, Periféricos, Energía, Redes y Tablets."
    },

    {
        q: "¿Cuál es el producto más barato?",
        keywords: [
            "barato",
            "barata",
            "economico",
            "economica",
            "precio bajo"
        ],
        a: "Puedes revisar nuestra sección de productos y ordenar por precio para encontrar rápidamente las opciones más económicas."
    },

    {
        q: "¿Tienen productos en oferta?",
        keywords: [
            "oferta",
            "ofertas",
            "descuento",
            "descuentos",
            "promocion"
        ],
        a: "Sí 🔥. En nuestra página mostramos productos y promociones especiales. Revisa la sección de ofertas para encontrar oportunidades."
    },

    {
        q: "¿Los precios están en soles?",
        keywords: [
            "soles",
            "precio",
            "precios"
        ],
        a: "Sí 🇵🇪. Los precios mostrados en nuestra página están expresados en soles peruanos (S/)."
    },

    {
        q: "¿Puedo buscar un producto?",
        keywords: [
            "buscar",
            "busqueda",
            "busqueda"
        ],
        a: "Sí 🔎. Utiliza el buscador de productos para encontrar rápidamente el artículo que necesitas."
    },

    {
        q: "¿Puedo ordenar los productos por precio?",
        keywords: [
            "ordenar",
            "orden",
            "mayor",
            "menor",
            "precio"
        ],
        a: "Sí. Puedes utilizar las opciones de ordenamiento para visualizar los productos de menor a mayor precio o viceversa."
    },

    {
        q: "¿Cómo puedo comprar?",
        keywords: [
            "comprar",
            "compra",
            "adquirir"
        ],
        a: "Selecciona el producto que te interesa, revisa sus características y utiliza las opciones disponibles de compra o pedido."
    },

    {
        q: "¿Puedo agregar productos al carrito?",
        keywords: [
            "carrito",
            "agregar",
            "añadir"
        ],
        a: "Sí 🛒. Puedes agregar diferentes productos al carrito y revisar las cantidades antes de realizar tu pedido."
    },

    {
        q: "¿Puedo quitar productos del carrito?",
        keywords: [
            "quitar",
            "eliminar",
            "sacar",
            "carrito"
        ],
        a: "Sí. Desde el carrito puedes modificar las cantidades o eliminar productos que ya no quieras."
    },

    {
        q: "¿Puedo comprar varios productos?",
        keywords: [
            "varios",
            "muchos",
            "cantidad"
        ],
        a: "Sí. Puedes seleccionar diferentes productos y agregarlos al carrito para realizar tu pedido."
    },

    {
        q: "¿Hacen ventas por mayor?",
        keywords: [
            "mayor",
            "mayorista",
            "mayoreo"
        ],
        a: "Sí. NEONBYTE cuenta con una sección de pedidos por mayor para clientes que necesitan adquirir varias unidades."
    },

    {
        q: "¿Hacen ventas por menor?",
        keywords: [
            "menor",
            "minorista"
        ],
        a: "Sí. También puedes realizar compras por menor según tus necesidades."
    },

    {
        q: "¿Puedo comprar una sola unidad?",
        keywords: [
            "unidad",
            "una unidad",
            "solo uno"
        ],
        a: "Sí 👍. Puedes realizar pedidos por unidad."
    },

    {
        q: "¿Hacen envíos?",
        keywords: [
            "envio",
            "envios",
            "delivery",
            "entrega"
        ],
        a: "Sí 🚚. NEONBYTE contempla entregas y envíos para facilitar que recibas tus productos."
    },

    {
        q: "¿Hacen envíos en Lima?",
        keywords: [
            "lima",
            "envio lima",
            "envios lima"
        ],
        a: "Sí. Contamos con atención y entregas orientadas principalmente a Lima."
    },

    {
        q: "¿Cuánto cuesta el envío?",
        keywords: [
            "costo envio",
            "precio envio",
            "delivery"
        ],
        a: "El costo puede depender de la zona y del pedido. Consulta antes de confirmar tu compra para conocer el costo correspondiente."
    },

    {
        q: "¿Cuánto demora el envío?",
        keywords: [
            "demora",
            "tarda",
            "tiempo",
            "llega",
            "entrega"
        ],
        a: "El tiempo de entrega puede variar según la ubicación y el tipo de pedido."
    },

    {
        q: "¿Puedo recoger mi pedido?",
        keywords: [
            "recoger",
            "recojo",
            "recoger pedido"
        ],
        a: "Puedes consultar la disponibilidad de recojo en la sucursal correspondiente antes de realizar tu pedido."
    },

    {
        q: "¿Qué métodos de pago aceptan?",
        keywords: [
            "pago",
            "pagos",
            "metodo",
            "tarjeta"
        ],
        a: "Las opciones de pago pueden variar según el pedido. Consulta las alternativas disponibles antes de confirmar tu compra."
    },

    {
        q: "¿Aceptan tarjetas?",
        keywords: [
            "tarjeta",
            "tarjetas",
            "visa",
            "mastercard"
        ],
        a: "Las opciones de pago con tarjeta dependen del canal y del proceso de compra. Consulta disponibilidad al momento de realizar tu pedido."
    },

    {
        q: "¿Aceptan pagos digitales?",
        keywords: [
            "yape",
            "plin",
            "digital",
            "electronico"
        ],
        a: "Las opciones de pago digital pueden depender del canal de atención. Consulta antes de confirmar tu pedido."
    },

    {
        q: "¿Dónde están ubicados?",
        keywords: [
            "ubicacion",
            "direccion",
            "donde"
        ],
        a: "NEONBYTE cuenta con presencia en diferentes ciudades. Puedes revisar nuestra sección de Sucursales."
    },

    {
        q: "¿Tienen sucursal en Lima?",
        keywords: [
            "lima",
            "sucursal lima"
        ],
        a: "Sí 📍. Nuestra página incluye una sucursal en Lima."
    },

    {
        q: "¿Tienen sucursal en Chiclayo?",
        keywords: [
            "chiclayo"
        ],
        a: "Sí 📍. NEONBYTE incluye una sucursal en Chiclayo."
    },

    {
        q: "¿Tienen sucursal en Tarapoto?",
        keywords: [
            "tarapoto"
        ],
        a: "Sí 📍. NEONBYTE incluye una sucursal en Tarapoto."
    },

    {
        q: "¿Tienen sucursal en Cajamarca?",
        keywords: [
            "cajamarca"
        ],
        a: "Sí 📍. NEONBYTE incluye una sucursal en Cajamarca."
    },

    {
        q: "¿Tienen sucursal en Huancayo?",
        keywords: [
            "huancayo"
        ],
        a: "Sí 📍. NEONBYTE incluye una sucursal en Huancayo."
    },

    {
        q: "¿Cuál es el horario de atención?",
        keywords: [
            "horario",
            "horarios",
            "atienden",
            "atencion"
        ],
        a: "Puedes revisar el horario mostrado en nuestra página para conocer nuestros horarios de atención."
    },

    {
        q: "¿Puedo contactar con NEONBYTE?",
        keywords: [
            "contactar",
            "contacto",
            "comunicar"
        ],
        a: "Sí 📲. Puedes utilizar los canales de contacto y redes sociales disponibles en el pie de página."
    },

    {
        q: "¿Tienen redes sociales?",
        keywords: [
            "redes",
            "sociales",
            "instagram",
            "facebook",
            "tiktok"
        ],
        a: "Sí 🌐. NEONBYTE cuenta con enlaces a diferentes redes sociales en el pie de nuestra página."
    },

    {
        q: "¿Tienen Instagram?",
        keywords: [
            "instagram"
        ],
        a: "Sí 📸. Puedes encontrar el enlace de Instagram de NEONBYTE en nuestro pie de página."
    },

    {
        q: "¿Tienen TikTok?",
        keywords: [
            "tiktok"
        ],
        a: "Sí 🎵. Puedes acceder a TikTok desde el apartado de redes sociales de nuestra página."
    },

    {
        q: "¿Tienen Facebook?",
        keywords: [
            "facebook"
        ],
        a: "Sí 👍. Encontrarás el enlace correspondiente en la sección de redes sociales."
    },

    {
        q: "¿Tienen YouTube?",
        keywords: [
            "youtube"
        ],
        a: "Sí ▶️. También contamos con acceso a YouTube desde nuestras redes sociales."
    },

    {
        q: "¿Los productos tienen garantía?",
        keywords: [
            "garantia",
            "garantizado"
        ],
        a: "La garantía depende del producto y de sus condiciones de compra. Recomendamos consultar las condiciones específicas antes de realizar el pedido."
    },

    {
        q: "¿Puedo devolver un producto?",
        keywords: [
            "devolver",
            "devolucion",
            "cambio"
        ],
        a: "Las devoluciones o cambios dependen de las condiciones aplicables al producto. Consulta antes de realizar la compra."
    },

    {
        q: "¿Los productos son nuevos?",
        keywords: [
            "nuevo",
            "nuevos",
            "original"
        ],
        a: "Los productos publicados están destinados a la venta de tecnología y accesorios. Consulta las características específicas de cada producto."
    },

    {
        q: "¿Puedo consultar las características de un producto?",
        keywords: [
            "caracteristicas",
            "especificaciones",
            "specs"
        ],
        a: "Sí 🔎. Cada producto cuenta con información y características que puedes consultar antes de comprar."
    },

    {
        q: "¿Puedo comparar productos?",
        keywords: [
            "comparar",
            "comparacion"
        ],
        a: "Puedes revisar las características y precios de los productos para decidir cuál se adapta mejor a tus necesidades."
    },

    {
        q: "¿Qué laptop recomiendan para estudiar?",
        keywords: [
            "estudiar",
            "estudio",
            "universidad",
            "instituto"
        ],
        a: "Para estudiar recomendamos buscar una laptop equilibrada en procesador, memoria RAM, almacenamiento SSD y duración de batería."
    },

    {
        q: "¿Qué productos sirven para gaming?",
        keywords: [
            "gaming",
            "gamer",
            "juegos",
            "jugar"
        ],
        a: "Para gaming puedes buscar equipos y periféricos adecuados para juegos. Revisa las especificaciones de cada producto antes de elegir."
    },

    {
        q: "¿Qué productos sirven para oficina?",
        keywords: [
            "oficina",
            "trabajo",
            "trabajar"
        ],
        a: "Para oficina puedes encontrar laptops, mouse, teclados, almacenamiento y otros accesorios tecnológicos."
    },

    {
        q: "¿Qué productos sirven para mejorar mi WiFi?",
        keywords: [
            "mejorar wifi",
            "wifi",
            "señal",
            "internet lento"
        ],
        a: "Puedes revisar nuestra categoría Redes, donde encontrarás equipos relacionados con conectividad y redes."
    },

    {
        q: "¿Cómo puedo saber si un producto está disponible?",
        keywords: [
            "disponible",
            "disponibilidad",
            "stock"
        ],
        a: "Revisa la información del producto o consulta directamente con NEONBYTE para confirmar la disponibilidad."
    },

    {
        q: "¿NEONBYTE vende tecnología?",
        keywords: [
            "neonbyte",
            "tecnologia",
            "empresa"
        ],
        a: "Sí ⚡. NEONBYTE es una propuesta enfocada en productos y soluciones de tecnología."
    },

    {
        q: "¿Por qué comprar en NEONBYTE?",
        keywords: [
            "porque",
            "por que",
            "comprar neonbyte"
        ],
        a: "Porque buscamos reunir tecnología, variedad y una experiencia de compra sencilla en un solo lugar."
    }

];


/* =====================================================
   NORMALIZAR CHAT
===================================================== */

function normalizeText(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .trim();

}


/* =====================================================
   ABRIR / CERRAR CHAT
===================================================== */

chatToggle.addEventListener(
    "click",
    () => {

        chatBox.classList.toggle(
            "active"
        );

        if (
            chatBox.classList.contains("active")
        ) {

            setTimeout(
                () => chatInput.focus(),
                300
            );

        }

    }
);


chatClose.addEventListener(
    "click",
    () => {

        chatBox.classList.remove(
            "active"
        );

    }
);


/* =====================================================
   AGREGAR MENSAJE
===================================================== */

function addMessage(
    text,
    type = "bot"
) {

    const message =
        document.createElement("div");

    message.className =
        `message ${type}`;


    if (type === "bot") {

        message.innerHTML = `

            <div class="message-avatar">
                N
            </div>

            <div class="message-content">

                <p>
                    ${text}
                </p>

                <span class="message-time">
                    Ahora
                </span>

            </div>

        `;

    } else {

        message.innerHTML = `

            <div class="message-content">

                <p>
                    ${text}
                </p>

                <span class="message-time">
                    Ahora
                </span>

            </div>

        `;

    }


    chatMessages.appendChild(
        message
    );


    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


/* =====================================================
   ESCRIBIENDO
===================================================== */

function showTyping() {

    const typing =
        document.createElement("div");

    typing.className =
        "message typing-message";


    typing.innerHTML = `

        <div class="message-avatar">
            N
        </div>

        <div class="message-content">

            <div class="typing">

                <span></span>
                <span></span>
                <span></span>

            </div>

        </div>

    `;


    chatMessages.appendChild(
        typing
    );


    chatMessages.scrollTop =
        chatMessages.scrollHeight;


    return typing;

}


/* =====================================================
   BUSCAR RESPUESTA
===================================================== */

function getAnswer(question) {

    const normalized =
        normalizeText(question);


    let bestMatch = null;

    let bestScore = 0;


    chatbotData.forEach(
        item => {

            let score = 0;


            item.keywords.forEach(
                keyword => {

                    const key =
                        normalizeText(keyword);


                    if (
                        normalized.includes(key)
                    ) {

                        score += key.length;

                    }

                }
            );


            const questionWords =
                normalizeText(item.q)
                    .split(" ");


            questionWords.forEach(
                word => {

                    if (
                        word.length > 3 &&
                        normalized.includes(word)
                    ) {

                        score += 2;

                    }

                }
            );


            if (
                score > bestScore
            ) {

                bestScore = score;

                bestMatch = item;

            }

        }
    );


    if (
        bestMatch &&
        bestScore >= 2
    ) {

        return bestMatch.a;

    }


    return `
        No estoy seguro de haber entendido
        tu pregunta 🤔.

        Puedes preguntarme sobre
        <strong>productos, laptops, tablets,
        precios, pedidos, envíos, pagos,
        sucursales, garantías o redes sociales</strong>.
    `;

}


/* =====================================================
   ENVIAR PREGUNTA
===================================================== */

function sendQuestion(
    question = null
) {

    const text =
        question ||
        chatInput.value.trim();


    if (!text) return;


    addMessage(
        text,
        "user"
    );


    chatInput.value = "";


    const typing =
        showTyping();


    setTimeout(
        () => {

            typing.remove();


            const answer =
                getAnswer(text);


            addMessage(
                answer,
                "bot"
            );

        },
        650
    );

}


/* =====================================================
   BOTÓN ENVIAR
===================================================== */

chatSend.addEventListener(
    "click",
    () => {

        sendQuestion();

    }
);


/* =====================================================
   ENTER
===================================================== */

chatInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            sendQuestion();

        }

    }
);


/* =====================================================
   PREGUNTAS RÁPIDAS
===================================================== */

document
    .querySelectorAll(
        ".quick-questions button"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    sendQuestion(
                        button.dataset.question
                    );

                }
            );

        }
    );


/* =====================================================
   INICIALIZAR
===================================================== */

renderProducts();

renderCart();