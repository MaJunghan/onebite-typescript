/**
 * 선언합침 : 인터페이스 이름이 똑같으면 프로퍼티들이 합쳐짐.
 * 모듈보강 할떄 많이사용 (라이브러리 타입)
*/

interface Person {
    name: string;
}

interface Person {
    age: number;
}

const person: Person = {
    age: 30,
    name: '1'
}

