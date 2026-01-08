let array = ['https://jsonplaceholder.typicode.com/users',
'https://jsonplaceholder.typicode.com/posts',
'https://jsonplaceholder.typicode.com/comments'
]

async function fetchApi(arr){
    arr.forEach(async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    })
}

fetchApi(array);
