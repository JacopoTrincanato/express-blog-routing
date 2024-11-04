//importo l'array dal file db.js nella cartella db
const posts = require('../db/db.js')

const fs = require('fs')

const index = (req, res)=>{
    //prendo il div con la classe container dalla DOM
    const container = document.querySelector('container')
    //cero una ul
    const postList = document.createElement('ul');
    posts.forEach(post=>{

        //creo gli li
        const listItem = document.createElement('li');
        //inserisco il markup negli li
        listItem.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <img src="${post.image}" alt="${post.title}">
            <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
        `;
        //inserisco gli li nell'ul
        postList.appendChild(listItem);
        
    })

    //inserisco l'ul nel container
    container.appendChild(postList);

    res.status(200)
}