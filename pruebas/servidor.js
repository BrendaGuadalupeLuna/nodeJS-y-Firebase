const express = require("express"); //se llama a express //1

require('dotenv').config(); //para que carge el archivo y mandar llamar a .env
const app = express();//2
// las rutas van despues de crear el exprees ^

//middleware
//es el que se ejcuta enmedio

//req y res son onjetos y next una funcion 
var saludo=(req,res,next)=>{ //esto se usa cuando hacemos un login 
    console.log("Aloja Hawai");
    next();
}

//app.use(saludo); //con este el middler se va ejecutar en todas las rutas aunque no lo tenga, cada ves que usamos app.use indica un midder

app.get("/", (req, res) => {
    res.send("Hello es raiz");
});

app.use(saludo);  //se pone aqui si  no quiero que aparesca en raiz

app.get("/home",saludo, (req, res) => {
    res.send("Hi es home");
});

app.get("/otro",saludo, (req, res) => {
    res.send("Hi is other");
});

//const port=process.env.PORT // sirve para administrar el sistema operativo o el servidor 
const port = process.env.PORT || 3000 //aqui esta arrando el 80pq ya tiene variable del PORT 
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);

});
// --app.listen(port) //3,  con 80 tienen el defautl 80 es por eso que solo ocupamos poner en el navegador solo localhost y si pones el 3000 es localhost:3000
//lineas minimas para arrancar el servidor 1, 2 ,3



