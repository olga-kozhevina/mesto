import {zoomPopup, cardModalImage, cardModalName} from './utils/constants.js';
import { openPopup } from './utils/functions.js';

class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
  }

  _getCardTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.photo-grid__item')
      .cloneNode(true);

      this._element = cardElement;
  }

  _setEventListeners() {
    this._element.querySelector('.photo-grid__image').addEventListener('click', () => { this._handleCardModalClick(); });

    this._element.querySelector('.photo-grid__like-button').addEventListener('click', () => { this._handleCardLike(); });

    this._element.querySelector('.photo-grid__delete-button').addEventListener('click', () => { this._handleCardDelete(); });
  }

  _handleCardModalClick() {
    openPopup(zoomPopup);
    cardModalImage.src = this._link;
    cardModalImage.alt = this._name;
    cardModalName.textContent = this._name;
  }

  _handleCardLike() {
    this._element.querySelector('.photo-grid__like-button').classList.toggle('photo-grid__like-button_active');
  }

  _handleCardDelete() {
    this._element.remove();
  }

  generateCard() {
    this._getCardTemplate();
    this._setEventListeners();
    this._element.querySelector('.photo-grid__image').src = this._link;
    this._element.querySelector('.photo-grid__image').alt = this._name;
    this._element.querySelector('.photo-grid__item-name').textContent = this._name;

    return this._element;
  }
}

export default Card;
