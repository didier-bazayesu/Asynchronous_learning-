(async function handleFetch(){
    console.log(await (await fetch('https://jsonplaceholder.typicode.com/users')).json())       
})()
