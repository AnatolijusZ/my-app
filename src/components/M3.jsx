import React from 'react';


class M3 extends React.Component {

    constructor(props) {
      super(props);
        this.state = {x: 3};
    }
  
    do3 = () => {
        localStorage.setItem('xxx', this.state.x +3 );
        this.setState((state) => ({x: state.x += 3}));
    }

    componentDidMount() {
        const x = JSON.parse(localStorage.getItem('xxx'));
        if (null === x) {
            return;
        }
        this.setState({
            x: x
        })
    }
    

    render() {
      return (
        <button onClick={this.do3}>{this.state.x}x</button>
      );
    }
  }

  export default M3;