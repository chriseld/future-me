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

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myLogo = new Image();
    myLogo.src = Logo;
    myLogo.width = 500;

    element.appendChild(myLogo);
  
    return element;
}

document.body.appendChild(component());