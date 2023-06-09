/**
 * 인덱스드 엑세스 타입 : 특정 객체의 프로퍼티들을 뽑아 사용하고 싶을 때
 */

type Post = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    };
}[];

// 타입만 사용가능 => 값은 x
function printAuthorInfo (author : Post[number]['author']) {
    console.log(`${author.name} - ${author.id}`);
}

// 배열중에 number(index)로 하나를 추출해온다.
const post : Post[number] = {
    title: '제목',
    content: '내용',
    author: {
        id: 1,
        name: '홍길동'
    }
}

printAuthorInfo(post.author);




//튜플에서 뽑아오기
type Tup = [number, string, boolean];
type Tup0 = Tup[0]
type Tup1 = Tup[1]
type Tup2 = Tup[2]
type Tup3 = Tup[number]