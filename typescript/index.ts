let name2:string = "Pradip Sapkota"


type userRole = "admin"|"seller"|"staff"

interface userObject {

    name:string,
    email:string,
    address:string,//compulsory
    role:userRole   
    status?:string //optional
}

const object1:userObject = {
    name:"Hari",
    email:"harikarki@gmail.com",
    address:"Sitapaila",
    role:"admin"
    
}

//same also  for normal function as arrow function

const fuc2 = (a:number,b:number):number =>{

return a+b

}


//async await function

// const func2 = async ():Promise<string> =>{

//     return ""
// }


