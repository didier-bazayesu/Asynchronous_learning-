
function handleFetch (){
    
    return new Promise((resolve,reject)=>{
     const xhr = new XMLHttpRequest();
     xhr.open("get", "https://jsonplaceholder.typicode.com/users");
     xhr.onload = function(){
         if(xhr.status >= 200 && xhr.status < 300){
           resolve(xhr.responseText);
         } else reject(xhr.status);
     }
     //what happens when there is network error 
     xhr.onerror = function(){
         reject("Request failed");
     }
 
     //send request
     xhr.send();

 })

}
handleFetch().then(console.log).catch(console.log)