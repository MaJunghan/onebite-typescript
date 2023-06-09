/**
 * 제네릭 인터페이스
 */

interface KeyPair<T,K> {
    key: T;
    value: K;
}

let keyPair : KeyPair<string, number> = {
    key: 'key',
    value: 0
};


let keyPair2 : KeyPair<boolean, string[]> = {
    key: true,
    value: ['1']
};

/**
 * 인덱스 시그너처
 */

interface NumberMap {
    [key: string]: number;
};

let numberMap1 : NumberMap = {
    key: 1213123,
    key2: -1212,
}

interface Map<T> {
    [key : string]: T;
}

let stringMap:Map<string> = {
    key: 'value'
}

let booleanMap:Map<boolean> = {
    key: true
}

/**
 * 제네릭 타입 별칭
 */

type Map2<T> = {
    [key: string] : T
} 
let stringMap2 : Map<string> = {
    key: '123'
}

/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */




interface Student {
    type: 'student';
    school: string;
}

interface Developer {
    type: 'developer';
    skill: string;
}


interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}


const developerUser : User<Developer> = {
    name:'홍길동',
    profile: {
        type: 'developer',
        skill: '가톨릭대학교'
    },
}
const studentUser : User<Student> = {
    name:'홍길동',
    profile: {
        type: 'student',
        school: '가톨릭대학교'
    },
}

// goToSchool(developerUser)