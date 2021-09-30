import React from 'react';
class SmallAnimal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        editInput: ''
    }
}; 

editInputHandler= (e) => {
  this.setState ({
      editInput: e.target.value,
  });
}

  render () {
    return (
    <div className="small-circle" style={
      {backgroundColor: this.props.color,
      borderRadius: this.props.animal == 'cow' ? '50%' : '5px'}
      }>
      <span>{this.props.color}</span>
      <button className="input-button-small" onClick={() => this.props.delete(this.props.id)}>KILL</button>
      <div className="center">
        <input type="text" value={this.state.editInput} onChange={this.editInputHandler}></input>
        <button className="input-button-small" onClick={() => this.props.edit(this.props.id, this.state.editInput)}>Modify</button>
      </div>
    </div>
    )}  
}

    export default SmallAnimal;