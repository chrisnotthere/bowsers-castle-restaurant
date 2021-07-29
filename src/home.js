
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

  return home;
}

export default createHome;
