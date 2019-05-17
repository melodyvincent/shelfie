require("dotenv").config;
const express = require('express');

const massive = require("massive");
const controller = require ('./controller')
const{ SERVER_PORT, CONNECTION_STRING } = process.env




const app = express();
app.use(express.json());

massive(CONNECTION_STRING)
    .then(dbInstance =>{
    app.set("db", dbInstance);
    })
    .catch(err => console.log(err))



app.get('/api/inventory', controller.readProduct)
app.post('/api/product',controller.addProduct)
app.put('/api/product:')




// massive(connectionString).then(connection => {
//     app.set('db', connection)
    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on port ${SERVER_PORT}.`);
});

// })