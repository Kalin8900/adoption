import React from 'react'
import styles from "./login.module.css"
import {
    useLoaderData,
    useNavigation,
    Form,
    redirect,
    useActionData
} from "react-router-dom"

export const LoginForm = () => {
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
