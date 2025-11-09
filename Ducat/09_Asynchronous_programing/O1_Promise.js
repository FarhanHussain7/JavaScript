// let myPromise = new Promise(function(resolve, request){
//         console.log('I m inside promise');
//         resolve(200);
// })
// console.log('I m first');

// let MyPromise = new Promise(function(resolve, request){
//     setTimeout(() => {
//         console.log('I m inside promise');
//     }, 7000);
//         resolve(200);
// })
// console.log('I m first');

let MyPromise = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log('I m inside promise');
    }, 7000);
        // resolve(200);
        reject(new Error("error aa gya ji "));
})

MyPromise.then((value)=>{console.log(value)});

MyPromise.catch((error)=>{console.log(error)});

console.log("I m first");