// Аватар
export const formAvatar = document.querySelector('.popup__form-avatar');
export const avatarContainer = document.querySelector('.profile__avatar-container');
export const avatarInput = document.querySelector('.popup__input_type_avatar');

// Серверная ошибка
export const errorMessage = document.querySelector('#error-message');

// Данные юзера
export const userProfile = {
  nameSelector: '.profile__name',
  occupationSelector: '.profile__about',
  avatarSelector: '.profile__avatar'
};

// Редактирование профиля
export const openEditButton = document.querySelector('.profile__edit-button');
export const formProfile = document.querySelector('.popup__form');
export const nameInput = formProfile.querySelector('.popup__input_type_name');
export const jobInput = formProfile.querySelector('.popup__input_type_about');

// Константы для реализации функционала самой карточки
export const openAddButton = document.querySelector('.profile__add-button');
export const formCardModal = document.querySelector('#add-card');

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
