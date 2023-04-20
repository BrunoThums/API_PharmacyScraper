const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const res = require('express/lib/response');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

const database = {

};

app.get("/antiinflamatorios", async(requisition, response)=>{
    response.status = 200;
    res.json(database);
});

app.set('porta', process.env.PORT || 3000);
app.listen(app.get('porta'), ()=>{
    console.log('Servidor rodando na porta: ', app.get('porta'));
});
