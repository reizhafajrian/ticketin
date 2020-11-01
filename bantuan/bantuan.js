import "../component/footer.js"
import "../component/header.js"
import funHeader from "../component/funHeader.js"
funHeader();
var klik = document.getElementById("li-1");
var caraDaftar = document.getElementById("konten-faq")

klik.addEventListener("click", function() {
  klik.style.color = "#2F80ED"
  caraDaftar.style.display = "block"
});

/*
document.getElementById("myBtn").addEventListener("click", function() {
  alert("Hello World!");
});*/