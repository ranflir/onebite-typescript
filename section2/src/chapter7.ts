//void 공허 아무것도 없다
//void로 정의하면 아무것도 담을 수없다.
function func1(): string {
  return 'hello';
}

function func2(): void {
  console.log('hello');
} //반환값이 없다 > 이럴때 보이드

// let a: void; // 보이드로 정의하면 어떤값도 담을 수 없다
// a = 1;
// a = 'hello';
// a = null;
// a = undefined;

//never 존재하지 않는, 불가능한 타입
//정상적으로 종료되는 것이 불가능한 타입에 쓴다
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
//never 값은 아무것도 못담는다

/*
 외워서 문법만 배워서는 안된다 
 어떤 기준으로 타입을 정의하는지
 어떤 기준으로 타입간의 관계를 정의하는지
 어떤 기준으로 타입의 오류를 검사하는지
 

 타입이란?
 집합이다
 number literal Type은 number Type(슈퍼타입)의 서브타입 
 타입은 계층도에 포함되어 있다
 타입호환성 : 어떤 타입을 다른 타입으로 취급해도 괜찮은지 판단하는 것
업캐스팅은 가능, 다운 캐스팅은 대부분 불가능
*/

/*
타입 계층도


*/
