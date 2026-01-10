async function fecthUserDetails(){

    try{
        let userDetails = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await userDetails.json();
       
      const information =  data.map(async ele=> {
            
            let post = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${ele.id}`);
            let data = await post.json();
            let id = null;
            data.map(ele=> {
                id = ele.id;
            })


            console.log(`username : ${ele.username}
            Email : ${ele.email}`);
            console.log('post:');
            data.forEach(ele=> {
                if(ele.id === id){

                    console.log(ele.title);
                }
                
            })
            console.log('\n');
            
        })
    
       await Promise.all(information);


    }catch(error){
        console.error(error);
    }


};


fecthUserDetails().then(console.log);