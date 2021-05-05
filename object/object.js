/**
 * object의 비구조화 할당
 */
console.log("object.js")
const person = {
    name : "minsu",
    age : "20",
    addr : "서울"
}

const person2 = {
    name : "jimmy",
    age : "30",
    addr : "경기"
}

const print = (data)=>{
    const {name, age, addr} = data;
    const text = `${name} 은 ${age} 살 이고 ${addr} 에 삽니다.`
    console.log(text);  
}

const print2 = (({name, age, addr})=>{
    const text = `${name} 은 ${age} 살 이고 ${addr} 에 삽니다.`
    console.log(text); 
})

print(person)
print2(person2)


/**
 * obejct 안의 함수
 * 오브젝트 안에서의 함수의 this는 해당 오브젝트를 가르킨다.
 * 화살표 함수를 사용시에는 this는 undefined가 발생한다..? 왜 ?
 */

const dog = {
    name : "멍멍이",
    sound : "멍멍!!",
    say : function(){
        console.log(this.sound);
    }
}

dog.say();

const cat = {
    name : "야옹이",
    sound : "야옹~~!",
    say :  function(){
        console.log(this.sound)
    }
}

cat.say();


