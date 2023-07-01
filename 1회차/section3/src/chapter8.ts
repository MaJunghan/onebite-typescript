/**
  * 서로소 유니온 타입
  * 교집합이 없는 타입들로만 만든 유니온 타입을 말함 (string <==> number)
*/

type Admin = {
    tag: 'ADMIN';
    name: string;
    kickCount: number;
}

type Member = {
    tag: 'MEMBER';
    name: string;
    point: number;
}

type Guest = {
    tag: 'GUEST';
    name: string;
    visitCount: number;
}

type User = Admin | Member | Guest;

function login (user:User) {
    switch(user.tag) {
        case 'ADMIN': {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        } 
        case 'MEMBER': {
            console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
            break;
        } 
        case 'GUEST':  {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
            break;
        }
    }

    // if(user.tag === 'ADMIN') {
    //     // admin
    //     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
    // } else if(user.tag === 'MEMBER') {
    //     // member
    //     console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`)
    // } else if(user.tag === 'GUEST') {
    //     // guest
    //     console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`)
    // }
}

/**
 * 복습겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체



type LoadingTask = {
    state: 'LOADINZG'
};
type ErrorTask = {
    state: 'FAILED';
    error: {
        message : string;
    }
}
type SuccessTask = {
    state: 'SUCCESS',
    response: {
        data:string;
    }
}

type AsyncTask = LoadingTask | ErrorTask | SuccessTask;


// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 에러메시지 출력
// 성공 -> 데이터 출력

function processResult(task:AsyncTask) {
    switch(task.state) {
        case 'LOADINZG' : {
            console.log('로딩중...')
            break;
        }
        case 'FAILED' : {
            console.log(task.error.message); 
            break;
        }
        case 'SUCCESS' : {
            console.log(task.response.data);
        }
    }
}


const loading :AsyncTask = {
    state: 'LOADINZG'
}

const failed :AsyncTask = {
    state: 'FAILED',
    error: {
        message: '오류 발생 원인은~'
    },
};

const success :AsyncTask = {
    state: 'SUCCESS',
    response: {
        data: 'data'
    },
};