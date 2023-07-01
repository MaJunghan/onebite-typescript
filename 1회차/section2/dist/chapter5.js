// Enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
let user1 = {
    name: '마정한',
    role: Role.ADMIN, // enum은 안없어지고 컴파일해도 남아있음 값으로 0
};
console.log(user1);
export {};
