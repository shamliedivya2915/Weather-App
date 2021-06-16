let country = document.querySelector("#country");
let city = document.querySelector("#city");
let check = document.querySelector("#check");

let tempIcon = document.querySelector("#tempIcon");
let weatherCountry = document.querySelector("#weatherCountry");
let temperature = document.querySelector("#temperature");
let weatherDescription = document.querySelector("#weatherDescription");

let feelsLike = document.querySelector("#feelsLike");
let humidity = document.querySelector("#humidity");
let longitude = document.querySelector("#longitude");
let latitude = document.querySelector("#latitude");

check.addEventListener("click", () => {
    //    console.log(country.value);
    //    console.log(city.value);

    let key = `bd4ea33ecf905116d12af172e008dbae`;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city.value},${country.value}&lang=en&units=metric&appid=${key}`;

    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        weatherCountry.innerText = `${data.name} / ${data.sys.country}`;
        temperature.innerHTML = `${data.main.temp}°<b>C</b>`;

        data.weather.forEach(items => {
            weatherDescription.innerText = items.description;

            //Use Open weather Map URL For Icons
            //             let iconsForTemp = `http://openweathermap.org/img/wn/${items.icon}.png`;
            //            tempIcon.src = iconsForTemp;
            //            
            //i Will Use My Own Icons
            if (items.id < 250) {
                tempIcon.src = `assets/storm.svg`;
            } else if (items.id < 350) {
                tempIcon.src = `assets/drizzle.svg`;
            } else if (items.id < 550) {
                tempIcon.src = `assets/snow.svg`;
            } else if (items.id < 650) {
                tempIcon.src = `assets/rain.svg`;
            } else if (items.id < 800) {
                tempIcon.src = `assets/atmosphere.svg`;
            } else if (items.id === 800) {
                tempIcon.src = `assets/sun.svg`;
            } else if (items.id > 800) {
                tempIcon.src = `assets/clouds.svg`;
            }
        })

        feelsLike.innerText = `Feels Like ${data.main.feels_like}°C`;
        
        humidity.innerText = `Humidity ${data.main.humidity}`;
        latitude.innerText = `Latitude ${data.coord.lat}`;
        longitude.innerText = `longitude ${data.coord.lon}`;
    })
    country.value = "";
    city.value = "";
})
