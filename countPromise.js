async function asyncCounter(){
    
return new Promise((resolve,reject)=>{
    // try{
    //         let start = 0 ;
    //         let array =  [];
    //         let controller = new AbortController().signal;
            
        
    //         let interval = setInterval(()=>{
    //             console.log(start);
    //            start++;
    //            array.push(start);
    //         },1000)
    //         setTimeout(()=>{
    //         clearInterval(interval);
    //         resolve(array)
    //         },6000)



        
    // }catch(error){
    //     console.error(error);
    //     reject(error);
    // };


    //  })

let count =0 ;
let newArray = [];

let intervalId = setInterval(()=> {
    count++;
    newArray.push(count);
    console.log(count);
    if(count == 5){
        resolve(newArray)
        clearInterval(intervalId) }

        

},1000);

})  
    
}

asyncCounter().then(dta=> console.log(dta)).catch(console.log);