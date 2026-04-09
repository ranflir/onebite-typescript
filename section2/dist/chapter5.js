//enum  타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
    Role[Role["GUEST"] = 3] = "GUEST";
})(Role || (Role = {}));
var Language;
(function (Language) {
    Language["Korean"] = "ko";
    Language["English"] = "en";
})(Language || (Language = {}));
//enum은 컴파일결과 사라지지 않는다
const user1 = {
    name: '김현제',
    role: Role.ADMIN,
    language: Language.Korean,
};
const user2 = {
    name: 'henry',
    role: Role.USER,
};
const user3 = {
    name: 'john',
    role: Role.GUEST,
};
console.log(user1, user2, user3);
export {};
