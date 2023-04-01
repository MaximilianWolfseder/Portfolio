
var category = 'history'


let appID="Hi+/cN7PQf0sHc1NJRLo+Q==vm3i9MwihZoOe6Sg"


/*fetch('https://api.api-ninjas.com/v1/quotes?category=' + category, {
    method: 'GET',
    headers: {
        'X-Api-Key': "Hi+/cN7PQf0sHc1NJRLo+Q==vm3i9MwihZoOe6Sg"
    },
})
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


function fetchData(city){
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=" + appID)
    .then((response) => response.json())
    .then((data) => displayWeather(data));
}

function displayWeather(data){
    const {name} = data;
    const {main:{temp}}=data;
    const {weather:{0:{description}}}=data;
    const {weather:{0:{icon}}}=data;
    document.querySelector(".temp").innerText= "Weather in " +name +"\n\n"
                                              + temp + "°C" +"\n"
                                              + description
    document.querySelector(".Icon").src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
}*/