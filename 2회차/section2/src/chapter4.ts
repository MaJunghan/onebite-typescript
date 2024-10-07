// 타입 별칭
type User = {
    id: number;
    name : string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}


type CoountryCodes = {
    [key: string] : string
}
// 인덱스 시그니처
let coountryCodes : CoountryCodes = {
    Korea: 'ko',
}