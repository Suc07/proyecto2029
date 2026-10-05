// =====================================
// PRODUCTOS
// =====================================

const products = [

    {
        id: 1,
        name: "Lenovo Idea Pro",
        category: "Laptops",
        price: 1599,
        oldPrice: 1799,
        image: "fotos/foto1.jpg",
        description: "Laptop equilibrada para estudiar, trabajar y programar."
    },

    {
        id: 2,
        name: "UltraBook X14",
        category: "Laptops",
        price: 2199,
        oldPrice: 2399,
        image: "fotos/foto2.jpg",
        description: "Laptop potente, ligera y preparada para productividad."
    },

    {
        id: 3,
        name: "Tablet Vision 11",
        category: "Tablets",
        price: 899,
        oldPrice: 999,
        image: "fotos/foto3.jpg",
        description: "Tablet de gran pantalla para entretenimiento y estudio."
    },

    {
        id: 4,
        name: "Tablet Air Mini",
        category: "Tablets",
        price: 699,
        oldPrice: null,
        image: "fotos/foto3.jpg",
        description: "Tablet compacta para llevar tus tareas a cualquier lugar."
    },

    {
        id: 5,
        name: "Phantom Mouse",
        category: "Periféricos",
        price: 79,
        oldPrice: 99,
        image: "fotos/foto1.jpg",
        description: "Mouse preciso y cómodo para trabajo y gaming."
    },

    {
        id: 6,
        name: "Mechanical K87",
        category: "Periféricos",
        price: 149,
        oldPrice: null,
        image: "fotos/foto2.jpg",
        description: "Teclado mecánico compacto con respuesta rápida."
    },

    {
        id: 7,
        name: "ChargeCore 65W",
        category: "Energía",
        price: 59,
        oldPrice: 79,
        image: "fotos/foto3.jpg",
        description: "Cargador rápido de 65W para tus dispositivos."
    },

    {
        id: 8,
        name: "PowerCell 20000",
        category: "Energía",
        price: 99,
        oldPrice: null,
        image: "fotos/foto1.jpg",
        description: "Power bank de alta capacidad para tus viajes."
    },

    {
        id: 9,
        name: "Router Nova AX",
        category: "Redes",
        price: 269,
        oldPrice: null,
        image: "fotos/foto2.jpg",
        description: "Router moderno para una conexión rápida y estable."
    },

    {
        id: 10,
        name: "SSD Flash 1TB",
        category: "Redes",
        price: 299,
        oldPrice: 339,
        image: "fotos/foto3.jpg",
        description: "Almacenamiento SSD rápido de 1TB."
    }

];


// =====================================
// VARIABLES
// =====================================

let currentFilter = "all";

let cart = JSON.parse(
    localStorage.getItem("neonbyteCart")
) || [];


// =====================================
// ELEMENTOS
// =====================================

const productsGrid =
    document.getElementById("productsGrid");

const searchInput =
    document.getElementById("searchInput");

const sortSelect =
    document.getElementById("sortSelect");

const cartDrawer =
    document.getElementById("cartDrawer");

const cartItems =
    document.getElementById("cartItems");

const cartCount =
    document.getElementById("cartCount");

const cartTotal =
    document.getElementById("cartTotal");

const overlay =
    document.getElementById("overlay");

const productModal =
    document.getElementById("productModal");

const modalProduct =
    document.getElementById("modalProduct");


// =====================================
// MOSTRAR PRODUCTOS
// =====================================

