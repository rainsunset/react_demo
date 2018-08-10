import React from 'react';
import Clock from './components/clock'
import Action from "./components/action";
class App extends React.Component {
    render() {
        return (
            <div>
                <Clock/>
                <hr></hr>
                <Action/>
            </div>
        );
    }
}
export default App;
