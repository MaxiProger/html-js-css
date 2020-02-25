'use strict';

console.log('начало загрузки скрипта');

let li_load = document.querySelector('#load');
let li_clear = document.querySelector('#clear');

li_load.addEventListener('click',loadData);
li_clear.addEventListener('click',clearData);
function createParagraph(posts){
    let body = document.querySelector('#container');
    posts.forEach(post => {
        let div = document.createElement('div');
        div.classList.add('post');
        let paragraph = document.createElement('p');
        let h3 = document.createElement('h3');
        h3.innerText = post.title;
        paragraph.innerText = post.body;
        div.appendChild(h3);
        div.appendChild(paragraph);
        body.appendChild(div);
    });
}

async function loadData(){
const url ='https://jsonplaceholder.typicode.com/users/1/posts';
let response = await fetch(url);
let posts = await response.json();
createParagraph(posts);
}
function clearData(){
    let body = document.querySelector('#container');
    body.querySelectorAll('div').forEach(el=>body.removeChild(el));
}