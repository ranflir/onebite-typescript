//같은 스코프내에서 User라는 동일명의 타입별칭을 사용하면 오류가 발생하지만,
//함수내에서 동일명의 타입별칭은 사용가능
// function func() {
//   type User = {};
// }
let user1 = {
    id: '김현제',
    age: '100',
    iq: 150,
    height: 180,
    weight: 90,
    location: 'seoul',
};
let user2 = {
    id: 'henry',
    age: '100',
    iq: 150,
    height: 180,
    weight: 90,
    location: 'seoul',
};
export {};
