/**
 * 템플릿 리터럴 타입
 */

type Color = 'red' | 'black' | 'green';


type Animal = 'dog' | 'cat' | 'chicken';

// type ColoredAnimal = 'red-dog' | 'red-cat' | 'red-chicken' ... 좋지 못한방법

type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal :ColoredAnimal = 'black-cat'