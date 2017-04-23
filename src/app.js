import './index.html';
import './app.scss';

function component() {
  const divNode = document.createElement('div');
  divNode.innerHTML = 'Hello webpack!';

  return divNode;
}

document.body.appendChild(component());
