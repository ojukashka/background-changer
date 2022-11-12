const changeColor = document.querySelector('.changecolor');

let body = document.querySelector('body');
let ongo = document.querySelector('#ongo').value;

changeColor.addEventListener('click', bol);

function bol() {
  let regEx = /[^#][a-f0-9][{1,6}]/;
  console.log(regEx.test(ongo));
  if (true) {
    document.body.style.backgroundColor = document.querySelector('#ongo').value;
  }
}
