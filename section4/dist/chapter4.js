/**
 * 사용자 정의 타입가드
 */
//  animal is Dog => true면 animal을 Dog 타입으로 설정한다.
function isDog(animal) {
    return animal.isBark !== undefined;
}
function isCat(animal) {
    return animal.isScratch !== undefined;
}
function warning(animal) {
    if (isDog(animal)) {
        console.log(animal.name);
        console.log(animal.isBark);
    }
    if (isCat(animal)) {
        console.log(animal.name);
        console.log(animal.isScratch);
    }
}
warning({
    name: '고냥이',
    isScratch: false
});
export {};
