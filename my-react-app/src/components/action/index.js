import React from 'react';
import Popper from './popper';
import Toggle from "./toggle";

class Action extends React.Component{
    render(){
        return(
            <div>
                <Popper/>
                <Toggle/>
            </div>
        )
    }
}
export default Action;
