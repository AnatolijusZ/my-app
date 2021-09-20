import React from 'react';

var x = 3;
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            skaicius:[],
            x: 3
        }; 
    };
    
    editText = (e) => {
        
        const tekstas ={Tekstas: x};
        const skaicius = this.state.skaicius.slice()
        skaicius.push(x);

        this.setState ((busena) => ({
        x: state.x += 3
        }));
        localStorage.setItem('ButtonText', JSON.stringify(this.state.x));
    }
    

    render () {
    return ( <>
       
        <div>
            <button className="input-button" onClick={(e) => this.editText}>{this.state.x}x</button>
            {console.log(this.state.x)}
        </div>        
    </>);
    }
}

export default App