import "../component/footer.js"
import "../component/header.js"
import funHeader from "../component/funHeader.js"
import filter from "../pesantiket/filter.js"
funHeader();

filter();
const cardOnclickImg=document.querySelectorAll('.card img')
const cardOnclick=document.querySelectorAll('.card')


cardOnclickImg.forEach(element => {
  console.log(element.getAttribute(`src`))
  
});

cardOnclick.forEach(element => {
  element.onclick=()=>{
    location.href="tiket/tiket.html"
  }
});


