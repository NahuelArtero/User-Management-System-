const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root123',
    port:3306,
    database:'cm_db_users'
})

conexion.connect((err)=>{
    if(err){
        console.log('Ha ocurrido un error: ' + err);
    }
    else{
        console.log('la base de datos dse conecto!!!');
    }
});

module.exports= conexion;