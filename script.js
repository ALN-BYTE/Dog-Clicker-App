// live_hRgi8yyI8hkEG5YFlZfH3LOT7GOUY28VdI0aElm7xUuugANi1Jgc9oe1gyynrci6 my dogAPi key 
//https://api.thecatapi.com/v1/images/search?api_key=YOUR_API_KEY




//declare the url 
var url = 'https://api.thedogapi.com/v1/images/search?api_key='
//api key
var apiKey = "live_hRgi8yyI8hkEG5YFlZfH3LOT7GOUY28VdI0aElm7xUuugANi1Jgc9oe1gyynrci6 "

//button variable assigned to DOM element that has the assigned id 
var button = document.getElementById('main-button'); //inintialize button

// function that requests and receives a random dog image. 
function fetchDogInfo() {
    // Replace 'API_URL' with the actual URL of the API
    fetch(url + apiKey)
        .then(response => {
            // Check if the response is ok (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // Parse the JSON in the response
            return response.json();
        })
        .then(data => {
            // Handle the parsed data
            console.log(data); // For demonstration purposes

            // Extract the image URL
            var imageUrl = data[0].url;

            // Update the image source
            var imageElement = document.getElementsByClassName('fit-picture')[0]; // Replace with your actual image class
            imageElement.src = imageUrl;
        })
        .catch(error => {
            // Handle any errors
            console.error('There was an error!', error);
        });
}



//create a event listener for the click event on the button 
button.addEventListener('click', fetchDogInfo); 

