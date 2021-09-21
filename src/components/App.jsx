import React,  {useEffect, useState} from 'react';
import axios from 'axios';

    function App() {

        useEffect (() => {
            console.log("Start");
            axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(function (response) {
                console.log(response.data);
            });
        },[])

    return (<>
        Labas
        </>)
    }

export default App;