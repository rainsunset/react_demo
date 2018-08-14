import React from 'react';
import Popper from './popper';
import Toggle from "./toggle";
import LoginSwitch from "./login-switch";
import NumberList from "./number-list";
import Calculator from "./calculator";
import SignUpDialog from "./sign-up-dialog";

class Action extends React.Component{
    render(){
        return(
            <div>
                <Popper/>
                <Toggle/>
                <LoginSwitch/>
                <NumberList/>
                <Calculator/>

                <SignUpDialog/>
            </div>
        )
    }
}
export default Action;
