import React, { useState } from 'react';
import User from './User';
import { Link } from 'react-router-dom';

function Todo(props) {

    //const [checkbox, change] = useState();

   // const swap =() => {
   //     this.status = !this.status;
   // };

    //const change =() => {
     //   console.log('hi');
    //};

    //change(swap);
    

    return (
        <div className="todo">
            <Link to={"/" + props.data.id}><div className="id">{props.data.id}</div></Link>
            <User id={props.data.userId}></User>
            <div className="title">{props.data.title}</div>
            <div className="status" onClick={() => props.sniuriukas(props.data.id)} style={
                {backgroundColor: props.data.completed === false ? 'red' : 'green'}
                }></div>
        </div>
    )

}

export default Todo;