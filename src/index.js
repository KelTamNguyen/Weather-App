import './sass/styles.scss';

console.log('Hello World');
const APP_ID = '8e47aca9554bd44b5e4ee66169ab505a';
(async function () {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=New+Orleans&appid=${APP_ID}`, { mode: 'cors' });
  const weather = await response.json();
  console.log(response);
  console.log(weather);
}());
