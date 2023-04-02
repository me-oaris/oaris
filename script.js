const title = document.getElementById("title");
let count = 0;
let text = "";

function animateTitle() {
  text = "Hello!".substring(0, count);
  title.innerHTML = text;
  count++;
  if (count > 7) {
    count = 0;
  }
  setTimeout(animateTitle, 500);
}

animateTitle();