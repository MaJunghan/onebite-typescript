/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
    title: string;
    content: string;
    author : {
        id: number;
        name: string;
    }
}[]


const post : PostList[number] = {
    title : '게시글제목',
    content: '게시글내용',
    author: {
        id: 1,
        name: '마정한'
    }
}

// Type['property']
function printAuthorInfo(author: PostList[number]['author']) {
    console.log(`${author.name}-${author.id}`)
}


type Tup = [number, string, boolean];

type Tup1 = Tup[0]
type Tup2 = Tup[1]
type Tup3 = Tup[number]