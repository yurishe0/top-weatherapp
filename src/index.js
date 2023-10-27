import { Data } from "./Data";
import { UI } from "./UI";

const input = document.querySelector("#location");
const button = document.querySelector("button");

button.addEventListener("click", async () => {
    const data = await Data.getWeatherData(input.value);
    UI.updateBackground("sunny");
})
