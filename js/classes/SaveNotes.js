// Card 4

// Save the notes the user has made to the text area

const notepad = document.querySelector("#notepad");

notepad.addEventListener("input", function () {
    // Get the text from the text area
    let usersInput = document.querySelector("#notepad").value;
    localStorage.setItem("notepadText", usersInput);
});

// Get the current saved notes
window.onload = function () {
    let usersInput = localStorage.getItem("notepadText");
    if (usersInput) {
        document.querySelector("#notepad").value = usersInput;
    }
};
