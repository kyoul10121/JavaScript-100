// 입력
// 5

// 출력
// 0000*
// 000***
// 00*****
// 0*******
// *********

//풀이
const n = 5;

let tree = '';
for(let i = 1; i <= n; i++){
    let star='';
    for(var j = 1; j <= n-i; j++){
        star+=' ';
    }
    for(var k = 1; k <=2*i-1; k++){
        star+='*';
    }
    tree += star + '\n'
}

console.log(tree);
