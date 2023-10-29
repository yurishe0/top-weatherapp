import { Data } from "./Data";
import { UI } from "./UI";

const input = document.querySelector("#location");
const button = document.querySelector("button");

// data containers
export const DOMelements = {
    city: document.querySelector("h1"),
    country: document.querySelector("h2"),
    weatherIcon: document.querySelector(".weather-icon"),
    weatherName: document.querySelector('#weather-name'),
    temperature: document.querySelector('#temperature'),
    feelsLike: document.querySelector('#feelslike'),
    precip: document.querySelector('#precip'),
    wind: document.querySelector('#wind'),
    humidity: document.querySelector('#humidity'),
    time: document.querySelector('#time'),
}

button.addEventListener("click", async () => {
    const data = await Data.getWeatherData(input.value);
    UI.updateBackground("sunny");
    UI.showData(data);
})
