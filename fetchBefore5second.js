async function fetching_before_5_second(){
    const controller = new AbortController();
    const xhr = new XMLHttpRequest();
  
    const signal = controller.signal;
    setTimeout(()=>{
         controller.abort()
    },1000)
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users",{signal});
        return response.json();

    }catch(error){
      console.error("fetch aborted",error)
    };
    

}
fetching_before_5_second().then(console.log)