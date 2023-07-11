import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { IndexDashboard } from "../containers/dashboard/Index";

export const PrivateRouter = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, loadingCheckLogin } = {
    isAuthenticated: true,
    loadingCheckLogin: false,
  };

  if (isAuthenticated) {
    return children;
  }
  return <Navigate replace to="/login" />;
};

export const PublicRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, loadingCheckLogin } = {
    isAuthenticated: true,
    loadingCheckLogin: false,
  };
  //const { isAuthenticated, loadingCheckLogin } = useAuth()
  const lasPath = window.localStorage.getItem("lastPath") || "/";
  if (isAuthenticated && !loadingCheckLogin)
    return <Navigate to={lasPath} replace />;
  return children;
};

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "dashboard",
        element: (
          <PrivateRouter>
            <Layout>
              <IndexDashboard />
            </Layout>
          </PrivateRouter>
        ),
      },
    ],
  },
]);
