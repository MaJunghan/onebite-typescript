// 배열과 튜플

const numArr: number[] = [1, 2, 3];

const strArr: string[] = ['my', 'name'];

const boolArr: Array<boolean> = [true, false];

// 배열에 들어가는 요소들의 값이 다양한 경우
const multiArr: (number | string)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 방법
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플 : 길이와 타입이 고정된 배열
let tup: [number, string] = [1, 'str'];

// 배열 메서드 사용할때 push pop의 오류를 인지하지 못함.
