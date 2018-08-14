import React from 'react'

function ListItem(props) {
    return <li>{props.value}</li>;
}

class NumberList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {numbers: [5, 8, 45, 89, 16, 82, 4]};
    }

    render() {
        return (
            <ul>
                {this.state.numbers.map((number) =>
                    <ListItem key={number.toString()} value={number}/>
                )}
            </ul>
        );
    }
}

export default NumberList
