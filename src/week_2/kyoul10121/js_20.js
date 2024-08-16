const arr = prompt("공백을 구분자로 하여 A와 B를 입력해주세요 : ").split(' ');

const q = Math.floor(parseInt(arr[0], 10)/parseInt(arr[1], 10));
const r = parseInt(arr[0], 10)%parseInt(arr[1], 10);

console.log(q, r);