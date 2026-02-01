function makeTrackedPromise(promise) {
    let isSettled = false;

    const wrapped = promise.then(
        (value) => {
            isSettled = true;
            return value;
        },
        (err) => {
            isSettled = true;
            throw err;
        }
    );

    wrapped.isSettled = () => isSettled;
    return wrapped;
}

// Usage
const p = makeTrackedPromise(fetch("https://jsonplaceholder.typicode.com/users"));

console.log(p.isSettled()); // false
p.then(() => console.log("Now settled:", p.isSettled()));
