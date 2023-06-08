/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기
 */


type Person = {
    name: string;
    age: number;
};

function fuc(value: string | number | Date | null | Person) {
    // 타입가드
    if(typeof value === 'string') {
        return console.log(value.toUpperCase());
    } 
    if(typeof value === 'number') {
        return console.log(value.toFixed());
    }
    // null type도 typeof 출력시 object 겹쳐서 value값을 보장할 수 없음.
    if(value instanceof Date) {
        return console.log(value.getTime())
    }
    if(value && 'age' in value) {
        return console.log(`${value.name}은 ${value.age}살 입니다.`)
    }
    
}