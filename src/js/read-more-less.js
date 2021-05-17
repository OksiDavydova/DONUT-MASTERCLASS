let btn = document.querySelector('.about_btn-js');
btn.onclick = function () {
  let more = document.querySelector(".more");
  let btn = document.querySelector(".about_btn-js");
  if (more.style.display === "inline") {
    btn.innerHTML = "Read More";
    more.style.display = "none"
  } else {
    btn.innerHTML = "Less";
    more.style.display = "inline";
  }
}