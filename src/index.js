import { Data } from "./Data";
import { UI } from "./UI";

const input = document.querySelector("#location");
const button = document.querySelector("button");

// data containers
export const DOMelements = {
    city: document.querySelector("h1"),
    country: document.querySelector("h2"),
    generalIcon: document.querySelector("#general-icon"),
    weatherName: document.querySelector('#weather-name'),
    temperature: document.querySelector('#temperature'),
    temperatureIcon: document.querySelector('#temperature-icon'),
    precip: document.querySelector('#precip'),
    precipIcon: document.querySelector('#precip-icon'),
    wind: document.querySelector('#wind'),
    windIcon: document.querySelector('#wind-icon'),
    humidity: document.querySelector('#humidity'),
    humidityIcon: document.querySelector('#humidity-icon'),
    time: document.querySelector('#time'),
}

button.addEventListener("click", async () => {
    const data = await Data.getWeatherData(input.value);
    UI.updateBackground(data.weather.condition, data.isDay);
    setTimeout(() => {
        UI.showData(data);
    }, 500);
})
