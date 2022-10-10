import {List} from './list.js';

export let searchTerm = 'Foo';



export async function Page(search) {
    let section = document.createElement('section');
    section.innerHTML = '<h1>Search Results</h1>';
    section.appendChild(await List(search || searchTerm, 10));
    return section;
};
