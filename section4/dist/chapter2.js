/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
*/
let a = () => 10;
let b = () => 10;
a = b; // 업캐스팅
let c = (value) => { };
let d = (value) => { };
// c = d;
d = c;
let animalFunc = (animal) => {
    console.log(animal.name);
};
let dogFunc = (dog) => {
    console.log(dog.color);
    console.log(dog.name);
};
// animalFunc = dogFunc
dogFunc = animalFunc;
let func1 = (a, b) => { };
let func2 = (a) => { };
func1 = func2;
export {};
// func2 = func1
// func1의 매개변수가 더많을 땐 가능, 반대로 적을 떈 불가능
