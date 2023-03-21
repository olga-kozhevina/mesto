export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClick = this._handleOverlayClick.bind(this);
    this._closeButton = this._popup.querySelector('.popup__close-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('mousedown', this._handleOverlayClick);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleOverlayClick);
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => {
      this.close();
    })
  }
}
