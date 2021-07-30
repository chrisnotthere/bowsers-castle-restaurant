import {createHeader, createFooter} from './footer-header'

//creates HOME section
function createHome(){

  const home = document.createElement('section');

  const bowserImage = document.createElement('img');
  bowserImage.src = '../src/images/bowser.png';
  bowserImage.alt = 'Bowser';
  bowserImage.id = 'bowserImage';
  // bowserImage.height = '250px';

  const p1 = document.createElement('p'); p1.textContent = 'The best breakfast in town!';
  const p2 = document.createElement('p'); p2.textContent = 'Come on by and see what Bowser has been up to.';
  const p3 = document.createElement('p'); p3.textContent = 'Order online or visit us!';

  home.appendChild(p1);
  home.appendChild(bowserImage);
  home.appendChild(p2);
  home.appendChild(p3);

  const homeBtn = document.querySelector('li[id="homeBtn"]');
  const menuBtn = document.querySelector('li[id="menuBtn"]');
  const contactBtn = document.querySelector('li[id="contactBtn"]');
  homeBtn.classList.add('active');
  menuBtn.classList.remove('active');
  contactBtn.classList.remove('active');

  return home;
}

//loads full page with HOME section
export function loadHome(){

  const content = document.querySelector('div[id="content"]');
  content.innerHTML = '';

  content.appendChild(createHeader());
  content.appendChild(createHome());
  content.appendChild(createFooter());

}

export default loadHome;