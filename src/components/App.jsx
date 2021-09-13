import React from 'react';
import ChangeColor from './ChangeColor'

class App extends React.Component {

    constructor() {
        super();
        this.state = {bg: 'palegreen'}; 
    };

    changeColor = () => {
   //     this.setState ({
   //         bg: 'orangered',
   //     });
        this.setState(state => {
            let color;
            if (state.bg == 'palegreen') {
                color = 'orangered';
            }
            else if (state.bg == 'orangered') {
                color = 'palegreen'
            }
            return (
                {bg: color}
           // {bg: state.bg == 'palegreen' ? 'orangered' : 'palegreen'}  sutrumpintas if ciklas
            )
        });

    }

    render () {
    return ( <>
        <div className="rutulys" style={{backgroundColor: this.state.bg}}>
            
            <ChangeColor clickToChangeColor={this.changeColor}></ChangeColor>
        </div>        
    </>);
    }
}

export default App