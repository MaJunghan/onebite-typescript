/**
 * 접근제어자
 * => public, private, proteced
 */

class Employee {
    // 생성자
    constructor(public name:string, public age: number, public position: string) {
        // 접근제어자를 사용하면 필드를 생성해줌.
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
employee.age = 30

// public : this로 필드를 접근하여 바로 접근가능
// private : 해당 인스턴스로 바로 접근 불가능, 메서드를 통해서만 가능
// proteced : 해당 인스턴스로 바로 접근 불가능 , 상속받고 있는 클래스에서는 가능