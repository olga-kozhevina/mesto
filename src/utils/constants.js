// Обработчик для закрытия попапа по нажатию на крестик
export const closeButtons = document.querySelectorAll('.popup__close-button');

// Аватар
export const profileAvatar = document.querySelector('.profile__avatar');
export const popupUpdateAvatar = document.querySelector('.popup_type_avatar');
export const formAvatar = popupUpdateAvatar.querySelector('.popup__form');
export const avatarContainer = document.querySelector('.profile__avatar-container');
export const avatarInput = document.querySelector('.popup__input_type_avatar');

// Попап подтверждения
export const popupConfirm = document.querySelector('.popup_type_confirm');

// Серверная ошибка
export const errorMessage = document.querySelector('#error-message');

// Экземпляр юзера
export const userProfile = {
  nameSelector: '.profile__name',
  occupationSelector: '.profile__about',
  avatarSelector: '.profile__avatar'
};

// Редактирование профиля

export const popupProfile = document.querySelector('.popup_type_edit-profile');
export const openEditButton = document.querySelector('.profile__edit-button');

export const formProfile = popupProfile.querySelector('.popup__form');
export const nameInput = formProfile.querySelector('.popup__input_type_name');
export const jobInput = formProfile.querySelector('.popup__input_type_about');

export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__about');

// Константы для реализации функционала самой карточки

export const openAddButton = document.querySelector('.profile__add-button');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const submitCardButton = popupAddCard.querySelector('.popup__submit-button');
export const formCardModal = document.querySelector('#add-card');
export const cardsContainer = document.querySelector('.photo-grid');
export const cardTemplate = document.querySelector('#photo-grid-template');

// Модальное окно карточки

export const zoomPopup = document.querySelector('.popup_type_card-modal');
export const cardModalImage = document.querySelector('.popup__image');
export const cardModalName = document.querySelector('.popup__image-name');

// Константы для отправки новой карточки

export const inputName = document.querySelector('.popup__input_type_card-name');
export const inputLink = document.querySelector('.popup__input_type_image-src');

// Константы конфигураций валидатора

export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_active'
};

// Константы api параметров
export const options = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-61',
  headers: {
    authorization: '52fc6959-8692-45e7-a047-982dcb1b275b',
    'Content-Type': 'application/json'
  }
};
