import {animals as list} from "../Data/animals";
import { useState } from "react";
import AnimalLink from "./AnimalLink";
import { Route, Switch } from "react-router";
import Animal from "./Animal";
function Zoo() {

    const [animals, setAnimals] = useState(list);

    return(
        <div className="zoo">
            <h1>Welcome to the Jumanji</h1>
            <Switch>
                <Route path={'/:id'}>
                    <Animal animals={animals}></Animal>
                </Route>
                    <Route path='/'>
            <ul>
            {animals.map(animal => <AnimalLink key={animal.id} animal={animal}/>)}
            </ul>
                    </Route>    
            </Switch>
        </div>
    )
}

export default Zoo;