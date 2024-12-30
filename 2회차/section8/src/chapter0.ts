/**
 * 조건부 타입
 */

type A = number extends string ? string : number; // number


type ObjA = {
    a: number;
}
type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string; // number

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA : StringNumberSwitch<number>


// 함수 오버로딩을하면 구현부안에서 해당 타입을 알 수 있음.
function removeSpaces<T>(text: T): T extends string ? string : undefined 
function removeSpaces(text: any) {
    if(typeof text === 'string') {
        return text.replaceAll(" ", "");
    } else {
        return undefined
    }
   
}

let result = removeSpaces<string>("hi im winterlood")
result.toUpperCase()