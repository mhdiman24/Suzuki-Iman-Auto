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

/*------------------------------------Jimny----------------------------------*/
const jimnyData = {
    "3d": {
        title: "3 DOOR SINGLE TONE",
        price: "486.200.000 IDR",
        colors: [
            {name:"Metallic Silky Silver", file:"3d_metalic_silky_silver.png", color:"#828992"},
            {name:"Pearl Bluish Black", file:"3d_pearl_bluish_black.png", color:"#000000"},
            {name:"Medium Gray", file:"3d_medium_gray.png", color:"#555"},
            {name:"Pearl Pure White", file:"3d_pearl_pure_white.png", color:"#f5f5f5"},
            {name:"Jungle Green", file:"3d_jungle_green.png", color:"#0b520b"}
        ]
    },

    "3d_2t": {
        title: "3 DOOR TWO TONE",
        price: "499.900.000 IDR",
        colors: [
            {name:"Metallic Chiffon Ivory + Pearl Bluish Black", file:"3d_2t_chiffon_ivory.png", color:"#cebd9c"},
            {name:"Metallic Brisk Blue + Pearl Bluish Black", file:"3d_2t_brisk_blue.png", color:"#2638db"},
            {name:"Kinetic Yellow + Pearl Bluish Black", file:"3d_2t_kinetic_yellow.png", color:"#f0ec17"}
        ]
    },

    "5d": {
        title: "5 DOOR SINGLE TONE",
        price: "505.600.000 IDR",
        colors: [
            {name:"Granite Gray Metallic", file:"5d_granite_gray_metallic.png", color:"#666"},
            {name:"Jungle Green", file:"5d_jungle_green.png", color:"#2d3b2f"},
            {name:"Pearl Bluish Black", file:"5d_pearl_bluish_black.png", color:"#000000"}
        ]
    },

    "5d_2t": {
        title: "5 DOOR TWO TONE",
        price: "508.600.000 IDR",
        colors: [
            {name:"Metallic Sizzling Red + Pearl Bluish Black", file:"5d_2t_sizzling_red.png", color:"#b11226"},
            {name:"Kinetic Yellow + Pearl Bluish Black", file:"5d_2t_kinetic_yellow.png", color:"#d4c900"},
            {name:"Metallic Chiffon Ivory + Pearl Bluish Black", file:"5d_2t_chiffon_ivory.png", color:"#cebd9c"}
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

/*------------------------------------XL7----------------------------------*/
const xl7Data = {
  "2t_alpha": {
    title: "XL7 ALPHA 2 TONE",
    price: "Rp 337.800.000",
    colors: [
      {name:"Savanna Ivory + Black", file:"2t_xl7_alpha_savanna_ivory.webp", color:"#d8c7a3"},
      {name:"Sunrise Orange + Black", file:"2t_xl7_alpha_sunrise_orange.webp", color:"#e65c2c"},
      {name:"White + Black", file:"2t_xl7_alpha_white_black.webp", color:"#eee"}
    ]
  },

  "2t_kuro": {
    title: "XL7 ALPHA KURO 2 TONE",
    price: "Rp 341.800.000",
    colors: [
      {name:"Savanna Ivory + Black", file:"2t_xl7_kuro_savanna_ivory.webp", color:"#d8c7a3"},
      {name:"White + Black", file:"2t_xl7_kuro_white_black.webp", color:"#eee"}
    ]
  },

  "st_alpha": {
    title: "XL7 ALPHA",
    price: "Rp 335.800.000",
    colors: [
      {name:"Cool Black", file:"st_xl7_alpha_cool_black.webp", color:"#111"}
    ]
  },

  "st_kuro": {
    title: "XL7 ALPHA KURO",
    price: "Rp 339.800.000",
    colors: [
      {name:"Cool Black", file:"st_xl7_kuro_cool_black.webp", color:"#111"}
    ]
  },

  "beta": {
    title: "XL7 BETA",
    price: "Rp 324.600.000",
    colors: [
      {name:"Cool Black", file:"xl7_beta_cool_black.webp", color:"#111"},
      {name:"Magma Gray", file:"xl7_beta_metallic_magma_gray.webp", color:"#555"},
      {name:"Brave Khaki", file:"xl7_beta_pearl_brave_khaki.webp", color:"#8b7d4b"},
      {name:"Snow White", file:"xl7_beta_snow_white_pearl.webp", color:"#eee"}
    ]
  },

  "zeta": {
    title: "XL7 ZETA",
    price: "Rp 295.800.000",
    colors: [
      {name:"Cool Black", file:"xl7_zeta_cool_black.webp", color:"#111"},
      {name:"Magma Gray", file:"xl7_zeta_metallic_magma_gray.webp", color:"#555"},
      {name:"Brave Khaki", file:"xl7_zeta_pearl_brave_khaki.webp", color:"#8b7d4b"},
      {name:"Snow White", file:"xl7_zeta_snow_white_pearl.webp", color:"#eee"}
    ]
  }
};

function renderXL7() {
  const container = document.getElementById("xl7Container");
  container.innerHTML = "";

  Object.keys(xl7Data).forEach(type => {
    const car = xl7Data[type];

    const card = document.createElement("div");
    card.className = "jimny-card";

    card.innerHTML = `
      <h3>${car.title}</h3>
      <img id="xl7-${type}-img" src="foto-mobil/XL7/cards/${car.colors[0].file}">
      
      <div class="colors">
        ${car.colors.map(c => `
          <span 
            style="background:${c.color}" 
            onclick="changeXL7Color('${type}','${c.file}','${c.name}')">
          </span>
        `).join("")}
      </div>

      <p id="xl7-${type}-name">${car.colors[0].name}</p>
      <h4>${car.price}</h4>
      <small>OTR Sumatera Utara</small>
    `;

    container.appendChild(card);
  });
}

function changeXL7Color(type, file, name) {
  document.getElementById(`xl7-${type}-img`).src = "foto-mobil/XL7/cards/" + file;
  document.getElementById(`xl7-${type}-name`).innerText = name;
}

function openXL7Modal() {
  document.getElementById("xl7Modal").style.display = "flex";
  renderXL7();
}

function closeXL7Modal() {
  document.getElementById("xl7Modal").style.display = "none";
}

/*------------------------------------Ertiga----------------------------------*/
const ertigaData = {
  title: "ERTIGA GL",
  price: "Rp 287.500.000",
  colors: [
    {name:"Burgundy Red", file:"ertiga_gl_burgundy_red.webp", color:"#6d1f2b"},
    {name:"Cool Black", file:"ertiga_gl_cool_black.webp", color:"#111"},
    {name:"Mellow Deep Red", file:"ertiga_gl_mellow_deep_red.webp", color:"#8b2c2c"},
    {name:"Metallic Magma Gray", file:"ertiga_gl_metallic_magma_gray.webp", color:"#555"},
    {name:"Metallic Silky Silver", file:"ertiga_gl_metallic_silky_silver.webp", color:"#c0c0c0"},
    {name:"Pearl Brave Khaki", file:"ertiga_gl_pearl_brave_khaki.webp", color:"#8b7d4b"},
    {name:"Snow White Pearl", file:"ertiga_gl_snow_white_pearl.webp", color:"#eee"}
  ]
};

function renderErtiga() {
  const container = document.getElementById("ertigaContainer");

  container.innerHTML = `
    <div class="jimny-card">
      <h3>${ertigaData.title}</h3>
      
      <img id="ertiga-img" src="foto-mobil/Ertiga/cards/${ertigaData.colors[0].file}">
      
      <div class="colors">
        ${ertigaData.colors.map(c => `
          <span 
            style="background:${c.color}" 
            onclick="changeErtigaColor('${c.file}','${c.name}')">
          </span>
        `).join("")}
      </div>

      <p id="ertiga-name">${ertigaData.colors[0].name}</p>
      <h4>${ertigaData.price}</h4>
      <small>OTR Sumatera Utara</small>
    </div>
  `;
}

function changeErtigaColor(file, name) {
  document.getElementById("ertiga-img").src = "foto-mobil/Ertiga/cards/" + file;
  document.getElementById("ertiga-name").innerText = name;
}

function openErtigaModal() {
  document.getElementById("ertigaModal").style.display = "flex";
  renderErtiga();
}

function closeErtigaModal() {
  document.getElementById("ertigaModal").style.display = "none";
}

/*------------------------------------Fronx----------------------------------*/
const fronxData = [
  {
    title: "FRONX SGX 2 TONE",
    price: "Rp 337.100.000",
    colors: [
      {name:"Ice Grayish Blue + Black", file:"2t_fronx_sgx_ice_grayish_blue-black.webp", color:"#6b7a8f"},
      {name:"Pearl Snow White + Black", file:"2t_fronx_sgx_pearl_snow_white-black.webp", color:"#eee"},
      {name:"Savana Ivory + Black", file:"2t_fronx_sgx_savana_ivory-black.webp", color:"#d8c8a5"}
    ]
  },
  {
    title: "FRONX SGX",
    price: "Rp 335.100.000",
    colors: [
      {name:"Cool Black", file:"st_fronx_sgx_cool_black.webp", color:"#111"},
      {name:"Snow White Pearl", file:"st_fronx_sgx_snow_white_pearl.webp", color:"#eee"},
      {name:"Savana Ivory", file:"st_fronx_sgx_savana_ivory.webp", color:"#d8c8a5"}
    ]
  },
  {
    title: "FRONX GX",
    price: "Rp 309.200.000",
    colors: [
      {name:"Cool Black", file:"fronx_gx_cool_black.webp", color:"#111"},
      {name:"Pearl Snow White", file:"fronx_gx_pearl_snow_white.webp", color:"#eee"},
      {name:"Savana Ivory", file:"fronx_gx_savana_ivory.webp", color:"#d8c8a5"},
      {name:"Magma Gray", file:"fronx_gx_magma_gray.webp", color:"#555"}
    ]
  },
  {
    title: "FRONX GL",
    price: "Rp 279.600.000",
    colors: [
      {name:"Cool Black", file:"fronx_gl_cool_black.webp", color:"#111"},
      {name:"Pearl Snow White", file:"fronx_gl_pearl_snow_white.webp", color:"#eee"},
      {name:"Magma Gray", file:"fronx_gl_magma_gray.webp", color:"#555"}
    ]
  }
];

function renderFronx() {
  const container = document.getElementById("fronxContainer");

  container.innerHTML = fronxData.map((car, i) => `
    <div class="jimny-card">
      <h3>${car.title}</h3>

      <img id="fronx-img-${i}" 
           src="foto-mobil/fronx/cards/${car.colors[0].file}">

      <div class="colors">
        ${car.colors.map(c => `
          <span 
            style="background:${c.color}" 
            onclick="changeFronxColor(${i}, '${c.file}', '${c.name}')">
          </span>
        `).join("")}
      </div>

      <p id="fronx-name-${i}">${car.colors[0].name}</p>
      <h4>${car.price}</h4>
      <small>OTR Sumatera Utara</small>
    </div>
  `).join("");
}

function changeFronxColor(index, file, name) {
  document.getElementById(`fronx-img-${index}`).src =
    "foto-mobil/fronx/cards/" + file;

  document.getElementById(`fronx-name-${index}`).innerText = name;
}

function openFronxModal() {
  document.getElementById("fronxModal").style.display = "flex";
  renderFronx();
}

function closeFronxModal() {
  document.getElementById("fronxModal").style.display = "none";
}