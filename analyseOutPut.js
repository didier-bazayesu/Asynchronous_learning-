let a = 1;

setTimeout(() => {
    console.log(`setTimeout: ${a}`);
    a = 2;
}, 0);

setImmediate(() => {
    console.log(`Immediate: ${a}`);
});

const p = new Promise((resolve) => {
    console.log(`New Promise: ${a}`);
    a = 3;
    resolve();
});

p.then(() => console.log(`Then: ${a}`));

console.log(`console: ${a}`);

