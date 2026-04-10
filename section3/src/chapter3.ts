/*
 
 unknown 전체 타입*/

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'hell';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  //이렇게 업캐스팅은 가능하다 (다운캐스팅은 안됨)
}

/*
never타입

불가능을 표현

네버타입은 모든 타입의 서브타입
공집합

*/

function neverExam() {
  // 이 함수는 공집합이다~ never
  function neverFunc(): never {
    while (true) {}
  }
  let num: number = neverFunc(); //다운캐스팅은 가능
}
/*void 타입 

*/

function voidExam() {
  function voidFunc(): void {
    console.log('shit');
    return undefined;
  }

  let voidVar: void = undefined; //undefined 타입은 보이드의 하위라서, 들어갈 수 있다
}

/*any type

타입 계층도를 무시한다. 계층도상에서는 언노운 밑이지만 다 무시함*/

function antExam() {
  let unknownVar: unknown;

  let neverVar: never;
  let anyVar: any;
  // neverVar = anyVar; //이건안됨 : never는 순수한 공집합이라서 더 들어갈 수가 없다
}
