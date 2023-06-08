/**
 * 타입 추론 : 초기 값을 기준으로 타입을 추론
 */
let a = 10;
let b = 'hello';
let c = {
    id: 1,
    name: '마정한',
    profile: {
        nickName: '빛나리'
    },
    urls: 'http'
}

// 매개변수에 기본값이 있으면 추론
function func(message = 'heelo') {
    // 함수는 return문 기준으로 타입을 추론
    return 'heelo'
}


// 선언 : 암묵적 any type (진화)
let d;
d = 10;
// 여기서 number 타입으로 인지
d.toFixed();

d = 'str';
d.toUpperCase();


// const로 선언시 상수라 값변경이 일어나지 않음 10으로 선언
const num = 10;

let arr = [1,'string']

// let 은 number const 값 -> let으로 사용시 타입 넓히기