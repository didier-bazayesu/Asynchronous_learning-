let array = [1, 2, 3, 4, 5, 6];
let handleDisplay = array.forEach((ele, index) => {
    setTimeout(() => {
        console.log(ele);
    }, (index + 1) * 3000)
})

console.log(handleDisplay)