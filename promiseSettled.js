
function promiseSettled() {
 return new Promise((resolve)=>{
    let data = 1 ;
    let array = [];
    let interval = setInterval(()=>{
        console.log(data);
        array.push(data)
        data++;
    },1000)  

    setTimeout(()=>{
           clearInterval(interval);
           resolve(array)
    },6000)
 })
}
promiseSettled().then(console.log);
