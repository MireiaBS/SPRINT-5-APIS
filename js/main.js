// APIS URLS
const API_URL_JOKE1 = "https://icanhazdadjoke.com/";
const API_URL_JOKE_CN = "https://api.chucknorris.io/jokes/random";
const API_URL_WEATHER =
  "http://api.openweathermap.org/data/2.5/weather?lat=41.3870&lon=2.16992&appid=" +
  API_KEY +
  "&units=metric";

// VARIABLES
const date = new Date();
let text = date.toISOString();
console.log(text);

let dataResult;
let reportAcudits = [];
let num = 0;

// <------------ JOKE'S CLASS --------------->
class Joke {
  constructor(joke, score, date) {
    this.joke = joke;
    this.sore = score;
    this.date = date;
  }
}

// <------------------ API WEATHER -------------------->

function getWeather() {
  fetch(API_URL_WEATHER, {
    method: "get",
    headers: {
      Accept: "application/JSON",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const weather = document.getElementById("weather");
      weather.innerHTML =
        data.name.toUpperCase() + ", BARCELONA <br>" + data.main.temp + "ºC";
      console.log(data);
    })
    .catch((err) => console.log(err));
}
// <------------ GET RANDOM JOKES --------------->

function nextJoke(number) {
  num += number;
  let esPar = true;
  if (num % 2 != 0) {
    esPar = false;
  }

  if (esPar) {
    joke1();
  } else {
    joke2();
  }
}

// <------------------ API JOKE'S NUMBER 1---------------------->

function joke1() {
  fetch(API_URL_JOKE1, {
    method: "get",
    headers: {
      Accept: "application/JSON",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const joke = document.getElementById("acudit");
      joke.innerHTML = data.joke;
      dataResult = data;
      console.log(dataResult);
      return dataResult;
    })
    .catch((err) => console.log(err));
}

// <------------ API JOKE'S CHUCK NORRIS--------------->

function joke2() {
  fetch(API_URL_JOKE_CN, {
    method: "get",
    headers: {
      Accept: "application/JSON",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const joke = document.getElementById("acudit");
      joke.innerHTML = data.value;
      dataResult = data;
      return dataResult;
    })
    .catch((err) => console.log(err));
}

// <------------ RATE JOKES FUNCTION --------------->

function rateJoke(rate, dataResult) {
  if (reportAcudits.length == 0) {
    let newJoke = new Joke(dataResult.joke||dataResult.value, rate, text);
    reportAcudits.push(newJoke);
  } else {
    let repeatedJoke = reportAcudits.filter(
      (repeated) => repeated.joke == dataResult.joke||repeated.value == dataResult.value
    );
    if (repeatedJoke.length != 0) {
      reportAcudits.pop();
      newJoke = new Joke(dataResult.joke||dataResult.value, rate, text);
      reportAcudits.push(newJoke);
    } else {
      newJoke = new Joke(dataResult.joke||dataResult.value, rate, text);
      reportAcudits.push(newJoke);
    }
  }
  console.log(reportAcudits);
}

getWeather();
joke1();
