//import person from '../Data/person';

//Komponentas
function Component(props) {
    return (

    <div>
    <h1>Hello, Barsukas!</h1>
    <small>Labas Bebras {5 + 8}</small>
    <br></br>
    <small>{props.name} {props.surname} per {props.per}</small>
    </div>
    );
}
    export default Component;