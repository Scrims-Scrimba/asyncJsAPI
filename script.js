// // upload a file
// function uploadFile(callback){
//     console.log('Step 1: Uploading file...')
//     setTimeout(()=> {
//         callback() // call next function
//     }, 1000)
// }
// // process a file
// function processFile(callback){
//     console.log('Step 2: Processing file...')
//     setTimeout(()=> {
//         callback() // call next function
//     }, 1000)
// }
// // notify a user
// function notifyUser(callback){
//     console.log('Step 3: Notifying user...')
//     setTimeout(()=> {
//         callback() // call next function
//     }, 1000)
// }

// Pyramid of callback doom
// uploadFile(() => {
//     processFile(() => {
//         notifyUser(() => {
//             console.log('All steps completed.');
//         });
//     });
// });


function uploadFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 1: Uploading file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function processFile() {
    return new Promise((resolve, reject) => {
        console.log('Step 2: Processing file...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

function notifyUser() {
    return new Promise((resolve, reject) => {
        console.log('Step 3: Notifying user...')
        setTimeout(() => {
            resolve() // Call the next step after 1 second
        }, 1000)
    })
}

// Example usage with async/await
async function main() {
    try {
        await uploadFile();
        await processFile();
        await notifyUser();
        console.log('All steps completed.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// main();

function createPromise() {
    return new Promise((resolve, reject) => {
        console.log('Creating a promise...')
        const success = Math.random() > 0.5; // Simulate a random success
        if (success) {
            resolve('Operation succeeded')
        } else {
            reject(new Error('Operation failed'))
        }
    })
}


try {
    const promise1 = createPromise();
    const promise2 = createPromise();
    const promise3 = createPromise();

    const results = await Promise.all([promise1, promise2, promise3]);
    console.log('All promises resolved with results:', results);
} catch (error) {
    console.error('One or more promises rejected with error:', error);
}