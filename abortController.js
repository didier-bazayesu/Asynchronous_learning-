async function handleAbort() {
    const controller = new AbortController();
    const signal = controller.signal;
    
    try {
        
        
        const response = await fetch("https://jsonplaceholder.typicode.com/users", { signal });
        
        const data = await response.json();
        
        
        return data;
        
    } catch (error) {
        if (error.name === "AbortError") console.log("fetch aborted");
        else return console.error(error)
    }
    
    setTimeout(() => {
        controller.abort();
    }, 100)
}

handleAbort().then(console.log)