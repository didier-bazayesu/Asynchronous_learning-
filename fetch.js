(async function handlefetch(url){
 let data = await((await fetch(url))).json()
 console.log(data

 )
})("https://jsonplaceholder.typicode.com/users")

