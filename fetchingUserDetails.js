async function fecthUserDetails(){
    let userDetails = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await userDetails.json();
   
  const information =  data.map(async ele=> {
        
        let post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${ele.id}`);
        let data = await post.json();
        console.log(`username : ${ele.username}
        Email : ${ele.email}`);
        console.log('post:');
        data.forEach(ele=> {
            console.log(ele.title);
        })
        console.log('\n');
        
    })

   await Promise.all(information);


};


fecthUserDetails().then(console.log);