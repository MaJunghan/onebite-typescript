/**
 * 인터페이스의 확장
 */


interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    // 오버라이드 : 부모한테 받은 타입을 재정의 함 > 재정의 할 타입이 서브 타입이여야함 (string > stringLiteral)
    name: 'hello';
    isBark : boolean;
}

const dog : Dog = {
    age:213,
    isBark: true,
    name: 'hello'
}

interface Cat extends Animal {
    isScratch : boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}