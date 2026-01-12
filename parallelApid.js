function fetchDataWithCallback(url,callback){
    try{
      fetch(url).then(response => {
        if(!response.ok){
          console.log("there is no data fetched");
        }else {
           return response.json();
        }
      }).then(data=> {
        console.log("data fetched success", data);
      }).catch(error=>  console.log(error));
    }catch(erro){
         console.error(erro);
    }


}
console.log(fetchDataWithCallback('https://jsonplaceholder.typicode.com/users'));