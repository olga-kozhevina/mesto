import Card from './Card.js';

// Создание самой карточки

function createCard(item) {
  const card = new Card(item, '.photo-grid-template');
  return card.generateCard();
}

// Редактирование профиля

openEditButton.addEventListener('click', editProfile);
closeEditButton.addEventListener('click', () => {
  closePopup(popupProfile)
});

formProfile.addEventListener('submit', handleFormSubmitProfile);

function editProfile() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}


function handleFormSubmitProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

// Создаем карточки (задаем переменные и функции открытия и закрытия)

openAddButton.addEventListener('click', () => { openPopup(popupAddCard); });
closeAddButton.addEventListener('click', () => { closePopup(popupAddCard); });


// Модальное окно карточки

zoomCloseButton.addEventListener('click', () => {
  closePopup(zoomPopup)
});

function renderInitialCards() {
  initialCards.forEach(function (item) {
    const cardSrc = createCard(item);
    cardsContainer.append(cardSrc);
  })
} renderInitialCards();

// Форма отправки новой карточки

formModalCard.addEventListener('submit', handleFormSubmitCard)

function handleFormSubmitCard(event) {
  event.preventDefault();

  const inputs = {
    name: inputName.value,
    link: inputLink.value
  };

  const newCard = createCard(inputs);
  cardsContainer.prepend(newCard);

  closePopup(popupAddCard);
  formModalCard.reset();
  disableSubmitButton(submitCardButton, validationConfig);
}
