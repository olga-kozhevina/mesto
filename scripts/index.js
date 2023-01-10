// Переменные

// __редактирование профиля
const openEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup');
const closeEditButton = popupProfile.querySelector('.popup__close-button');

const formElement = document.querySelector('.popup__container');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_occupation');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__occupation');

// __создание карточек
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

// Слушатели

// __редактирование профиля
openEditButton.addEventListener('click', editProfile);
closeEditButton.addEventListener('click', () => {
  closePopup(popupProfile)
});

formElement.addEventListener('submit', handleFormSubmit);

// Функции

// __редактирование профиля
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

// Загружаем карточки с разметки (переменные и функции)

const cardsContainer = document.querySelector('.photo-grid');
const cardTemplate = document.querySelector('#photo-grid-template').content;

const cardInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link
  };
});

function render() {
  cardInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  const cardItem = cardTemplate
    .querySelector('.photo-grid__item')
    .cloneNode(true);
    cardItem.querySelector('.photo-grid__item-name').textContent = name;
    cardItem.querySelector('.photo-grid__image').src = link;

    cardsContainer.append(cardItem);
  }

render();