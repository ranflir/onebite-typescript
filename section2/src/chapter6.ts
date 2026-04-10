//any 특정 변수의 타입을 우리가 확실히 모를때

let anyVar: any = 10;
//초기화 하는걸 기준으로 변수를 추론한다
//any를 쓰면 자유롭게 쓸수있다 모든 타입의 값을 할당 받을수도 넣을수도 있다
//타입검사를 무조건 통과시키기 때문에, 런타임에 에러를 발생시킨다

anyVar = 'Hello';
num = anyVar;

//unknown
let unknownVar: unknown;
unknownVar = 1;
//unknown에 어떤값이든 저장할 수 있지만, 다른값에 unknown을 넣을수는 없다
// num = unknownVar;
//타입정제, 타입좁히기에서는 쓸수 있다.