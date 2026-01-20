import { handleFetch } from "./fetch3Api.js";

// async function handlefetching (){
//     try{
//         let data = await fetch('https://jsonplaceholder.typicode.com/users');
        
//         if(data.ok){
//             return await data.json();

//         }
//     }catch(error){
//         console.error(error);
//     }

// }
//  async function handlefetching() {
//     try {
//         let data = fetch('https://jsonplaceholder.typicode.com/users').then(data=> data.json());
//         return data;

      
//     } catch (error) {
//         console.error(error);
//     }

// }


// handlefetching().then(console.log);

 handleFetch("https://jsonplaceholder.typicode.com/users").then(console.log).catch(console.log);
