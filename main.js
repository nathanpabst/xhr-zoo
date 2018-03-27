// console.log('hello');

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML = domString;
};

const buildDomString = (animalArray) => {
    let domString = "";
    animalArray.forEach((animals) => {
        domString += `<h1>${animals.name}</h1>`;
    })
    printToDom(domString, 'zoo');
};

function executeThisFunctionAfterFileLoads (){
    const data = JSON.parse(this.responseText);
    buildDomString(data.animals);
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