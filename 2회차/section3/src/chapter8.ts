/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 * string | number
 */

type Admin = {
    tag: 'ADMIN';
    name: string;
    kickCount: number
}

type Member = {
    tag: 'MEMBER';
    name : string;
    point: number;
}

type Guest = {
    tag: 'GUEST';
    name: string;
    visitCount : number;
}

type User = Admin | Member | Guest


// admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// member -> {name}님 현재까지 {point} 모았습니다.
// guest -> {name}님 현재까지 {visitCount}번 오셨습니다.

// tag를 만들어 줌으로써, 스트링 리터럴 타입은 교집합으로써 존재할 수 없음 => 서로소 유니언 타입
function login(user : User) {
    if(user.tag === 'ADMIN') {
        // admin
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하였습니다.`)
    } else if(user.tag === 'MEMBER') {
        // member
        console.log(`${user.name}님 현재까지 ${user.point} 모았습니다.`)
    } else  {
        // guest
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`)
    }
}

type LoadingTask = {
    state: 'LOADING'
}
type FaileTask = {
    state : 'FAILED';
    error: {
        message: string;
    };
}
type SuccessTask = {
    state: 'SUCCESS';
    response: {
        data: string;
    };
}

type AsyncTake = LoadingTask | FaileTask | SuccessTask


const loading: AsyncTake = {
    state: "LOADING"
}

const failed: AsyncTake = {
    state : "FAILED",
    error: {
        message : '오류 발생 원인은 ~~'
    }
}

const success: AsyncTake = {
    state: 'SUCCESS',
    response: {
        data: '데이터 ~~~'
    }
}

function processResult(task: AsyncTake) {
    switch(task.state) {
        case 'LOADING':
            console.log('로딩중')
            break;
        case 'FAILED':
            console.log(task.error.message)
            break;
        case 'SUCCESS':
            console.log(task.response.data)
            break;
    }
}