// Get the modal
var modal = document.getElementsByClassName("modal");
var modalA = document.getElementById("modalA");
var modalB = document.getElementById("modalB");
var modalC = document.getElementById("modalC");
var modalD = document.getElementById("modalD");
var modalE = document.getElementById("modalE");
var modalF = document.getElementById("modalF");
var modalG = document.getElementById("modalG");
var modalH = document.getElementById("modalH");

// Get the button that opens the modal
var desA = document.getElementById("descriptionA");
var desB = document.getElementById("descriptionB");
var desC = document.getElementById("descriptionC");
var desD = document.getElementById("descriptionD");
var desE = document.getElementById("descriptionE");
var desF = document.getElementById("descriptionF");
var desG = document.getElementById("descriptionG");
var desH = document.getElementById("descriptionH");

// Get the <span> element that closes the modal
var spanA = document.getElementsByClassName("close")[0];
var spanB = document.getElementsByClassName("close")[1];
var spanC = document.getElementsByClassName("close")[2];
var spanD = document.getElementsByClassName("close")[3];
var spanE = document.getElementsByClassName("close")[4];
var spanF = document.getElementsByClassName("close")[5];
var spanG = document.getElementsByClassName("close")[6];
var spanG = document.getElementsByClassName("close")[7];

// When the user clicks on the button, open the modal
desA.onclick = function() {
modalA.style.display = "block";
}
desB.onclick = function() {
modalB.style.display = "block";
}
desC.onclick = function() {
modalC.style.display = "block";
}
desD.onclick = function() {
modalD.style.display = "block";
}
desE.onclick = function() {
modalE.style.display = "block";
}
desF.onclick = function() {
modalF.style.display = "block";
}
desG.onclick = function() {
modalG.style.display = "block";
}
desH.onclick = function() {
modalH.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanA.onclick = function() {
modalA.style.display = "none";
}
spanB.onclick = function() {
modalB.style.display = "none";
}
spanC.onclick = function() {
modalC.style.display = "none";
}
spanD.onclick = function() {
modalD.style.display = "none";
}
spanE.onclick = function() {
modalE.style.display = "none";
}
spanF.onclick = function() {
modalF.style.display = "none";
}
spanG.onclick = function() {
modalG.style.display = "none";
}
spanH.onclick = function() {
modalH.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
  modalA.style.display = "none";
  modalB.style.display = "none";
  modalC.style.display = "none";
  modalD.style.display = "none";
  modalE.style.display = "none";
  modalF.style.display = "none";
  modalG.style.display = "none";
  modalH.style.display = "none";
}
}
