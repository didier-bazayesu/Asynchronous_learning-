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

const api = 'https://jsonplaceholder.typicode.com/users';
const data = fetch(api);
data.then(response => response.json())
.then(ele=>console.log(ele));

let data1 = Promise.resolve('Hello world');
let data2 = Promise.reject('Error');
let data3 = Promise.resolve('Hello world');     


