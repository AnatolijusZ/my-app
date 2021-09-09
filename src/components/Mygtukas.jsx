import React from 'react';
import CountDisplay from './CountDisplay';

class Mygtukas extends React.Component {

    constructor() {
        super();
        this.state = {counter: 0}; //uzduoda busena
    }    

    activateLasers(e) {
        
        e.preventDefault();
       e.stopPropagation();
       // console.log(e);
        //console.log(`Lazeriai ${this.props.tekstas} FIRE`);

        // Wrong
        //this.setState({
        //    counter: this.state.counter + 1,
        //});
        //Correct
        this.setState((state, props) => ({counter: state.counter + props.amount}));
     
    }
    valio(e) {
        
        e.stopPropagation();
        console.log('Valio');
     
    }

    componentDidMount() { 
//        document.querySelector('#root').
//        addEventListener('click', e => {
//            console.log('Enemy killed ' + this.props.tekstas);
//        })
    }

    componentWillUnmount() {
        
    }

    render() {
        return (   
            <div onClick={(e) => this.valio(e)}>      
            <a href="" className="container" onClick={(e) => this.activateLasers(e)} >
            <div className="submit-feedback">{this.props.tekstas} </div>
</a>
<CountDisplay digit={this.state.counter}></CountDisplay>
</div>
        );    
    }
}

    export default Mygtukas;