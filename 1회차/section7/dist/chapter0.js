/**
 * 제네릭
 */
// 제네릭 함수
function func(value) {
    return value;
}
const funcStr = func('123');
const funcNum = func(123123);
// 튜플 타입
let numArr = func([1, 2, '3']);
export {};
