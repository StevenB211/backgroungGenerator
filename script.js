var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

//DO NOT REPEAT
function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+", "
	+ color2.value
	+")";

	css.textContent = body.style.background +";";
}

function setRandomGradient(){
	var number1 = Math.floor(Math.random() * 1000000);
	var number2 = Math.floor(Math.random() * 1000000);

	body.setAttribute("style", 
	"background: linear-gradient(to right, "
	+ "#" 
	+ number1 
	+", "
	+ "#"
	+ number2
	+")");

	css.textContent = body.style.background +";";
}



color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

random.addEventListener("click",setRandomGradient);