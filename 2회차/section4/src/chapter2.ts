/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단
 * 1. 반환값의 타입이 호환되는가 ?
 * 2. 매개변수의 타입이 호환되는가 ?
 */

// 기준1. 반환값이 호환되는가
type A = () => number
type B = () => 10;


let a: A = () => 10
let b: B = () => 10

// 다운캐스팅이라 안됨
// b = a
// 업캐스팅이라 됨
a = b


// 기준2. 매개변수가 호환되는거
// 2-1. 매개변수의 개수가 같을 떄

type C = (value: number) => void
type D = (value: 10) => void

let c: C = (value)=> {}
let d: D = (value)=> {}

// 업캐스팅은 x
// c = d

// 다운캐스팅 O
d = c

type Animal = {
    name: string;
}
type Dog = {
    name: string;
    color: string
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name)
}
let dogFunc = (dog: Dog) => {
    console.log(dog.name)
    console.log(dog.color)
}

// animal이 슈퍼타입이라 변화안됨.
// animalFunc = dogFunc

// dog가 서브타입이라 
dogFunc = animalFunc


// 2-2. 매개변수의 개수가 다를 떄
type Func1 = (a: number, b: number) => void
type Func2 = (a: number) => void

let func1: Func1 = (a,b) => {}
let func2: Func2 = (a) => {}


// 매개변수의 개수가 더적으면 호환가능
func1 = func2

// 매개변수의 개수가 더 많으면 호환불가능
// func2 = func1
