const API_KEY = "e51c5678ac4ef7816cdcc253fe36b460";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#location");
      const weather = document.querySelector("#cloud");
      const temp = document.querySelector("#temp");

      city.innerText = `📡위치: ${data.name}`;
      weather.innerText = `🌤날씨: ${data.weather[0].main}`;
      temp.innerText = `🌡기온: ${data.main.temp}도`;
    });
}

function onGeoError() {
  alert("위치 정보를 활성화 해주십시오");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
