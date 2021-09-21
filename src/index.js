import _ from 'lodash';
import './style.css';
import Logo from './img/logo-lg.png';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
   });
}

if(!localStorage.getItem("hasProfile")) {
  document.getElementById("modal").append("It looks like you haven't set up a profile yet!");
} else {
  document.getElementById("modal").append("here's your profile!");
}

document.getElementById("logo").addEventListener("click", function() {
  if(document.getElementById("modal").classList.contains("hidden")) {
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("overlay").classList.remove("hidden");
  } else {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("overlay").classList.add("hidden");
  }
});

document.getElementById("overlay").addEventListener("click", function() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("overlay").classList.add("hidden");
});