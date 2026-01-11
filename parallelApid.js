const results = await Promise.allSettled(
    urls.map(url => fetch(url).then(res => res.json()))
);

results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
        console.log(`API ${index + 1} success`, result.value);
    } else {
        console.error(`API ${index + 1} failed`, result.reason);
    }
});
