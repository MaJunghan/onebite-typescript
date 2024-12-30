/**
 * 분산적인 조건부 타입 : 유니언타입과 같이 사용할때 분산적으로 업그레이드 되는 것
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a : StringNumberSwitch<number>
let b : StringNumberSwitch<string>

// T에 number | string 이렇게 할당되는 것이 아니라, number 1번, string한번 이렇게 할당됨.
// number가 참일경우 string, 거짓일경우 number 이렇게 유니언으로 묵여서 string | number로 타입 설정이 되는 것
let c : StringNumberSwitch<number | string>

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

