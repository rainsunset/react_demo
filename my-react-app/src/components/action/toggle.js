import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
        // 回调方法里若调用this函数 则必须加.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
        console.log(this.state);
    }

    render() {
        return (
            <input type='button' readOnly='true' value={this.state.isToggleOn ? 'ON' : 'OFF'}
                   onClick={this.handleClick}/>
        );
    }
}

export default Toggle;
