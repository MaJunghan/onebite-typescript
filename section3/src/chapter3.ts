type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한입 크로 잘라먹는 리액트',
  price: 33000,
  skill: 'react.js',
};

book = programmingBook;
// programmingBook = book;

// 업캐스팅이라 가능. book에서 program으로 대입은 가능하나, program에서 book으로 대입하려면 skill이 없어서 다운캐스팅이 안됨.
// 즉, Book이 super type
