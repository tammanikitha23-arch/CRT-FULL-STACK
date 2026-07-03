
//data recovery
let L = 10;
let R = 20;
let count = 0;
for (let i = L; i <= R; i++) {
    let str = i.toString();
    let unique = new Set(str);
    if (str.length === unique.size) {
        count++;
    }
}
if (count === 0) {
    console.log("NoUnique Number");
} else {
    console.log(count);
}