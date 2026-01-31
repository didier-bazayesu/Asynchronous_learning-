
async function timerFetch(url) {
     let time = console.time(new Date().getMilliseconds())
     const  timer = setTimeout( async() => {
        let response = await fetch(url);
        return await response.json();

     }, 5000);

     let timeEnd = console.timeEnd(new Date().getMilliseconds())
     console.log(time);
     console.log(timeEnd);
    
    
    
}

timerFetch("https://jsonplaceholder.typicode.com/users");

