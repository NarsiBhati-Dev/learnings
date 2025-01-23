const getWeather = () => {
  const WeatherInfo = document.getElementById("weather-info");

  WeatherInfo.innerHTML = "";

  const error = document.getElementById("error");
  error.innerHTML = "";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fetchWeatherData, showError);
    fetchWeatherData();
  } else {
    error.innerHTML = "Geolocation Not Allowed";
  }
};

function fetchWeatherData(position) {
  const { latitude, longitude } = position.coords;
}

function showError(error) {}
