import { DOMelements } from "./index.js";

export class UI {
    static updateBackground(condition, isDay) {
        let theme;
        if(!isDay) {
            theme = "night"
        } else {
            switch(condition) {
                case "Clear":
                case "Sunny":
                    theme = "sunny";
                    break;
                case "Light rain":
                case "Rain":
                case "Patchy rain possible":
                    theme = "rain";
                    break;
                case "Cloudy":
                case "Partly cloudy":
                case "Overcast":
                    theme = "cloudy";
                    break;
            }
        }

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
        DOMelements.weatherName.textContent = data.weather.condition.toUpperCase();
        DOMelements.temperature.textContent = `${data.weather.temperatureC}°C`;
        DOMelements.precip.textContent = `${data.weather.precipMm} mm`;
        DOMelements.wind.textContent = `${data.weather.windKph} km/h`;
        DOMelements.humidity.textContent = `${data.weather.humidity}%`;
        DOMelements.time.textContent = data.localTime;

        this.generateIcons(data.weather.condition, data.isDay);
    }

    static generateIcons(condition, isDay) {
        let conditionName;
        // add new conditions when spotted
        switch(condition) {
            case "Clear":
                conditionName = (isDay) ? "clear_day" : "clear_night";
            case "Sunny":
                conditionName = "clear_day";
                break;
            case "Light rain":
            case "Rain":
            case "Patchy rain possible":
                conditionName = "rainy";
                break;
            case "Cloudy":
            case "Partly cloudy":
                conditionName = (isDay) ? "partly_cloudy_day" : "partly_cloudy_night";
                break;
            case "Overcast":
                conditionName = "cloud";
                break;
        }
        DOMelements.temperatureIcon.innerText = "thermostat";
        DOMelements.precipIcon.innerText = "humidity_percentage";
        DOMelements.windIcon.innerText = "air";
        DOMelements.humidityIcon.innerText = "humidity_mid";
    }
}
