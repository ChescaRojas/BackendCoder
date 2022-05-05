const express = require('express')
const app = express();
const Usuario = './entregas/primeraEntrega'; 
const libros = [{nombre: 'The notebook', autor: 'Nicholas Sparks'}, {nombre: 'After', autor: 'Anna Todd'}]
const mascotas = ['gato', 'perro']

//definimos un puerto para HTTP
const time = 3000;

app.get('/', (req, res) => {
    const usuarioUno = new Usuario('Juan', 'Rojas', libros, mascotas)
    usuarioUno.addBook('Metamorfosis',' Franz Kafka')
    usuarioUno.addPet('Loro')
    res.send(usuarioUno.getFullName());
    //, usuarioUno.countPets(), usuarioUno.getBookNames()
});

//Comienza a escuchar el puerto definido 3000
app.listen(time, ()=>{
    console.log('Listen on the time 3000');
});