import './index.css';

import {
  initialCards,
  formProfile,
  formCardModal,
  validationConfig,
  openEditButton,
  openAddButton,
  popupProfile,
  nameInput,
  profileName,
  jobInput,
  profileJob,
  popupAddCard,
  cardsContainer,
  inputName,
  inputLink,
  zoomPopup,
} from '../utils/constants.js';

import FormValidator from '../components/FormValidator';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';
import Card from '../components/Card';
import UserInfo from '../components/UserInfo';
import Section from '../components/Section';

// Проверка на валидацию
const validateProfile = new FormValidator(validationConfig, formProfile);
validateProfile.enableValidation();
const validateCardModal = new FormValidator(validationConfig, formCardModal);
validateCardModal.enableValidation();

//  Создаем экземпляры класса PopupWithForm
const addCardPopup = new PopupWithForm(popupAddCard, handleFormSubmitCard);
addCardPopup.setEventListeners();
const editProfilePopup = new PopupWithForm(popupProfile, handleFormSubmitProfile);
editProfilePopup.setEventListeners();
const zoomImagePopup = new PopupWithImage(zoomPopup);
zoomImagePopup.setEventListeners();


// Добавляем слушатели для открытия попапов
openAddButton.addEventListener('click', () => {
  addCardPopup.open();
  validateCardModal.resetValidation();
  addCardPopup.reset();
});

openEditButton.addEventListener('click', () => {
  const { name, occupation } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = occupation;
  validateProfile.resetValidation();
  editProfilePopup.open();
});

// Редактирование профиля
const userInfo = new UserInfo({
  nameSelector: profileName,
  occupationSelector: profileJob
});

// Создание самой карточки
function createCard(item) {
  const card = new Card(item, '#photo-grid-template', handleCardClick);
  return card.generateCard();
}

// Загрузка карточки в сетку
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    cardList.addItem(card);
  }
}, cardsContainer);

cardList.renderedItems();

// Назначаем обработчики отправки формы
function handleFormSubmitCard() {
  const inputs = {
    name: inputName.value,
    link: inputLink.value
  };

  const newCard = createCard(inputs);
  cardList.addItem(newCard);

  // Очищаем форму и отключаем кнопку отправки
  addCardPopup.close();
  addCardPopup.reset();
  validateCardModal.toggleButtonState();
}

function handleFormSubmitProfile() {
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  editProfilePopup.close();
}

function handleCardClick(name, link) {
  zoomImagePopup.open({ name: name, link: link });
}
