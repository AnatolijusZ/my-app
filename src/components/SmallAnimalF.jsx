import React,{useState} from 'react';

function SmallAnimal(props)  {

const [editInput, setEditInput] = useState("");

const editInputHandler= (e) => {
    setEditInput (e.target.value);
}

    if ((props.farmNumber === 1 && props.farm1) || (props.farmNumber === 2 && !props.farm1) ) {
    return (
    <div className="small-circle" style={
      {backgroundColor: props.color,
      borderRadius: props.animal == 'cow' ? '50%' : '5px'}
      }>
      <span>{props.color}</span>
      <button className="input-button-small" onClick={() => props.delete(props.id)}>KILL</button>
      <button className="input-button-small" onClick={() => props.change(props.id)}>Change Farm</button>
      <div className="center">
        <input type="text" value={editInput} onChange={editInputHandler}></input>
        <button className="input-button-small" onClick={() => props.edit(props.id, editInput)}>Modify</button>
      </div>
    </div>
    )  
} 
else {
    return (<></>);
}
}
    export default SmallAnimal;