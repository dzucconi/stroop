import parameters from 'queryparams';
import random from './lib/random';
import colors from './lib/colors';

window.parameters = parameters;

const DOM = {
  app: document.getElementById('app'),
  left: document.getElementById('left'),
  right: document.getElementById('right'),
};

const PARAMS = parameters({
  speed: 250,
  colors,
  left: 'red',
  right: 'green',
});

const prune = () => {
  for (var i = 0; i < DOM.app.childNodes.length; i++) {
    if (DOM.app.childNodes[0].offsetTop === DOM.app.childNodes[i].offsetTop) {
      DOM.app.removeChild(DOM.app.childNodes[i]);
    } else break;
  }
};

const element = ({ color, word }) => {
  const item = document.createElement('span');
  item.appendChild(document.createTextNode(word));
  item.style.color = color;
  return item;
};

const append = () => {
  const color = random(PARAMS.colors);
  const word = random(PARAMS.colors);

  DOM.app.appendChild(element({ color, word }));

  if (document.body.offsetHeight > innerHeight) prune();
};

export default () => {
  DOM.left.style.backgroundColor = PARAMS.left;
  DOM.right.style.backgroundColor = PARAMS.right;

  setInterval(append, PARAMS.speed);
};
