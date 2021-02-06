class Weather {
  constructor(city) {
    this.apiKey = '9319d7bf195f4625ac3103811193004';
    this.city = city
  }

  async getWeather() {
    const response = await fetch(`https://api.apixu.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

    const responseData = await response.json()
    return responseData;

  }

  changeLocation(city) {
    this.city = city;
  }
}