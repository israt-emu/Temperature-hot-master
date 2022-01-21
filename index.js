// url=https://api.openweathermap.org/data/2.5/weather?q=Dhaka&appid=f4a388f1e73d147d73c8802afa9fadbd
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temp");
const isCloudy = document.getElementById("is-cloudy");
const tempImg = document.getElementById("temp-img");
const loadTemp = () => {
  const input = document.getElementById("name-input");
  const inputCity = input.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=f4a388f1e73d147d73c8802afa9fadbd`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemp(data));
};
const displayTemp = (data) => {
  cityName.innerText = data.name;
  const kelvinTemp = data.main.temp;
  temperature.innerText = (kelvinTemp - 273.15).toFixed(2);
  const weatherCondition = data.weather[0].main;
  isCloudy.innerText = weatherCondition;
  tempImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
};
