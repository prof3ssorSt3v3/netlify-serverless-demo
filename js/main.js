const URL = '/api/ron/quotes';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ron').addEventListener('click', getRon);
  document.getElementById('yep').addEventListener('click', getYes);
  document.getElementById('octo').addEventListener('click', getOcto);
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

function getYes(ev) {
  console.log('yes');
  let url = '/api/yes';
  fetch(url)
    .then((resp) => resp.json())
    .then((content) => {
      let main = document.querySelector('main');
      main.innerHTML = `<h2>${content.msg}</h2>`;
    })
    .catch((err) => console.error);
}

function getOcto(ev) {
  ev.preventDefault();
  console.log('get octocat');
  fetch('/api/octo')
    .then((res) => res.json())
    .then((data) => {
      let main = document.querySelector('main');
      let content = data.map((item) => {
        return `<li>${item.name}</li>`;
      });
      main.innerHTML = `<ul>${content}</ul>`;
    })
    .catch(console.error);
}
