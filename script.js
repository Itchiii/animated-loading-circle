const circleArray = document.querySelectorAll('[class^="circleCounter"]');

for (let i = 0; i < circleArray.length; i++) {
  let percentText = circleArray[i].dataset.percentid;
  let percent = circleArray[i].dataset.percent;
  let animationtime = circleArray[i].dataset.animationtime;
  animatePercent(percent, percentText, animationtime);
}

function animatePercent(percent, percentText, animationtime){
  let counter = 0;
  if (animationtime == 0) document.getElementById(percentText).textContent = percent + "%";
  else {
    let id = setInterval(function(){ draw(percent, percentText, animationtime); }, animationtime*1000 / percent);
  }
  function draw(percent, percentText, animationtime){
    if (counter > percent) clearInterval(id);
    else {
      document.getElementById(percentText).textContent = counter + "%";
      counter++;
    }
  }
}
