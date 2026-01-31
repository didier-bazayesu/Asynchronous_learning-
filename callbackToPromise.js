function nestedPromises() {
    return new Promise((resolve) => {
        console.log('Start');
        setTimeout(() => {
            console.log('Timeout 1');
            new Promise((resolve) => {
                console.log('Nested Promise Start');
                setTimeout(() => {
                    console.log('Timeout 2');
                    resolve('Resolved');
                }, 1000);
            }).then(() => {
                console.log('Nested Promise End');
            });
        });
        resolve('Promise Resolved');
    });
}


async function questionOne() {
    const result = await nestedPromises();
    console.log(result)
}
questionOne()