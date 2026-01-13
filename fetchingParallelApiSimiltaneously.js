
async function fetchingParallelApiSimiltaneously() {
   try{
//        const user = await fetch('https://jsonplaceholder.typicode.com/users');
//        const userDetails = await user.json();
   
   
//        //fetching the comment 
   
//        const post = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const postDetails = await post.json();
   
   
//         //fetching comments 
   
//        const comment = await fetch("https://jsonplaceholder.typicode.com/comments");
//        const commentDetais = await comment.json();
   
//        return await Promise.all([userDetails,postDetails,commentDetais]);
let[fetchUser , fetchPost , fetchComment ]= await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users"),
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/comments")

])
let[respUser , respPost , respComment]= await Promise.all([
      fetchUser.json(),
      fetchPost.json(),
      fetchComment.json()

])

return [respUser,respPost,respComment];

   }catch(error){
    console.error(error);
   }

 }


fetchingParallelApiSimiltaneously().then(([user,comment,result])=>{
    console.log(`commentuser:${user.length>=1 ? user.length : "No data fetched"}`);
    console.log(`commentLength:${comment.length>=1 ? comment.length :"No data fetched" }`);
    console.log(`commentLength:${result.length>=1 ? result.length : "No data fetched"}`);
    
});
