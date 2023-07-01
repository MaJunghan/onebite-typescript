/**
 * key of 연산자 : 객체 타입에서 프로퍼티를 가져오는 연산자
 */


type Person = typeof person;

function getpropertyKey(person : Person, key : keyof Person) { // => 결과값 'name' | 'age' 추가되면 자동으로 추가됨.
    return person[key];
}

const person= {
    name: '홍길동',
    age: 30
}


getpropertyKey(person, 'name');


// typeof 에 변수값을 사용하면 타입으로 정의해줌.