const URL = '/api/ron/quotes';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ron').addEventListener('click', getRon);
  document.getElementById('yep').addEventListener('click', getYep);
});

function getRon(ev) {
  ev.preventDefault();
  console.log('get ron quote');
  fetch(URL)
    .then((resp) => resp.json())
    .then((content) => {
      let main = document.querySelector('main');
      main.innerHTML = `<h2>${content[0]}</h2>`;
    })
    .catch((err) => console.error);
}

function getYep(ev) {
  ev.preventDefault();
  console.log('yep');
  fetch('/api/yes')
    .then((res) => res.json())
    .then((data) => {
      let main = document.querySelector('main');
      main.innerHTML = `<h2>${data}</h2>`;
    })
    .catch((err) => console.error(err));
}
