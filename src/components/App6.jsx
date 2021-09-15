import React from 'react';


class App extends React.Component {

    constructor() {
        super();
        this.state = {bg: 'palegreen',
        bgIn: '',
        size: 500,
        s: '',
        shapeSquare: false
    }; 
    };

  
    inChangeColor = (e) => {
        this.setState ({
            bgIn: e.target.value,
        });
    }

    doColor = () => {
        this.setState(state => ({bg: state.bgIn}));
    }
   
    inChangeSize = (e) => {
        this.setState ({
            s: e.target.value,
        });
    }

    doSize = () => {
        this.setState(state => ({size: state.s}));
    }
   
    inChangeShape = () => {
        this.setState(state => ({shapeSquare: (!state.shapeSquare)}));
   }
    render () {
    return ( <>
        <div className="rutulys" style={
            {backgroundColor: this.state.bg, 
            width: this.state.size+'px',
            height:this.state.size+'px',
            borderRadius: this.state.shapeSquare ? '0' : '50%'}}>
                
            <div>
            <input type="text" value={this.state.bgIn} onChange={this.inChangeColor}></input>
            <button className="input-button" onClick={this.doColor}>Change Color</button>
        </div>        
        <div>
            <input type="text" value={this.state.s} onChange={this.inChangeSize}></input>
            <button className="input-button" onClick={this.doSize}>Size</button>
        </div> 
        <div>
            <input type="checkbox"  onChange={this.inChangeShape} checked={this.state.shapeSquare}></input>
           <label>Change Shape</label>
        </div>         
        </div>
    </>);
    }
}

export default App