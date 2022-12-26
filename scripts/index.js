const openEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup');
const closeEditButton = popupProfile.querySelector('.popup__close-button');

openEditButton.addEventListener('click', (event) => {
  console.log(event);
  popupProfile.classList.add('popup_opened');
})

closeEditButton.addEventListener('click', (event) => {
  console.log(event);
  popupProfile.classList.remove('popup_opened');
})

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('#profile-name');
let jobInput = formElement.querySelector('#profile-occupation');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__occupation');

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
}

function handleFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  jobInput.value;
  closePopup(popupProfile);
}

formElement.addEventListener('submit', handleFormSubmit);



