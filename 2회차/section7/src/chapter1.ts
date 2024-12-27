/**
 * keyof 연산자 : 객체 타입 적용
 */

interface Person {
    name: string;
    age : number;
}

// function getPropertyKey(person : Person, key: keyof Person) {
//     return person[key]
// }
function getPropertyKey(person : Person, key: keyof typeof person) {
    return person[key]
}

const person : Person = {
    name: '마정한',
    age: 30
}

console.log(getPropertyKey(person, 'name'))