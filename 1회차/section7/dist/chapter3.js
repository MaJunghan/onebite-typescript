/**
 * 제네릭 인터페이스
 */
let keyPair = {
    key: 'key',
    value: 0
};
let keyPair2 = {
    key: true,
    value: ['1']
};
;
let numberMap1 = {
    key: 1213123,
    key2: -1212,
};
let stringMap = {
    key: 'value'
};
let booleanMap = {
    key: true
};
let stringMap2 = {
    key: '123'
};
function goToSchool(user) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
const developerUser = {
    name: '홍길동',
    profile: {
        type: 'developer',
        skill: '가톨릭대학교'
    },
};
const studentUser = {
    name: '홍길동',
    profile: {
        type: 'student',
        school: '가톨릭대학교'
    },
};
export {};
// goToSchool(developerUser)
