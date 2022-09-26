const express = require ('express');
const bodyParser = require('body-parser')
const { randomBytes } = require('crypto'); 

const app = express(); 
app.use(bodyParser.json()); 

const posts = {}; 

app.get('/posts', (req, res) => { 
    res.send(posts)
});

app.post('/posts', (req, res) => { 
    // used randomBytes to generate a new id to assign to the post that the user is trying to create, we want four bytes of random data so gets a random string
    const id = randomBytes(4).toString('hex')
    const { title } = req.body; 

    posts[id] = {
        id, title 
    }

    res.status(201).send(posts[id]);
});

app.listen(4000, () => { 
    console.log('Listening on 4000')
})