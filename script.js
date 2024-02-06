// //your JS code here. If required.
// let div = document.getElementById("weatherData");
// // alert
// let btn = document.createElement('button');
// let  p = document.createElement('p');
// btn.innerHTML = "Get Current Weather";
// div.appendChild(btn);
// let URL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=65e6c064c2e37e1fc86b9fd9f7d9c701"

// // async function getCurrentWeather(){
// // 	let response = await fetch(URL);
// // 	let data  = await response.json();
// // 	div.innerHTML = `<p>Current weather in London: ${data.weather[0].main}</p>`;
// // 	div.appendChild(p);
// // }
// function getCurrentWeather(){
// 	fetch(URL)
// 	.then((res)=>res.json())
// 	.then((data)=> {
// 		console.log(data.weather[0].main)
// 		div.innerHTML =`<p>Current weather in London: ${data.weather[0].main}</p>`
// 	})
// }
// btn.addEventListener('click',getCurrentWeather);



function get(){
	const url=`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de`;
	fetch(url)
	.then((response)=>response.json())
	.then(data=>{
		const res=document.getElementById("weatherData");
		res.innerHTML=`Current weather in London: ${data.weather[0].main}`;
	})
}
const button=document.getElementById("btn");
button.addEventListener("click",get);