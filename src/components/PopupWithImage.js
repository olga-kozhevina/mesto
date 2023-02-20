import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupImageName = this._popup.querySelector('.popup__image-name');
  }

  open(data) {
    this._popupImageName.textContent = data.name;
    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('click', this._handleOverlayClick);
  }
}
