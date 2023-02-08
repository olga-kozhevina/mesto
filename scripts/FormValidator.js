class FormValidator {
  constructor(config, formElement) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }

  /* показать ошибку в полях ввода */

  _showInputError = (inputElement, errorMessage) => {
    const _errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    _errorElement.textContent = errorMessage;
    _errorElement.classList.add(this._errorClass);
  };

  /* скрыть ошибку в полях ввода */

  hideInputError = (inputElement) => {
    const _errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    _errorElement.classList.remove(this._errorClass);
    _errorElement.textContent = '';
  };

  /* установить слушатели */

  _setEventListeners() {
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this.toggleButtonState();
      });
    });
  };

  /* проверка на валидность полей */

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  };

  /* функция на (де)активацию кнопок */

  toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableSubmitButton(this._buttonElement);
    } else {
      this._enableSubmitButton(this._buttonElement);
    }
  };

  /* проверка полей на валидацию */

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  /* вспомогательные функции по (де)активации кнопок */

  _disableSubmitButton() {
    const _buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    _buttonElement.classList.add(this._inactiveButtonClass);
    _buttonElement.disabled = true;
  };

  _enableSubmitButton() {
    const _buttonElement = this._formElement.querySelector(this._submitButtonSelector);

    _buttonElement.classList.remove(this._inactiveButtonClass);
    _buttonElement.disabled = false;
  };

  /* основная функция проверки на валидацию полей */

  enableValidation() {
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  };

}

export default FormValidator;
