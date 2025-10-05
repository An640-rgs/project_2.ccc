let index=0;
const slides= document.querySelectorAll(".slides img");
function showslide(n){
    slides.forEach((img,i)=>img.classList.toggle("active",i===n));
}
document.querySelector(".next").onclick = ()=>{
    index = (index+1) % slides.length;
    showslide(index); 
};
document.querySelectorAll(".prev").onclick =()=>{
index=(index-1+slides.length) % slides.length;
showslide(index);
};
setInterval(()=>{
    index=(index+1) % slides.length;
    showslide(index);
},3000);
// star rating
const stars= document.querySelectorAll(".star");
const ratingValue= document.getElementById("ratingValue");
stars.forEach(star=>{
    star.addEventListener("click",()=>{
        let value=star.getAttribute("data-value");
        stars.forEach(s=>s.classList.remove("active"));
        for(let i=0; i< value; i++) stars[i].classList.add("active");
        ratingValue.textContent= 'Your Rating:${value}';

    });
    star.addEventListener("mouseover", ()=>{
        let value= star.getAttribute("data-value");
        for(let i=0; i<value; i++)stars[i].classList.add("hover");
    });
    star.addEventListener("mouseout",()=>{
        stars.forEach(s=>s.classList.remove("hover"));
    });
});
//Registration form
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("password").value;
  const confirm = document.getElementById("confirmPassword").value;
  const message = document.getElementById("formMessage");

  if (!name || !email || !pass || !confirm) {
    message.textContent = "All fields are required!";
    message.style.color = "red";
  } else if (pass !== confirm) {
    message.textContent = "Passwords do not match!";
    message.style.color = "red";
  } else {
    message.textContent = "Registration Successful!";
    message.style.color = "green";
    this.reset();
  }
});
 





