(function didier(number){
    let a = 0 , b = 1;
    let next = a +b ;

    for(let i=2 ; i< 10 ; i++){
        a = b ;
        b = next
    }
    console.log(b)
})(10)