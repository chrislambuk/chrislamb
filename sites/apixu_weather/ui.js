class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.summary = document.getElementById('w-desc');
    this.temp = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.cloud = document.getElementById('w-cloud');
    this.feelslike = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
  }
  paint(weather) {
    this.location.textContent = weather.location.name;
    this.summary.textContent = weather.current.condition.text;
    this.temp.textContent = `${weather.current.temp_c}ºC`;
    this.icon.setAttribute('src', weather.current.condition.icon);
    this.humidity.textContent = `Relative Humidity: ${weather.current.humidity}%`;
    this.cloud.textContent = `Cloud Cover: ${weather.current.cloud}%`;
    this.feelslike.textContent = `Feels Like: ${weather.current.feelslike_c}ºC`;
    this.wind.textContent = `Wind Speed: ${weather.current.wind_mph} mph`;

  }
}