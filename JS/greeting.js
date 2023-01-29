const loginForm = document.querySelector("#login-form");
const info = document.querySelector("#info");
const loginInputName = document.querySelector("#login-form input:first-child");
const loginInputLevel = document.querySelector("#login-form input:nth-child(2)");
const HIDDEN_CLASSNAME = "hidden";
const USERINFO_KEY = "userinfo"

userInfos = [];

function saveUserInfo(){
  localStorage.setItem(USERINFO_KEY, JSON.stringify(userInfos));
}

function onLoginSubmit() {
  //event.preventDefault();
  const username = loginInputName.value;
  const userlevel = loginInputLevel.value;
  const userinfo ={
    name: username,
    level: userlevel
  }
  loginForm.classList.add(HIDDEN_CLASSNAME)
  localStorage.setItem(USERINFO_KEY, userinfo);
  userInfos.push(userinfo);
  paintGreetings(userinfo);
  saveUserInfo();
}

const savedUserInfo = localStorage.getItem(USERINFO_KEY);

function paintGreetings(userinfo){
  const infoName = document.createElement("h1");
  const infoLevel = document.createElement("h2");
  infoName.innerText = `Character: ${userinfo.name}`;
  infoLevel.innerText = `Level: ${userinfo.level}`;
  info.appendChild(infoName);
  info.appendChild(infoLevel);
  info.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUserInfo === null || saveUserInfo === []){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit)

}
else{
  const parsedInfos = JSON.parse(savedUserInfo);
  userInfos = parsedInfos;
  parsedInfos.forEach(paintGreetings);
}