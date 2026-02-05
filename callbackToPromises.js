function promisify(callback){
    return function(...args){
        return new Promise((resolve,reject)=>{
            callback.call(this,...args,(error,result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            })
        })
    }
}