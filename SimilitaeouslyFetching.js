async function  similitaneoislyfetching (data1,data2,data3){
  try{
      const post = await Promise.any([
               fetch(data1), fetch(data2),fetch(data3)
      ])
  
      return await post.json()

  }catch(error){
    console.error(error)
  }

}

similitaneoislyfetching( 
                      'https://dummyjson.com/posts',
                      'https://this-may-not-exist.com/posts',
                      'https://jsonplaceholder.typicode.com/posts'

).then((data)=> {
    console.log("\n");
    console.log("data1:", data);
  


}).catch (err=> console.log("there is problem ", err));