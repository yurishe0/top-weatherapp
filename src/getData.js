import { apiRequest } from "./apiRequest";

export async function getData(location) {
    const response = await apiRequest(location);
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
}
