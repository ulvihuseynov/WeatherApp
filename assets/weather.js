const apiUrl='https://api.openweathermap.org/data/2.5/';
const key='9fa6b8592d6598728cb466a3a3ffaa55'

const btn=document.querySelector("#searchBtn")
const inputBox=document.querySelector("#searchBox")
btn.addEventListener("keypress",function setQuery(e){
if(e.keyCode=='13'){
    const cityName=inputBox.value.toUpperCase()
    // console.log(value);

    if (!cityName ) {
        // alert("Seher adini daxil edin")
        const header=document.querySelector(".header")
        const error=document.querySelector(".error")
        header.style.display="none"
        error.style.display="block"
        
    }
    inputBox.value=''
    getResult(cityName)
    
}
})
const getResult=(city)=>{
const info=`${apiUrl}weather?q=${city}&appid=${key}&units=metric&lang=az`
console.log(info);
fetch(info).then(res=>res.json()).then(data=>{
    

        // header.style.display="block"
        // error.style.display="none"
        const name=document.querySelector("#name")
        name.innerHTML=`${city}, ${data.sys.country}`
        const degree=document.querySelector("#degree")
        degree.innerHTML=`${Math.round(data.main.temp)}`
        const forecast=document.querySelector("#forecast")
        forecast.innerText=data.weather[0].description
        const feels=document.querySelector("#feels")
        feels.innerText=`${Math.round(data.main.feels_like)}km`
        const wind=document.querySelector("#wind")
        wind.innerHTML=`${Math.round(data.wind.speed)} km`
        const humidity=document.querySelector("#humidity")
        humidity.innerText=`${Math.round(data.main.humidity)}`
        const visiblity=document.querySelector("#visiblity")
   visiblity.innerHTML=data.visibility.toFixed(0)
})
}
