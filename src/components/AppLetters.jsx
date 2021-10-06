import { useState } from "react";
import Field from "./Field";
import { ThemeContext, ThemeSelect } from "../Providers";

const letters = ["L", "a", "b", "a","s"];

const theme = [
    {
        color: 'aqua',
        border: '1px solid blueviolet'
    },
    {
        color: 'firebrick',
        border: '1px solid blueviolet'
    },
    {
        color: 'aqua',
        border: '1px solid firebrick'
    }
];


function App() {

        
        const [style, setStyle] = useState(0)
        
        const changeTheme= t => {
            setStyle(t);
            }
        
    return ( <>
        <ThemeContext.Provider value={theme}>
            <ThemeSelect.Provider value={style}>
                <Field letters={letters}></Field>
                    <button onClick={() => changeTheme(0)}>Theme 1</button>
                    <button onClick={() => changeTheme(1)}>Theme 2</button>
                    <button onClick={() => changeTheme(2)}>Theme 3</button>
            </ThemeSelect.Provider>
        </ThemeContext.Provider>
    </>);
}
    export default App;