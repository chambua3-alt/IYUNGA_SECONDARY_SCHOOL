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

});

}

// ADMIN STUDENT SEARCH

const studentSearch = document.getElementById("studentSearch");

if (studentSearch) {

    studentSearch.addEventListener("input", function() {

        const searchValue = studentSearch.value.toLowerCase();

        const studentRows = document.querySelectorAll(
            ".student-table tbody tr"
        );

        studentRows.forEach(function(row) {

            const studentData = row.textContent.toLowerCase();

            if (studentData.includes(searchValue)) {
                row.style.display = "";
            } else {
                row.style.display = "none";
            }

        });

    });

}

// ADMIN EDIT AND DELETE STUDENT

const studentTable = document.querySelector(".student-table");

if (studentTable) {

    studentTable.addEventListener("click", function(event) {

        const button = event.target;

        if (
            !button.classList.contains("edit-btn") &&
            !button.classList.contains("delete-btn")
        ) {
            return;
        }

        const row = button.closest("tr");

        if (!row) {
            return;
        }

        const studentId = row.cells[0].textContent;
        const studentName = row.cells[1].textContent;


        // EDIT STUDENT

        if (button.classList.contains("edit-btn")) {

            const newName = prompt(
                "Edit Full Name:",
                studentName
            );

            if (
                newName === null ||
                newName.trim() === ""
            ) {
                return;
            }

            row.cells[1].textContent = newName;

            alert(
                "Student " +
                studentId +
                " has been updated successfully."
            );
        }


        // DELETE STUDENT

        if (button.classList.contains("delete-btn")) {

            const confirmDelete = confirm(
                "Are you sure you want to delete " +
                studentName +
                " (" +
                studentId +
                ")?"
            );

            if (confirmDelete) {

                row.remove();

                alert(
                    "Student " +
                    studentName +
                    " has been deleted successfully."
                );
            }
        }

    });

}

// ADMIN ADD STUDENT

const addStudentBtn = document.getElementById("addStudentBtn");

if (addStudentBtn) {

    addStudentBtn.addEventListener("click", function() {

        const fullName = prompt("Enter student full name:");

        if (fullName === null || fullName.trim() === "") {
            return;
        }

        const gender = prompt("Enter gender (Male/Female):");

        if (gender === null || gender.trim() === "") {
            return;
        }

        const studentClass = prompt("Enter class:");

        if (studentClass === null || studentClass.trim() === "") {
            return;
        }

        const studentRows = document.querySelectorAll(
    ".student-table tbody tr"
);

let nextNumber = 1;

studentRows.forEach(function(row) {

    const existingId = row.cells[0].textContent;

    const number = parseInt(
        existingId.replace("IYS2026", ""),
        10
    );

    if (!isNaN(number) && number >= nextNumber) {
        nextNumber = number + 1;
    }

});

const studentId =
    "IYS2026" +
    String(nextNumber).padStart(3, "0");

        const tbody = document.querySelector(
            ".student-table tbody"
        );

        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td>${studentId}</td>
            <td>${fullName}</td>
            <td>${gender}</td>
            <td>${studentClass}</td>
            <td>Active</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

        tbody.appendChild(newRow);

        alert(
            "Student " +
            fullName +
            " has been added successfully."
        );

    });

}


// ADMIN APPLICATION STATUS

const approveApplicationBtn =
    document.getElementById("approveApplicationBtn");

const rejectApplicationBtn =
    document.getElementById("rejectApplicationBtn");

const christianStatus =
    document.getElementById("christianStatus");


if (approveApplicationBtn) {

    approveApplicationBtn.addEventListener("click", function() {

        christianStatus.textContent = "Approved";

        christianStatus.className = "status-approved";

        alert(
            "Christian Chambua's application has been approved."
        );

    });

}


if (rejectApplicationBtn) {

    rejectApplicationBtn.addEventListener("click", function() {

        christianStatus.textContent = "Rejected";

        christianStatus.className = "status-rejected";

        alert(
            "Christian Chambua's application has been rejected."
        );

    });

}

// STUDENT PHOTO PREVIEW

const studentPhoto = document.getElementById("studentPhoto");
const studentPhotoPreview = document.getElementById("studentPhotoPreview");

if (studentPhoto && studentPhotoPreview) {

    studentPhoto.addEventListener("change", function() {

        const file = studentPhoto.files[0];

        if (!file) {
            studentPhotoPreview.style.display = "none";
            studentPhotoPreview.src = "";
            return;
        }

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image file.");
            studentPhoto.value = "";
            studentPhotoPreview.style.display = "none";
            return;
        }

        const imageUrl = URL.createObjectURL(file);

        studentPhotoPreview.src = imageUrl;
        studentPhotoPreview.style.display = "block";
    });

} 

// STUDENT PROFILE EDIT

const editProfileBtn = document.getElementById("editProfileBtn");
const profileEditForm = document.getElementById("profileEditForm");
const saveProfileBtn = document.getElementById("saveProfileBtn");
const cancelProfileBtn = document.getElementById("cancelProfileBtn");

const editPhone = document.getElementById("editPhone");
const editEmail = document.getElementById("editEmail");
const editAddress = document.getElementById("editAddress");

const studentPhone = document.getElementById("studentPhone");
const studentEmail = document.getElementById("studentEmail");
const studentAddress = document.getElementById("studentAddress");

const profileMessage = document.getElementById("profileMessage");


// OPEN EDIT FORM

if (editProfileBtn && profileEditForm) {

    editProfileBtn.addEventListener("click", function() {

        editPhone.value = studentPhone.textContent;
        editEmail.value = studentEmail.textContent;
        editAddress.value = studentAddress.textContent;

        profileEditForm.style.display = "block";

        profileEditForm.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


// SAVE PROFILE CHANGES

if (saveProfileBtn) {

    saveProfileBtn.addEventListener("click", function() {

        if (!editPhone.checkValidity()) {
            editPhone.reportValidity();
            return;
        }

        if (!editEmail.checkValidity()) {
            editEmail.reportValidity();
            return;
        }

        if (
            editPhone.value.trim() === "" ||
            editEmail.value.trim() === "" ||
            editAddress.value.trim() === ""
        ) {
            alert("Please fill in all profile information.");
            return;
        }

        studentPhone.textContent = editPhone.value;
        studentEmail.textContent = editEmail.value;
        studentAddress.textContent = editAddress.value;

        profileMessage.textContent =
            "Your profile has been updated successfully.";

        profileMessage.style.display = "block";

        profileMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(function() {

            profileEditForm.style.display = "none";

        }, 1500);

    });

}


// CANCEL PROFILE EDIT

if (cancelProfileBtn) {

    cancelProfileBtn.addEventListener("click", function() {

        profileEditForm.style.display = "none";

        profileMessage.textContent = "";

    });

}