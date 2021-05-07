console.log("1");
setTimeout(() => {
    console.log("2")
},1000);
console.log("3");

// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=>{console.log("hello")})

// Asynchronous callback
function printWithDelay(print,timeout){
    setTimeout(print, timeout)
}
printWithDelay(()=> console.log("async callback"), 2000)

// Callback Hell example
class UserStorage{
    loginUser(id,pwd,onSuccess,onError){
        setTimeout(() => {
            if(
                (id === "jimmy" && pwd === "1234") ||
                (id === "coder" && pwd === "academy")
            ){
                onSuccess(id);
            }else{
                onError(new Error("not found"))
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === "jimmy"){
                onSuccess({name:"jimmy", role:"admin"});
            }else{
                onError(new Error("no access"))
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const pwd = prompt("enter your password");
userStorage.loginUser(
    id,
    pwd, 
    user => {
        userStorage.getRoles(
            user,
            userWithRule => {
                alert(`hello ${userWithRule.name}, you have a ${userWithRule.role} role`)
            },
            error => {
                console.log(error);
            }
        )
    },
    error => {
        console.log(error)
    }
)