function renderProducts() {

    let filtered = [...products];

    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    if (currentFilter !== "all") {

        filtered = filtered.filter(
            product =>
                product.category === currentFilter
        );

    }


    if (search !== "") {

        filtered = filtered.filter(product =>

            product.name
                .toLowerCase()
                .includes(search)

            ||

            product.category
                .toLowerCase()
                .includes(search)

        );

    }


    switch (sortSelect.value) {

        case "low":

            filtered.sort(
                (a,b) => a.price - b.price
            );

            break;


        case "high":

            filtered.sort(
                (a,b) => b.price - a.price
            );

            break;


        case "name":

            filtered.sort(
                (a,b) =>
                    a.name.localeCompare(b.name)
            );

            break;

    }


    productsGrid.innerHTML = "";


    if (filtered.length === 0) {

        productsGrid.innerHTML = `
            <div class="no-products">
                <h3>No encontramos productos</h3>
                <p>Prueba con otra búsqueda.</p>
            </div>
        `;

        return;
    }


    filtered.forEach(product => {

        const card =
            document.createElement("article");

        card.className = "product-card";


        card.innerHTML = `

            <div class="product-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onerror="this.style.display='none'"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>


                <div class="product-price">

                    <strong>
                        S/ ${product.price}
                    </strong>

                    ${
                        product.oldPrice
                        ?
                        `<del>S/ ${product.oldPrice}</del>`
                        :
                        ""
                    }

                </div>


                <div class="product-actions">

                    <button
                        class="view-product"
                        data-id="${product.id}"
                    >
                        Ver
                    </button>

                    <button
                        class="add-cart"
                        data-id="${product.id}"
                    >
                        Añadir
                    </button>

                </div>

            </div>
        `;


        productsGrid.appendChild(card);

    });


    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    addToCart(id);

                }
            );

        });


    document
        .querySelectorAll(".view-product")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const id =
                        Number(button.dataset.id);

                    showProduct(id);

                }
            );

        });

}


// =====================================
// FILTROS
// =====================================

document
    .querySelectorAll(".filter-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );


                button.classList.add("active");


                currentFilter =
                    button.dataset.filter;


                renderProducts();

            }
        );

    });


document
    .querySelectorAll("[data-category]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                currentFilter =
                    button.dataset.category;


                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn => {

                        btn.classList.toggle(
                            "active",
                            btn.dataset.filter === currentFilter
                        );

                    });


                renderProducts();


                document
                    .getElementById("productos")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    });


searchInput.addEventListener(
    "input",
    renderProducts
);


sortSelect.addEventListener(
    "change",
    renderProducts
);


// =====================================
// CARRITO
// =====================================

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
            ...product,
            quantity: 1
        });

    }


    saveCart();

    renderCart();

    openCart();

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();

    renderCart();

}


function changeQuantity(id, amount) {

    const item =
        cart.find(
            product => product.id === id
        );


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        removeFromCart(id);

        return;

    }


    saveCart();

    renderCart();

}


function renderCart() {

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Tu carrito está vacío.
            </p>
        `;

        cartCount.textContent = "0";

        cartTotal.textContent = "S/ 0";

        return;

    }


    let total = 0;

    let count = 0;


    cart.forEach(item => {

        total +=
            item.price * item.quantity;

        count += item.quantity;


        const element =
            document.createElement("div");


        element.className = "cart-product";


        element.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <p>
                    S/ ${item.price}
                </p>

            </div>


            <div>

                <button
                    onclick="changeQuantity(${item.id},-1)"
                >
                    −
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    onclick="changeQuantity(${item.id},1)"
                >
                    +
                </button>

                <button
                    onclick="removeFromCart(${item.id})"
                >
                    🗑
                </button>

            </div>
        `;


        cartItems.appendChild(element);

    });


    cartCount.textContent = count;

    cartTotal.textContent =
        `S/ ${total.toFixed(2)}`;

}


function openCart() {

    cartDrawer.classList.add("active");

    overlay.classList.add("active");

}


function closeCart() {

    cartDrawer.classList.remove("active");

    overlay.classList.remove("active");

}


document
    .getElementById("cartBtn")
    .addEventListener(
        "click",
        openCart
    );


document
    .getElementById("closeCart")
    .addEventListener(
        "click",
        closeCart
    );


overlay.addEventListener(
    "click",
    closeCart
);


// =====================================
// MODAL
// =====================================

function showProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    modalProduct.innerHTML = `

        <div class="modal-product">

            <img
                src="${product.image}"
                alt="${product.name}"
            >

            <div>

                <span class="product-category">
                    ${product.category}
                </span>

                <h2>
                    ${product.name}
                </h2>

                <p>
                    ${product.description}
                </p>

                <h3>
                    S/ ${product.price}
                </h3>

                <button
                    class="primary-btn"
                    onclick="addToCart(${product.id}); closeProductModal();"
                >
                    Añadir al carrito
                </button>

            </div>

        </div>
    `;


    productModal.classList.add("active");

}


function closeProductModal() {

    productModal.classList.remove("active");

}


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeProductModal
    );


productModal.addEventListener(
    "click",
    event => {

        if (
            event.target === productModal
        ) {
            closeProductModal();
        }

    }
);


// =====================================
// MODO CLARO / OSCURO
// =====================================

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );


        const light =
            document.body.classList.contains(
                "light-mode"
            );


        localStorage.setItem(
            "neonbyteTheme",
            light ? "light" : "dark"
        );


        themeBtn.textContent =
            light ? "🌙" : "☀";

    }
);


if (
    localStorage.getItem("neonbyteTheme")
    === "light"
) {

    document.body.classList.add(
        "light-mode"
    );

    themeBtn.textContent = "🌙";

}


// =====================================
// MENU MOVIL
// =====================================

const menuBtn =
    document.getElementById("menuBtn");

const mainNav =
    document.getElementById("mainNav");


menuBtn.addEventListener(
    "click",
    () => {

        mainNav.classList.toggle("active");

    }
);


document
    .querySelectorAll(".nav a")
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


// =====================================
// CONTADOR
// =====================================

const offerDate =
    new Date();

offerDate.setDate(
    offerDate.getDate() + 5
);


function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        offerDate.getTime() - now;


    if (distance <= 0) return;


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24))
            /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60))
            /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60))
            /
            1000
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2,"0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2,"0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2,"0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2,"0");

}


setInterval(
    updateCountdown,
    1000
);

updateCountdown();


// =====================================
// CHAT BOX
// 50 PREGUNTAS
// =====================================

const chatButton =
    document.getElementById("chatButton");

const chatBox =
    document.getElementById("chatBox");

const closeChat =
    document.getElementById("closeChat");

const chatMessages =
    document.getElementById("chatMessages");

const chatInput =
    document.getElementById("chatInput");

const sendChat =
    document.getElementById("sendChat");


