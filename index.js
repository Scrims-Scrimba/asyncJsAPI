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

// async function fetchDogImage() {
//     const response = await fetch('https://dog.ceo/api/breeds/image/random');
//     const data = await response.json();
//     console.log(data);
//     const dogImage = document.getElementById('dog-image');
//     dogImage.src = data.message;
// }

// fetchDogImage();

const randomActivity = document.getElementById('random-activity');

// async function fetchRandomActivity() {
//     const response = await fetch('https://bored-api.appbrewery.com/random');
//     const data = await response.json();
//     console.log(data);
//     randomActivity.textContent = data.activity;
// }

async function fetchRandomActivity() {
    try {
        const response = await fetch('https://bored-api.appbrewery.com/random');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        randomActivity.textContent = data.activity;
    } catch (error) {
        console.error('Error fetching random activity:', error);
        randomActivity.textContent = 'Oops! Could not load an activity.';
    }
}

fetchRandomActivity();