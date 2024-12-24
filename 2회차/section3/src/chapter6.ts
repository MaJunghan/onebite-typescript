/**
 * 타입 단언
 */

type Person = {
    name: string;
    age: number;
}

let person = {} as Person
person.name = '마정한'
person.age = 121

type Dog = {
    name: string;
    color: string;
}

let dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도'
} as Dog

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언신
 * A as B
 * A가 B의 슈퍼타입 이거나
 * A가 B의 서브타입 이여야 함.
 */

let num1 = 10 as never // a가 b의 슈퍼타입
let num2 = 10 as unknown // a가 b의 서브타입
// let num3 = 10 as string

/**
 * const 단언
 */

let num4 = 10 as const

let cat = {
    name: '야옹이',
    color: 'yellow'
} as const

// cat.color = 'dd'


/**
 * Non Null 단언
 */

type Post = {
    title: string;
    author?: string;
}

let post : Post = {
    title: '게시글1',
    author: '마정한'
}

// !붙이면 null과 undefined가 아니다 
const len : number = post.author!.length
