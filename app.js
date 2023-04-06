const holder = document.getElementById("teaserbutton");
holder.addEventListener("click", clickingfunction);
holder.addEventListener("mouseover", hoverfunction);
holder.addEventListener("mouseout", hoveroutfunction);





function clickingfunction() {
  document.getElementById("teaserbutton").innerHTML = "Clicked!<br>";
};

function hoverfunction() {
  document.getElementById("teaserbutton").innerHTML = "hover";
};

function hoveroutfunction() {
  document.getElementById("teaserbutton").innerHTML = "hover out"; 
};