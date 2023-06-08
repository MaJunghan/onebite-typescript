/**
 * 함수 타입 표현식
*/

type Operaction = (a:number, b:number) => number;

const add : Operaction = (a, b) => a + b;
const sub : Operaction = (a, b) => a - b;
const multiply : Operaction = (a, b) => a * b;
const divide : Operaction = (a, b) => a / b;

/**
 * 호출 시그니처
 * (콜 시그니처)
*/
type Operaction2 = {
    (a:number, b:number): number;
}


const add2 : Operaction2 = (a, b) => a + b;
const sub2 : Operaction2 = (a, b) => a - b;
const multiply2 : Operaction2 = (a, b) => a * b;
const divide2 : Operaction2 = (a, b) => a / b;