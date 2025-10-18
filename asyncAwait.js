const base_URL= "https://jsonplaceholder.typicode.com/posts/1/comments"
    // const getUsers=()=>{
    //     fetch(`$[base_URL]/users`)
    //     .then((response)=>{
    //         return response.json()
    //     }
    // )
    // .then((data)=>{
    //     console.log(data)
    // })
    // .catch((error)=>
    //     console.log(error,"erreur de serveur"))
    // }
    // getUsers()

    const getUsers = async() => {
        
       try{
         const response= await fetch(`$[base_URL]/users`)
       const data= await response.json()
       console.log(data)
        }
        catch(error){
          console.log(error)
            }
      

    }
    getUsers()