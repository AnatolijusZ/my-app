import React from 'react';
import ChangeColor from './ChangeColor'

class App extends React.Component {

    constructor() {
        super();
        this.state = {bg: 'palegreen',
        in: 'Hello'
    }; 
    };

    changeColorP = () => {
        this.setState ({
            bg: 'palegreen',

        })
    }
    changeColorO = () => {
        this.setState ({
            bg: 'orangered',
        })
    }

    changeColorG = () => {
        this.setState ({
            bg: 'greenyellow',
        })
    }

    changeColor = (color) => {
        this.setState ({
            bg: color,
        })
    }
    inChange = (e) => {
        this.setState ({
            in: e.target.value,
        });
    }

    doColor = () => {
        this.setState(state => ({bg: state.in}));
    }
   
    render () {
    return ( <>
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>
            
            <ChangeColor regNumber={23} color={'palegreen'} clickToChangeColor={this.changeColor}></ChangeColor>
            <ChangeColor regNumber={84} color={'orangered'} clickToChangeColor={this.changeColor}></ChangeColor>
            <ChangeColor regNumber={54} color={'greenyellow'} clickToChangeColor={this.changeColor}></ChangeColor>
            
            <input type="text" value={this.state.in} onChange={this.inChange}></input>
            <button className="input-button" onClick={this.doColor}>Change Color</button>
        </div>        
    </>);
    }
}

export default App