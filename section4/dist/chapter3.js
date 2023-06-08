/**
 * 함수 오버로딩 : 함수의 이름은 같으나나, 매개변수의 개수나 타입에 따라 다른버전으로 정의하는 방법
 * -> 매개변수 1개 -> 매개변수에 20 곱한값 출력
 * -> 매개변수 3개 -> 매개변수들을 다 더한값 출력
 */
// 실제 구현부
function func(a, b, c) {
    if (typeof b === 'number' && typeof c === 'number') {
        console.log(a + b + c);
    }
    else {
        console.log(a * 20);
    }
}
func(1);
func(2, 3, 5);
export {};
