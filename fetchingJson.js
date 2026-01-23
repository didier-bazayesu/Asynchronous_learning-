async function handleJson(url){
    const data = await fetch(url);
    return  data.json();


}

handleJson('didier.json').then(console.log)