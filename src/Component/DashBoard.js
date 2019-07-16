import React from 'react';
import clsx from 'clsx';
import DashBoard_RightDrawer from './DashBoard_RightDrawer'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';

import ListItemText from '@material-ui/core/ListItemText';


import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import { MenuItem, MenuList } from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';

import { withRouter } from "react-router";


import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';
import FirstPage, { SecondPage, ThirdPage, FourthPage } from './Components'
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    },
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: "#fafbfc",
        color: "#535bd8",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {

    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        backgroundColor: "fafbfc",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    nested: {
        paddingLeft: theme.spacing(3),
    },
    expandlessAndExpandMore: {
        marginLeft: '50px',
    },
    search: {

        position: 'relative',

        borderRadius: "60px",
        backgroundColor: "#eeeeef",
        '&:hover': {
            backgroundColor: "#eeeeef",
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },

}));

function DashBoard(props) {
    console.log("inside dashboard", props)
    return (
        <Router>

            <DashBoard1 {...props} >
                <DashBoard_RightDrawer />
                <Switch>
                    <Route exact path="/dashboard" render={
                        (props) => <FirstPage  {...props} />} />
                    <Route path="/dashboard/1" render={
                        (props) => <SecondPage />} />
                    <Route path="/dashboard/2" render={
                        (props) => <ThirdPage />} />

                    <Route path="/dashboard/3" render={
                        (props) => <FourthPage {...props} />} />

                    <Route render={() => <h3>Not Found</h3>} />
                </Switch>
            </DashBoard1>
        </Router>
    )
}
export default withRouter(DashBoard)



function DashBoard1(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [test, setTest] = React.useState(1);

    const [openTest, setOpenTest] = React.useState(false);
    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    function handleClick() {
        setOpenTest(!openTest)
    }
    function testing() {
        setTest(() => test + 1)
    }
    console.log("href", window.location.href)
    const win = window.location.href.split("/")
    var location = ""
    win.map((t, index) => {
        if (index > 2)
            location = location + "/" + t;
    })
    console.log("location ", location)

    const pathname = "";
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar >
                    {open == true ?
                        <div >
                            <IconButton onClick={handleDrawerClose}
                                color="inherit"
                                edge="start"
                                className={clsx(classes.menuButton)}
                                style={{ outline: "none" }}
                            >
                                <ChevronLeftIcon />
                            </IconButton>
                        </div> :
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            style={{ outline: "none" }}
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>

                    }
                    <Typography variant="h6" className={classes.title}>
                        Photos
          </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'Search' }}
                        />
                    </div>

                    <div>
                        <IconButton
                            aria-label="Account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"

                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>


                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
                open={open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <MenuList>
                    <MenuItem onClick={testing} button component={Link} to='/dashboard' selected={'/dashboard' === location}>Test</MenuItem>

                </MenuList>

                {/* <Divider /> */}



                {/* checkingg */}
                <List>


                    <MenuItem component={Link} to="/dashboard"

                        selected={"props.location.pathname" == "/dashboard"} >Home</MenuItem>

                    <div className="Drawer_item">
                        <MenuItem button onClick={handleClick} className=" Heading">
                            <Icon className={'fa fa-home'} /><span className={classes.nested}
                                style={{ fontWeight: "700" }}
                            >Home</span>

                            {openTest ? <ExpandLess className={classes.expandlessAndExpandMore} /> :
                                <ExpandMore className={classes.expandlessAndExpandMore} />}
                        </MenuItem>
                        <Collapse in={openTest} timeout="auto" unmountOnExit style={{ borderLeft: "3px solid #e0f3ff", marginLeft: "22px" }}>
                            {['1', '2', '3', '4'].map((text, index) => (
                                <ListItem onClick={testing}
                                    selected={location == `/dashboard/${text}`} component={Link} to={`/dashboard/${text}`} button key={text}

                                    className={classes.nested} className="Drawer_subitem">
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}


                        </Collapse>
                    </div>


                </List>

            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />

                <div >


                    {props.children}



                </div>

               


            </main>
        </div>

    );
}

withRouter(DashBoard1)