/**
  * 클래스
*/


class Student {
    name;
    age;
    grade;
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    study() {
        console.log('열심히 공부함')
    }
    introduce() {
        console.log(`안녕하세요.${this.name} 입니다`)
    }
}

const student = new Student('정한', 31, 'A+')
student.introduce();


class StudentDeveloper extends Student {
    favoriteSkill;
    constructor(name, age, grade, favoriteSkill) {
        super(name, age, grade);
        this.favoriteSkill = favoriteSkill;
    }
}

const studentDeveloper = new StudentDeveloper('정한', 31, 'A+', 'typescript');
console.log(studentDeveloper);
