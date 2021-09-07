//"use strict"

//function pridetiDiv() {
//let div = document.createElement('div')
//return div
//}

const createDiv = () => document.createElement('DIV');
//function createDivOld1 () {
//const div = document.createElement('DIV');
//return div;
//}

const root = document.querySelector('#root');

root.appendChild(createDiv());

//----------------------
//Sukuriam naują funkciją kuri daro tą patį kaip ir pirma, tik turi stringo argumentą, kuri patampa tekstu sukurto divo viduje.
//const createDiv2 = () => {
//    document.createElement('div');
//    createDiv2.innerHTML = 'this is div'
//}
//const root = document.querySelector('#root');
//
//root.appendChild(createDiv2());

const createDivText = (text) => {
   const element = document.createElement('DIV');
   const textNode = document.createTextNode(text);
   element.apppendChild(textNode);
   return element;
}
//-------------------------------------------------------------
//prieš pirmo masyvo data renderinmą surūšiuoti masyvą pagal abėcėle naudojant tik trečią stringo raidę. T.y. b,t ' ' Kitaip tariant išrūšiuoti pagal trečias raides
//const data = ['Labas', 'pats', 'tu labas'];
//const data2 = new Set(['Labas', 'pats', 'tu labas']);
//const data3 = new Map([
//    ['viens', 'Labas'],
//    ['du', 'pats'],
//    ['trys', 'tu labas']
//]);
//const data4 = {
//    viens: 'Labas',
//    du: 'pats',
//    trys: 'tu labas'
//}

//const data = ['Labas', 'pats', 'tu labas'];
//
//data.forEach(element => {
//    const createArrayText = () => {
//        const div = document.createElement('div');
//        const text = document.createTextNode(element);
//        div.appendChild(text);
//        return div;
//    }
//
//const root = document.querySelector('#root');
//root.appendChild(createArrayText);
//});

const root = document.querySelector('#root');
root.appendChild(createDivText('Valio'));
