/**
 * 인터페이스
 */

interface Person {
    name: string;
    age?: number;
    sayHi (): void;
    sayHi (a: number,b :number): void;
}

const person : Person = {
    name: '',
    sayHi() {
        console.log('dd')
    },
}


person.sayHi()
person.sayHi(1,2)

