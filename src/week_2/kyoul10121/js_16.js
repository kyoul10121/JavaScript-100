// 16.
const reverseStr = prompt("문자열을 입력하세요:");

function reverseString(str) {
    
    var splitString = str.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("");
    
    return joinArray;
}
reverseString(reverseStr);
