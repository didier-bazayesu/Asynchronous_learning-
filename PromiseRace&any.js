let succ = Promise.resolve("success");
let fail = Promise.resolve("failure");

Promise.race([succ,fail]).then(console.log);
Promise.allSettled([succ,fail]).then(console.log);
Promise.any([succ,fail]).then(console.log);
Promise.all([succ,fail]).then(console.log);