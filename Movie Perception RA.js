const randomNumber = Math.floor(Math.random() * 3) + 1;
if (randomNumber === 1) {
    document.querySelector("#link").href = "https://run.pavlovia.org/cz70/movie-perception-walk";
} else if (randomNumber === 2) {
    document.querySelector("#link").href = "https://run.pavlovia.org/cz70/movie-perception-pickup";
} else if (randomNumber === 3) {
    document.querySelector("#link").href = "https://run.pavlovia.org/cz70/movie-perception-baseball";
}
