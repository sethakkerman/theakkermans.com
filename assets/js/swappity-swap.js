var s = document.getElementById("seth-profile").src;
var y = document.getElementById("holly-profile").src;
var z = document.querySelector(".toggle-state").innerHTML;
var sethNickname = document.querySelector(".seth-nickname").innerHTML;
var hollyNickname = document.querySelector(".holly-nickname").innerHTML;

var colors = new Array(
  [62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {

	//if ($ === undefined) return;
	"use strict";
	var c0_0 = colors[colorIndices[0]];
	var c0_1 = colors[colorIndices[1]];
	var c1_0 = colors[colorIndices[2]];
	var c1_1 = colors[colorIndices[3]];
	
	var istep = 1 - step;
	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
	var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";
	
	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
	var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";
	  /*document.getElementById("gradient").style.backgroundColor = "lightblue";*/
	var x = document.getElementsByClassName("friend-mode-background");
	var i;
	/*for (i = 0; i < x.length; i++) {
		x[i].style.backgroundColor = "red";
	}*/
	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    
    //if (isChrome) alert("You are using Chrome!");
    //if (isSafari) alert("You are using Safari!");
    //if (isChrome === false && isSafari === false) alert("You are probably using Firefox!");
	if (isChrome === false && isSafari === false) {
	  for (i = 0; i < x.length; i++) {
		x[i].style.background = "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)";}
	} else {
	  for (i = 0; i < x.length; i++) {
		x[i].style.background = "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))";}
	}


	step += gradientSpeed;
	if (step >= 1) {
	  step %= 1;
	  colorIndices[0] = colorIndices[1];
	  colorIndices[2] = colorIndices[3];
	
	  //pick two new target color indices
	  //do not pick the same as the current one
	  colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
	  colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
	
	}
}

function myFunction() {
	"use strict";
  	var x = document.getElementById("toggle-checkbox").checked;
  
  	//console.log(x);
  	//console.log(y);

  if (x === true) {
    //alert("true");
    //document.body.style.background = "gray";
    document.getElementById("holly-profile").src = "https://dswojt61tyjwd.cloudfront.net/profile_image_holly_fun.jpg";
	document.getElementById("seth-profile").src = "https://dswojt61tyjwd.cloudfront.net/profile_image_seth_fun.jpg";
	document.querySelector(".toggle-state").innerHTML = "Friend Mode";
	document.querySelector(".seth-nickname").innerHTML = "Sethasaurus";
	document.querySelector(".holly-nickname").innerHTML = "Trihollatops";
	document.body.classList.add("friend-mode-background");
	document.body.classList.remove("resume-mode");
	
	setInterval(updateGradient, 10);
  
  } else {
    //alert("false");
    //document.body.style.background = "initial";
    document.getElementById("holly-profile").src = y;
	document.getElementById("seth-profile").src = s;
	document.querySelector(".toggle-state").innerHTML = z;
	document.querySelector(".seth-nickname").innerHTML = sethNickname;
	document.querySelector(".holly-nickname").innerHTML = hollyNickname;
	document.body.classList.remove("friend-mode-background");
	document.body.classList.add("resume-mode");
	document.body.removeAttribute("style");
  }

}