class Card {
  constructor(cardData, cardSelector, handler) {
    this._cardData = cardData;
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._cardSelector = cardSelector;

    this._handleCardClick = handler.onClick;
    this._handleCardLike = handler.onLike;
    this._handleCardDelete = handler.onDelete;

    this._element = this._getCardTemplate();

    this._likeCount = this._element.querySelector('.photo-grid__like-count');
    this._likeCount.textContent = cardData.likes.length;

    const cardImage = this._element.querySelector('.photo-grid__image');
    cardImage.src = this._link;
    cardImage.alt = this._name;

    const cardName = this._element.querySelector('.photo-grid__item-name');
    cardName.textContent = this._name;

    this._likeButton = this._element.querySelector('.photo-grid__like-button');

    this._deleteButton = this._element.querySelector('.photo-grid__delete-button');

    const cardIsLiked = 'photo-grid__like-button_active';

    if (!this._cardOwner()) {
      this._deleteButton.remove();
    }

    if (this.isLiked()) {
      this._likeButton.classList.add(cardIsLiked);
    } else {
      this._likeButton.classList.remove(cardIsLiked);
    }

    this._setEventListeners();
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
    return this._element;
  }

  _cardOwner() {
    return this._cardData.currentUser._id === this._cardData.owner._id;
  }

  toggleCardLike() {
    this.isLiked() ? this._likeButton.classList.add('photo-grid__like-button_active') : this._likeButton.classList.remove('photo-grid__like-button_active');
  }

  isLiked() {
    return this._cardData.likes.some((like) => {
      return like._id === this._cardData.currentUser._id;
    })
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => { this._handleLike(); });

    this._deleteButton.addEventListener('click', () => {this._handleCardDelete(this._cardData, () => this._cardDelete())
  });

    this._element.querySelector('.photo-grid__image').addEventListener('click', () => { this._handleCardClick(this._name, this._link); });
  }

  _handleLike() {
    this._handleCardLike(this._cardData, (updateLike) => {
      this._cardData.likes = updateLike;
      this.toggleCardLike();
      this._likeCount.textContent = this._cardData.likes.length;
    });
  }

  _cardDelete() {
    this._element.remove();
    this._element = null;
  }

}

export default Card;
