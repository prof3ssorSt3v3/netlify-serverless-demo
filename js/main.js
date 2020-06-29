const URL = '/api/ron/quotes';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ron').addEventListener('click', getRon);
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
