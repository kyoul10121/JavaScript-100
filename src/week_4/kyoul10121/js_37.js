const arr = prompt("학생이 뽑은 후보를 입력해주세요.").split(" ");


for(let i = 0; i < arr.length; i++){
    if(arr[i] == arr[i+1]){
        count++;
    }
}
console.log(`${}이가 총 ${}표로 반장이 되었습니다.`);