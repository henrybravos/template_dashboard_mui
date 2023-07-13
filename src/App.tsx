import { RouterProvider } from "react-router-dom"
import { router } from "./routes/AppRoute"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#013058"
        },
        secondary: {
            main: "#efd700"
        }
    }
})
function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
