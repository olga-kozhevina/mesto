import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._popup.querySelector('.popup__form');
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this._submitButton = this._formElement.querySelector('.popup__submit-button');
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => { this._formValues[input.name] = input.value });

    return this._formValues;
  }

  reset() {
    this._formElement.reset();
  }

  close() {
    super.close();
    this.reset();
  }

  setInputValues(data) {
    this._inputList.forEach(input => {
      input.value = data[input.name];
    });
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = this._getInputValues();
      this._handleFormSubmit(inputs);

      this.close();
    });
  }

  showSaving() {
    this._submitButton.textContent = 'Сохранение...';
  }

  removeSaving() {
    this._submitButton.textContent = 'Сохранить';
  }

}
