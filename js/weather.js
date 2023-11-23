스토리지의 93% 사용됨 … 소진 시 스토리지가 부족해 파일을 만들거나 수정하거나 업로드할 수 없게 됩니다. 3개월 동안 100GB 스토리지를 월 ₩2,400 ₩600에 이용하세요.
/* 
 * 2023.11.23 시나버스 shinahverse.kr
 * openweathermap.org
 */

function onGeoOk(position){
    // console.log(position);
    const API_KEY = ""; // 이 곳에 자신의 키값을 넣습니다.
    const lat = position.coords.latitude;
    
    const lon = position.coords.longitude;
    
    console.log(`당신이 있는 곳은 위도 ${lat}, 경도 ${lon}입니다.`)
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(response => response.json()).then(data=>{
        console.log(data.name, data.weather[0].description, data.main.temp);
        const weahter = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weahter.innerText = data.weather[0].description;
        city.innerText = `${data.name}, ${data.main.temp}℃`;
    });

}

function onGeoError(){
    console.log("찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);