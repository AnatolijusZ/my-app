import React,{useState} from 'react';

function SmallAnimal({open, farmNumber, farm1, color, animal, id})  {

    if ((farmNumber === 1 && farm1) || (farmNumber === 2 && !farm1) ) {
      return (
        <div className="small-circle" style={
        {backgroundColor: color,
        borderRadius: animal === 'cow' ? '50%' : '5px'}
        }>
      <span>{color}</span>
      
      <button className="input-button-small" onClick={() =>open(id)}>Open Edit</button>
    </div>
    )  
} 
else {
    return (<></>);
}
}
    export default SmallAnimal;