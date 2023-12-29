// Generate a random image when the user clicks the field

const imageBtn = document.getElementById("randomImage");

imageBtn.addEventListener("click", function () {
    console.log("Clicked");
    const randomizer = document.getElementById("imageHolder");

    // Use the Fetch API with cache control
    fetch("https://source.unsplash.com/random/", {
        cache: "no-store", // Ensure the response is not served from the cache
    })
    .then(response => {
        if (response.ok) {
            return response.blob();
        }
        throw new Error('Network response was not ok.');
    })
    .then(blob => {
        const imageUrl = URL.createObjectURL(blob);
        randomizer.style.backgroundImage = `url('${imageUrl}')`;
    })
    .catch(error => console.error('Fetch error:', error));
});

