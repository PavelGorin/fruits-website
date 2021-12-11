
const hiddenToggle = document.querySelectorAll(".hidden");
const pageHidden = document.querySelector(".page");
const gallerySection = document.querySelector(".gallery");
const whaleBlock = document.querySelector(".whale__background");
const closePopupButton = document.querySelector(".popup__close-button");
const popupFruits = document.querySelector(".popup__fruits");
const fruitsOpenButton = document.querySelectorAll(".our-fruits__button");
const card = document.querySelector(".card__fruits");
const imagePicture = document.querySelector(".popup__img");
const imageName = document.querySelector(".popup__name");
const imageInfo = document.querySelector(".popup__info");
const cardsList = document.querySelector(".our-fruits");
const buttonPopupLeft = document.querySelector(".popup__arrow-left");
const buttonPopupRight = document.querySelector(".popup__arrow-right");
const menuButtonAbiola = document.querySelector(".menu__abiola");
const menuButtonOutFruits = document.querySelectorAll(".page__our-fruits_button");
const menuButtonContacts = document.querySelector(".menu__contacts");
const pageAbiola = document.querySelector(".page__abiola");
const pageOutFruits = document.querySelector(".page__our-fruits");
const pageContacts = document.querySelector(".page__contacts");
const menuMobile = document.querySelector(".menu");
const menuButtonMobile = document.querySelector(".social-icon__button_menu");
const menuButtonMobileClose = document.querySelector(".social-icon__button_menu-close");
const whaleImgMobile = document.querySelector(".whale_bg-mobile");
const pageClass = document.querySelector(".page");
const galleryImageClass = document.querySelector(".gallery__img");
const grayElement = document.querySelectorAll(".gray");
const triangleButtonMenu = document.querySelector(".menu__button-triangle_fruits");
const menuFirstList = document.querySelector(".menu__first-list");

// toggle menu first page

function toggleMenu() {
  menuFirstList.classList.toggle("hidden")
};

triangleButtonMenu.addEventListener("click", toggleMenu);

// Menu mobile toggle

function menuMobileOpen() {
  menuMobile.classList.toggle('menu__mobile');
  menuButtonMobile.classList.toggle('social-icon__button_menu-close');
}

menuButtonMobile.addEventListener("click", menuMobileOpen);

