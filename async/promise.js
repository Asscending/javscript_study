
/**
 * 비동기를 실행 할 때 콜백 함수 대신 실행 할 수 있음
 */

// 1. Producer
// 새로운 promise가 만들어 질때는 엑스큐터가 바로 실행된다.
const promise =  new Promise((resolve, reject)=>{
    // doing some heavy work(network, read files)
    console.log("doing something...")
    setTimeout(() => {
        resolve('ellie');
        // reject(new Error('no network...!'))
    }, 2000);
});


// 2. Consumers : then, catch, finally
// then : 성공, catch : 에러났을때, finally : 성공이든, 실패든 실행
promise.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("finally")
})

// 3. Promise chaining
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1)
    }, 1000);
})

fetchNumber
.then(num=>num*2)
.then(num=>num*3)
.then(num=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(num-1)
        }, 1000);
    })
})
.then(num => console.log(num))
