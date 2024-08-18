const name = prompt("공백을 구분자로 하여 학생의 이름을 입력해주세요.").split(' ');
const score = prompt("공백을 구분자로 하여 학생의 수학점수를 입력해주세요.").split(' ');

const students = {};

for(let i = 0; i < name.length; i++){
    students[name[i]] = parseInt(score[i], 10);
}
console.log(students);