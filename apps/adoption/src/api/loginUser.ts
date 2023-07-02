import { users } from "./users.json"

export const loginUser = (email: string, password: string) => {
    if (users.find(user => email === user.email && password === user.password))
        return localStorage.setItem("loggedin", "true")
    else 
        return localStorage.setItem("loggedin", "false")
}
