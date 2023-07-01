/**
 * 함수 타입 정의
 */
function func(a, b) {
    return a + b;
}
/**
 * 화살표 함수 타입 정의
 */
const add = (a, b) => a + b;
/**
 * 함수의 매개변수
 */
function introduce(name = '마정한', tall) {
    console.log(`name : ${name}`);
    if (typeof tall === 'number') {
        console.log(`tall : ${tall}`);
    }
}
introduce('마정한', 174);
introduce('마정한');
function getSum(...rest) {
    let sum = 0;
    for (let x of rest) {
        sum += Number(x);
    }
    return sum;
}
console.log(getSum(1, 2, 3, 4));
export {};
