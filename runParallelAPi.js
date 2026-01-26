// async function  FetchParallelAPi(){
//     try{
//         const [user,posts , todos] = await Promise.all([
//              fetch('https://jsonplaceholder.typicode.com/users/3'),
//             fetch('https://jsonplaceholder.typicode.com/posts'),
//              fetch('https://jsonplaceholder.typicode.com/todos')
        
//             ])
            
//             if(!user.ok  || !posts.ok || !todos.ok)throw new Error("failed to all those information");
        
//             return await Promise.all([
//                 user.json(),
//                 posts.json(),
//                 todos.json()
//             ])

//     }catch(error){
//      console.error(error);
//      throw error;
//     };
    

// }

// FetchParallelAPi().then(([user,post,todos])=>{
//       return {
//         username: user.name,
//         totalPosts: post.length,
//         todos : todos.length
//       }
// }).then(console.log)



async function getState(promise) {

    const data = await Promise.allSettled([promise]);
    if (data.status == 'fulfilled') return "fulfilled";
    if (data.status == "rejected") return "rejected";
    else return "Pending"

}

getState("https://jsonplaceholder.typicode.com/users/3").then(console.log)