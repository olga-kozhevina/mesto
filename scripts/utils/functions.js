// Открытие попапа

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('mousedown', handleOverlayClick);
  document.addEventListener('keydown', handleEscape);
}

// Закрытие попапа

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('mousedown', handleOverlayClick);
  document.removeEventListener('keydown', handleEscape);
}

// Закрытие попапов кликом на оверлей

function handleOverlayClick(event) {
  const openedPopup = document.querySelector('.popup_opened');
  if (event.target === openedPopup) {
    closePopup(openedPopup);
  }
}

// Закрытие попапов с помощью Escape

function handleEscape(event) {
  if (event.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

export {openPopup, closePopup, handleOverlayClick, handleEscape};