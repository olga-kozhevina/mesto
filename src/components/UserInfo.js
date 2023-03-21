export default class UserInfo {
  constructor({nameSelector, occupationSelector, avatarSelector}) {
    this._data = {};
    this._name = document.querySelector(nameSelector);
    this._occupation = document.querySelector(occupationSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return this._data;
  }

  setUserInfo(data) {
    this._data = data;
    this._name.textContent = data.name;
    this._occupation.textContent = data.about;

  }

  setUserAvatar({avatar}) {
    this._data.avatar = avatar;
    this._avatar.src = avatar;
  }

}
