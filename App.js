const Api_Url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const Api_Key = "4e8d596817d6c6089bd73a53dc6810cf";

const searchbox = document.querySelector('.searchinput')
const searchbtn = document.querySelector('.searchbtn');

const weathericon = document.querySelector('.weather_icon');

async function checkweather(city) {
    const response = await fetch(Api_Url + city + `&appid=${Api_Key}`)


    if (response.status == 404) {
        document.querySelector(".errors").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }

    else {
        var data = await response.json();
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.floor(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "KM/h";

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png"
        }

        else if (data.weather[0].main == "Clear") {
            weathericon.src = "images/clear.png"
        }

        else if (data.weather[0].main == "Rain") {
            weathericon.src = "images/rain.png"
        }

        else if (data.weather[0].main == "Drizzle") {
            weathericon.src = "images/drizzle.png"
        }

        else if (data.weather[0].main == "Mist") {
            weathericon.src = "images/mist.png"
        }


        document.querySelector(".weather").style.display = "block"
        document.querySelector(".errors").style.display = "none"
    }
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})

