type UserRole = "guest" | "member" | "admin" //Es parecido a los enums, estamos haciendo que el tipo UserRole solo pueda albergar los valores guest, member o admin
//Se llamamn unios
let userRole: UserRole = "guest" //Así está bien
//let userRole: UserRole = "someone" Así da error

type User = {
    username: string,
    role: "guest" | "member" | "admin" //Otro ejemplo de como se puede hacer pero en objetos
}