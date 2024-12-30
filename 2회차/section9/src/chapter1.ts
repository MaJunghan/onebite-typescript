/** 
 * Pick<T ,K>
 * -> 뽑다, 고르다
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 * 
*/

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailUrl?: string;
}

type Pick<T, K extends keyof T> = {
    // 'title' | 'content' extends 'title' | 'tags' | 'content' | 'thumbnailUrl'
    [key in K]: T[key]
}

const legacypost: Pick<Post, 'title' | 'content'> = {
    title: '옛날 글',
    content: '옛날 컨텐츠'
}


/**
 * Omit<T, K>
 * -> 생략하다, 뺴다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>> -> Exclude 찾은것을 제거
// Pick<Post, 'content' | 'tags' | 'thumbnailUrl'

const noTitlePost: Omit<Post, 'title'> = {
    tags: ['ts'],
    content: 'content',
    thumbnailUrl: 'test'
}


/**
 * Record<K, V>
 */

// type thumbnailLegacy = {
//     large: {
//         url: string;
//     };
//     medium: {
//         url: string;
//     };
//     small : {
//         url: string;
//     };
//     watch: {
//         url: string;
//     }
// }
type Record<K extends keyof any, V> = {
    [key in K] : V
}


type thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string}>;