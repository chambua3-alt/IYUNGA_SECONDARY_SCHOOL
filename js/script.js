const welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function() {
    alert("Thank you for visiting Iyunga Secondary School!");
});

const schoolImages = [
    "images/school1.jpg",
    "images/school2.jpg",
    "images/school3.jpg",
    "images/school4.jpg",
    "images/school5.jpg",
    "images/school6.jpg",
    "images/school7.jpg",
    "images/school8.jpg"
];

let currentImage = 0;

const schoolImage = document.getElementById("schoolImage");

setInterval(function() {
    currentImage++;

    if (currentImage >= schoolImages.length) {
        currentImage = 0;
    }

    schoolImage.src = schoolImages[currentImage];
}, 3000);

const backToTop = document.getElementById("backToTop");

backToTop.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});