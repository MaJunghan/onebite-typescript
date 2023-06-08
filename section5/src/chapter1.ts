/**
 * 인터페이스 확장
 */

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    // name : 'hello'; // 오버라이딩 : 상위 인터페이스가 가지고 있는 프로퍼티를 재정의가능 => 서브타입일때만 재정의가능.
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

const dog : Dog = {
    age: 30,
    name: 'hello',
    isBark: true
}


interface DogCat extends Dog, Cat {}

const dogCat : DogCat = {
    age: 30,
    isBark: true,
    isScratch: true,
    name: 'hello'
}