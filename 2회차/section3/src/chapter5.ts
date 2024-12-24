/**
 * 타입 추론 
 */

// 점진적 타입추론 : 타입을 설정 하지 않아도 초기값으로 할당된 값으로 타입을 설정하는 방법
let a : number = 10
let b = 'hello'
let c = {
    id: 1,
    name: '마정한',
    profile: {
        nickname: 'fung'
    },
    urls: ['https://junghan.conm']
}

let { id, name, profile } = c

let [one, two, three] = [1, 'hello', true]

// 함수는 반환값으로 추론, 기본값 추론
function func(message = 'hello') {
    return 'hello'
}


// 암묵적 any 타입
let d;
d = 10
d.toFixed()

d = 'hello'
d.toUpperCase()
// d.toFixed()


// 상수기 떄문에 10
const num = 10

let arr = [1,'string']