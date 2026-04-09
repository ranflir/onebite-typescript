//타입 별칭
type User = {
  id: string;
  age: string;
  iq: number;
  height: number;
  weight: number;
  location: string;
};
//같은 스코프내에서 User라는 동일명의 타입별칭을 사용하면 오류가 발생하지만,
//함수내에서 동일명의 타입별칭은 사용가능
// function func() {
//   type User = {};
// }
let user1: User = {
  id: '김현제',
  age: '100',
  iq: 150,
  height: 180,
  weight: 90,
  location: 'seoul',
};

let user2: User = {
  id: 'henry',
  age: '100',
  iq: 150,
  height: 180,
  weight: 90,
  location: 'seoul',
};

//인덱스 시그니쳐
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // 반드시 넣어야할때
};

//인덱스 시그니쳐 주의사항 : 내부 프로퍼티를 모두 삭제해도 오류가 발생하지 않음
let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
