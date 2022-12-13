const apifunctions = (() => {
  const APP_ID = '8e47aca9554bd44b5e4ee66169ab505a';
  function translateIcon(weatherObj) {
    // Do I want to modify the data or do something else?
    switch (weatherObj.weather[0].icon) {
      case '01d':
      case '01n':
        weatherObj.weather[0].icon = './assets/Clear.png';
        break;
      case '02d':
      case '02n':
        weatherObj.weather[0].icon = './assets/LightCloud.png';
        break;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        weatherObj.weather[0].icon = './assets/HeavyCloud.png';
        break;
      case '09d':
      case '09n':
        weatherObj.weather[0].icon = './assets/Shower.png';
        break;
      case '10d':
      case '10n':
        weatherObj.weather[0].icon = './assets/LightRain.png';
        break;
      case '11d':
      case '11n':
        weatherObj.weather[0].icon = './assets/Thunderstorm.png';
        break;
      case '13d':
      case '13n':
        weatherObj.weather[0].icon = './assets/Snow.png';
        break;
      default:
    }
  }

  async function getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=New+Orleans&appid=${APP_ID}`, { mode: 'cors' });
    console.log(response);
    // const weather = await response.json();
  }

  return {
    translateIcon,
    getWeather,
  };
})();

export default apifunctions;
