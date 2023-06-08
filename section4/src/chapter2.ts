/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
*/

// 기준1. 반환값이 호환되는가? ------------->>>>>>> 업캐스팅
type A = () => number;
type B = () => 10;

let a: A = () => 10
let b: B = () => 10


a = b; // 업캐스팅
// b = a; 다운캐스팅


// 기준2. 매개변수가 호환되는가? ------------>>>>>>> 다운캐스팅

// 2-1 매개변수의 개수가 같을 떄
type C = (value:number)=> void;
type D = (value: 10)=> void;

let c: C = (value) => {}
let d: D = (value) => {}

// c = d;
d = c;


type Animal = {
    name: string
}
type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal:Animal) => {
    console.log(animal.name);
}

let dogFunc = (dog: Dog) => {
    console.log(dog.color);
    console.log(dog.name);
}

// animalFunc = dogFunc
dogFunc = animalFunc


// 2-2 매개변수의 개수가 다를 때
type Func1 = (a:number, b: number) => void;
type Func2 = (a: number) => void;

let func1 : Func1 = (a,b) => {}
let func2 : Func2 = (a) => {}

func1 = func2
// func2 = func1

// func1의 매개변수가 더많을 땐 가능, 반대로 적을 떈 불가능