/*
객체타입간의 호환성

기본타입간은 서로 어쩌고 해도 되는지

*/

let num1: number = 1;
let num2: 10 = 10;

num1 = num2;
//리터럴 타입은 들어간다

//구조적 타입 시스템
type Animal = {
  //슈퍼타입
  name: string;
  color: string;
};
type Dog = {
  //서브타입
  name: string;
  color: string;
  breed: string;
};

//초과 프로퍼티 검사 : 변수를 초기화 할때, 객체 리터럴을 사용하면, 실제 프러퍼티에 없는 걸 추가하는걸 막는 기능
