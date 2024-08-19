const arr = prompt("키를 공백을 구분자로 하여 입력해주세요.");

let arrSort = "";

arr = arrSort.split(" ").sort(function(a, b){return a-b;}).join(" ");

if(arr === arrSort){
    console.log("YES");
}else
    console.log("NO");
