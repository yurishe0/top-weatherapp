export class Data {
    static async weatherApiRequest(location) {
        const apiKey = "0d93acb2b01144a2971185324231710"
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
        const data = await response.json();
        return data;
    }

    static async getWeatherData(location) {
        const response = await this.weatherApiRequest(location);
        console.log(response);
        const data = {
            location: {
                country: response.location.country,
                city: response.location.name,
            },
            weather: {
                temperatureC: response.current.temp_c,
                temperatureF: response.current.temp_f,
                feelsLikeF: response.current.feelslike_f,
                humidity: response.current.humidity,
                precipIn: response.current.precip_in,
                precipMm: response.current.precip_mm,
                windKph: response.current.wind_kph,
                windMph: response.current.wind_mph,
                condition: response.current.condition.text,
                weatherIcon: response.current.condition.icon
            },
            isDay: response.current.is_day,
            lastUpdated: response.current.last_updated,
            localTime: response.location.localtime.slice(11),
        }
        return data;
    }
}
