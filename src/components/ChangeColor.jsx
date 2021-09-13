import React from 'react';

class ChangeColor extends React.Component {

    render () {
        return (
            <button className="container" onClick={this.props.clickToChangeColor}>Jaja</button>
        )
    }
}

export default ChangeColor