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





