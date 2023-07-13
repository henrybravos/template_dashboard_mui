import { createBrowserRouter, Navigate } from "react-router-dom"
import { Layout } from "../components/Layout/Layout"
import { IndexDashboard } from "../containers/dashboard/Index"
import { PATH_HOME, PATH_INSTITUTION_LIST } from "../constants/routes"

export const PrivateRouter = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated, loadingCheckLogin } = {
        isAuthenticated: true,
        loadingCheckLogin: false
    }

    if (isAuthenticated) {
        return children
    }
    return <Navigate replace to="/login" />
}

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated, loadingCheckLogin } = {
        isAuthenticated: true,
        loadingCheckLogin: false
    }
    //const { isAuthenticated, loadingCheckLogin } = useAuth()
    const lasPath = window.localStorage.getItem("lastPath") || "/"
    if (isAuthenticated && !loadingCheckLogin) return <Navigate to={lasPath} replace />
    return children
}

export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: PATH_HOME,
                element: (
                    <PrivateRouter>
                        <Layout title="Jolco - Inicio">
                            <IndexDashboard />
                        </Layout>
                    </PrivateRouter>
                )
            },
            {
                path: PATH_INSTITUTION_LIST,
                element: (
                    <PrivateRouter>
                        <Layout title="Jolco - Instituciones">
                            <IndexDashboard />
                        </Layout>
                    </PrivateRouter>
                )
            }
        ]
    }
])
