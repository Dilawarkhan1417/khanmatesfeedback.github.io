const ratingEl = document.querySelectorAll(".rating");


const btnEl = document.getElementById("btn");


const containerEl = document.getElementById("container");
let selectedRating ="";

ratingEl.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (event) =>{
        removeActive();4
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");

    });
    
});



btnEl.addEventListener("click",() =>{
    if(selectedRating !== ""){
        containerEl.innerHTML = `
        <strong>Thank you! </strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating} </strong>
        <br>
        <br>
        <strong>We' ll use your feedback to improve our customer support.</strong>
        `
    }

});

function removeActive() {
    ratingEl.forEach((ratingEl) =>{
        ratingEl.classList.remove("active");

    });
}