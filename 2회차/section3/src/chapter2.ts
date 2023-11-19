/**
 * unKnown
 */

function unKnownExam() {
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unKnownVar: unknown;

  // let num: number = unKnownVar;
  // let str: string = unKnownVar;
  // let bool: boolean = unKnownVar;
}

/**
 * Never
 */

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();
  // 이건 당연히된다. never는 모든타입의 서브타입이기 떄문에
  // 서브타입으로 업캐스팅은 당연한것이다.
}

/**
 * void
 */

function voidExam() {
  function voidFunc(): void {
    console.log('hi');
    return undefined;
  }

  // undefined의 업캐스팅은 void니까 된다.
  let voidVar: void = undefined;
}

/**
 * any
 */

function anyExam() {
  // never 뺴고는 다된다..
  // any는 상대방의 타입을 전부다 반대로 다운캐스팅한다.
}
