import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoute";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
