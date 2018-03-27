// console.log('hello');

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const domString = (animalArray) => {
    console.log("animalArray", animalArray);
    let domString = "";
    for (let i = 0; i < animalArray.length; i++){
        domString += `<h1>${animalArray[i].name}</h1>`;
    }
    printToDom(domString, 'zoo');
};

function executeThisFunctionAfterFileLoads (){
    console.log("executeThisFunctionAfterFileLoads", Date.now());
    console.log("this", this);
    console.log("this.responseText", this.responseText);
    const data = JSON.parse(this.responseText);
    console.log("data", data);
    domString(data.animals);
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