// console.log('hello');

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (animalArray) => {
    let domString = "";
    animalArray.forEach((animals) => {
        if (animals.isCarnivore) {
            domString += `<div class="animial carnivore">`;
        } else {
            domString += `div class ="animal vegetable">`;
        }
        domString +=    `<h1>${animals.name}</h1>`;
        domString +=    `<h3>${animals.number}</h3>`;
        domString +=    `<img class="animal-image" src="${animals.imageUrl}" alt="">`;
        domString +=    `<div class="button-container">`;
        domString +=        `<button class="escaped">Escaped</button>`;
        domString +=    `</div>`;
        domString += `</div>`;

    })
    printToDom(domString, 'zoo');
};

const addEscapedEventListeners = () => {
    const escapedButtons = document.getElementsByClassName('escaped');
    for (let i = 0; i <escapedButtons.length; i++){
        escapedButtons[i].addEventListener('click', animalEscaped);
    }
};

const animalEscaped = () => {

    showCarnivores();
    showVegetables();
};

const showCarnivores = () => {};
const showVegetables = () => {};



function executeThisFunctionAfterFileLoads (){
    const data = JSON.parse(this.responseText);
    buildDomString(data.animals);
    addEscapedEventListeners();
}



function WTF(){
    console.log("something went wrong");
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeThisFunctionAfterFileLoads);
    myRequest.addEventListener("error", WTF);
    myRequest.open("GET", "animals.json");
    myRequest.send();
    console.log("myrequest", myRequest);
};
startApplication();

