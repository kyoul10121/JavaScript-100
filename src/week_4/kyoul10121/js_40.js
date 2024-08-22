const w = prompt("제한 무게를 입력해주세요.");
const n = prompt("친구들의 수를 입력하세요.");
let total = 0;
let count = 0;

for(let i = 1; i <= n; i++){
    total += parseInt(prompt("탑승할 친구들의 몸무게를 입력하세요."), 10)
    if(total <= w){
        count = i;
    }    
}
console.log(count);