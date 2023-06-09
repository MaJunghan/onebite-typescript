/**
 * 제네릭
 */


// 제네릭 함수
function func<T>(value: T): T {
    return value;
}


const funcStr = func<string>('123');

const funcNum = func<number>(123123);

// 튜플 타입
let numArr = func<[number,number,string]>([1,2,'3']);