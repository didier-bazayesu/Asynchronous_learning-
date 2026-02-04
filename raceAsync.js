async function usePromiseRace(){
    const response = await Promise.any([
        fetch("https://jsonplaceholder.typicode.com/posts") ,
        fetch("https://dummyjson.com/posts"),
        fetch("https://this-may-not-exist.com/posts")]);

    return response.ok ?  await response.json() : "The problem in fetching"

}
usePromiseRace().then(console.log)