import React,  {useEffect, useReducer, useState} from 'react';
import SmallAnimal from './SmallAnimalF';
import farmReducer from '../Reducers/farmReducer';
import { getAllAnimals, createAnimal, removeAnimal, changeAnimal, moveAnimal } from '../Actions';


function App () {

    const [animals, animalDispatcher] = useReducer(farmReducer, []);
    const [animalInput, setAnimalInput] = useState('');

    useEffect(()=> {
        animalDispatcher(getAllAnimals());
    },[]);

    const deleteAnimal = (id) => {
       animalDispatcher(removeAnimal(id));
    }
    
     const editAnimal = (id, color) => {
        animalDispatcher(changeAnimal({id: id, color: color}));
    }

    const changeFarm = (id) => {
       animalDispatcher(moveAnimal(id))
    }

    const animalInputHandler= (e) => {
        setAnimalInput(e.target.value)
        };
    
    return ( <>
        <div className="field">
            <div className="farm">
                <h1> Farm No. 1</h1>
                {animals.map(b => <SmallAnimal farm1={b.farm1} farmNumber={1} key={b.id} destroy={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} change={changeFarm} />)}
            </div>
            <div className="farm">
                <h1> Farm No. 2</h1>
                {animals.map(b => <SmallAnimal farm1={b.farm1} farmNumber={2} key={b.id} destroy={deleteAnimal} edit={editAnimal} id={b.id} color={b.color} animal={b.animal} change={changeFarm} />)}
            </div>
        </div>            
                <div>
                    <input type="text" value={animalInput} onChange={animalInputHandler}></input>
                    <button className="input-button" onClick={() => animalDispatcher(createAnimal({animal: 'cow', animalInput: animalInput}))}>Add Cow</button>
                    <button className="input-button" onClick={() => animalDispatcher(createAnimal({animal: 'sheep', animalInput: animalInput}))}>Add Sheep</button>
                </div>
            </>);  
}

export default App