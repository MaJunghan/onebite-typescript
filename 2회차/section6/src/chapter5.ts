/**
 * 프로미스
 */


const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        // resolve(20)
        reject('~~ 때문에 실패')
    }, 3000);
})


promise.then((res) => {
    console.log(res * 10)
})


// resolve는 Promise의 제네릭으로 설정하는값이 resolver의 타입인데 
// reject는 타입을 정해주지 못함 => typeof로 string인지 판단후에 사용하는 것이 올바른 방법
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

function fetchPost(): Promise<Post> {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            resolver({
                id: 1,
                title: '제목',
                content: '내용',
            })
        }, 3000);
    })
}

const postRequest = fetchPost()
postRequest.then((post) => {
  post.id  
})