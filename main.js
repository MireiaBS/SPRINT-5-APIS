import API_KEY from "./api.js";

const API_URL_JOKE1 = "https://icanhazdadjoke.com/";
const API_URL_WEATHER = "http://api.openweathermap.org/data/2.5/weather?lat=41.3870&lon=2.16992&appid="+API_KEY+"&units=metric";

const date = new Date();
let text = date.toISOString();
console.log(text);

let dataResult;
let reportAcudits = [];

// <------------------ API WEATHER -------------------->

fetch(API_URL_WEATHER, {
  method: "get",
  headers: {
    Accept: "application/JSON",
  },
})
  .then((response) => response.json())
  .then((data) => { 
    const weather = document.getElementById("weather");
    weather.innerHTML = data.name.toUpperCase() + ', BARCELONA <br>' + data.main.temp + 'ºC';
    console.log(data);         
  })
  .catch((err) => console.log(err));  


// <------------------ API JOKE'S ---------------------->
function nextJoke() {
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
      return dataResult;         
    })
    .catch((err) => console.log(err));    
}

// <------------ API JOKE'S CHUCK NORRIS--------------->


function rateJoke(rate) {    

  if ( reportAcudits.length == 0) {
    let newJoke = new Joke(dataResult.joke,rate,text)
    reportAcudits.push(newJoke);
   }else {
    let repeatedJoke = reportAcudits.filter ( repeated => repeated.joke == dataResult.joke )
    if ( repeatedJoke.length != 0){
      reportAcudits.pop()
      newJoke = new Joke(dataResult.joke,rate,text);
      reportAcudits.push(newJoke);

    } else {
      newJoke = new Joke(dataResult.joke,rate,text);
      reportAcudits.push(newJoke);
    }
  } 
  console.log(reportAcudits);
}

