// 배열
let numArr: number[] = [1,2,3,4]
let strArr: string[] = ['hello', 'im', 'junghan']
let boolArr: Array<boolean> = [true, false, true]


// 배열의 들어가는 요소들의 타입이 다양할경우,
let multiArr : (string | number)[] = [1,'hello']

// 다차원 배열의 타입을 정의하는방법
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
]

// 튜플 
// 길이와 타입이 고정된 배열
let tup1 :[number,number] = [1,2]
let utp2 : [number, string, boolean] = [1,'2', true]