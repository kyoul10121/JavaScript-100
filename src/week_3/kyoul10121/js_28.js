const arr = prompt('문자열을 입력해주세요.');

for(let i = 0; i < arr.length-1; i++){
    console.log(arr[i], arr[i+1]);
}