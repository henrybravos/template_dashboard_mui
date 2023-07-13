import MuiDrawer from "@mui/material/Drawer"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import DashboardIcon from "@mui/icons-material/Dashboard"
import { Collapse, Divider, IconButton, List, Toolbar } from "@mui/material"
import {
    ChevronLeft,
    Diversity1,
    EditNote,
    ExpandLess,
    ExpandMore,
    Gavel,
    InsertChart,
    LinkRounded,
    MonetizationOn,
    NoteAlt,
    Settings
} from "@mui/icons-material"
import { styled } from "@mui/material/styles"
import { drawerWidth } from "./Layout"

import { Fragment, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { PATH_HOME, PATH_INSTITUTION_LIST } from "../../constants/routes"
interface IMenu {
    toggleDrawer: () => void
    open: boolean
}

const MainListItems = () => {
    const [openSimulator, setOpenSimulator] = useState(false)
    const [openMembership, setOpenMembership] = useState(false)
    const [openSettings, setOpenSettings] = useState(false)
    const { pathname } = useLocation()
    useEffect(() => {
        setOpenSimulator(pathname.includes("simulator"))
        setOpenMembership(pathname.includes("member"))
        setOpenSettings(pathname.includes("setting"))
    }, [pathname])

    const onChangeSimulator = () => setOpenSimulator((prev) => !prev)
    const onChangeMembership = () => setOpenMembership((prev) => !prev)
    const onChangeSettings = () => setOpenSettings((prev) => !prev)

    const isSelect = (path: string) => pathname === path
    const linkCss = { textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }
    return (
        <Fragment>
            <Link to={PATH_HOME} style={linkCss}>
                <ListItemButton selected={isSelect(PATH_HOME)}>
                    <ListItemIcon>
                        <DashboardIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Inicio" />
                </ListItemButton>
            </Link>

            <ListItemButton onClick={onChangeSimulator}>
                <ListItemIcon>
                    <NoteAlt color="primary" />
                </ListItemIcon>
                <ListItemText primary="Simuladores" />
                {openSimulator ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSimulator} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to={PATH_INSTITUTION_LIST} style={linkCss}>
                        <ListItemButton selected={isSelect(PATH_INSTITUTION_LIST)} sx={{ pl: 4 }}>
                            <ListItemIcon />
                            <ListItemText primary="Instituciones" />
                        </ListItemButton>
                    </Link>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Crear Examen" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Exámenes" />
                    </ListItemButton>
                </List>
            </Collapse>

            <ListItemButton onClick={onChangeMembership}>
                <ListItemIcon>
                    <MonetizationOn color="primary" />
                </ListItemIcon>
                <ListItemText primary="Membresías" />
                {openMembership ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMembership} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon />
                        <ListItemText primary="Membresías" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon />
                        <ListItemText primary="Miembros" />
                    </ListItemButton>
                </List>
            </Collapse>
            <ListItemButton>
                <ListItemIcon>
                    <EditNote color="primary" />
                </ListItemIcon>
                <ListItemText primary="Escritos" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Gavel color="primary" />
                </ListItemIcon>
                <ListItemText primary="Normas Legales" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <LinkRounded color="primary" />
                </ListItemIcon>
                <ListItemText color="primary" primary="Enlaces" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <Diversity1 color="primary" />
                </ListItemIcon>
                <ListItemText color="primary" primary="Asesoría legal" />
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <InsertChart color="primary" />
                </ListItemIcon>
                <ListItemText primary="Reportes" />
            </ListItemButton>
            <ListItemButton onClick={onChangeSettings}>
                <ListItemIcon>
                    <Settings color="primary" />
                </ListItemIcon>
                <ListItemText primary="Configuraciones" />
                {openSettings ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openSettings} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Usuarios" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary="Pagos" />
                    </ListItemButton>
                </List>
            </Collapse>
        </Fragment>
    )
}

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9)
            }
        })
    }
}))
export const Menu = ({ open, toggleDrawer }: IMenu) => {
    return (
        <Drawer variant="permanent" open={open}>
            <Toolbar
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: [1]
                }}
            >
                <img src={require("../../assets/icon.png")} alt="Logo" height={50} />
                <IconButton onClick={toggleDrawer}>
                    <ChevronLeft />
                </IconButton>
            </Toolbar>
            <Divider />
            <List component="nav">
                <MainListItems />
            </List>
        </Drawer>
    )
}
