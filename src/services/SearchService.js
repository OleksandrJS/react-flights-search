/** @format */

export default class SearchService {
  constructor() {
    this.CITY_API = 'http://api.travelpayouts.com/data/ru/cities.json';
    this.PROXY = 'https://cors-anywhere.herokuapp.com/';
    this.API_KEY = '6af464c149023c58b81e81ab93488992';
    this.PRICE = 'https://min-prices.aviasales.ru/calendar_preload';
  }
  getData = async (url) => {
    const request = await fetch(url);

    if (!request.ok) {
      throw new Error(`Could not fetch ${url}; received ${request.status}`);
    }

    return await request.json();
  };

  getCity = async () => {
    const res = await this.getData(this.PROXY + this.CITY_API);
    return res.filter((item) => item.name);
  };

  getPrice = async (date) => {
    const res = await this.getData(this.PROXY + this.PRICE + date);
    return res;
  };
}
