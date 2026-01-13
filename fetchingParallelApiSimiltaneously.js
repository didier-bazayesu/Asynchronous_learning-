



async function fetchingParallelApiSimiltaneously() {

    const user = await fetch('https://jsonplaceholder.typicode.com/users');
    const userDetails = await user.json();


    //fetching the comment 

    const post = await fetch("https://jsonplaceholder.typicode.com/posts")
     const postDetails = await post.json();


     //fetching comments 

    const comment = await fetch("https://jsonplaceholder.typicode.com/comments");
    const commentDetais = await comment.json();

    return await Promise.all([userDetails,postDetails,commentDetais]);
}


fetchingParallelApiSimiltaneously().then(([user,comment,result])=>{
    console.log("userLength",user.length);
    console.log("commentLength",comment.length);
    console.log("post result",result.length);
});
