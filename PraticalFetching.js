
async function PraticalFetching() {

    try{


        let data = await fetch('https://jsonplaceholder.typicode.com/users');
        if(!data.ok){
            throw new Error("there something behind");
        }
        let response = await data.json();
        console.time('fetched');
    
        response.forEach(async element => {
           
            let post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${element.id}`);
            let result =  await post.json();
             console.log("User",element.name);
             console.log("Email:",element.email);
    
             //returning post
             console.log("Post:")
              result.forEach(element=> {
                console.log("-",element.title);
             })
            
             console.log('\n');
        });
    
    console.timeEnd("fetched")
       await Promise.allSettled(response);

    }catch(error){
        console.error(error);
    }


}

PraticalFetching().then(console.log)

