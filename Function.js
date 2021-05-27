function minimal(a, b) {
    if (a < b) {
        return a;
    } else if (a > b) {
        return b;
    } else return a;
};

function power(a, b) {
    return a ** b;
};

console.log(minimal(3, 4));
console.log(power(4, 2));