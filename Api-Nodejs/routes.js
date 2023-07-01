const router = require('express').Router()
const conexion= require('./config/connection')

//-----Routes-----
// get users
router.get('/',(req, res)=>{
    let sql ='select * from tb_user'
    conexion.query(sql,(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
// get user
router.get('/:id',(req, res)=>{
    const {id} = req.params
    let sql ='select * from tb_user where id_user = ?'
    conexion.query(sql,[id],(err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
})
// add user
router.post('/',( req, res)=>{
    const{userName, userLastName, userEmail, userDNI, userPhoto} = req.body

    let sql = `insert into tb_user(userName, userLastName, userEmail, userDNI, userPhoto) values('${userName}', '${userLastName}', '${userEmail}','${userDNI}', '${userPhoto}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'user added'})
        }
    })
})
//delete user
router.delete('/:id',(req, res)=>{
    const{id} = req.params

    let sql =`delete from tb_user where id_user = '${id}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'user deleted'})
        }
    })
});
// update user
router.put('/:id',(req, res)=>{
    const{id}=req.params
    const{userName, userLastName, userEmail, userDNI, userPhoto} = req.body

    let sql = `update tb_user set 
                userName ='${userName}',
                userLastName='${userLastName}',
                userEmail='${userEmail}',
                userDNI='${userDNI}',
                userPhoto='${userPhoto}'
                where id_user = '${id}'`
    
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'user modified'})
        }
    })

})




module.exports= router;