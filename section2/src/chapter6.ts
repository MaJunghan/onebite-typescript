// any
// 특정 변수의 타입을 우가 확실히 모를떄

let anyVal: any = 10;
// 오류가 런타임에 일어나면 타입스크립트의 장점을 포기하는것과 같다

let unknownVar: unknown;

unknownVar = '';
unknownVar = 10;
unknownVar = () => {};

// unkown은 타입가드를 통해서만 사용할 수 있음.
// 그래서 런타임시 오류를 발생시키지않아 가급적 unknown을 사용하는것이 낫다
