// (async function handlefetch(url){
//  let data = await((await fetch(url))).json()
//  console.log(data

//  )
// })("https://jsonplaceholder.typicode.com/users")


// Convert a Promise chain into an async/await function.

function fetchCallback (url){
   return  fetch(url).then(response=> {
    if(response.ok) return response
    else throw new Error("fetch Error")
   }).then(data=> {
    return data.json()
   })
}
fetchCallback("https://jsonplaceholder.typicode.com/users").then(e=>{
    const dataId = e.map(elem=>elem.id);
    return dataId;
}).then(console.log)


//using asynch code 


async function fetchCallback(url){
    try{
        console.log((await(await fetch(url)).json()).map(elem=> elem.id)); 

    }catch(error){
        console.error(error)
    }
}
fetchCallback("https://jsonplaceholder.typicode.com/users");