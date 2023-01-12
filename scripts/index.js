// Редактирование профиля

const openEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_edit-profile');
const closeEditButton = popupProfile.querySelector('.popup__close-button');

const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_occupation');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');

openEditButton.addEventListener('click', editProfile);
closeEditButton.addEventListener('click', () => {
  closePopup(popupProfile)
});

formElement.addEventListener('submit', handleFormSubmit);

function editProfile() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function openPopup(popupName) {
  popupName.classList.add('popup_opened');
}

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
}

function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}



// Загружаем 6 карточек из разметки (переменные и функции)

const initialCards = [
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
    link: 'https://images.unsplash.com/photo-1515555585025-54136276b6e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
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

const openAddButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const closeAddButton = popupAddCard.querySelector('.popup__close-button');
const submitAddButton = document.querySelector('.popup__submit-button');

const cardsContainer = document.querySelector('.photo-grid');
const cardTemplate = document.querySelector('#photo-grid-template').content;

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
  cardDelete.addEventListener('click', function (event) {
    event.target.parentElement.remove(); });

  return cardItem;
}


function renderCards() {
  initialCards.forEach(function (item) {
    const cardSrc = createCard(item);
    cardsContainer.append(cardSrc);
  })
} renderCards();


openAddButton.addEventListener('click', () => { openPopup(popupAddCard); });
closeAddButton.addEventListener('click', () => {
  closePopup(popupAddCard)
});


const inputName = document.querySelector('.popup__input_type_card-name');
const inputLink = document.querySelector('.popup__input_type_image-src');


submitAddButton.addEventListener('click', handleFormSubmitCard);


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