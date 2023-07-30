import React from 'react'
import styles from "./login.module.css"
import {
    useLoaderData,
    useNavigation,
    Form,
    redirect,
    useActionData
} from "react-router-dom"
import { loginUser } from '../api/loginUser'


export function loader({ request } : { request: Request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request } : { request: Request }) {
    const formData = await request.formData()
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const pathname = new URL(request.url)
        .searchParams.get("redirectTo") as string || "/cats"
    
    try {
        const data = await loginUser(email, password)
        if (localStorage.getItem("loggedin") === "true")
            return redirect(pathname)
    } catch (err: any) {
        return err.message
    }
}

export const Login = () => {
    const errorMessage = useActionData() as string
    const message = useLoaderData() as string
    const navigation = useNavigation()

    return (
        <div className={styles.formContainer}>
            <h1 className={styles.title}>Sign in to your account</h1>
            {message && <h3 className={styles.red}>{message}</h3>}
            {errorMessage && <h3 className={styles.red}>{errorMessage}</h3>}

            <Form 
                method="post" 
                className={styles.form}
                replace
            >
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <button
                    disabled={navigation.state === "submitting"}
                    className={styles.button}
                >
                    {navigation.state === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
                </button>
            </Form>
        </div>
    )
}

