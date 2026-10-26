// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching dog image:', error));


// fetch('https://bored-api.appbrewery.com/random')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching random activity:', error));


// const response = await fetch('https://dog.ceo/api/breeds/image/random');
// const data = await response.json();
// console.log(data);
// const dogImage = document.getElementById('dog-image');
// dogImage.src = data.message;

async function fetchDogImage() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    console.log(data);
    const dogImage = document.getElementById('dog-image');
    dogImage.src = data.message;
}

fetchDogImage();