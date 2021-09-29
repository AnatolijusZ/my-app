import { useReducer } from "react";
import buttonReducer from "../Reducers/buttonReducer";
import { changeColor, changeFancyColor } from "../Actions";
function Red() {
  
    const [button, buttonDispatcher] = useReducer(buttonReducer, {
        click: 'green',
        fancyClick: 'green',
    });

    return (
     <div className="button-shelf">
         <button onClick={() => buttonDispatcher(changeColor())} style={{color:button.click}}>Press me</button>
         <button onClick={() => buttonDispatcher(changeFancyColor('#'+ Math.floor(Math.random()*16777215).toString(16)))} style={{color:button.fancyClick}}>Press me Fancy</button>
  
     </div>)
  }

  export default Red;