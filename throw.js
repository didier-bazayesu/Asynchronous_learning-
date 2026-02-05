const data = Promise.resolve("Hello world");


data.then(() => {
    return new Error("something happend")
}).catch((e) => {
    return new Error(e)
}).catch(() => {
    return new Error("something happend")
}).then(d => console.log(d))