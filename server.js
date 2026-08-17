javascriptconst express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
app.use(cors());
app.use(express.json());
const url"mongodb+srv://tl0479022012_ar@@22mi:@cluster0.w1dfiyb.mongodb.net/techstoreDB";
app.post('/api/login', (req,res)=>{
  const {usuario, clave} = req.body;
  if(usuario=='admin' && clave=='123') res.json({ok:true});
  else res.status(401).json({ok:false});
});

app.get('/api/productos', async (req,res)=>{
  const data = await db.collection("productos").find().toArray();
  res.json(data);
});

MongoClient.connect(url).then(c=>{
  db = c.db("techstoreDB");
  app.listen(3000, ()=>console.log("Backend en puerto 3000"));
});DATOS PARA MONGODB ATLAS - AGREGA EL CAMPO IMAGENjson{ "id":1, "nombre":"Portátil Gamer ASUS ROG", "precio":1299, "especificaciones":"Intel I7, RTX 4060, 16GB RAM, SSD 1TB", "imagen":"https://images.unsplash.com/photo-1593642632823-5adec56c8a5f?w=400" }
{ "id":2, "nombre":"PC Gamer Ryzen 5", "precio":899, "especificaciones":"Ryzen 5 5600, RX 7600, 32GB RAM", "imagen":"https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400" }
{ "id":3, "nombre":"Monitor 27 pulgadas 165Hz", "precio":220, "especificaciones":"Panel IPS 2K, 1ms, FreeSync", "imagen":"https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=400" }
{ "id":4, "nombre":"Teclado Mecánico 60%", "precio":85, "especificaciones":"Switch Red, RGB, USB-C", "imagen":"https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400" }
{ "id":5, "nombre":"Mouse Logitech G Pro", "precio":45, "especificaciones":"Inalámbrico, 25K DPI", "imagen":"https://images.unsplash.com/photo-1613141411244-0e4ac259d217?w=400" }
{ "id":6, "nombre":"Audífonos HyperX Cloud", "precio":60, "especificaciones":"Sonido 7.1 Virtual", "imagen":"https://images.unsplash.com/photo-1599669454699-248893623440?w=400" }
