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
app.get('/segunda', (req, res) => {
    const file = new Container("Archivo");
    const allCalls = async () => {
      const callOne = await file.save({title: 'titulo', price: 123, thumbnail: 'url de foto'})
      const callTwo = await file.getById(2)
      const callThree = await file.getAll()
      await file.deleteById(4)
      //await file.deleteAll()
      res.send(`callOne: ${callOne} 
        callTwo: {${callTwo?.id}, ${callTwo?.title}, ${callTwo?.price} ${callTwo?.thumbnail}}
        callThree: [${callThree.map(obj => {return `{${obj['id']} ${obj['title']} ${obj['price']} ${obj['thumbnail']}}`} )}]`)
    }
    allCalls()
  });

  app.get('/productos', (req, res) => {
    const file = new Container("Archivo");
    const allCalls = async () => {
      const products = await file.getAll()
      res.send(`[${products.map(obj => {return `{${obj['id']} ${obj['title']} ${obj['price']} ${obj['thumbnail']}}`} )}]`)
    }
    allCalls()
  });
  
  app.get('/productosRandom', (req, res) => {
    const file = new Container("Archivo");
    const allCalls = async () => {
      const random = await file.getRandom()
      res.send(`random: {${random?.id}, ${random?.title}, ${random?.price} ${random?.thumbnail}}`)
    }
    allCalls()
  });
//Comienza a escuchar el puerto definido 3000
app.listen(time, ()=>{
    console.log('Listen on the time 3000');
});