import * as React from "react"
import { styled, useTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Box from "@mui/material/Box"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link"
import MenuIcon from "@mui/icons-material/Menu"
import { Menu } from "./Menu"
import { Face } from "@mui/icons-material"
export const drawerWidth: number = 240
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    )
}
interface AppBarProps extends MuiAppBarProps {
    open?: boolean
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}))
interface ILayout {
    children: React.ReactNode
    title: string
}

export const Layout = ({ children, title }: ILayout) => {
    const [open, setOpen] = React.useState(true)
    const toggleDrawer = () => {
        setOpen(!open)
    }
    const {
        palette: { secondary }
    } = useTheme()

    React.useEffect(() => {
        document.title = title
    }, [title])
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="absolute" color="primary" open={open}>
                <Toolbar
                    sx={{
                        pr: "24px" // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="secondary"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: "36px",
                            ...(open && { display: "none" })
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    />

                    <IconButton color="inherit">
                        <Face color="secondary" />
                        <Box
                            flexDirection={"column"}
                            alignItems="flex-start"
                            display="flex"
                            paddingLeft={1}
                        >
                            <Typography
                                component="p"
                                variant="body2"
                                color={secondary.main}
                                fontWeight="bold"
                            >
                                usuario definido
                            </Typography>
                            <Typography component="p" variant="body2" color={secondary.main}>
                                info@correo.com
                            </Typography>
                        </Box>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Menu open={open} toggleDrawer={toggleDrawer} />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: "98.2vh",
                    overflow: "auto"
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {children}
                    <Copyright sx={{ pt: 4 }} />
                </Container>
            </Box>
        </Box>
    )
}
