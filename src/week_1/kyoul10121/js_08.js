// 8. 자바스크립트 객체를 다음과 같이 만들었다. 출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);

// 풀이 : 78, 84

// 답안 : 84 (키가 중복이면 마지막에 있는 값이 덮어쓰기 한다. )