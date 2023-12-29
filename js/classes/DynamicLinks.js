// Card One - Dynamic Links

const dynamicLinkOne = document.getElementById("dynamic-link-one");
const linkList = document.querySelector(".link-list");

function setDynamicUrl() {
    let userInput = prompt("Enter a new URL");

    if (userInput) {
        if (!/^https?:\/\//i.test(userInput)) {
            userInput = "http://" + userInput;
        }

        const firstDotIndex = userInput.indexOf('.');
        const lastDotIndex = userInput.lastIndexOf('.');
        const visibleText = userInput.substring(firstDotIndex + 1, lastDotIndex);
        const finalLinkText = visibleText.charAt(0).toUpperCase() + visibleText.slice(1);

        const newLink = document.createElement("a");
        newLink.href = userInput;
        newLink.target = "_blank";
        newLink.textContent = finalLinkText;

        const newListItem = document.createElement("li");
        let randomKey = Math.random().toString(36).substr(2, 9);
        localStorage.setItem(randomKey, userInput);
        newListItem.appendChild(newLink);

        // Create a new delete button for each list item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.className = "deleteButton";
        deleteButton.addEventListener("click", function () {
            // Remove the list item when the delete button is clicked
            linkList.removeChild(newListItem);
            // Remove the corresponding item from local storage
            localStorage.removeItem(randomKey);
        });

        // Append the delete button to the list item
        newListItem.appendChild(deleteButton);

        linkList.appendChild(newListItem);
    }
}

dynamicLinkOne.addEventListener("click", setDynamicUrl);

// Get the current saved link(s) on page load
document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        // Skip items with specific names
        if (key === 'userDashboardName' || key === 'notepadText') {
            continue;
        }

        const savedLink = localStorage.getItem(key);

        const firstDotIndex = savedLink.indexOf('.');
        const lastDotIndex = savedLink.lastIndexOf('.');
        const visibleText = savedLink.substring(firstDotIndex + 1, lastDotIndex);
        const finalLinkText = visibleText.charAt(0).toUpperCase() + visibleText.slice(1);

        const newLink = document.createElement("a");
        newLink.href = savedLink;
        newLink.target = "_blank";
        newLink.textContent = finalLinkText;

        const newListItem = document.createElement("li");
        newListItem.appendChild(newLink);

        // Create a new delete button for each list item
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "X";
        deleteButton.className = "deleteButton";
        deleteButton.addEventListener("click", function () {
            // Remove the list item when the delete button is clicked
            linkList.removeChild(newListItem);
            // Remove the corresponding item from local storage
            localStorage.removeItem(key);
        });

        // Append the delete button to the list item
        newListItem.appendChild(deleteButton);

        linkList.appendChild(newListItem);
    }
});
