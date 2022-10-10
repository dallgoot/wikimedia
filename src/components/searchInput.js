import {Page} from './page.js';


export  function SearchInput() {
  let input = document.createElement('input');
  input.id = "searchTermInput";
  input.placeholder = 'Search for pages containing...';
  input.addEventListener('keyup', async (event) => {
    if (event.key  === 'Enter') {
      let main = document.querySelector('#main');
      main.querySelector('section').remove();
      main.appendChild(await Page(event.target.value));
    }
  });
  return input;
}