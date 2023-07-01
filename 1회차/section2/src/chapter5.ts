// Enum

enum Role {
  ADMIN = 0,
  USER,
  GUEST,
}

let user1 = {
  name: '마정한',
  role: Role.ADMIN, // enum은 안없어지고 컴파일해도 남아있음 값으로 0
};

console.log(user1);
