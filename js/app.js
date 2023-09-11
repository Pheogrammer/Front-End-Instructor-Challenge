document.addEventListener("DOMContentLoaded", function () {
    const ratingForm = document.getElementById("rating-form");
    const thankYouMessage = document.getElementById("thank-you");
    const selectedRating = document.getElementById("selected-rating");

    ratingForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(ratingForm);
        const userRating = formData.get("rating");

        selectedRating.textContent = userRating;
        thankYouMessage.style.display = "block";

        ratingForm.style.display = "none";
    });
});
