var on = false;
function toggle(){
  if (on) {
    on = false;
    document.querySelector(".button").innerHTML = "Turn on";
    document.querySelector(".button").className = "button"
  } else {
    on = true;
    document.querySelector(".button").innerHTML = "Turn off";
    document.querySelector(".button").className = "button shake"
  }
}
setInterval(function(){
  if (on) navigator.vibrate(300);
}, 300)