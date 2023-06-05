/**
 * Unknown 타입
 */
function unknownExam() {
    let a = 1;
    let b = 'hello';
    let c = true;
    let d = null;
    let e = undefined;
    // 해당 number, string,, boolean, null, undefined의 전체집합인 unknown으로 upCasting은 변환가능
    // downCasting은 불가능
}
/**
 * Never 타입 : 공집합
 */
function neverExam() {
    function neverFunc() {
        while (true) { }
    }
    let num = neverFunc();
    let str = neverFunc();
    // never타입은 말그대로 상위 타입으로 다 변환이 가능함. 업캐스팅이니까 .
}
/**
 * Void 타입 : undefined super type
 */
function voidExam() {
    function voidFunc() {
        console.log('hi');
        return undefined;
    }
    let voidVar = undefined;
}
/**
 * Any 타입 : 다운캐스팅 업캐스팅 다됨 never 타입뺴고
 */
function anyExam() {
    let unknownVar;
    let anyVar;
    let undefinedVar;
    let neverVar;
    anyVar = unknownVar;
    undefinedVar = anyVar;
    // neverVar = anyVar;
}
export {};
