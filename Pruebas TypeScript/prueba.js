// medium (blog)
// influencers que puedas seguir (top  influencersreact)

let carArray = [
  {
    name: "BMW",
    cc: 200,
    hasTurbo: true,
  },
  {
    name: "AUDI",
    cc: 400,
    hasTurbo: false,
  },
];

let hasTurbo = carArray.filter((car) => car.hasTurbo === true);

console.log(hasTurbo.length);
let suma = 0;

for (let i = 0; i < carArray.length; i++) {
  suma += carArray[i].cc;
}

let media = (suma / carArray.length).toFixed(2);
