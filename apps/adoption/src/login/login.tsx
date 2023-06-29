import React, { useState } from "react"
import {
    useLoaderData,
    useNavigation,
    Form,
    redirect,
    useActionData
} from "react-router-dom"
import styles from "./login.module.css"
import { LoginForm } from "./login.form"


export const Login = () => {
   
    const adminUser = { 
        email: "admin@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState("")

    const LoginDetails = (details: string) => {
        console.log(details)
    }

    const Logout = () => {
        console.log("Logout")
    }

    return (
        <div className={styles.login}>
            {user.email !== "" ? (
                <div className={styles.welcome}>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button>Logout</button>
                </div>
            )
            : <LoginForm />}
        </div>
    )

}
    
