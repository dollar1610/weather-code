import { DEFAULT_ACTION, GET_WEATHER_DATA, LOADING } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loading(data) {
  return {
    type: LOADING,
    data,
  }
}

export function getWeatherData(data) {
  return {
    type: GET_WEATHER_DATA,
    data,
  };
}