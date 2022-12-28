const openEditButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_type_profile');
const closeEditButton = popupProfile.querySelector('.popup__close-button');

openEditButton.addEventListener('click', editProfile);

function openPopup(popupName) {
  popupName.classList.add('popup_opened');
}

function editProfile() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

closeEditButton.addEventListener('click', (event) => {
  closePopup(popupProfile)
});

function closePopup(popupName) {
  popupName.classList.remove('popup_opened');
}

let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input_type_name');
let jobInput = formElement.querySelector('.popup__input_type_occupation');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__occupation');


function handleFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

formElement.addEventListener('submit', handleFormSubmit);

