const arr = prompt("숫자를 입력해주세요").split(" ").reverse();

let result = '';

for(let i = 0; i < arr.length; i++){
    result += arr[i];
}

console.log(result);
