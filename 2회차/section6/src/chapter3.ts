/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
    key: K;
    value: V;
}


let keyPair: KeyPair<string, number> = {
    key: 'key',
    value: 0
}

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value : ['1']
}

/**
 * 인덱스 시그니처
 */

interface NumberMap {
    [key: string] : number
}

const numberMap1: NumberMap = {
    key: 232,
    qwe: 32
}

interface Map<V> {
    [key: string] : V
}
const strMap: Map<string> = {
    key: 'qwewq',
    key2: 'sds'
}
const boolMap: Map<boolean> = {
    key : true,
    key2: false
}


/**
 * 제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string] : V
}

let strMap2 :Map2<string> = {
    key: '1121'
}

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생유저 / 개발자 유저
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
    profile : T
}


function goToSchool(user: User<Student>) {
    const school = user.profile.school
    console.log(`${school}로 등교 완료`)
}


const developeruser : User<Developer> = {
    name: '마정한',
    profile: {
        type: 'developer',
        skill: 'Typescript'
    }
}


const studentUser : User<Student> = {
    name: '홍길동',
    profile: {
        type: 'student',
        school: '영진전문대학'
    }
}
