//importo l'array dal file db.js nella cartella db
const posts = require('../db/db.js')

const fs = require('fs')

const index = (req, res)=>{

    //cero una ul
    let ul = `<ul></ul>`
    posts.forEach(post=>{

        //inserisco gli li nell'ul
        ul += `
            <li>
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <img src="${post.image}" alt="${post.title}">
                <p><strong>Tags:</strong> ${post.tags.join(', ')}</p>
            </li>
        `;
        
        
    })

    res.status(200).send(ul)
}

module.exports = { index }