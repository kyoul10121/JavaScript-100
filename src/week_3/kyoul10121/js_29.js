function isAllUpperCase(){
    const str = data.toUpperCase();
    if(str === data){
        console.log("YES");
    }else
        console.log("NO");
}
const data = prompt("알파벳을 입력하세요.");

isAllUpperCase(data);
