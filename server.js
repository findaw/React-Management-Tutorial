const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'birthday' : 980505,
            'name' : 'kate',
            'gender' : 'male',
            'img' : 'http://placeimg.com/36/36/1'
        },
        {
            'id' : 2,
            'birthday' : 980505,
            'name' : 'earl',
            'gender' : 'female',
            'img' : 'http://placeimg.com/36/36/2'
        },
        {
            'id' : 3,
            'birthday' : 980505,
            'name' : 'Bob',
            'gender' : 'female',
            'img' : 'http://placeimg.com/36/36/3'
        }
        
    ])
})

app.listen(port, () => console.log(`Listening on port ${port}`));