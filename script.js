const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

/* close mobile menu after click */
document.querySelectorAll(".nav-links a").forEach(link =>{
    link.addEventListener("click", ()=>{
        navLinks.classList.remove("active");
    });
});


/* HERO IMAGE SLIDER */
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index){

    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");
}

setInterval(() => {
    currentSlide++;
    if(currentSlide >= slides.length){
        currentSlide = 0;
    }
    showSlide(currentSlide);
}, 4000);

// PLAN POPUP
let currentDestination = "";

function showPlan(place,price,flight,stay){
  currentDestination = place;
  document.getElementById("planTitle").innerText = place;
  document.getElementById("planPrice").innerText = "Price: " + price;
  document.getElementById("planFlight").innerText = "Flights: " + flight;
  document.getElementById("planStay").innerText = "Hotel Stay: " + stay;
  document.getElementById("planPopup").style.display = "flex";
}

function closePlan(){
  document.getElementById("planPopup").style.display = "none";
}

// BOOKING
function openBooking(place){
  document.getElementById("bookingPopup").style.display = "flex";
  document.getElementById("destinationName").value = place;
}

function closeBooking(){
  document.getElementById("bookingPopup").style.display = "none";
}

function openBookingFromPopup(){
  closePlan();
  openBooking(currentDestination);
}

