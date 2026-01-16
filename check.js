// const fetchPosts = async () => {
//     let[post , data ]  =await  Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/posts"),
//         fetch("https://jsonplaceholder.typicode.com/users")
//     ])
//     return await Promise.all([
//            post.json(),
//            data.json()
//     ])
   
// };

// fetchPosts().then(console.log)



const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!response.ok)
{
    throw new Error("error")

} 
   const data = await response.json();
    return data;
};

const fetchUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
};

Promise.all([fetchPosts(), fetchUsers()]).then(console.log)
