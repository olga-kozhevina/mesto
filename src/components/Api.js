class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl,
    this._headers = {
      authorization: options.token,
      'Content-Type': 'application/json'
    };
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }
}

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-61',
  token: '52fc6959-8692-45e7-a047-982dcb1b275b'
});

export default api;