/**
 * 사용자 정의 타입가드
 */

type Dog = {
    name : string;
    isBark: boolean;
};
type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;


//  animal is Dog => true면 animal을 Dog 타입으로 설정한다.
function isDog(animal: Animal): animal is Dog {
    return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
    return (animal as Cat).isScratch !== undefined
}


function warning(animal: Animal) {
    if(isDog(animal)) {
        console.log(animal.name);
        console.log(animal.isBark);
    }
    if(isCat(animal)) {
        console.log(animal.name);
        console.log(animal.isScratch);
    }
}

warning({
    name: '고냥이',
    isScratch: false
})