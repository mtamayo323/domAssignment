document.getElementById('container');
document.querySelector('#container');
document.getElementsByClassName('second');
document.querySelector('ol .third');

let helloContainer = document.querySelector('#container');
helloContainer.innterText = 'Hello';

let footer = document.querySelector('.footer');

footer.classList.add('main');
footer.classList.remove('main');

let newLi = document.createElement('li');
newLi.innerText = 'four';
let ul = document.querySelector('ul');
ul.appendChild(newLi);

let olLi = document.querySelectorAll('ol li');

for (let i = 0; i < olLi.length; i++) {
  olLi[i].style.backgroundColor = 'green';
}

footer.remove();
