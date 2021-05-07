/**
 * closer?
 * 클로저란 내부함수가 외부함수의 맥락(context)에 접근 할 수 있는 것을 가르킨다. 
 * 사용 예) 특정 함수 안에서만 실행 되는 함수가 있고, 이 함수가 외부에 있다면 응집도가 떨어 질 수가 있다.
 *          그래서 함수 안에 작성한다.
 * 
 * 내부 함수는 외부 함수의 지역변수에 접근 할 수 있다.
 * 클로저(closure)는 내부함수와 밀접한 관계를 가지고 있는 주제다. 
 * 내부함수는 외부함수의 지역변수에 접근 할 수 있는데 외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있다.
 * 
 * 데이터의 은닉화를 위해서도 사용한다. 프로젝트의 규모가 커질 수록 데이터의 대한 변경을 누구나 할 수 있는것은 좋지 않다.
 */

/**
 * 함수 outerFunc 내에서 내부함수 innerFunc가 선언되고 호출되었다. 
 * 이때 내부함수 innerFunc는 자신을 포함하고 있는 외부함수 
 * outerFunc의 변수 x에 접근할 수 있다. 
 * 이는 함수 innerFunc가 함수 outerFunc의 내부에 선언되었기 때문이다.
 */

// const outerFunc = ()=>{
//     let x = 10;
//     const innerFunc = ()=>{
//         console.log(x);
//     }
//     innerFunc();
// }

// outerFunc();


/**
 *  private 한 변수가 안전하게 저장, 수정 될 수 있도록 closure를 활용 한 예제.
 *  title 수정은 리턴한 객체의 함수인 set_title으로만 수정 할 수 있다.
 */
const movie = (title)=>{
    return {
        get_title : ()=>{
            return title;
        },
        set_title : (_title)=>{
            if(typeof _title === "String"){
                title = _title
            }else{
                alert("문자열을 입력해 주세요.")
            }
            
        } 
    }
}

const fuck_lotte = movie("곰돌이 푸우")
console.log(fuck_lotte.get_title())
fuck_lotte.set_title("콰이어트 플레이스`12")
console.log(fuck_lotte.get_title())
console.log(set_title(2))