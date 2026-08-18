const welcomeBtn = document.getElementById("welcomeBtn");

if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function() {
        alert("Thank you for visiting Iyunga Secondary School!");
    });
}


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

if (schoolImage) {
    setInterval(function() {
        currentImage++;

        if (currentImage >= schoolImages.length) {
            currentImage = 0;
        }

        schoolImage.src = schoolImages[currentImage];
    }, 3000);
}


const backToTop = document.getElementById("backToTop");

if (backToTop) {
    backToTop.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// STUDENT APPLICATION FORM

const applicationForm = document.getElementById("applicationForm");

if (applicationForm) {

    // Generate Application ID
    const applicationId = document.getElementById("applicationId");

    if (applicationId) {
        const randomNumber = Math.floor(1000 + Math.random() * 9000);

        applicationId.value = "IYSAPP2026" + randomNumber;
    }


    // Set Application Date
    const applicationDate = document.getElementById("applicationDate");

    if (applicationDate) {
        const today = new Date();

        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");

        applicationDate.value = `${year}-${month}-${day}`;
    }


    // Submit Application
    applicationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (!applicationForm.checkValidity()) {
            applicationForm.reportValidity();
            return;
        }

        const applicationMessage =
            document.getElementById("applicationMessage");

        if (applicationMessage) {

            applicationMessage.textContent =
                "Application submitted successfully. " +
                "Your Application ID is " +
                applicationId.value +
                ". Please keep it for future reference.";

        }

        applicationForm.reset();

    });

}