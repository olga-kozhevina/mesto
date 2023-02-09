class Card {
  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._element = this._getCardTemplate();
  }

  _getCardTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.photo-grid__item')
      .cloneNode(true);

      return cardElement;
  }

  generateCard() {
    this._cardImage = this._element.querySelector('.photo-grid__image');
    this._cardName = this._element.querySelector('.photo-grid__item-name');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardName.textContent = this._name;

    this._likeButton = this._element.querySelector('.photo-grid__like-button');
    this._deleteButton = this._element.querySelector('.photo-grid__delete-button');

    this._getCardTemplate();
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => { this._handleCardLike(); });

    this._deleteButton.addEventListener('click', () => { this._handleCardDelete(); });

    this._cardImage.addEventListener('click', () => { this._handleCardClick(this._name, this._link); });
  }

  _handleCardLike() {
    this._likeButton.classList.toggle('photo-grid__like-button_active');
  }

  _handleCardDelete() {
    this._element.remove();
  }

}

export default Card;
