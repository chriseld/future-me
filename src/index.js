import _ from 'lodash';
import './style.css';
import Logo from './img/logo-lg.png';

let firstName;
let startTime;
let endTime;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
   });
}

function clearModal() {
  while (document.getElementById("modal").firstChild) {
    document.getElementById("modal").removeChild(document.getElementById("modal").firstChild);
  }
}

setContent();

function loadProfile() {
  if(!localStorage.getItem("hasProfile")) {
    createProfile();
  } else {
    clearModal();
    document.getElementById("modal").append("Name: " + localStorage.getItem("firstName"));
    document.getElementById("modal").append(document.createElement("hr"));
    document.getElementById("modal").append("Start Time: " + localStorage.getItem("startTime") + " AM");
    document.getElementById("modal").append(document.createElement("br"));
    document.getElementById("modal").append("End Time: " + localStorage.getItem("endTime") + " PM");
    document.getElementById("modal").append(document.createElement("hr"));
  }
}

function getStartTime() {
  startTime = parseInt(window.prompt("Enter the time (AM) when you would like to start receiving notifications", "10"), 10);
  if ( /^[0-9.,]+$/.test(startTime) && startTime > 0 && startTime < 13) {
    console.log('start pass');
    console.log(startTime);
  } else {
    console.log('start fail');
    getStartTime();
  }
}

function getEndTime() {
  endTime = parseInt(window.prompt("Enter the time (PM) when you would like to stop receiving notifications", "4"), 10);
  if ( /^[0-9.,]+$/.test(endTime) && endTime > 0 && endTime < 13) {
    console.log('end pass');
    console.log(endTime);
  } else {
    console.log('end fail');
    getEndTime();
  }
}

function createProfile() {
  firstName = prompt("Please enter your first name");
  getStartTime();
  getEndTime();

  localStorage.setItem("firstName", firstName);
  localStorage.setItem("startTime", startTime);
  localStorage.setItem("endTime", endTime);

  localStorage.setItem("hasProfile", true);
  loadProfile();
  setContent();
}

function setContent() {
  if(!localStorage.getItem("hasProfile")) {
    document.getElementById("main").append("Click the happy inkwell to get started!");
  } else {
    while (document.getElementById("main").firstChild) {
      document.getElementById("main").removeChild(document.getElementById("main").firstChild);
    };
    let btn = document.createElement("input");
    btn.setAttribute("type", "button");
    btn.setAttribute("id", "messageBtn");
    btn.setAttribute("onclick", "messageControl()");
    btn.setAttribute("value", "Click to set a message for future you!");
    document.getElementById("main").append(btn);
  }
}

function messageControl() {
  //add this next
}

document.getElementById("logo").addEventListener("click", function() {
  if(document.getElementById("modal").classList.contains("hidden")) {
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("overlay").classList.remove("hidden");
    loadProfile();
  } else {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("overlay").classList.add("hidden");
  }
});

document.getElementById("overlay").addEventListener("click", function() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
});