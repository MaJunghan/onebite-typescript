/** 
 * 맵드 타입 : 객체 타입을 조작함
 * 인터페이스에서 사용할 수 없음 => type에서만 !!
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in 'id'|'name'|'age' ]?: User[key]
};

type BooleanUser = {
    [key in keyof User]?: Boolean;
};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key]
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
    return {
        id: 1,
        name: '홍길동',
        age: 27
    }
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: User) {

}


updateUser({
    id: 1,
    name: '홍길동',
    age: 25
})

const user = fetchUser();
// user.id = 1

