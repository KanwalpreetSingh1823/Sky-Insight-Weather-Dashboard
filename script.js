const BASEURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const APIkey = "8d51621ae6d3798285500447a25f2f21";

const htmlBody = document.querySelector("body");
const displayTemp = document.querySelector(".temp");
const weatherImg = document.querySelector("img");
const userInput = document.querySelector("input");
const button = document.querySelector("i");
const cityName = document.querySelector(".name");
const discrip = document.querySelector(".status");
const display = document.querySelector(".cont1");
const display2 = document.querySelector(".details");
const detail1 = document.querySelector("#dash1");
const detail2a = document.querySelector("#dash2a");
const detail2b = document.querySelector("#dash2b");
const detail3 = document.querySelector("#dash3");
const detail4 = document.querySelector("#dash4");
const detail5 = document.querySelector("#dash5");

console.log(userInput.value);
window.addEventListener("load", () => {
  display.classList.add("hide");
  display2.classList.add("onLoad");
});

button.addEventListener("click", () => {
  displayData();
});

const fetchJSON = async () => {
  const FURL = await fetch(`${BASEURL}${userInput.value}&appid=${APIkey}`);
  return FURL.json();
};

let temperature;
const displayData = async () => {
  let data = await fetchJSON();
  display.classList.remove("hide");
  display2.classList.remove("onLoad");
  console.log(data);
  temperature = data.main.temp - 273.1;
  let input = userInput.value.charAt(0).toUpperCase();
  cityName.innerHTML = `${input}${userInput.value.slice(1)}`;
  displayTemp.innerHTML = `${parseInt(temperature)}°C`;
  let iconCode = data.weather[0].icon;
  let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  weatherImg.src = iconUrl;
  discrip.innerHTML = data.weather[0].description;
  detail1.innerHTML = `${parseInt(data.main.feels_like - 273.1)}°C`;
  detail2a.innerHTML = `${parseInt(data.main.temp_max - 273.1)}°C`;
  detail2b.innerHTML = `${parseInt(data.main.temp_min - 273.1)}°C`;
  detail3.innerHTML = `${data.main.humidity}%`;
  detail4.innerHTML = `${parseInt(data.wind.speed) * 3.6}km/h`;
  detail5.innerHTML = `${data.visibility / 1000}km`;
};
