const scrollProgress = document.getElementById('menu');
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
const secondPartHeroText = document.getElementById('secondPartNameText');

window.addEventListener('scroll', () => {
  const scrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  scrollProgress.style.transform = `rotate(${(scrollTop / height) * 500}deg)`;
});

let text = ['Every cat met cuddler', 'Full stack web developer', 'Calisthenics enthusiast',
  'Full stack web developer', 'Variety music enjoyer', 'Full stack web developer']
let locationString = 0;

function changeTextHero() {
  for (let j=0; j<text[locationString].length; j++){
    if (text[locationString][j] === ' '){
      var spaceX = j
    }
  }
  secondPartHeroText.innerHTML=text[locationString].substring(0, spaceX) + '<h2 class="colorRed d-inline">' +
      text[locationString].substring(spaceX);
  secondPartHeroText.classList.remove('otherAnimation');
  secondPartHeroText.offsetHeight;
  secondPartHeroText.classList.add('otherAnimation');
  locationString++;
  if (locationString < text.length) {
      // Functions can reference themselves using their own name
      setTimeout(changeTextHero, 3000);
    } else {
    locationString = 0;
     setTimeout(changeTextHero, 3000);
  }
}

changeTextHero()

const menu = document.getElementById('menu');
const menuText = document.getElementById('menuText');
const inMenu = document.getElementById('inMenu');
const menuOption = document.getElementById('menuOption');

inMenu.addEventListener('click', openMenu);

function openMenu() {
  if (inMenu.style.scale === '0.9'){
    menuOption.style.display='none';
    inMenu.style.scale='1';
    menuText.style.scale='1'
  } else {
    menuOption.style.display='inline-block'
    inMenu.style.scale='0.9'
    menuText.style.scale='1.3'
  }
}

