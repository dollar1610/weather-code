import React from 'react';
import './index.scss';

export default function DayWeather(props) {
  return (
    <div className={`weather-item weather-item--${props.item.weather}`}>
      <div className="weather-item-date">
        <div className="weather-item-date-week">
          <span>{props.item.dayWeek}</span>
        </div>
        <div className="weather-item-date-month">
          <span>{`${props.item.dayMonth} ${props.item.month}`}</span>
        </div>
      </div>
      <div className="weather-item-value">
        <div className="weather-item-value-temp">
          <span>{props.item.tempDay}<sup><small>0</small></sup>{`/${props.item.tempNight}`}</span>
        </div>
        <img src={`http://openweathermap.org/img/w/${props.item.icon}.png`} alt=""  /> 
      </div>
    </div>
  );
}
