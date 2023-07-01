require('./config/connection')

const express = require('express');
const port = (process.env.port || 3000);

// Express
const app= express();

// admit type 
app.use(express.json())

//port config
app.set('port',port)

//routes
app.use('/api',require('./routes'))

//initialize Express
app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('Error al iniciar servidor: ' + error);
    }
    else{
        console.log('servidor iniciado en el puerto: '+ port);
    }
})