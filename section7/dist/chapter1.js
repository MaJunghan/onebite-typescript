/**
 * 첫번째 사례
 */
function swap(a, b) {
    return [b, a];
}
const [a, b] = swap(1, '2');
console.log(a, b);
const [c, d] = swap(1, true);
console.log(c, d);
/**
 * 두번째 사례
 */
function returnFirstValue(data) {
    // 제네릭으로 설정 했지만, 아직까지 타입추론을 하지못하여 unknown으로 타입이 잡힘.
    // T [] 배열로 해결가능 -> 하지만 [1,'hello','my name is'] 이런식으로 사용하게 되면 0번쨰 요소가 string인지 number인지 ts는 모름
    // 그래서 유니언 타입으로 나오는것인데, 해결방법 [ T, ...unknown[] ]
    return data[0];
}
const num = returnFirstValue([true, 0, 1, 2]);
const str = returnFirstValue([1, 'hello', 'my name is']);
/**
 * 세번째 사례
 */
// interface interfaceA {
//     length: number;
// }
// interface interfaceB extends interfaceA {}
// 위에 extends: 위의 인터페이스랑 같은것. length가 있는 데이터들만 제한한다.
function getLength(data) {
    return data.length;
}
let var1 = getLength([1, 2, 3]); // 3
console.log(var1);
let var2 = getLength("12345"); // 5
console.log(var2);
let var3 = getLength({ length: 10 }); // 10
console.log(var3);
export {};
// let var4 = getLength(10);
