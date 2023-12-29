// Make the main header text customizable by the user

// Create a variable to fetch the current text
const triggerElement = document.querySelector("#dashboardText");

// A function to make the text clickable
triggerElement.addEventListener("click", function() {
    this.contentEditable = true;
    this.focus();
    
});

// Store what the user wrote in the header
function saveHeader() {
    // Get the text from the input field
    let userHeaderInput = document.querySelector("#dashboardText").textContent;
    // Save the text to localStorage
    localStorage.setItem("userDashboardName", userHeaderInput);
}

// Update contentEditable state on blur (when user clicks outside the editable area)
triggerElement.addEventListener("blur", function() {
    this.contentEditable = false;
    saveHeader();
});

// Get the current saved header
document.addEventListener("DOMContentLoaded", function() {
    let savedHeader = localStorage.getItem("userDashboardName");
    if (savedHeader) {
        document.querySelector("#dashboardText").textContent = savedHeader;
    }
});








































































// Create a variable to trigger the change again
// const triggerElementAgain = document.querySelector(".dynamicHeader");
// Function to change the text content and create an input field to write the new header in

// function editHeaderText() {
//     // Get the current header text
//     const dashboardName = document.getElementById("dashboardText").textContent;
//     // Create an input field
//     const inputField = document.createElement("input");
//     inputField.type = "text";
//     inputField.value = dashboardName;
//     inputField.classList.add("headerInput");
//     // Replace the header with name selected by the user
//     document.getElementById("top-section").replaceChild(inputField, document.getElementById("dashboardText"));
//     inputField.addEventListener("blur", function() {
//         saveChanges(inputField);
//     });
// }
// // Change the header with a click
// triggerElement.addEventListener("click", function() {
//     console.log("Clicked before change")
//     editHeaderText();
// });

// // Function to save the new header text
// function saveChanges(inputField) {
//     // Get the new text from the input field
//     const headerByUser = inputField.value;
//     // Create a new h1 element
//     const newHeader = document.createElement("h1");
//     newHeader.setAttribute("class", "dynamicHeader");
//     newHeader.textContent = headerByUser;
//     // Replace the input field with the new h1
//     document.getElementById("top-section").replaceChild(newHeader, inputField);
// }


// // Change the header again
// function editHeaderTextAgain() {
//     // Get the current header text
//     const dashboardNameNew = document.querySelector(".dynamicHeader").textContent;
//     // Create an input field
//     const inputField = document.createElement("input");
//     inputField.type = "text";
//     inputField.value = dashboardNameNew;
//     inputField.classList.add("headerInput");
//     // Replace the header with name selected by the user
//     document.getElementById("top-section").replaceChild(inputField, document.querySelector(".dynamicHeader"));
//     inputField.addEventListener("blur", function() {
//         saveChanges(inputField);
//     });
// }

// // A function to change the text again
//     triggerElementAgain.addEventListener("click", function() {
//         console.log("Clicked after change")
//         editHeaderTextAgain();
//     })













