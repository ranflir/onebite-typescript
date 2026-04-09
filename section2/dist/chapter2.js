//배열 :  배열 타입을 정의하는 방식, 대괄호[] or 제네릭<>
let numArr = [1, 2, 3];
let strArr = ['Hello', 'Im', 'Ranflir'];
let boolArr = [true, false, true];
//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, 'Hello'];
//유니온 타입 : 어쩌구 | 저쩌구
//다차원 배열의 타입을 정의하는 방법
//number타입의 배열을 배열안에 저장한다.
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
//튜플 : 길이와 타입이 고정된 배열 (튜플이라고 하지만 사실상 그냥 배열임)
//그래서 push, pop 이렇게 배열 메소드를 사용해도 오류가 발생하지 않는다. 그래서 주의해야
let tup1 = [1, 2];
let tup2 = [1, '2', true];
const user = [
    ['김현제', 1],
    ['존', 2],
    ['스미스', 3],
    // [4, '병신'],  <-오류 발생
];
export {};
