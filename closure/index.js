/**
 * closer
 */

/**
 * 함수 outerFunc 내에서 내부함수 innerFunc가 선언되고 호출되었다. 
 * 이때 내부함수 innerFunc는 자신을 포함하고 있는 외부함수 
 * outerFunc의 변수 x에 접근할 수 있다. 
 * 이는 함수 innerFunc가 함수 outerFunc의 내부에 선언되었기 때문이다.
 */

const outerFunc = ()=>{
    let x = 10;
    const innerFunc = ()=>{
        console.log(x);
    }
    innerFunc();
}

outerFunc();