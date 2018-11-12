import { put } from 'redux-saga/effects';
import { getWeatherData } from '../action';

function* loadData() {
  try {
    const data = yield fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=bfc2d22bb5800afd064cd85e587bc7dc')
      .then((response => response.json())).then(data => data.list)
    let weatherData = [];
    let c = 1;
    for (let i = 0; i < data.length; i += 1) {
      weatherData[i] = {
        dayMonth: `${new Date(data[c].dt_txt).getDate()}`,
        month: new Date().toLocaleString('eng', { month: 'short' }),
        dayWeek: new Date(data[c].dt_txt).toLocaleTimeString('eng', {weekday: 'long'}).replace(/ [\s\S]+/, ''),
        tempDay: Math.round(data[c].main.temp_max - 273.15),
        tempNight: Math.round(data[c].main.temp_min - 273.13),
        icon: data[c].weather[0].icon,
        weather: data[c].weather[0].main,
      }
      c += 8;
      if (c > data.length) break;
    }
    console.log(data);
    yield put(getWeatherData(weatherData));
  } catch (error) {
    console.error(error);
  }
}

export default loadData;
