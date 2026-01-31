


async function fetchUsertodos() {
 
    try{
        let [users,todos] = await Promise.all
        ([
            fetch("https://jsonplaceholder.typicode.com/users"),
            fetch("https://jsonplaceholder.typicode.com/todos")
        ]);

        let [usersData , todosData]  = await Promise.all([
              users.json(),
              todos.json()
        ]);


        

        return usersData.map(elem=>{
            return {
                id:elem.id,
                name : elem.name,

                todos: todosData.filter(todo=> todo.userId === elem.id).map(el => {
                    return {
                        UserId: el.userId,
                        completed: el.completed

                    }
                })
            }
        })

       

    }catch(error){
        console.error(error)
    }
}

fetchUsertodos().then(data=> {
    console.log(JSON.stringify(data,null,2))
})