// function getUserWithPosts(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//         .then(res => {
//             if (!res.ok) throw new Error("User not found");
//             return res.json();
//         })
//         .then(user => {
//             return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
//                 .then(res => {
//                     if (!res.ok) throw new Error("Posts not found");
//                     return res.json();
//                 })
//                 .then(posts => {
//                     return {
//                         userName: user.name,
//                         posts: posts.map(p => p.title)
//                     };
//                 });
//         });
// }

// getUserWithPosts(3)
//     .then(data => console.log(data))
//     .catch(err => console.error(err.message));

async function getUserWithPosts(userId) {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if(!response.ok) throw new Error("data failed to fetch")
         const data = await  response.json();

        const response2 = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${data.id}`)
        if (!response2.ok) throw new Error("user not found")
        const data2 = await response2.json()

        return {
            userName : data.name,
            post : data2.map(elem=> elem.title)
        }



    }catch(error){
        console.error(error)
        throw error;
    }
    
}
getUserWithPosts(1).then(console.log).catch(console.error)
