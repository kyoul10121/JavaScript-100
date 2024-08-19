const str = prompt("문자열을 입력해주세요.");
const findStr = prompt("찾을 문자를 입력해주세요.");

for(let i = 0; i < str.length; i++){
    for(let j = 0; j < findStr.length; j++){
        if(str[i] == findStr[0]){
             console.log(i);   
        }
    }
}