import React,{useState} from 'react';

function SmallAnimal({farmNumber, farm1, color, animal, destroy, change, edit, id})  {

const [editInput, setEditInput] = useState("");

const editInputHandler= (e) => {
    setEditInput (e.target.value);
}

    if ((farmNumber === 1 && farm1) || (farmNumber === 2 && !farm1) ) {
    return (
    <div className="small-circle" style={
      {backgroundColor: color,
      borderRadius: animal === 'cow' ? '50%' : '5px'}
      }>
      <span>{color}</span>
      <button className="input-button-small" onClick={() => destroy(id)}>KILL</button>
      <button className="input-button-small" onClick={() => change(id)}>Change Farm</button>
      <div className="center">
        <input type="text" value={editInput} onChange={editInputHandler}></input>
        <button className="input-button-small" onClick={() => edit(id, editInput)}>Modify</button>
      </div>
    </div>
    )  
} 
else {
    return (<></>);
}
}
    export default SmallAnimal;