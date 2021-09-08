import React from 'react';

class Bebras extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()}; //uzduoda busena
    }    
    tick() {
    //tick = () => {
        this.setState({ date: new Date()}); //setState keicia "atnaujina" state
      }

    componentDidMount() { 
        console.log('jau', this.props.bebras);
        console.log(this.state.date.toLocaleTimeString());

        //document.querySelector('.kvadratas').
        //addEventListener('click', this.tick); 
        
    
        this.timerID = setInterval( () => this.tick(), 1000 );
        //this.timerID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <span>
                {this.props.bebras}
                <hr/>
                {this.state.date.toLocaleTimeString()}
            </span>
        );    
    }
}
//function Bebras(props) {
//    return (
//        <span>{props.bebras}</span>
//    );
//}
    export default Bebras;