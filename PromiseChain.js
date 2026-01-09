function addNumber(number) {
    return new Promise((resolve) => {
        resolve(number + 1);
    })

};
addNumber(4).then((ele) => {
    console.log("the number is :" + ele);
    return addNumber(ele);
}).then(ele => console.log(ele));