const initialFruits = [
  {
    name: "Banana Cavendish",
    link_black: "./images/fruits/banana_grey.png",
    link_color: "./images/fruits/color/abiola_banana_cavendish_new_2.png",
    link_full: "./images/fruits/full/abiola_banana_cavendish_new.png",
    info: "Origin: Ecuador, Guatemala, Costa-Rica",
    number: 0
  },
  {
    name: "Baby Banana",
    link_black: "./images/fruits/banana_grey (1).png",
    link_color: "./images/fruits/color/banana_color (1).png",
    link_full: "./images/fruits/full/baby_banana.png",
    info: "Origin: Ecuador",
    number: 1
  },
  {
    name: "Red Banana",
    link_black: "./images/fruits/banana_grey (2).png",
    link_color: "./images/fruits/color/banana_color (2).png",
    link_full: "./images/fruits/full/red_banana.png",
    info: "Origin: Ecuador",
    number: 2
  },
  {
    name: "Orange",
    link_black: "./images/fruits/orange_grey.png",
    link_color: "./images/fruits/color/orange_color.png",
    link_full: "./images/fruits/full/orange_photo.png",
    info: "Origin: Turkey, Egypt, Argentina",
    number: 3
  },
  {
    name: "Mandarine",
    link_black: "./images/fruits/mandarine_grey.png",
    link_color: "./images/fruits/color/mandarine_color.png",
    link_full: "./images/fruits/full/mandarine_photo.png",
    info: "Origin: Turkey, Egypt",
    number: 4
  },
  {
    name: "Lemon",
    link_black: "./images/fruits/lemon_grey.png",
    link_color: "./images/fruits/color/lemon_color.png",
    link_full: "./images/fruits/full/lemon_photo.png",
    info: "Origin: Turkey, Egypt, Argentina",
    number: 5
  },
  {
    name: "Grapefruit",
    link_black: "./images/fruits/grapefruit_grey.png",
    link_color: "./images/fruits/color/grapefruit_color.png",
    link_full: "./images/fruits/full/grapefruit_photo.png",
    info: "Origin: Turkey, Egypt",
    number: 6
  },
  {
    name: "Nectarine",
    link_black: "./images/fruits/nectarine_grey.png",
    link_color: "./images/fruits/color/nectarine_color.png",
    link_full: "./images/fruits/full/nectarine_photo.png",
    info: "Origin: Turkey",
    number: 7
  },
  {
    name: "Peach",
    link_black: "./images/fruits/peach_grey.png",
    link_color: "./images/fruits/color/peach_color.png",
    link_full: "./images/fruits/full/peach_photo.png",
    info: "Origin: Turkey",
    number: 8
  },
  {
    name: "Apricot",
    link_black: "./images/fruits/apricot_grey.png",
    link_color: "./images/fruits/color/apricot_color.png",
    link_full: "./images/fruits/full/apricot_photo.png",
    info: "Origin: Turkey",
    number: 9
  },
  {
    name: "Plum",
    link_black: "./images/fruits/plum_grey.png",
    link_color: "./images/fruits/color/plum_color.png",
    link_full: "./images/fruits/full/abiol_plum_high_contrast_5.png",
    info: "Origin: Turkey",
    number: 10
  },
  {
    name: "Sweet cherry",
    link_black: "./images/fruits/sweet_cherry_grey.png",
    link_color: "./images/fruits/color/sweet_cherry_color.png",
    link_full: "./images/fruits/full/sweet_cherry_photo.png",
    info: "Origin: Argentina",
    number: 11
  },
  {
    name: "Grape",
    link_black: "./images/fruits/grape_grey.png",
    link_color: "./images/fruits/color/grape_color.png",
    link_full: "./images/fruits/full/grape_photo.png",
    info: "Origin: Turkey, Egypt, Argentina",
    number: 12
  },
  {
    name: "Watermelon",
    link_black: "./images/fruits/watermelon_grey.png",
    link_color: "./images/fruits/color/watermelon_color.png",
    link_full: "./images/fruits/full/watermelon_photo.png",
    info: "Origin: Brazil",
    number: 13
  },
  {
    name: "Melon",
    link_black: "./images/fruits/melon_grey.png",
    link_color: "./images/fruits/color/melon_color.png",
    link_full: "./images/fruits/full/melon_photo.png",
    info: "Origin: Brazil",
    number: 14
  },
  {
    name: "Pomegranate",
    link_black: "./images/fruits/abiola_pomegranate_new_2_1_bw.png",
    link_color: "./images/fruits/color/abiola_pomegranate_new_2_1_color.png",
    link_full: "./images/fruits/full/abiola_pomegranate_new.png",
    info: "Origin: Turkey, Egypt",
    number: 15
  },
  {
    name: "Pineapple",
    link_black: "./images/fruits/abiol_pineapple_new_2_1_bw.png",
    link_color: "./images/fruits/color/abiol_pineapple_new_2_1_color.png",
    link_full: "./images/fruits/full/abiol_pineapple_new_2.png",
    info: "Origin: Ecuador, Costa Rica",
    number: 16
  },
  {
    name: "Fig",
    link_black: "./images/fruits/fig_grey.png",
    link_color: "./images/fruits/color/fig_color.png",
    link_full: "./images/fruits/full/fig_photo.png",
    info: "Origin: Turkey",
    number: 17
  },
  {
    name: "Pear",
    link_black: "./images/fruits/pear_grey.png",
    link_color: "./images/fruits/color/pear_color.png",
    link_full: "./images/fruits/full/pear_photo.png",
    info: "Origin: Turkey, Argentina",
    number: 18
  },
  {
    name: "Mango",
    link_black: "./images/fruits/mango_grey.png",
    link_color: "./images/fruits/color/mango_color.png",
    link_full: "./images/fruits/full/mango_photo.png",
    info: "Origin: Ecuador, Dominican Republic",
    number: 19
  },
  {
    name: "Coconut",
    link_black: "./images/fruits/coconut_grey.png",
    link_color: "./images/fruits/color/coconut_color.png",
    link_full: "./images/fruits/full/coconut_photo.png",
    info: "Origin: Costa Rica",
    number: 20
  },
  {
    name: "Avocado",
    link_black: "./images/fruits/abiola_avocado_2_bw.png",
    link_color: "./images/fruits/color/abiola_avocado_2_color.png",
    link_full: "./images/fruits/full/abiola_avocado.png",
    info: "Origin: Ecuador, Peru, Dominican Republic, Kenya, Israel",
    number: 21
  },
  {
    name: "Quince",
    link_black: "./images/fruits/abiola_quince_2_1_bw.png",
    link_color: "./images/fruits/color/abiola_quince_2_1_color.png",
    link_full: "./images/fruits/full/abiola_quince.png",
    info: "Origin: Turkey",
    number: 22
  },
  {
    name: "Apple",
    link_black: "./images/fruits/abiola_apple_bw.png",
    link_color: "./images/fruits/color/abiola_apple_color.png",
    link_full: "./images/fruits/full/abiola_apple_2_1.png",
    info: "Origin: Argentina",
    number: 23
  },
];


