import Popup from './Popup.js';
export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElement = this._popup.querySelector('.popup__form');
    this._confirm = () => {};
  }

  setConfirmation(confirm) {
    this._confirm = confirm;
  }

  setEventListeners() {
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      this._confirm();
    });

    super.setEventListeners();
  }

}
