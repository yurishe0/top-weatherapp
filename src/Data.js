export class Data {
    static async apiRequest(location) {
        const apiKey = "0d93acb2b01144a2971185324231710"
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
        const data = await response.json();
        return data;
    }

    static async getData(location) {
        const response = await this.apiRequest(location);
        const data = {
            location: {
                country: response.location.country,
                city: response.location.name,
            },
            weather: {
                temperatureC: response.current.temp_c,
                temperatureF: response.current.temp_f,
                feelsLikeC: response.current.feelslike_c,
                feelsLikeF: response.current.feelslike_f,
                humidity: response.current.humidity,
                percipIn: response.current.percip_in,
                percipMm: response.current.percip_mm,
                windKph: response.current.wind_kph,
                windMph: response.current.wind_mph,
            },
            isDay: response.current.is_day,
            lastUpdated: response.current.last_updated,
            localTime: response.location.localtime,
        }
        return data;
    }
}