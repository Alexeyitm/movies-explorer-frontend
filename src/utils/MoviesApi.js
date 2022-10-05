class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;

    this._getJSON = function(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  };

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => this._getJSON(res))
    .then(res => res)
  };
};

export const apiMovies = new Api('https://api.nomoreparties.co/beatfilm-movies');
