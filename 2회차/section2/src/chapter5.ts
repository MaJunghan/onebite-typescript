// enum type 
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입


enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2
}

enum Language {
    korean = 'ko',
    english = 'en'
}

const user1 = {
    name : '마정한',
    role : Role.ADMIN,
    lnguage: Language.korean
}

const user2 = {
    name : '마정한',
    role : Role.USER,
    lnguage: Language.korean
}

const user3 = {
    name : '마정한',
    role : Role.GUEST,
    lnguage: Language.english
}
console.log(user1, user2, user3)
