function saludar(){
    console.log("Hola");
}
saludar();

function saludar2(nombre="anónimo"){
    console.log("Holi "+nombre);
}
saludar2("Juan Cruz");

function saludar3(nombre="anónimo"){
   var s="Holi "+nombre; //no mandamos ningun console log 
   return s;
}
 console.log(saludar3("Dani Torre"));

 //funcion de flecha se ejecuta en ese momento 
 // es una accion por eso siempre se llama un vervo "saludar"
 var saludo=(nombre)=>{
    console.log("Hi "+nombre);
 }
 saludo("Moy"); //tengo que mandar llamar mi variable 

 var saludo2=nombre=>{ //si solo estamos recibiendo un parametro no se necesitan los parentesis es decir una sola variable
    console.log("Hello "+nombre);
 }
 saludo2("Ornitorrinco");

 //cuando es una funcion de flecha y no  hay variables si se necesitan parentesis 

 var saludo3=nombre=>{
   var s="Holaa "+nombre; 
   return s;
 }
console.log(saludo3("Marta"));



var saludo4=nombre=> "Holai "+nombre; //si no vuelvo a ocupar la variable no cesitamos la variable solo el return o si no de esta forma
 console.log(saludo4("Neto"));

var saludo5=function(){
    console.log("Holanda");
} //es una funcion anonima pq no tiene nombre
saludo5();

var saludo6=()=>{
    console.log("Saludo6");
};

var saludo7=(nombre, s)=>{
    console.log("Nichigan "+nombre);
    s();
};

saludo7("Quetzacoalt", saludo6);