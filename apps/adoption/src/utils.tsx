import { redirect } from "react-router-dom"

export async function requireAuth(request: Request) {
    const pathname = new URL(request.url).pathname
    const isLoggedIn = localStorage.getItem("loggedin")

    if (isLoggedIn === "false" || isLoggedIn === null) {
        throw redirect(
            `/login?message=You must log in first.&redirectTo=${pathname}`
        )
    }
}
