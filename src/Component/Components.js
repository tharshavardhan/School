


import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


interface TabContainerProps {
    children?: React.ReactNode;
}

function TabContainer(props: TabContainerProps) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

export default function FirstPage() {
    const classes = useStyles();
    const [value, setValue] = React.useState('one');
    const [trans,settrans] = React.useState("transform: translate3d(0px, 0px, 0px);");

    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
        console.log(newValue)
        if(newValue == "one"){
            settrans("translateX(70%)")
        }
        else{
            settrans("translateX(20%)")

        }
    }

    return (
        <div className={classes.root}>
            <ReactCSSTransitionGroup
                transitionName="slide"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
                transitionAppear={true}
                transitionAppearTimeout={1000}>
                <Tabs value={value} onChange={handleChange} indicatorColor={"none"}>
                    <Tab id="tab_1" value="one" label="Item One" wrapped 
                    style={{ margin: "10px",outline:"none"}} className="tab1" />
                    <Tab id="tab_2" value="two" label="Item Two" wrapped style={{ margin: "10px",outline:"none"}} className="tab2" />
                </Tabs>
            </ReactCSSTransitionGroup>
            <div>
                {value === 'one' && <TabContainer> hai</TabContainer>}
            </div>
            {value === 'two' && <TabContainer>Item Two</TabContainer>}
            {value === 'three' && <TabContainer>Item Three</TabContainer>}


  
        </div>
    );
}



























export  class SecondPage extends Component {
    render() {
        return (
            <div>
                2
            </div>
        )
    }
}
export  class ThirdPage extends Component {
    render() {
        return (
            <div>
                3
            </div>
        )
    }
}
export  class FourthPage extends Component {
    render() {
        return (
            <div>
                4
            </div>
        )
    }
}