const answers = [

    {
        keys: ["que productos", "productos venden"],
        answer:
            "Vendemos laptops, tablets, mouse, teclados, cargadores, power banks, routers y SSD."
    },

    {
        keys: ["laptops", "laptop"],
        answer:
            "Tenemos laptops desde S/ 1,599. Puedes revisar la sección Productos para ver nuestras opciones."
    },

    {
        keys: ["tablet", "tablets"],
        answer:
            "Tenemos tablets desde S/ 699."
    },

    {
        keys: ["mouse"],
        answer:
            "Nuestro Phantom Mouse cuesta S/ 79."
    },

    {
        keys: ["teclado", "teclados"],
        answer:
            "El Mechanical K87 cuesta S/ 149."
    },

    {
        keys: ["cargador", "cargadores"],
        answer:
            "Tenemos el ChargeCore 65W por S/ 59."
    },

    {
        keys: ["power bank", "powerbank"],
        answer:
            "Tenemos el PowerCell 20000 por S/ 99."
    },

    {
        keys: ["router", "wifi"],
        answer:
            "Nuestro Router Nova AX cuesta S/ 269."
    },

    {
        keys: ["ssd"],
        answer:
            "Tenemos un SSD Flash de 1TB por S/ 299."
    },

    {
        keys: ["precio", "precios"],
        answer:
            "Nuestros precios van desde S/ 59 hasta más de S/ 2,000 dependiendo del producto."
    },

    {
        keys: ["oferta", "ofertas", "promocion"],
        answer:
            "Sí. Algunos productos tienen precios promocionales. Revisa las tarjetas de productos."
    },

    {
        keys: ["buscar"],
        answer:
            "Puedes utilizar el buscador de la sección Productos para encontrar rápidamente un artículo."
    },

    {
        keys: ["comprar"],
        answer:
            "Puedes añadir productos al carrito y luego entrar a Hacer pedido para completar tus datos."
    },

    {
        keys: ["pedido", "pedidos"],
        answer:
            "Puedes realizar tu pedido desde el botón Hacer pedido o desde el carrito."
    },

    {
        keys: ["mayor"],
        answer:
            "Sí, puedes consultar pedidos por mayor mediante nuestro formulario."
    },

    {
        keys: ["menor"],
        answer:
            "También atendemos pedidos por menor."
    },

    {
        keys: ["unidad"],
        answer:
            "Sí, puedes comprar por unidad."
    },

    {
        keys: ["envio", "envíos"],
        answer:
            "Realizamos atención y coordinación de pedidos. Los detalles del envío se coordinan al realizar el pedido."
    },

    {
        keys: ["lima"],
        answer:
            "Tenemos presencia en Lima."
    },

    {
        keys: ["costo envio"],
        answer:
            "El costo de envío depende de la ubicación y del pedido. Se coordina al momento de comprar."
    },

    {
        keys: ["tiempo envio"],
        answer:
            "El tiempo depende de la ubicación y disponibilidad del producto."
    },

    {
        keys: ["recojo", "recoger"],
        answer:
            "Puedes consultar las opciones de atención y recojo mediante el formulario."
    },

    {
        keys: ["pago", "pagos"],
        answer:
            "Los métodos de pago se coordinan al momento de realizar el pedido."
    },

    {
        keys: ["tarjeta", "tarjetas"],
        answer:
            "Puedes consultar las opciones de pago disponibles al momento de realizar tu pedido."
    },

    {
        keys: ["yape"],
        answer:
            "Consulta los métodos de pago disponibles al realizar tu pedido."
    },

    {
        keys: ["ubicacion", "ubicación", "donde"],
        answer:
            "Tenemos sucursales en Lima, Chiclayo, Tarapoto, Cajamarca y Huancayo."
    },

    {
        keys: ["sucursal"],
        answer:
            "Contamos con sucursales en Lima, Chiclayo, Tarapoto, Cajamarca y Huancayo."
    },

    {
        keys: ["chiclayo"],
        answer:
            "Tenemos una sucursal en Chiclayo, Lambayeque."
    },

    {
        keys: ["tarapoto"],
        answer:
            "Tenemos una sucursal en Tarapoto, San Martín."
    },

    {
        keys: ["cajamarca"],
        answer:
            "Tenemos una sucursal en Cajamarca."
    },

    {
        keys: ["huancayo"],
        answer:
            "Tenemos una sucursal en Huancayo, Junín."
    },

    {
        keys: ["horario", "horarios"],
        answer:
            "Nuestro horario de atención puede variar. Puedes realizar una consulta mediante el formulario."
    },

    {
        keys: ["contacto", "contactar"],
        answer:
            "Puedes contactarnos mediante WhatsApp o utilizando el formulario de pedidos."
    },

    {
        keys: ["whatsapp"],
        answer:
            "Nuestro WhatsApp es +51 929 647 116."
    },

    {
        keys: ["instagram"],
        answer:
            "Puedes encontrarnos en Instagram desde el enlace de nuestras redes."
    },

    {
        keys: ["tiktok"],
        answer:
            "También tenemos presencia en TikTok."
    },

    {
        keys: ["facebook"],
        answer:
            "Puedes encontrarnos en Facebook."
    },

    {
        keys: ["youtube"],
        answer:
            "También puedes encontrarnos en YouTube."
    },

    {
        keys: ["garantia", "garantía"],
        answer:
            "Los productos cuentan con respaldo y atención según las condiciones correspondientes."
    },

    {
        keys: ["devolucion", "devolución"],
        answer:
            "Para una devolución debes comunicarte con atención al cliente para revisar el caso."
    },

    {
        keys: ["original"],
        answer:
            "En NEONBYTE buscamos ofrecer productos originales y seleccionados."
    },

    {
        keys: ["nuevo", "nuevos"],
        answer:
            "Trabajamos con productos nuevos según disponibilidad."
    },

    {
        keys: ["especificaciones", "especificacion"],
        answer:
            "Puedes seleccionar Ver en cada producto para consultar su información."
    },

    {
        keys: ["comparar", "comparacion"],
        answer:
            "Sí. Puedes revisar los productos y comparar sus precios y categorías."
    },

    {
        keys: ["estudiar", "estudio"],
        answer:
            "Para estudiar recomendamos una laptop equilibrada como la Lenovo Idea Pro."
    },

    {
        keys: ["gaming", "jugar"],
        answer:
            "Para gaming conviene revisar primero las especificaciones de la laptop y la tarjeta gráfica."
    },

    {
        keys: ["trabajo", "oficina"],
        answer:
            "Para oficina puedes elegir una laptop equilibrada y accesorios como mouse y teclado."
    },

    {
        keys: ["stock", "disponible"],
        answer:
            "La disponibilidad puede cambiar. Consulta mediante el formulario antes de realizar tu pedido."
    },

    {
        keys: ["neonbyte"],
        answer:
            "NEONBYTE es una tienda tecnológica enfocada en productos para estudio, trabajo, entretenimiento y productividad."
    },

    {
        keys: ["porque comprar", "por que comprar"],
        answer:
            "Porque buscamos ofrecer tecnología seleccionada, atención rápida, precios competitivos y respaldo."
    },

    {
        keys: ["pagina", "web"],
        answer:
            "Nuestra página oficial está disponible en suc07.github.io/proyecto2029/."
    }

];


