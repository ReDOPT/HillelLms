const apiKey = 'ee400c6d91424c6f74cfb33b985ed7fd';
const lat = 48.4500000;
const lon = 34.9833300;

const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
};

function updateWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=ru`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city').textContent = `${data.name}, ${data.sys.country}`;
            document.getElementById('date').textContent = `${new Date(data.dt*1000).toLocaleDateString("en-us",options)}`;
            document.getElementById('time').textContent = `${new Date(data.dt*1000).toLocaleTimeString([], {timeZone:"Europe/Kiev",hour: "2-digit", minute: "2-digit", timeZoneName:"short"},)}`;
            console.log(data.dt)
            document.getElementById('temp').textContent = `${Math.round(data.main.temp)}°C`;
            document.getElementById('feels-like').textContent = `Ощущается как: ${Math.round(data.main.feels_like)}°C`;
            document.getElementById('description').textContent = data.weather[0].description;
            document.getElementById('humidity').textContent = `Влажность: ${data.main.humidity}%`;
            document.getElementById('pressure').textContent = `Давление: ${data.main.pressure} гПа`;
            document.getElementById('wind').textContent = `Ветер: ${data.wind.speed} м/с, ${data.wind.deg}°`;
            document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        })
        .catch(error => console.log('Ошибка:', error));
}
document.getElementById('button').addEventListener("click",(e)=>{
    updateWeather()
})

updateWeather();
