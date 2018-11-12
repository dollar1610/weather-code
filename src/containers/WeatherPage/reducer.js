import { fromJS } from 'immutable';
import { GET_WEATHER_DATA, LOADING } from './constants';

const initialState = fromJS({
  WeatherData : {},
  loading: false,
});

export function WeatherPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
    case GET_WEATHER_DATA:
      return state.set('WeatherData', action.data);
    case LOADING:
      return state.set('loading', action.data);
  }
}