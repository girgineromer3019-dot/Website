document.getElementById("mailButton").addEventListener("click", function() {
  window.open("mailto:girgineromer3019@gmail.com", "_blank");
});

document.getElementById("GitHubButton").addEventListener("click", function() {
  window.open("https://github.com/girgineromer3019-dot", "_blank");
});

document.getElementById("LinkedButton").addEventListener("click", function(){
  window.open("https://www.linkedin.com/feed/", "_blank");
})

document.getElementById("whatsappButton").addEventListener("click", function() {
  window.open("https://wa.me/31628617543?text=Hallo!", "_blank");
});


document.addEventListener("mousemove", (e) => { // Mausun haraketini senkronize eder
  const light = document.createElement("div");
  light.classList.add("light");
  light.style.left = e.clientX + "px";
  light.style.top = e.clientY + "px";
  document.body.appendChild(light);

  // Animasyon tamamlanınca DOM'dan kaldır
  setTimeout(() => light.remove(), 800);
});
