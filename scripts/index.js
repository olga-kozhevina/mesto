import Card from './Card.js';
import FormValidator from './FormValidator.js';
import { initialCards, formProfile, formCardModal, validationConfig, openEditButton, openAddButton, closeButtons, popupProfile, nameInput, profileName, jobInput, profileJob, popupAddCard, cardsContainer, inputName, inputLink, zoomPopup, cardModalImage, cardModalName } from './utils/constants.js';
import { openPopup, closePopup } from './utils/functions.js';

// Проверка на валидацию

const validateProfile = new FormValidator(validationConfig, formProfile);
validateProfile.enableValidation();
const validateCardModal = new FormValidator(validationConfig, formCardModal);
validateCardModal.enableValidation();


// Слушатели и обработчики

openEditButton.addEventListener('click', editProfile);
formProfile.addEventListener('submit', handleFormSubmitProfile);
formCardModal.addEventListener('submit', handleFormSubmitCard);

openAddButton.addEventListener('click', () => {
  openPopup(popupAddCard);
  validateCardModal.resetValidation();
  inputName.value = '';
  inputLink.value = '';

});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// Создание самой карточки

function createCard(item) {
  const card = new Card(item, '#photo-grid-template', handleCardClick);
  return card.generateCard();
}

// Форма добавления новой карточки

function handleFormSubmitCard(event) {
  event.preventDefault();

  const inputs = {
    name: inputName.value,
    link: inputLink.value
  };

  const newCard = createCard(inputs);
  cardsContainer.prepend(newCard);

  formCardModal.reset();
  validateCardModal.toggleButtonState();
  closePopup(popupAddCard);
}

// Загрузка карточки в сетку

initialCards.forEach((item) => {
  const cardSrc = createCard(item);
  cardsContainer.append(cardSrc);
});

// Редактирование профиля

function editProfile() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  validateProfile.resetValidation();
}

function handleFormSubmitProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

// Получаем на вход данные карточки

function handleCardClick(name, link) {
  cardModalImage.src = link;
  cardModalImage.alt = name;
  cardModalName.textContent = name;
  openPopup(zoomPopup);
}
