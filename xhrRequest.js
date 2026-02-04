function usePromiseRace() {
    const xhr = new XMLHttpRequest()
    return new Promise((resolve, reject) => {
        xhr.open("get", "https://jsonplaceholder.typicode.com/users");
        xhr.onload = function () {
            if (xhr.readyState === 4 || xhr.status >= 200 && xhr.status <= 300) {
                resolve(JSON.parse(xhr.responseText));
            } else {
                //    reject(throw new Error("something went wrong"));
            }
        }
        xhr.onerror = function () {
            reject("Network error");
        }
        xhr.send();

    })


}
usePromiseRace().then(console.log)