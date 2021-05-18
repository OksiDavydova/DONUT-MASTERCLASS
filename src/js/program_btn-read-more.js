let btn = document.querySelector('.program__btn-js');
btn.onclick = function () {
  let more = document.querySelector(".more__prog");
  let btn = document.querySelector(".program__btn-js");
  if (more.style.display === "inline") {
    btn.innerHTML = "Read More";
    more.style.display = "none"
  } else {
    btn.innerHTML = "Less";
    more.style.display = "inline";
  }
}