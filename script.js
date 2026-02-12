const noBtn = document.querySelector(".buttons button:last-child");
const yesBtn = document.querySelector(".buttons button:first-child");
const content = document.querySelector(".content");

content.style.position = "relative";

// YES يفتح الصفحة
yesBtn.addEventListener("click", function () {
  window.location.href = "love.html";
});

// تحريك زرار NO
noBtn.addEventListener("click", function (e) {
  e.stopPropagation(); // يمنع أي تأثير تاني

  const maxX = content.clientWidth - noBtn.offsetWidth;
  const maxY = content.clientHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});


