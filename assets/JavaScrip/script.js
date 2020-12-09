const logo = document.getElementById("max-bird-logo");

function sayBonanza() {
  alert("Bonanza!!!");
}

logo.addEventListener("click", () => sayBonanza());

$(".carousel-item").click(() => sayBonanza());
