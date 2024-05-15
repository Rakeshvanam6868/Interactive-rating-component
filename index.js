const rates = document.querySelectorAll(".num");
rates.forEach((nums) => {
    nums.addEventListener("click", () => {
      document.getElementById("key").innerHTML=nums.innerHTML;
      document.getElementById("nums.innerHTML").style.background="hsl(216, 12%, 54%)";
    });
});


const btn = document.getElementById("sub");
const thankCard = document.querySelector(".thankyou");
const ratingCard = document.querySelector(".rating");

btn.addEventListener("click", () => {
    thankCard.classList.remove("hidden");
    ratingCard.classList.add("hidden");
});
