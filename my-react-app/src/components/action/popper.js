import React from 'react'
class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:'Hello world!'};
    }

    preventPop(name, e){    //事件对象e要放在最后
        // 阻止浏览器阻止默认行为
        e.preventDefault();
        console.log(e.target.href)
        alert(name);
    }

    render(){
        return (
            <div>
                <p>{this.state.name}</p>
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
            </div>
        );
    }
}

export default Popper;
