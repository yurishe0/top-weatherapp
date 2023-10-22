const apiKey = "0d93acb2b01144a2971185324231710"

export async function apiRequest(location) {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
    const data = await response.json();
    return data;
}
