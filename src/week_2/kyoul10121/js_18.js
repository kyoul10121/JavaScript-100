// 18.
const score = prompt("공백으로 구분된 국어, 영어, 수학의 점수를 입력해주세요 :").split(' ');

let sum = 0;

for(let i = 0; i < 3; i++){
    sum += parseInt(score[i], 10);
}
console.log(Math.floor(sum/3));