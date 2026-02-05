
let endPoint = [
    'https://dummyjson.com/posts',
    'https://this-may-not-exist.com/posts',
    'https://jsonplaceholder.typicode.com/posts'
]
async function getRejectedPost (url){
    let success = { 'Posts': [], 'fail': 0, 'successful': 0 }
     let posts = await Promise.allSettled(
         url.map(async (elem)=> {
             const data = await fetch(elem);
             return await data.json();
         })  
    )
     posts.map(elem=>{
        if(elem.status === "fulfilled"){ 
            success.successful+=1;
           success.Posts.push(elem.value)
        }

        else{
            success.fail+=1
        }
        
    })
    return success
}
getRejectedPost(endPoint).then(el=> console.log(JSON.stringify(el,null,1)) ).catch(console.log)
     