import { ADD_ANIMAL, CHANGE_COLOR, CHANGE_FANCY_COLOR, CHANGE_FARM, DELETE_ANIMAL, EDIT_ANIMAL, GET_ALL_FROM_LS } from "../Constants/types";

export function changeColor() {
    return {
        type: CHANGE_COLOR
    }
}

export function changeFancyColor(fancyColor) {
    return {
        type: CHANGE_FANCY_COLOR,
        payload: fancyColor
    }
}

//FARM

export function getAllAnimals(animals) {
    return {
    type: GET_ALL_FROM_LS,
    }
}

export function createAnimal(animal) {
    return {
        type: ADD_ANIMAL,
        payload: animal
    }
}

export function removeAnimal(id) {
    return {
        type: DELETE_ANIMAL,
        payload: id
    }
}

export function changeAnimal(animal) {
    return {
        type: EDIT_ANIMAL,
        payload: animal
    }
}

export function moveAnimal(id) {
    return {
        type: CHANGE_FARM,
        payload: id
    }
}