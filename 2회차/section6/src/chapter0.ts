/**
 * 제네릭
 */


// 제네릭 함수 : 여러타입을 받아서 범용적으로 사용할 수 있는 함수 => 함수를 호출할떄 인수를 통해 추론된다.
function func<T>(value: T): T {
    return value
}


let num = func(10)
let bool = func(true)
let str = func('string')


let arr = func<[number,number,number]>([1, 2, 3])