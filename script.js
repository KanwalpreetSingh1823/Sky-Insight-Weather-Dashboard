const BASEURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const APIkey = "8d51621ae6d3798285500447a25f2f21";

const htmlBody = document.querySelector("body");
const displayTemp = document.querySelector(".temp");
const weatherImg = document.querySelector("img");
const userInput = document.querySelector("input");
const button = document.querySelector("i");
const cityName = document.querySelector(".name");
const display = document.querySelector(".cont1");

console.log(userInput.value);
window.addEventListener("load",()=>{
    if(userInput.value===""){
        userInput.value = "Chandigarh";
    }
    displayData();
})

display.classList.add("hide");

button.addEventListener("click",()=>{
    displayData();
})
const fetchJSON = async() =>{
    const FURL = await fetch(`${BASEURL}${userInput.value}&appid=${APIkey}`);
    return FURL.json();
}
let temperature;
const displayData = async() =>{
    let data = await fetchJSON();
    temperature = data.main.temp - 273.1
    cityName.innerHTML = `${userInput.value}`;
    displayTemp.innerHTML = `${parseInt(temperature)}°C`;
    let iconCode = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    weatherImg.src = iconUrl;
    display.classList.remove("hide");
}
