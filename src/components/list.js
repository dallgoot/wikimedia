import {Item} from './item.js';
import {SearchInput} from './searchInput.js'


const baseUrl = 'https://en.wikipedia.org/w/rest.php/v1/search/title';

const defLimit = 10;

const fetchOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    };

export async function List(search, limit) {
    const data = { "q" : search, "limit" : limit || defLimit };
    const url = new URL(baseUrl);
    for (let k in data) {
        url.searchParams.append(k, data[k]);
    } 
    const response = await fetch(url,
    {
        ...fetchOptions,
    });
    const results = await response.json();
    let ul = document.createElement('ul');
    results.pages.forEach((item) => {
        ul.appendChild(Item(item));
    });
    let lastLi = document.createElement('li');
    lastLi.appendChild(SearchInput());
    ul.appendChild(lastLi);
    return ul;
}