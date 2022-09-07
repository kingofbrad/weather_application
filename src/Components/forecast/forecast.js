import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDay = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <React.Fragment>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    alt="weather icon"
                    className="icon-small"
                  />
                  <label className="day">{forecastDay[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)} &#176;C /{" "}
                    {Math.round(item.main.temp_max)} &#176;C{" "}
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label className="">Pressure</label>
                  <label className="">{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="">Humidity</label>
                  <label className="">{item.main.humidity} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="">Clouds</label>
                  <label className="">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="">Wind Speed</label>
                  <label className="">{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="">Sea Level</label>
                  <label className="">{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="">Feels Like</label>
                  <label className="">
                    {Math.round(item.main.feels_like)}&#176;C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </React.Fragment>
  );
};
