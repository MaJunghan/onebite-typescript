/**
 * map 메서드
 */

const arr = [1,2,3]
const newArr = arr.map((it) => it * 2)


function map<T, U>(arr: T[], callback: (item:T) => U) {
    let result = [];
    for (let i =0; i < arr.length; i++) {
        result.push(callback(arr[i]))
    }
    return result
}


map(['hi','hell'], (item) => parseInt(item))


/**
 * forEach
 */

const arr2 = [1,2,3]
arr2.forEach((item) => console.log(item))


function forEach<T>(arr: T[], callback: (item: T)=> void) {
    for(let i=0; i<arr.length; i++) {
        callback(arr[i])
    }
}

forEach(arr2, (item) => console.log(item.toFixed()))