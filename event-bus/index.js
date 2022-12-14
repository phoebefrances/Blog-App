const express = require ('express');
const bodyparser = require('body-parser'); 
const axios = require ('axios'); 

const app = express(); 
app.use(bodyparser.json());

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log(err.message);
      });
      axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log(err.message);
      });
      axios.post('http://localhost:4002/events', event).catch((err) => {
        console.log(err.message);
      });
      res.send({ status: 'OK' });
}); 

app.listen(4005, () => {
   console.log('You are listening on port 4005') 
});


