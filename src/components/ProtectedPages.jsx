import { Navigate, Outlet } from "react-router-dom"

export default function ProtectedPages() {
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to="signin" />
    }

    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}