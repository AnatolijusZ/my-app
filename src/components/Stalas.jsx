import Component from './Component';
import React from 'react';


class Stalas extends React.Component {

    constructor(props) {
      super(props);
     // this.state = {date: new Date()};
    }
  
    render() {
      return (
        <Component per={this.props.per} name={'Labas'} surname={'Antanai'} > </Component>
      );
    }
  }

  export default Stalas;