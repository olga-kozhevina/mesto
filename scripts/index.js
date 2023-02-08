import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {initialCards, formProfile, formCardModal, validationConfig, openEditButton, closeEditButton, openAddButton, closeAddButton, zoomCloseButton, popupProfile, nameInput, profileName, jobInput, profileJob, popupAddCard, zoomPopup, cardsContainer, inputName, inputLink} from './utils/constants.js';
import {openPopup, closePopup} from './utils/functions.js';

// Слушатели

openEditButton.addEventListener('click', editProfile);
closeEditButton.addEventListener('click', () => {
  closePopup(popupProfile)
});
formProfile.addEventListener('submit', handleFormSubmitProfile);
formCardModal.addEventListener('submit', handleFormSubmitCard);
openAddButton.addEventListener('click', () => { openPopup(popupAddCard); });
closeAddButton.addEventListener('click', () => { closePopup(popupAddCard); });
zoomCloseButton.addEventListener('click', () => {
  closePopup(zoomPopup)
});

// Проверка на валидацию

const validateProfile = new FormValidator(validationConfig, formProfile);
validateProfile.enableValidation();
const validateCardModal = new FormValidator(validationConfig, formCardModal);
validateCardModal.enableValidation();

// Создание самой карточки

function createCard(item) {
  const card = new Card(item, '#photo-grid-template');
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
}

function handleFormSubmitProfile (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}
