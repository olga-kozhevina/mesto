// 6 карточек из разметки

export const initialCards = [
  {
    name: 'Медуза австралийская',
    link: 'https://images.unsplash.com/photo-1540968221243-29f5d70540bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
  },
  {
    name: 'Подводные скалы',
    link: 'https://images.unsplash.com/photo-1632763247220-3a0706133316?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  },
  {
    name: 'Морская черепаха',
    link: 'https://images.unsplash.com/photo-1591025207163-942350e47db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Кораллы',
    link: 'https://images.unsplash.com/photo-1520302659201-7ecf4ae863d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80'
  },
  {
    name: 'Красная рыба',
    link: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80'
  },
  {
    name: 'Киты',
    link: 'https://images.unsplash.com/photo-1518399681705-1c1a55e5e883?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80'
  }
];

// Редактирование профиля

export const popupProfile = document.querySelector('.popup_type_edit-profile');
export const openEditButton = document.querySelector('.profile__edit-button');
export const closeEditButton = popupProfile.querySelector('.popup__close-button');

export const formProfile = popupProfile.querySelector('.popup__form');
export const nameInput = formProfile.querySelector('.popup__input_type_name');
export const jobInput = formProfile.querySelector('.popup__input_type_occupation');

export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__occupation');

// Константы для реализации функционала самой карточки

export const openAddButton = document.querySelector('.profile__add-button');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const closeAddButton = popupAddCard.querySelector('.popup__close-button');
export const submitCardButton = popupAddCard.querySelector('.popup__submit-button');
export const formCardModal = document.querySelector('#add-card');
export const cardsContainer = document.querySelector('.photo-grid');
export const cardTemplate = document.querySelector('#photo-grid-template').content;

// Модальное окно карточки

export const zoomPopup = document.querySelector('.popup_type_card-modal');
export const zoomCloseButton = zoomPopup.querySelector('.popup__close-button');
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
