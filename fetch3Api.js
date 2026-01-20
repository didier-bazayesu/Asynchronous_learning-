// let array = ['https://jsonplaceholder.typicode.com/users',
// 'https://jsonplaceholder.typicode.com/posts',
// 'https://jsonplaceholder.typicode.com/comments'
// ]

// async function fetchApi(arr){
//     arr.forEach(async (url) => {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//     })
// }

// fetchApi(array);
import axios from "axios";

const api = 'https://jsonplaceholder.typicode.com/users';


async function handleFetch(params) {

    const data = await axios.get(params);

    console.log(data.data)

}

handleFetch(api)


