const API_KEY = "7ef34217a2d0e3c7a966143afe8eb832";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  console.log("You live in", lat, lon);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherCity = document.querySelector("#weather span:first-child");
      const weatherStatus = document.querySelector("#weather span:last-child");
      weatherCity.innerText = data.name;
      weatherStatus.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
