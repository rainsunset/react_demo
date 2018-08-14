import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //组件被挂载
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //组件被卸载
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h3>LifeEncy - Test</h3>
                <h3>It is {this.state.date.toLocaleTimeString()}.</h3>
            </div>
        );
    }
}

// state和props
// 1) props：组件间的状态传递，从父组件到子组件的数据传递。
// 2) state：组件的内部状态，定义组件的自己的状态，只能定义在组件内部。

// state应该仅包括能表示用户界面状态所需要的最少数据。因此不应该包括：
// ①　计算所得数据（把所有的计算都放到render()里更容易保证用户界面和数据的一致性）；
// ②　React组件（在render()里使用props和state来创建它）；
// ③　基于props的重复数据（尽可能用props来作为唯一的数据来源，当且仅当需要知道props以前的值时，才把props保存到state中，因为未来的props可能会变化）。

export default Clock;
