import './style.css';
import Icon from './bowser.png';
import castleBG from './castleBG.png';
import { homePage } from './home.js';

//console.log('this is a testhihi');

const content = document.querySelector('div[id="content"]');

const theCastleBG = new Image();
theCastleBG.src = castleBG;

//trying to set bg image of 'content'...
content.style.backgroundImage = `url(${theCastleBG})`;


//inserting bg img to end of 'content'
// const element = document.createElement('div');
// element.appendChild(theCastleBG);
// content.appendChild(element);






////  testing calling module from another file    ////
homePage.publicMethod(); // outputs 'Hello World'
console.log(`${homePage.publicProperty} hihihihihi`); // outputs 'I am a public property'
