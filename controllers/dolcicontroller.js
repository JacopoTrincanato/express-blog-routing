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

const show = (req, res)=>{

    //uso il ciclo find per trovare e visualizzare l'id corrispondente alla pizza
    const post = posts.find(post => post.slug === req.params.slug)

    //restituisci un messaggio di errore se non trovi il post
    if (!post) {
        return res.status(404).json({
            error: `404! Not found`
        })
    }
    //se lo trova, restituisci uno status 200
    return res.status(200).json({
        data: post
    })
    
}

//esporto index e show
module.exports = { 
    index,
    show 
}