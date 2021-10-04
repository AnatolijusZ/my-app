import React,  {useEffect, useReducer, useState} from 'react';
import SmallAnimal from './SmallAnimalF';
import farmReducer from '../Reducers/farmReducer';
import Modal from './Modal';
import { getAllAnimals, createAnimal, removeAnimal, changeAnimal, moveAnimal } from '../Actions';


function App () {

    const [animals, animalDispatcher] = useReducer(farmReducer, []);
    const [animalInput, setAnimalInput] = useState('');
    const [open, setOpen] = useState(0);

    useEffect(()=> {
        animalDispatcher(getAllAnimals());
    },[]);

    const deleteAnimal = (id) => {
       animalDispatcher(removeAnimal(id));
       closeModal();
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

    const openModal =(id) => {
        setOpen(id);
    }
    
    const closeModal =() => {
        setOpen(0);
    }
    
    return ( <>
        <div className="field">
            <div className="farm">
                <h1> Farm No. 1</h1>
                {animals.map(b => <SmallAnimal open={openModal} farm1={b.farm1} farmNumber={1} key={b.id} id={b.id} color={b.color} animal={b.animal}/>)}
            </div>
            <div className="farm">
                <h1> Farm No. 2</h1>
                {animals.map(b => <SmallAnimal open={openModal} farm1={b.farm1} farmNumber={2} key={b.id} id={b.id} color={b.color} animal={b.animal}/>)}
            </div>
        </div>            
                <div>
                    <input type="text" value={animalInput} onChange={animalInputHandler}></input>
                    <button className="input-button" onClick={() => animalDispatcher(createAnimal({animal: 'cow', animalInput: animalInput}))}>Add Cow</button>
                    <button className="input-button" onClick={() => animalDispatcher(createAnimal({animal: 'sheep', animalInput: animalInput}))}>Add Sheep</button>
                </div>
                <Modal id={open} close={closeModal} destroy={deleteAnimal} change={changeFarm} edit={editAnimal}/>
            </>);  
}

export default App