const num = prompt("출력할 단을 입력해주세요.");                  
let result = '';

for(let i = 1; i < 10; i++){
    result += num*i + " ";
    
}
console.log(result);