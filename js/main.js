document.getElementById("button1").onclick = function() {
  document.getElementById("video").src = "./img/anim1.webm";
  document.getElementById("video").classList.remove("hidden");
  document.getElementById("animateGif").style.display = "none";
  // document.querySelector("body").style.backgroundColor = "#63b881";
  document.querySelector("body").classList.add("color1");
  document.querySelector("body").classList.remove("color2", "color3");
  document.getElementById("button1").classList.add("active");
  document.getElementById("button2").classList.remove("active");
  document.getElementById("button3").classList.remove("active");
};

document.getElementById("button2").onclick = function() {
  // document.getElementById("animateGif").src = "./img/anim2.gif";
  document.getElementById("video").src = "./img/character_1.mp4";
  // document.querySelector("body").style.backgroundColor = "#70b598";
  document.querySelector("body").classList.add("color2");
  document.querySelector("body").classList.remove("color1", "color3");
  document.getElementById("button2").classList.add("active");
  document.getElementById("button1").classList.remove("active");
  document.getElementById("button3").classList.remove("active");
};

document.getElementById("button3").onclick = function() {
  // document.getElementById("animateGif").src = "./img/anim3.gif";
  // document.querySelector("body").style.backgroundColor = "#709fb5";
  document.querySelector("body").classList.add("color3");
  document.querySelector("body").classList.remove("color1", "color2");
  document.getElementById("button3").classList.add("active");
  document.getElementById("button1").classList.remove("active");
  document.getElementById("button2").classList.remove("active");
};
