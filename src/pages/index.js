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
  profileAvatar,
  errorMessage
} from '../utils/constants.js';

import FormValidator from '../components/FormValidator';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';
import Card from '../components/Card';
import UserInfo from '../components/UserInfo';
import Section from '../components/Section';
import api from '../components/Api';

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
});

openEditButton.addEventListener('click', () => {
  const { name, occupation } = userInfo.getUserInfo();
  editProfilePopup.setInputValues({ 'profile-name': name, 'profile-occupation': occupation });
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
function handleFormSubmitCard(inputs) {
  const newCard = createCard({
    name: inputs['card-name'],
    link: inputs['url']
  });
  cardList.addItem(newCard);
  addCardPopup.close();
  validateCardModal.toggleButtonState();
}

function handleFormSubmitProfile(inputs) {
  const { 'profile-name': name, 'profile-occupation': occupation } = inputs;
  userInfo.setUserInfo({name, occupation});
  editProfilePopup.close();
}

function handleCardClick(name, link) {
  zoomImagePopup.open({ name: name, link: link});
}

// Запросы на сервер

api.getUserInfo()
.then(user => {
  nameInput.textContent = user.name;
  jobInput.textContent = user.about;
  profileAvatar.src = user.avatar;
})
.catch(err => {
  console.log(`Ошибка при получении информации о пользователе: ${err}`);
  errorMessage.textContent = 'Произошла ошибка при получении информации о пользователе';
});