const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen?"ri-close-line":"ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".range__card", {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".location__image img", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal(".location__content .section__header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".location__content p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".location__content .location__btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".story__card", {
    ...scrollRevealOption,
    interval: 500,
});

const selectCards = document.querySelectorAll(".select__card");
selectCards[0].classList.add("show__info");

const price = [
    "287.500.000 - Ertiga GL AT", "276.500.000 - Ertiga GL MT", "339.800.000 - XL7 Alpha Kuro Hybrid", 
    "341.800.000 - XL7 Alpha Kuro Hybrid 2 Tone", "335.800.000 - XL7 Alpha Hybrid", 
    "337.800.000 - XL7 Alpha Hybrid 2 Tone", "324.600.000 - XL7 Beta Hybrid", "295.800.000 - XL7 Zeta",
    "505.600.000 - Jimny 5-Door","508.600.000 - Jimny 5-Door 2 Tone", 
    "486.200.000 - Jimny 3-Door","499.900.000 - Jimny 3-Door 2 Tone", 
    "337.100.000 - Fronx SGX Hybrid 2 Tone", "335.100.000 - Fronx SGX Hybrid","309.200.000 - Fronx GX Hybrid", 
    "279.600.000 - Fronx GL"
];

const priceEl = document.getElementById("select-price");

function updateSwiperImage(eventName, args){
    if(eventName === "slideChangeTransitionStart") {
        const index = args && args[0].realIndex;
        priceEl.innerText = price [index];
        selectCards.forEach((item) => {
            item.classList.remove("show__info");
        });
        selectCards[index].classList.add("show__info");
    }
}

const swiper = new Swiper(".swiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",

    coverflowEffect: {
        rotate: 0,
        depth: 500,
        modifier: 1,
        scale: 0.75,
        slideShadows: false,
        stretch: -100,
    },

    on: {
        slideChange: function () {
            const index = this.realIndex;

            priceEl.innerText = price[index];

            selectCards.forEach(item => {
                item.classList.remove("show__info");
            });

            selectCards[index].classList.add("show__info");
        }
    }
});

const banner = document.querySelector(".banner__wrapper");

const bannerContent = Array.from(banner.children);

bannerContent.forEach(item => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
});

const jimnyData = {
    "3d": {
        title: "3 DOOR SINGLE TONE",
        price: "486.200.000 IDR",
        colors: [
            {name:"Metallic Silky Silver", file:"3d_metalic_silky_silver.webp", color:"#828992"},
            {name:"Pearl Bluish Black", file:"3d_pearl_bluish_black.webp", color:"#000000"},
            {name:"Medium Gray", file:"3d_medium_gray.webp", color:"#555"},
            {name:"Pearl Pure White", file:"3d_pearl_pure_white.webp", color:"#f5f5f5"},
            {name:"Jungle Green", file:"3d_jungle_green.webp", color:"#0b520b"}
        ]
    },

    "3d_2t": {
        title: "3 DOOR TWO TONE",
        price: "499.900.000 IDR",
        colors: [
            {name:"Metallic Chiffon Ivory + Pearl Bluish Black", file:"3d_2t_chiffon_ivory.webp", color:"#cebd9c"},
            {name:"Metallic Brisk Blue + Pearl Bluish Black", file:"3d_2t_brisk_blue.webp", color:"#2638db"},
            {name:"Kinetic Yellow + Pearl Bluish Black", file:"3d_2t_kinetic_yellow.webp", color:"#f0ec17"}
        ]
    },

    "5d": {
        title: "5 DOOR SINGLE TONE",
        price: "505.600.000 IDR",
        colors: [
            {name:"Granite Gray Metallic", file:"5d_granite_gray_metallic.webp", color:"#666"},
            {name:"Jungle Green", file:"5d_jungle_green.webp", color:"#2d3b2f"},
            {name:"Pearl Bluish Black", file:"5d_pearl_bluish_black.webp", color:"#000000"}
        ]
    },

    "5d_2t": {
        title: "5 DOOR TWO TONE",
        price: "508.600.000 IDR",
        colors: [
            {name:"Metallic Sizzling Red + Pearl Bluish Black", file:"5d_2t_sizzling_red.webp", color:"#b11226"},
            {name:"Kinetic Yellow + Pearl Bluish Black", file:"5d_2t_kinetic_yellow.webp", color:"#d4c900"},
            {name:"Metallic Chiffon Ivory + Pearl Bluish Black", file:"5d_2t_chiffon_ivory.webp", color:"#cebd9c"}
        ]
    }
};

function openJimnyModal() {
    document.getElementById("jimny-modal").style.display = "flex";
    renderJimny();
}

function closeJimnyModal() {
    document.getElementById("jimny-modal").style.display = "none";
}

function renderJimny() {
    const container = document.getElementById("jimny-container");
    container.innerHTML = "";

    Object.keys(jimnyData).forEach(type => {
        const data = jimnyData[type];

        let html = `
            <div class="jimny-card">
                <h4>JIMNY</h4>
                <p>${data.title}</p>

                <img id="img-${type}" src="foto-mobil/Jimny/cards/${data.colors[0].file}">

                <div class="colors">
        `;

        data.colors.forEach(c => {
            html += `
                <span 
                  style="background:${c.color}"
                  onclick="changeColor('${type}','${c.file}','${c.name}')">
                </span>
            `;
        });

        html += `
                </div>

                <p id="color-${type}">${data.colors[0].name}</p>
                <h3>${data.price}</h3>
                <small>OTR Sumatera Utara</small>
            </div>
        `;

        container.innerHTML += html;
    });
}

function changeColor(type, file, name) {
    document.getElementById(`img-${type}`).src =
        "foto-mobil/Jimny/cards/" + file;

    document.getElementById(`color-${type}`).innerText = name;
}