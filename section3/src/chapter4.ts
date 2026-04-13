//대수타입
//여러개의 타입을 합성해서 새롭게 만들어낸 타입
//합집합 타입과 교집합 타입이 존재합니다

//합집합 Union

let a: string | number | boolean; // union 둘다 가능하다
a = 1;
a = 'hello';
a = true;

let arr: (number | string | boolean)[] = [1, 'hello', true];

//타입별칭으로도 유니언 타입 생성 가능

//교집합 intersection
let variable: number & string;
//숫자랑 문자의 교집합은 없다 ->  never 공집합
