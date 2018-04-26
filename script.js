/*
JavaScript is optional for the percent text
*/
const CIRCLE_ARRAY = document.querySelectorAll('[class^="circleCounter"]');

for (let circle of CIRCLE_ARRAY) {
  let percentText = circle.dataset.percentid,
      percent = parseInt(circle.dataset.percent),
      animationTime = parseInt(circle.dataset.animationtime);
  animatePercent(percent, percentText, animationTime);
}

function animatePercent(percent, percentText, animationTime){
  let counter = 0;
  if (animationTime === 0) document.getElementById(percentText).textContent = percent + "%";
  else var id = setInterval(draw, animationTime * 1000 / percent, percent, percentText);

  function draw(percent, percentText){
    if (counter > percent) clearInterval(id);
    else {
      document.getElementById(percentText).textContent = counter + "%";
      counter++;
    }
  }
}
