type UserRole = "guest" | "member" | "admin" | "contributor" //Es parecido a los enums, estamos haciendo que el tipo UserRole solo pueda albergar los valores guest, member o admin
//Se llaman unions
let userRole: UserRole = "guest" //Así está bien
//let userRole: UserRole = "someone" Así da error

let nextUserId = 1;
type User = {
    id: number
    username: string,
    role: "guest" | "member" | "admin" | "contributor" //Otro ejemplo de como se puede hacer pero en objetos
}

type UpdatedUser = Partial<User>; // En esta línea se está creando un tipo llamado UpdatedUser que toma los atributos de User pero cada uno de sus campos sería opcional 

/* 
type UpdatedUser = { El signo ? indica que los atributos son opcionales
    id?: number
    username?: string,
    role?: "guest" | "member" | "admin" | "contributor"
}
*/

const users: User[] = [
    {id: nextUserId++, username: "john_doe", role: "member"},
    {id: nextUserId++, username: "janeth_smith", role: "contributor"},
    {id: nextUserId++, username: "alice_jones", role: "admin"},
    {id: nextUserId++, username: "charlie_brown", role: "member"}
];

function updateUser(id: number, updates: any){
    for(let user of users){
        if(user.id==id){
            Object.assign(user,updates)
        }
    }

}

updateUser(1, {username: "new_john_doe"})
updateUser(4, {role: "contributor"})
    

function addNewUser(newUser: Omit<User,"id">): User{ // A Omit se le pasan dos argumentos: uno es el tipo de dato que acepta, el otro es un string de la propiedad a ignorar. En este caso 
    let user: User = {//está aceptando usuarios sin el id, ya que este último se lo provee la función. Se puede hacer que ignore más de un atributo, escribiéndolo junto al primero pero
        id: nextUserId++,//separados por un barra |
        username: "Paul",
        role: "guest"
    }
    Object.assign(user,newUser);

    users.push(user);

    return user;
}

addNewUser({username: "joe Schmoe", role: "member"})
