function IncreaseNumber(number) {

    function change() {
        number++;
        console.log(number);
    }
    let intervalId = setInterval(change, 3000)

    setTimeout(() => {
        clearInterval(intervalId);
    }, 30000)


}
IncreaseNumber(4);

