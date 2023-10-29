import { DOMelements } from "./index.js";

export class UI {
    static updateBackground(theme) {
        const siteContainer = document.querySelector("#site-container");
        const index = Math.floor(Math.random() * 5);

        siteContainer.style.opacity = 0;
        setTimeout(() => {
            siteContainer.style.backgroundImage = `radial-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url("./images/backgrounds/${theme}/${index}.jpg")`;
            siteContainer.style.opacity = 1;
        }, 500);
    }

    static showData(data) {
        DOMelements.city.textContent = data.location.city;
        DOMelements.country.textContent = data.location.country;
        DOMelements.weatherIcon.style.backgroundImage = `url('${data.weather.weatherIcon}')`;
        DOMelements.weatherName.textContent = data.weather.condition;
        DOMelements.temperature.textContent = data.weather.temperatureC;
        DOMelements.feelsLike.textContent = data.weather.feelsLikeC;
        DOMelements.precip.textContent = data.weather.precipMm;
        DOMelements.humidity.textContent = data.weather.humidity;
        DOMelements.time.textContent = data.localTime;
    }
}
