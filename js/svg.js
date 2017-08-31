let alphaRandom = Math.round(Math.random() * 360);

let infobox = document.getElementById('info');
infobox.innerHTML = "sup";

let comp = document.getElementById("svg8");
comp.style.display = 'none';

let handleOrientationFunction = mainHandleOrientation;

function mainHandleOrientation(event) {
  	let absolute = event.absolute || false;
  	let alpha    = event.alpha || 30;
  	let beta     = event.beta || 20;
	let gamma    = event.gamma || 10;
	if (!absolute) //if alpha is not absolute, it is randomized.
	{
		alpha = (alphaRandom + alpha) % 360;
	}

  	// Do stuff with the new orientation data
	comp.style.display = 'block';

  	comp.style.transform = `rotate(${alpha}deg) translateY(0%)`;

  	let needle = comp.getElementById("path4609");
  	let needleColor = Math.floor(Math.abs(180-alpha) / 180 * 9) + 1;
  	if (alpha < 180){
  		needleColor = Math.floor(Math.abs(alpha-180) / 180 * 9) + 1;
  	}
  	needle.style.fill = `${needleColor}${needleColor}0000`;

  	let infobox = document.getElementById('info');
  	infobox.innerHTML = `absolute ${absolute}, alpha ${alpha}, beta ${beta}, gamma ${gamma}, color ${needleColor}`;
  	if (alpha > 355 || alpha < 5) {
  		alert("Vel gert!");
  		console.log("done!");
  		handleOrientationFunction = rotated;
  		comp.style.transition = "300ms ease all";
  		if (alpha > 180){
  			comp.style.transform = `rotate(360deg) translateY(0%)`;
  		}
  		else{
  			comp.style.transform = `rotate(0deg) translateY(0%)`;
  		}
		comp.getElementById("path4609").style.fill = "900000";
		console.log("rotated!");
  	}
}
function rotated(event) {
	//Do whatever
}

window.addEventListener("deviceorientation", function dev_or_func(event) {
	handleOrientationFunction(event);
}, true);