import './index.css';

import {
  formProfile,
  formCardModal,
  validationConfig,
  openEditButton,
  openAddButton,
  nameInput,
  jobInput,
  errorMessage,
  options,
  avatarContainer,
  formAvatar,
  userProfile,
  avatarInput
} from '../utils/constants.js';

import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import Card from '../components/Card.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Api from '../components/Api.js';

// 1) Проверка на валидацию
const validateProfile = new FormValidator(validationConfig, formProfile);
validateProfile.enableValidation();
const validateCardModal = new FormValidator(validationConfig, formCardModal);
validateCardModal.enableValidation();
const validateAvatar = new FormValidator(validationConfig, formAvatar);
validateAvatar.enableValidation();

//  2) Создаем экземпляры классов
const addCardPopup = new PopupWithForm('.popup_type_add-card', handleFormSubmitCard);
addCardPopup.setEventListeners();

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', handleFormSubmitProfile);
editProfilePopup.setEventListeners();

const updateAvatarPopup = new PopupWithForm('.popup_type_avatar', handleFormSubmitAvatar);
updateAvatarPopup.setEventListeners();

const zoomImagePopup = new PopupWithImage('.popup_type_card-modal');
zoomImagePopup.setEventListeners();

const confirmDeletePopup = new PopupWithConfirm('.popup_type_confirm');
confirmDeletePopup.setEventListeners();

// - загрузка карточек с сервера в сетку
const cardsList = new Section({
  renderer: (item) => {
    cardsList.addItem(createCard(item));
  },
}, '.photo-grid');

const userInfo = new UserInfo(userProfile);

const api = new Api(options, userInfo);

// 3) Добавляем слушатели открытия попапов
openAddButton.addEventListener('click', () => {
  addCardPopup.open();
  validateCardModal.resetValidation();
});

openEditButton.addEventListener('click', () => {
  validateProfile.resetValidation();
  editProfilePopup.open();
  validateProfile.toggleButtonState();
  fillProfileInfo();
});

avatarContainer.addEventListener('click', () => {
  validateAvatar.resetValidation();
  updateAvatarPopup.open();
})

// 4) Заполнить информацию профиля
userInfo.setUserInfo({
  name: nameInput.value,
  about: jobInput.value
});

function fillProfileInfo() {
  const profileInfo = userInfo.getUserInfo();
  nameInput.value = profileInfo.name;
  jobInput.value = profileInfo.about;
};

// 5) Запрашиваем с сервера информацию о юзере и карточках
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    userInfo.setUserAvatar(user);
    cardsList.renderedItems(cards.slice().reverse());
  })
  .catch((err) => {
    console.log(`Ошибка при получении данных: ${err}`);
    errorMessage.textContent = 'Произошла ошибка при получении данных';
  })

// 6) Создание самой карточки
function createCard(cardData) {
  cardData.currentUser = userInfo.getUserInfo();

  const card = new Card( cardData, '#photo-grid-template', {
    onClick: handleCardClick,

    onLike: (currentData, handleCardLike) => {
      if (card.isLiked()) {
        api.deleteLike(currentData._id)
          .then((newCard) => handleCardLike(newCard.likes))
          .catch((err) => {
            console.log(`Ошибка кнопки лайка: ${err}`);
            errorMessage.textContent = 'Произошла ошибка кнопки лайка';
          })
      } else {
        api.putLike(currentData._id)
          .then((newCard) => handleCardLike(newCard.likes))
          .catch((err) => {
            console.log(`Ошибка кнопки лайка: ${err}`);
            errorMessage.textContent = 'Произошла ошибка кнопки лайка';
          })
      }
    },

    onDelete: (currentData, handleCardDelete) => {
      console.log(currentData._id);
      confirmDeletePopup.open();
      confirmDeletePopup.setConfirmation(() => {
        api.deleteCard(currentData._id)
          .then(() => {
            confirmDeletePopup.close();
            handleCardDelete();
          })
          .catch((err) => {
            console.log(`Ошибка формы удаления карточки: ${err}`);
            errorMessage.textContent = 'Произошла ошибка формы удаления карточки';
          })
      });
    }
  });
  return card.generateCard();
}

// 7) Функция открытия попапа с увеличенным изображения
function handleCardClick(name, link) {
  zoomImagePopup.open(name, link);
}

// 8) Назначаем обработчики отправки формы
function handleFormSubmitCard({name, link}) {
  addCardPopup.showSaving();
  api.addCard({
    name: name, link: link
  })
  .then((data) => {
    cardsList.addItem(createCard(data));
    addCardPopup.close();
  })
  .catch(err => {
    console.log(`Ошибка при добавлении карточки: ${err}`);
    errorMessage.textContent = 'Произошла ошибка при добавлении карточки';
  })
  .finally(() => addCardPopup.removeSaving())
}

function handleFormSubmitProfile({name, about}) {
  editProfilePopup.showSaving();
  api.editUserInfo({
    name: name,
    about: about
  })
  .then((res) => {
    userInfo.setUserInfo(res);
    editProfilePopup.close();
  })
  .catch(err => {
    console.log(`Ошибка отправки формы: ${err}`);
    errorMessage.textContent = 'Произошла ошибка отправки формы';
  })
  .finally(() => editProfilePopup.removeSaving())
};

function handleFormSubmitAvatar() {
  const avatarUrl = avatarInput.value;
  updateAvatarPopup.showSaving();
  api.updateProfileAvatar(avatarUrl)
  .then((data) => {
    userInfo.setUserAvatar(data);
    updateAvatarPopup.close();
  })
  .catch((err) => {
    console.log(`Ошибка отправки формы: ${err}`);
    errorMessage.textContent = 'Произошла ошибка отправки формы';
  })
  .finally(() =>  updateAvatarPopup.removeSaving());
}