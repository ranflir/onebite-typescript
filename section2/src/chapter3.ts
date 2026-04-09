//object
//객체 리터럴 타입(객체의 구조적인 모습까지 알수 있다)
//구조적 타입 시스템 : 구조기준, 프로퍼티 베이스드 타입시스템
//반면 이름을 기준으로 하면 > 명목적 타입 시스템
//? 선택적 프로퍼티 : 옵셔널 프로퍼티

let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: 'KIMHYUNJE',
};
//readonly : 프로퍼티의 값을 바꾸는걸 막아준다.
let config: {
  readonly apiKey: string;
} = {
  apiKey: 'MY API KEY',
};

// let dog: {
//   name: string;
//   color: string;
// } = {
//   name: 'doggy',
//   color: 'red',
// };