// Code for toggle page below

function buttonMenuActiveMany(button) {
  button.forEach( (el => {
    el.classList.add("menu__button_active");
  }))
}

function buttonMenuActiveAlone(button) {
  button.classList.add("menu__button_active");
}

function hiddenPage() {
  pageAbiola.classList.add("hidden");
  pageOutFruits.classList.add("hidden");
  pageContacts.classList.add("hidden");
  whaleImgMobile.classList.add("hidden");
  document.querySelector(".menu__button_active").classList.remove("menu__button_active");
}

menuButtonOutFruits.forEach( (el) => {
  el.addEventListener("click", () => {
    hiddenPage();25
    pageOutFruits.classList.remove("hidden")
    buttonMenuActiveMany(menuButtonOutFruits);
  });
} 
);
menuButtonAbiola.addEventListener("click", () => {
  hiddenPage();
  pageAbiola.classList.remove("hidden");
  whaleImgMobile.classList.remove("hidden");
  buttonMenuActiveAlone(menuButtonAbiola);
});
menuButtonContacts.addEventListener("click", () => {
  hiddenPage();
  pageContacts.classList.remove("hidden");
  buttonMenuActiveAlone(menuButtonContacts);
});

// Popup code below 
function openPopup() {
  popupFruits.classList.add("popup__visible");
  document.addEventListener('keydown', imgPopupEscClose); // закрытие  popup при нажатии Esc
}

//Закрытие popup
function closePopup() {
  popupFruits.classList.remove("popup__visible");
  document.removeEventListener('keydown', imgPopupEscClose);
}

closePopupButton.addEventListener("click", closePopup);

function imgPopupEscClose(evt) { // Функция закрытия попап через esc
  if (evt.key === 'Escape') {
    closePopup();
  }
}

popupFruits.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup__visible')) {
    closePopup();
  }
});

//create Card

const createCard = (data) => {
  // Create new card function
  const newCard = card.content.cloneNode(true); // создание клона карточки 
  const elementName = newCard.querySelector(".our-fruits__name");
  const elementImage = newCard.querySelector(".our-fruits__pic");
  const popupImage = newCard.querySelector(".our-fruits__button");

  elementName.textContent = data.name;
  elementImage.src = data.link_black;
  elementImage.alt = data.name;

  function initialPopupContent(info) {
    imagePicture.src = info.link_full;
    imageName.textContent = info.name;
    imageInfo.textContent = info.info;
  }

  function openPopupImage() { // Ф октрытия попапа
    // Open popup image
    openPopup();
    initialPopupContent(data)

    // Slider cod below
    
    let num = data.number;

    document.body.addEventListener('keydown',  (e) => {
      if (e.keyCode == 37) { 
        num--;
        if (num < 0) { num = initialFruits.length - 1 }
        initialPopupContent(initialFruits[num])
      }
      if (e.keyCode == 39) { 
        num++;
        if (num >= initialFruits.length) { num = 0 }
        initialPopupContent(initialFruits[num])
      }

    }); 

    buttonPopupLeft.addEventListener("click", () => {
      num--;
      if (num < 0) { num = initialFruits.length - 1 }
      initialPopupContent(initialFruits[num])
    })
    buttonPopupRight.addEventListener("click", () => {
      num++;
      if (num >= initialFruits.length) { num = 0 }
      initialPopupContent(initialFruits[num])
    })
  }

  popupImage.addEventListener("mouseover", () => elementImage.src = data.link_color);
  //возрат карточки в чб после увода мышки
  //popupImage.addEventListener("mouseout", () => elementImage.src = data.link_black); 
  popupImage.addEventListener("click", openPopupImage);

  return newCard;
};

//Создание карточек фруктов

const renderInitialCards = () => {
  // create start page function
  const items = initialFruits.map((el) => createCard(el));

  cardsList.append(...items);
};

renderInitialCards();

// Изменение фона при прокрутке 

function runOnScroll() {

  grayElement.forEach(el => {
    var distanceFromTop = el.getBoundingClientRect().top;
    if(distanceFromTop < 550) {
      el.classList.remove("gray");
    }else {
      el.classList.add("gray");
    }
  })
}; 
window.addEventListener("scroll", runOnScroll);
