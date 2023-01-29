const bgImage = document.createElement("img");
const characterImg = document.querySelector("#profile-img") 
const CHARACTERINFO_KEY = "userinfo"
const savedCharacterInfo = localStorage.getItem(CHARACTERINFO_KEY);
const sizeOfArcane = 10;
const sizeOfCernium = 8;
const sizeOfArcs = 5;
const sizeOfOdium = 5;
const characterList = ["adelionnn.png", "네포필리아.png", "노루버섯튀김.png", "리띵크.png", 
    "망상냥이.png", "헛복.png", "힛댜힛댜.png"]

let characterInfo = []


function chooseBGLevel(level){
    let levelLocation
    if(level>=275){
        levelLocation = "Odium"
    }else if(level>=260 && level < 270){
        levelLocation = "Cernium"
    }else if(level>=270 && level <275){
        levelLocation = "Arcs"
    }else{
        levelLocation = "Arcane"
    }
    return levelLocation;
}

function chooseBG(levelLocation) {
    let chosenPic
    let num
    if(levelLocation === "Arcs"){
        num = Math.floor(Math.random() * sizeOfArcs)
        chosenPic = `Arcs${num}`;
    } else if(levelLocation === "Cernium"){
        num = Math.floor(Math.random() * sizeOfCernium)
        chosenPic = `Cernium${num}`;
    } else if(levelLocation === "Odium"){
        num = Math.floor(Math.random() * sizeOfOdium)
        chosenPic = `Odium${num}`;
    }else{
        num = Math.floor(Math.random() * sizeOfArcane)
        chosenPic = `Arcane${num}`;
    }
    return chosenPic
}

if(savedCharacterInfo !== null){
    characterInfo = JSON.parse(savedCharacterInfo);
    const name = characterInfo[0].name;
    const level = characterInfo[0].level;
    const location = chooseBGLevel(level);
    const imgSrc = chooseBG(location);
    bgImage.src = `img/${location}/${imgSrc}.png`;
    if(characterList.includes(`${name}.png`, 0)){
        characterImg.src = `img/Character/${name}.png`;
    }
}else{
    bgImage.src = `img/mapleisland.jpg`;
}

document.body.appendChild(bgImage);