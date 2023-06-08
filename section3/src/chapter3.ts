// 객체 타입의 호환성

type Animal = {
    name: string;
    color: string;
}


type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal : Animal = {
    name: '기린',
    color: 'yellow'
}

let dog : Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진돗개'
}

animal = dog;
/* 
    dog를 animal에 할당할 수 있음 (upCasting)
    typescript 구조적 타입 시스템

    dog에서 name, color가 animal에 필요한 요소를 다 포함하고 있기떄문에 캐스팅됨,
    반대로, animal을 dog로 대입하려면 breed라는 속성이 없기떄문에 캐스팅 불가    

    객체에서는 조건이 더 적은타입이 super type
    // dog = animal;
*/


type Book = {
    name: string;
    price: number;
}

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programmingBook : ProgrammingBook = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    skill: 'react.js'
}

book = programmingBook;
// programmingBook = book;