

let appID="23792645e51f396760d6853322e72595"


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
}

function search(){
    fetchData(this.document.getElementById("cityInput").value);
}

document.querySelector(".searchButton").addEventListener("click", function(){
    search();
});

fetchData("berlin");

document.querySelector('.exit')?.addEventListener('click', (event) =>{
    window.location.href = '/Portfolio/home.html#Projects';
})






