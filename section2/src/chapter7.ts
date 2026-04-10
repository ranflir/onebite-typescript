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
