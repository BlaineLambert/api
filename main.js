const apiKey = 'live_2LOh3bcaabMvCqEqwxpduQzRPf2h6s9VGY1NTB6zf94is1K95TmdBfJwpc7Tes7g';

// Get references to HTML elements
const getCatButton = document.getElementById('getCatButton');
const catImageContainer = document.getElementById('catImage');

// Function to fetch a random cat image
const fetchCatImage = () => {
    fetch('https://api.thecatapi.com/v1/images/search', {
        headers: {
            'x-api-key': apiKey,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            // Extract the image URL from the API response
            const imageUrl = data[0].url;

            // Create an <img> element and set its source
            const catImage = document.createElement('img');
            catImage.src = imageUrl;

            // Clear the previous image (if any) and append the new one
            catImageContainer.innerHTML = '';
            catImageContainer.appendChild(catImage);
        })
        .catch((error) => {
            console.error('Error fetching cat image:', error);
        });
};

// Add a click event listener to the button
getCatButton.addEventListener('click', fetchCatImage);
