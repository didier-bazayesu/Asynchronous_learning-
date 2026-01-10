
function fetchUserData(userId) {
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }
            return response.json();
        });

    const postsPromise = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            return response.json();
        });
    

    Promise.all([userPromise, postsPromise])
        .then(results => {
            const [user, posts] = results;
            console.log(`User: ${user.name}`);
            console.log('Posts:');
            posts.forEach(post => console.log(`  - ${post.title}`));

           
        })
        .catch(error => {
            console.error(error);
        });
}

// Example usage:
fetchUserData(5)

