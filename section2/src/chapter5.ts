//enum  타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 1, //숫자할당을 안해도, 제멋대로해도 순서대로 할당이된다 :숫자형 이넘
  USER = 2,
  GUEST = 3,
}
enum Language {
  Korean = 'ko',
  English = 'en',
}
//enum은 컴파일결과 사라지지 않는다 > JS의 객체 형태가 된다
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
