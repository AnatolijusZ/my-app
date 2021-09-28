import React,  {useEffect, useState} from 'react';
import axios from 'axios';
import Todo from './Todo';
import TodoOne from './TodoOne'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';
    function App() {

        const [todos, setTodos]=useState([]);
        //const {todoId} = useParams();

        useEffect (() => {
            console.log("Start");
            axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(function (response) {
                console.log(response.data);
                setTodos(response.data);
            });
        },[]);

       //const editStatus = (id, completed) => {
       //     const todosCopy = todos.slice();
       //     for(let i=0; i<todosCopy.length; i++) {
       //         if(todosCopy[i].id === id){
       //             todosCopy[i].completed = !completed;
       //             break;
       //         }
       //     }
       //     setTodos(todosCopy)
        //}
        const sniuriukasTodui = (id) => {
            const todosCopy2 = todos.slice();
            for(let i=0; i<todosCopy2.length; i++) {
                if(id === todosCopy2[i].id){
                    todosCopy2[i].completed = !todosCopy2[i].completed;
                    break;
                }
            }
            setTodos(todosCopy2);
            

        }
    return (
        <Router>
            <Switch>
                <Route path={"/:todoId"}>
                    <div className="todo-container">
                    {<TodoOne todos={todos} sniuriukas={sniuriukasTodui}></TodoOne>}
                    </div>
                </Route>
                <Route path="/">
                    <div className="todo-container">
                    {todos.map((todo)=>(<Todo key={todo.id} data={todo} sniuriukas={sniuriukasTodui}></Todo>))}
                    </div>
                </Route>
            </Switch>
        </Router>
    )
        
    }

export default App;