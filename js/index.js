// when clicking the button to show text(paragraph) in main page

var btn = document.querySelector(".hovcolor");
var paragraph = document.getElementById("donor_para");

btn.addEventListener('click', function() {
	paragraph.style.display = "Block";
});

