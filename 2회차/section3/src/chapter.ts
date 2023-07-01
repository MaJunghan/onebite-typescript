/**
 * Unknown 타입 : 전체집합의 슈퍼타입
 */

function unKnownExam() {
  // upCastring은 다되기때문에 모두 다 허용
  let a: unknown = '121';
  a = 12323;
  a = null;
  a = [1, 2, 3, 4];

  // downCastring은 불가
  let unknown: unknown;
  // let num: number = unknown;
  // let str: string = unknown;
}

/**
 * Never 타입 : 모든 타입의 서브타입
 */

function naverExam() {
  function naverFunc(): never {
    while (true) {}
  }

  let num: number = naverFunc();
  let str: string = naverFunc();
  // 다됨 왜냐면 업캐스팅이니까
}

/**
 * Void : undefined의 슈퍼타입
 */

function voidExam() {
  function voidFunc(): void {
    console.log('void');
  }
  let voidVar: void = undefined;
}

/**
 * Any 타입 : never 타입뺴고 모두 다 업캐스팅, 다운캐스팅 가능
 */
