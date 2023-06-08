/**
 * 타입스크립트의 클래스
 */






class Employee {
    // 필드
    name;
    age;
    position;
    // 생성자
    constructor(name:string, age: number, position: string) {
        this.name = name;
        this.age = age; 
        this.position = position;
    }
    // 메서드
    work() {
        console.log('일함');
    }

}

const employee = new Employee('마정한', 31, '개발자');
console.log(employee)


// 타입스크립트는 구조적 타입 시스템이라 class를 타입으로 사용할 수 있음.
const employeeC: Employee = {
    age: 30,
    name: '',
    position:'',
    work() {},
}