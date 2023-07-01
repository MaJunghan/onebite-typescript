/**
 * 제네릭 클래스
 */
class List {
    list;
    constructor(list) {
        this.list = list;
    }
    push(data) {
        this.list.push(data);
    }
    pop() {
        return this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();
const strList = new List(['1', '2', '3']);
strList.pop();
strList.push('4');
strList.print();
export {};
