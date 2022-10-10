/** Example of received item data
id  10646
key "Food"
title   "Food"
excerpt "Food"
matched_title   null
description "Substances consumed for nutrition"
thumbnail
    mimetype    "image/jpeg"
    size    null
    width   200
    height  133
    duration    null
    url "//upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/200px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
*/


export function Item(item) {
    let li = document.createElement('li');
    li.id = item.id;
    li.innerHTML = (item.thumbnail ? `<img src="https:${item.thumbnail.url}">` : ``)
        + `<div>
                <h4 title="${item.title}">${item.title}</h4><br />
                ${item.description}
        </div>`;
    return li;
};