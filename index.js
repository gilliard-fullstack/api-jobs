const express = require('express');

const app = express();

const PORT = process.env.PORT || 3030;

app.use(express.json());

const jobs = [
    {
        "id" : 0,
        "type" : 0,
        "title" : "Website X",
        "description" : 'abcde',
        "stack" : "NodeJS, ReactJS",
        "img" : "./teste.png",
        "status" : 0
    },

    {
        "id" : 1,
        "type" : 1,
        "title" : "App X",
        "description" : 'abcde',
        "stack" : "NodeJS, React Native",
        "img" : "./teste.png",
        "status" : 0
    },

    {
        "id" : 2,
        "type" : 2,
        "title" : "Character X",
        "description" : 'abcde',
        "stack" : "Blender 3D",
        "img" : "./teste.png",
        "status" : 0
    },
]

app.get('/', (req, res) => {
    res.json({'msg' : 'Welcome to my API!'})
});

app.get('/jobs/:id', (req, res) => {
    const jobId = req.params.id;
    res.json({jobs })
});


app.listen(PORT, () => console.log(`Your server is running on PORT : ${ PORT }`))