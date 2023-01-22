// Редактирование профиля

const openEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit-profile');
const closeEditButton = popupProfile.querySelector('.popup__close-button');

const formProfile = document.querySelector('.popup__form');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_occupation');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');

openEditButton.addEventListener('click', editProfile);
closeEditButton.addEventListener('click', () => {
  closePopup(popupProfile)
});

formProfile.addEventListener('submit', handleFormSubmit);

function editProfile() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openPopup(popupName) {
  popupName.classList.add('popup_opened');
  document.addEventListener('mousedown', handleOverlayClick);
  document.addEventListener('keydown', handleEscape);
}

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
  document.removeEventListener('click', handleOverlayClick);
  document.removeEventListener('keydown', handleEscape);
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

// Закрытие попапов кликом на оверлей

function handleOverlayClick(event) {
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup && event.target === openedPopup) {
    closePopup(openedPopup);
  }
}

// Закрытие попапов с помощью Escape

function handleEscape(event) {
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup && event.key === 'Escape') {
    closePopup(openedPopup);
  }
}

// Создаем карточки (задаем переменные и функции открытия и закрытия)

const openAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const closeAddButton = popupAddCard.querySelector('.popup__close-button');

const formModalCard = popupAddCard.querySelector('.popup__form');

const cardsContainer = document.querySelector('.photo-grid');
const cardTemplate = document.querySelector('#photo-grid-template').content;

openAddButton.addEventListener('click', () => { openPopup(popupAddCard); });
closeAddButton.addEventListener('click', () => { closePopup(popupAddCard); });


const zoomPopup = document.querySelector('.popup_type_card-modal');
const zoomCloseButton = zoomPopup.querySelector('.popup__close-button');
const cardModalImage = document.querySelector('.popup__image');
const cardModalName = document.querySelector('.popup__image-name');

zoomCloseButton.addEventListener('click', () => {
  closePopup(zoomPopup)
});

// Создание самой карточки

function createCard(item) {

  const cardItem = cardTemplate.querySelector('.photo-grid__item').cloneNode(true);
  const cardImage = cardItem.querySelector('.photo-grid__image');
  cardImage.src = item.link;
  cardImage.alt = item.name;
  const cardName = cardItem.querySelector('.photo-grid__item-name');
  cardName.textContent = item.name;

  const cardLike = cardItem.querySelector('.photo-grid__like-button');
  cardLike.addEventListener('click', function (event) {
    event.target.classList.toggle('photo-grid__like-button_active');
  });

  const cardDelete = cardItem.querySelector('.photo-grid__delete-button');
  cardDelete.addEventListener('click', function () {
    cardItem.remove();
  });

  cardImage.addEventListener('click', function () {
    openPopup(zoomPopup);
    cardModalImage.src = cardImage.src;
    cardModalImage.alt = cardImage.alt;
    cardModalName.textContent = cardImage.alt;
  });

  return cardItem;
}

function renderCards() {
  initialCards.forEach(function (item) {
    const cardSrc = createCard(item);
    cardsContainer.append(cardSrc);
  })
} renderCards();

// Форма отправки новой карточки

const inputName = document.querySelector('.popup__input_type_card-name');
const inputLink = document.querySelector('.popup__input_type_image-src');

formModalCard.addEventListener('submit', handleFormSubmitCard)

function handleFormSubmitCard(event) {
  event.preventDefault();

  const inputs = {};
  inputs.name = inputName.value;
  inputs.link = inputLink.value;

  const newCard = createCard(inputs);
  cardsContainer.prepend(newCard);

  closePopup(popupAddCard);
  inputName.value = '';
  inputLink.value = '';
}







