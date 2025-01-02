let search = document.querySelector(".search");
let searchbutton = document.getElementById("submit");
let condition = document.querySelector(".condition")
let weatherinfo = document.querySelector(".weather-info")
let weathericon = document.querySelector(".icon");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let windspeed = document.querySelector(".wind-speed");

let apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let apikey = "6b46ae5b3c7f7634131286182fbb9bd4";

async function checkweather(cite) {
  let response = await fetch(apiurl + cite + `&appid=${apikey}`);
  let data = await response.json();
  
  console.log(data);
  temp.textContent = Math.trunc(data.main.temp) + "°C";
  city.textContent = data.name;
  humidity.textContent = data.main.humidity + "%";
  windspeed.textContent = Math.trunc(data.wind.speed) + "km/h";

  if (data.weather[0].main === "clouds") {
    weathericon.src = "imgs/clouds.png";
  } else if (data.weather[0].main === "Clear") {
    weathericon.src = "imgs/clear.png";
  } else if (data.weather[0].main === "Rain") {
    weathericon.src = "imgs/rain.png"
  } else if (data.weather[0].main === "Drizzle") {
    weathericon.src = "imgs/drizzle.png"
  } else if (data.weather[0].main === "Mist") {
    weathericon.src = "imgs/mist.png"
  }
  search.value = ""
}

searchbutton.addEventListener("click", () => {
  checkweather(search.value);
});
