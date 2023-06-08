/**
 * 대수타입
 * -> 여러개의 타입을 합성하여 새롭게 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재합니다
 */

/**
 * 1. 합집합 - Union 타입 
 */

let a : string | number;
a = 2;
a = '2';

let arr : (string | number)[] = ['1212', 23123];


type Dog = {
    name : string;
    color : string;
}

type Person = {
    name: string
    language: string;
}

type Union1 = Dog | Person

let union1 : Union1 = {
    name: '1',
    color: '1'
}

let union2 : Union1 = {
    name: '2',
    language: '2'
}

let union3 : Union1 = {
    name: '3',
    color: '3',
    language: '3'
}

// let union4 : Union1 = {
//     name : '4',
// }




/**
 * 교집합 타입 - Intersection 타입 
 */

// let vareiable : number & string;

type InterScetion = Dog & Person;

let interSection : InterScetion = {
    name: '1',
    color: '2',
    language:'3'
}
