/**
 * 인터페이스
 */


interface Person {
    name : string;
    age?: number;
    sayHi(): void;
    sayHi(a: number, b:number): void
}

const person : Person = {
    name: '정한',
    sayHi(a?: number,b?: number) {
        console.log('hi')
    },
}

person.sayHi()
person.sayHi(1, 2)