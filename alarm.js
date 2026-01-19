function CreateAlarm(name,delay){

   
        return  new Promise((resolve,reject)=>{
                if(delay >=2 )  setTimeout(()=>{
                  resolve( `Wake up ${name}`)
                },delay * 1000);
        
             else   reject("Delay is not sufficient");
            })
}


CreateAlarm("didier",1).then(console.log).catch(console.log)