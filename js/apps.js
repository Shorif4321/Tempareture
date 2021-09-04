const API_KEY = `0f1c6dc542a546760cdf696a124e6c56`

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => dataTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const dataTemperature = temperature => {
    console.log(temperature)
    setInnerText('city', temperature.name)
    setInnerText('temperature', temperature.main.temp)
    setInnerText('condition', temperature.weather[0].main)
    setInnerText('condition', temperature.weather[0].main)

    /* set dynamic icon */
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon')
    imgIcon.setAttribute('src', url);
}