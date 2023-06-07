/**
 * Unknown 타입
 */
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 해당 number, string,, boolean, null, undefined의 전체집합인 unknown으로 upCasting은 변환가능
  // downCasting은 불가능
}

/**
 * Never 타입 : 공집합
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();

  // never타입은 말그대로 상위 타입으로 다 변환이 가능함. 업캐스팅이니까 .
}

/**
 * Void 타입 : undefined super type
 */
function voidExam(): void {
  function voidFunc() {
    console.log('hi');
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * Any 타입 : 다운캐스팅 업캐스팅 다됨 never 타입뺴고
 */

function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;

  // neverVar = anyVar;
}
