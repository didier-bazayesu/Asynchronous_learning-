let array = [];

for (let i = 0; i < 10; i++) {
    let star = "*".repeat(2 * i + 1);
    let space = " ".repeat(10-i-1)
    array.push(space+star);
}
console.log(array.join("\n"))
