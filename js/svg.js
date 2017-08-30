function handleOrientation(event) {
  let absolute = event.absolute;
  let alpha    = event.alpha || 30;
  let beta     = event.beta || 20;
  let gamma    = event.gamma || 10;

  // Do stuff with the new orientation data
  let compassContainer = document.querySelector('.compass');
  compassContainer.style.top = alpha;
  compassContainer.style.left = beta;

  let infobox = document.getElementById('info');
  infobox.innerHTML = `absolute ${absolute}, alpha ${alpha}, beta ${beta}, gamma ${gamma}`;
}

let alpha = 1;
let beta = 1;
let gamma = 1;
let absolute = 1;

let compassContainer = document.querySelector('.compass');
compassContainer.style.top = alpha;
compassContainer.style.left = beta;

let infobox = document.getElementById('info');
infobox.innerHTML = "sup"

console.log("hello");

window.addEventListener("deviceorientation", handleOrientation, true);