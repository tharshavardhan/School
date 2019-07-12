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
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import { MenuItem, MenuList } from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InputBase from '@material-ui/core/InputBase';
import {compose} from 'recompose'
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';

import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Icon from '@material-ui/core/Icon';
import FirstPage,{SecondPage,ThirdPage,FourthPage} from './Components'
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
console.log("inside dashboard" , props)
    return (
        <Router>
            
            <DashBoard1 {...props} >
                <DashBoard_RightDrawer />
                <Switch>
                    <Route exact path="/dashboard" render={
                     (props) => <FirstPage  {...props} />}/>
                        <Route path="/dashboard/1" render={
                     (props) => <SecondPage   />} />
                        <Route path="/dashboard/2" render={
                     (props) => <ThirdPage   />} />

                    <Route path="/dashboard/3" render={
                     (props) => <FourthPage {...props}  />} />

                    <Route render={() => <h3>Not Found</h3>} />
                </Switch>
            </DashBoard1>
        </Router>
    )
} 
export default  withRouter(DashBoard)



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
    function testing(){
        setTest(()=>test+1)
    }
    console.log("href",window.location.href)
    const win = window.location.href.split("/")
    var location=""
    win.map((t,index)=>{
        if(index>2)
        location=location+"/"+t;
    })
    console.log("location ",location)
   
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
                    <MenuItem onClick={testing} button component={Link} to="/dashboard/1" selected={'/dashboard/1' === location}>
                        home
                    </MenuItem>
                </MenuList>
                 <List>

                    <div className="testing">
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem component={Link} to="/dashboard" button key={text} className="testing1">
                                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </div>
                </List> 
                {/* <Divider /> */}



                {/* checkingg */}
                 <List>


                    <MenuItem component={Link} to="/dashboard"

                        selected={"props.location.pathname" == "/dashboard"} >Home</MenuItem>

                    <div className="testing">
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
                                
                                className={classes.nested} className="testing1">
                                    <ListItemText primary={text}/>
                                </ListItem>
                            ))}


                        </Collapse>
                    </div>


                </List> 
                
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
                    facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
                    gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
                    donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
                    Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
                    imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
                    arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
                    donec massa sapien faucibus et molestie ac.
        </Typography>
        <MenuList>
                    <MenuItem component={Link} to='/test' >dsfdsfdsfsdfsdfdsfdsfdsfs</MenuItem>
                </MenuList>
                <div >
                    {props.children}



                </div>

                <i className="fa fa-rocket fa-lg" aria-hidden="true"></i>


            </main>
        </div>

    );
}

withRouter(DashBoard1)