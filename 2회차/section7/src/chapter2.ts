/**
 * 맵드 타입 : 객체 + 객체로 새로운 객체 생성 >> 인터페이스에서는 못씀
 */

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in keyof User]?: User[key]
}

type ReadonlyUser = {
    readonly [key in keyof User]?: User[key]
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser():ReadonlyUser {
    return {
        id: 1,
        name: '마정한',
        age: 27
    }
}

function updateUser(user: PartialUser) {
    // 수정하는 기능
}

updateUser({
    // id: 1,
    // name: '마정한',
    age: 25
})

const data = fetchUser()
// data.name = 'has'
