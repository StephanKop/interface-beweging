document.getElementById("button1").onclick = function() {
  document.getElementById("video").src = "./img/anim1.webm";
  document.getElementById("video").classList.remove("hidden");
  document.getElementById("animateGif").style.display = "none";
  document.getElementById("button1").classList.add("active");
  document.getElementById("button2").classList.remove("active");
  document.getElementById("button3").classList.remove("active");
  document.getElementById("preview1").style.opacity = "0";
  document.getElementById("preview2").style.opacity = "100";
  document.getElementById("preview3").style.opacity = "100";
};

document.getElementById("button2").onclick = function() {
  document.getElementById("video").src = "./img/anim2.mp4";
  document.getElementById("video").classList.remove("hidden");
  document.getElementById("button2").classList.add("active");
  document.getElementById("button1").classList.remove("active");
  document.getElementById("button3").classList.remove("active");
  document.getElementById("preview1").style.opacity = "100";
  document.getElementById("preview2").style.opacity = "0";
  document.getElementById("preview3").style.opacity = "100";
};

document.getElementById("button3").onclick = function() {
  document.getElementById("video").src = "./img/anim3.mp4";
  document.getElementById("video").classList.remove("hidden");
  document.getElementById("button3").classList.add("active");
  document.getElementById("button1").classList.remove("active");
  document.getElementById("button2").classList.remove("active");
  document.getElementById("preview1").style.opacity = "100";
  document.getElementById("preview2").style.opacity = "100";
  document.getElementById("preview3").style.opacity = "0";
};
