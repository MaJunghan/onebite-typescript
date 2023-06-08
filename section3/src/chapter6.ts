/**
 * 타입 단언 
 */


type Person = {
    name: string;
    age: number;
}

let person = {} as Person;
person.name = '마정한'
person.age = 31;


type Dog = {
    name: string;
    color: string;
}

let dog : Dog = {
    name: '돌돌이',
    color : 'brown',
    breed: '진도'
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언<- 단언식
 * A가 B의 슈퍼타입 이거나,
 * A가 B의 서브타입 이여야함.
 */

let num = 10 as never; 
let num2 = 10 as unknown;
// let num3 = 10 as string; 겹치는 부분이 있어야 허용을 해준다.
let num3 = 10 as unknown as string;


/**
 * const 단언
 */


// 값
let num4 = 10 as const;
// readonly
let cat = {
    name:'야옹이',
    color:'yellow'
} as const;


/**
 * Non Null 단언
 */
type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: '게시글1',
    author: '마정한'
}


// const len : number = post.author!.length;
if(post.author) {
    const len : number = post.author?.length;
}