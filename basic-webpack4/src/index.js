function component() {
  let element = document.createElement('h1');
  element.innerHTML = 'hello world'
  return element;
}

document.body.appendChild(component());