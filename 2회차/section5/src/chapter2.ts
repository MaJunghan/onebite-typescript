/**
 * 선언 합침
 */

interface Person {
    name: string;
}
interface Person {
    age: number;
}

// 선언 합침
const person: Person = {
    age: 2,
    name: ''
}

/**
 * 모듈 보강
 */
interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib = {
    a: 1,
    b: 2,
    c: 'hello'
}