// =====================================
// RESPUESTA DEL CHAT
// =====================================

function normalize(text) {

    return text
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g,"");

}


function getAnswer(question) {

    const normalized =
        normalize(question);


    for (const item of answers) {

        for (const key of item.keys) {

            if (
                normalized.includes(
                    normalize(key)
                )
            ) {

                return item.answer;

            }

        }

    }


    return `
        No estoy seguro de esa consulta 😅.
        Puedes preguntarme por productos, precios,
        pedidos, envíos, sucursales, WhatsApp,
        garantías o nuestra página.
    `;

}


function addMessage(text,type) {

    const message =
        document.createElement("div");

    message.className =
        type === "user"
        ? "user-message"
        : "bot-message";

    message.textContent = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop =
        chatMessages.scrollHeight;

}


function sendQuestion(question) {

    if (!question.trim()) return;


    addMessage(
        question,
        "user"
    );


    chatInput.value = "";


    setTimeout(
        () => {

            addMessage(
                getAnswer(question),
                "bot"
            );

        },
        500
    );

}


sendChat.addEventListener(
    "click",
    () => sendQuestion(
        chatInput.value
    )
);


chatInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            sendQuestion(
                chatInput.value
            );

        }

    }
);


chatButton.addEventListener(
    "click",
    () => {

        chatBox.classList.toggle(
            "active"
        );

    }
);


closeChat.addEventListener(
    "click",
    () => {

        chatBox.classList.remove(
            "active"
        );

    }
);


document
    .querySelectorAll(".quick-questions button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                sendQuestion(
                    button.dataset.question
                );

            }
        );

    });


// =====================================
// BACK TO TOP
// =====================================

const backTop =
    document.getElementById("backTop");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backTop.classList.add("show");

        } else {

            backTop.classList.remove("show");

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


// =====================================
// INICIAR
// =====================================

renderProducts();

renderCart();
