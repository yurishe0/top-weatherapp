export class UI {
    static updateBackground(theme) {
        const siteContainer = document.querySelector("#site-container");
        const index = Math.floor(Math.random() * 5);

        siteContainer.style.backgroundImage = `radial-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url("./images/backgrounds/${theme}/${index}.jpg")`;
        // background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(EauDp1hUcAAE-bK.jpg);
    }
}
