/**
 * async & awit
 */

// 1.async
async function fetchUser(){
    // do network request in 10 sec....
    return 'jimmy';
}

const user = fetchUser();
user.then(console.log)
console.log(user)

// 2. await
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

async function getApple(){
    await delay(3000);
    return "apple";
}

async function getBanana(){
    await delay(3000);
    return "banana";
}

async function pickFruits(){
    try {
        const applePromise = getApple();
        const bananaPromise = getBanana();
        const apple = await applePromise;
        const banana = await bananaPromise; 
        return `${apple} + ${banana}`  
    } catch (error) {
        
    }
}

pickFruits().then(console.log)

// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '))
}
pickAllFruits().then(console.log)