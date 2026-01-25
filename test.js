function fibonacci(n) {
    if(n <=1 ) return n;
   let a = 0 ; let b = 1 
   let arr = [];

   for(let i=2 ; i<=n; i++){
    let next = a +b ;
    a = b;
    b = next
    arr.push(b)
   }
   console.log(arr);
return b;
}
console.log(fibonacci(100/3))

