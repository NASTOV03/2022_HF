const nocache = require('nocache')
const express = require('express')
const bodyParsor = require("body-parser")
const mysql = require('mysql')
const path = require('path')
const con = mysql.createPool({
    connectionLimit: 100,
    host: "localhost",
    user: "root",
    password: "",
    database: 'nodejs',
    debug: false
});



const app = express();
app.use(nocache())
app.use(bodyParsor.urlencoded({
    extended:true
}));
app.use(express.static(__dirname+'/../11'))
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname+'/../11/index.html'))
})

app.post('/login',(req,res)=>{
    const data = req.body.data;
    const user = atob(data.d1);
    const pass = atob(data.d2);

    con.query(`SELECT * FROM users WHERE user_id LIKE "${user}"`, function(err,result){
        if(err) throw err;
        if(pass === result[0].password){
            res.send(JSON.stringify({
                status:true
            }))
        }else{
            res.send(JSON.stringify({
                status:false
            }))
        }
    });

})

app.get('/welcome', (req,res)=>{
    res.sendFile(path.resolve(__dirname+'/../11/welcome.html'))
})

app.post('/signup',(req,res)=>{
    const data = req.body.data;
    const user = atob(data.d1);
    const email = atob(data.d2);
    const pass = atob(data.d3);

    let insertQuery = `INSERT INTO users (user_id,password,email) VALUES ('${user}','${pass}','${email}')`

    con.query(insertQuery, (err,response)=>{
        if(err) {
            console.error(err);
            res.send(JSON.stringify({
                status: false,
                reason: err
            }))
            return;
        }

        res.send(JSON.stringify({
            status: true
        }))
    })
})

app.listen(10000,()=>{
    console.log('server is running at port 10000')
})