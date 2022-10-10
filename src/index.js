import {Page} from './components/page.js';




const run = async function  () {
    const main = document.querySelector('#main')
    main.appendChild(await Page());
}


document.addEventListener('DOMContentLoaded', run);