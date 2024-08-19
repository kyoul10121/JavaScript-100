function one(n){
    function two(value){
        //pass
        const pow = Math.pow(value, n);
        return pow;
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);
kconsole.log(a(10));
console.log(b(10));
console.log(c(10));