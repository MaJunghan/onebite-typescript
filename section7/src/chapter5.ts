/**
 * Promise 프로미스
 */

// 프로미스객체에 제네릭으로 결과값의 타입을 할당해주면 number로 인식
const promise = new Promise<number>((resolve, reject) =>{
    setTimeout(() => {
        // resolve(20)
        reject('~~ 떄문에 실패')
    }, 3000);
});


promise.then((response) => {
    console.log(response * 10)
});

// reject의 타입은 정해줄 수 가없음. any타입이라
// 그래서 typeof로 설정해줘야함.
promise.catch((err) => {
    if(typeof err === 'string') {
        console.log(err)
    }
}) 


/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
    id: number;
    title: string;
    content: string;
}

function fetchPost() : Promise<Post> {
   return new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve({
            id: 1,
            title: '제목',
            content: '내용'
        })
    }, 3000);
   }) 
}


const postRequest = fetchPost();
postRequest.then((post) => {
    post.id
})