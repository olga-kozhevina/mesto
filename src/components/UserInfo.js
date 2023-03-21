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

  setUserInfo({name, about}) {
    this._data.name = name;
    this._data.about = about;
    this._name.textContent = name;
    this._occupation.textContent = about;

  }

  setUserAvatar({avatar}) {
    this._data.avatar = avatar;
    this._avatar.src = avatar;
  }

}
