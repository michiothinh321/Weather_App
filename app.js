let input = document.querySelector('input')
let city = document.querySelector('.city')
let country = document.querySelector('.country')
let time = document.querySelector('.time')
let value = document.querySelector('.value')
let visibility = document.querySelector('.visibility span')
let wind = document.querySelector('.wind span')
let cloud = document.querySelector('.cloud span')

function changeWeatherAPI(weather){
    city.innerHTML =weather.name;
    country.innerHTML = weather.sys.country;
    time.innerHTML= new Date().toLocaleString()
    const temp = Math.round(weather.main.temp -273.15)
	value.innerHTML = temp
    temp >=18?(document.body.style.backgroundColor='rgba(235, 79, 79, 0.822)'):document.body.style.backgroundColor='rgba(63, 59, 247, 0.5)'
    visibility.innerHTML = weather.visibility +' (m)';
    wind.innerHTML = weather.wind.speed + ' (m/s)'
    cloud.innerHTML= weather.clouds.all + ' (%)'
}

input.addEventListener('keydown',function(e){
    if(e.keyCode === 13){
        weatherAPI(e.target.value)
    }
})


async function weatherAPI(value){
    value.trim();
    let fakeAPI = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=8caf9a43993b0444e8f20d29c7ecef96`
    let data= await fetch (fakeAPI).then(res=>res.json());
    
   changeWeatherAPI(data)
}

weatherAPI('ho chi minh')