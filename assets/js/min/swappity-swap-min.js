function updateGradient(){"use strict";var e=colors[colorIndices[0]],o=colors[colorIndices[1]],t=colors[colorIndices[2]],n=colors[colorIndices[3]],r=1-step,c=Math.round(r*e[0]+step*o[0]),l=Math.round(r*e[1]+step*o[1]),d=Math.round(r*e[2]+step*o[2]),s="rgb("+c+","+l+","+d+")",i=Math.round(r*t[0]+step*n[0]),a=Math.round(r*t[1]+step*n[1]),u=Math.round(r*t[2]+step*n[2]),m="rgb("+i+","+a+","+u+")",g=document.getElementsByClassName("friend-mode-background"),h,y=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),p=/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor);if(y===!1&&p===!1)for(h=0;h<g.length;h++)g[h].style.background="-moz-linear-gradient(left, "+s+" 0%, "+m+" 100%)";else for(h=0;h<g.length;h++)g[h].style.background="-webkit-gradient(linear, left top, right top, from("+s+"), to("+m+"))";step+=gradientSpeed,step>=1&&(step%=1,colorIndices[0]=colorIndices[1],colorIndices[2]=colorIndices[3],colorIndices[1]=(colorIndices[1]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length,colorIndices[3]=(colorIndices[3]+Math.floor(1+Math.random()*(colors.length-1)))%colors.length)}function myFunction(){"use strict";var e=document.getElementById("toggle-checkbox").checked;e===!0?(document.getElementById("holly-profile").src="https://dswojt61tyjwd.cloudfront.net/profile_image_holly_fun.jpg",document.getElementById("seth-profile").src="https://dswojt61tyjwd.cloudfront.net/profile_image_seth_fun.jpg",document.querySelector(".toggle-state").innerHTML="Friend Mode",document.querySelector(".seth-nickname").innerHTML="Sethasaurus",document.querySelector(".holly-nickname").innerHTML="Trihollatops",document.body.classList.add("friend-mode-background"),document.body.classList.remove("resume-mode"),setInterval(updateGradient,10)):(document.getElementById("holly-profile").src=y,document.getElementById("seth-profile").src=s,document.querySelector(".toggle-state").innerHTML=z,document.querySelector(".seth-nickname").innerHTML=sethNickname,document.querySelector(".holly-nickname").innerHTML=hollyNickname,document.body.classList.remove("friend-mode-background"),document.body.classList.add("resume-mode"),document.body.removeAttribute("style"))}var s=document.getElementById("seth-profile").src,y=document.getElementById("holly-profile").src,z=document.querySelector(".toggle-state").innerHTML,sethNickname=document.querySelector(".seth-nickname").innerHTML,hollyNickname=document.querySelector(".holly-nickname").innerHTML,colors=new Array([62,35,255],[60,255,60],[255,35,98],[45,175,230],[255,0,255],[255,128,0]),step=0,colorIndices=[0,1,2,3],gradientSpeed=.002;