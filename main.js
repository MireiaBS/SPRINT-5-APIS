const API_URL = "https://icanhazdadjoke.com/";
let reportAcudits = [];

function nextJoke() {
  fetch(API_URL, {
    method: "get",
    headers: {
      Accept: "application/JSON",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const joke = document.getElementById("acudit");
      joke.innerHTML = data.joke;
      
    })
    .catch((err) => console.log(err));
}
