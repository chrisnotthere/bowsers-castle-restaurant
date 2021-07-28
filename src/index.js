import './style.css';

console.log('this is a test');

const content = document.querySelector('div[id="content"]');
let element = document.createElement('div');
//element.id = 'elem';

element.innerHTML = 'hey this is aaaa test';
element.classList.add('hello');

content.appendChild(element);
