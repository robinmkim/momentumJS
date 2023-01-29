const API_KEY = "7266b4ba64596089659fb219c5db4317";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in ", lat, lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");    
        const city = document.querySelector("#weather span:last-child");    
        weather.innerText = data.name;
        city.innerText = `${data.weather[0].main}/${data.main.temp}°C`;
    });
}

function onGeoError(){
    alert("can't specify your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);