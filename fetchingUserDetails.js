async function fecthUserDetails(){
    let userDetails = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await userDetails.json();
   return  data.map(async ele=> {
        
        let post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${ele.id}`);
        let data = await post.json();
        console.log(`username : ${ele.username}
        Email : ${ele.email}`);
      
        

        
    })
 
};


fecthUserDetails().then(console.log);