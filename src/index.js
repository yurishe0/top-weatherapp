import { Data } from "./Data";
import { UI } from "./UI";

const input = document.querySelector("#location");
const button = document.querySelector("button");

// data containers
const weatherInfoMain = document.querySelector("#weather-info__main");
const headerContainer = document.querySelector("#header-container");
const timeContainer = document.querySelector("#time-container");
const weatherInfoOther = document.querySelector("#weather-info__other");
const forecastContainer = document.querySelector("#forecast-container");
const creditsContainer = document.querySelector("#credits-container");

button.addEventListener("click", async () => {
    const data = await Data.getWeatherData(input.value);
    UI.updateBackground("sunny");
})
