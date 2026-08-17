require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');

const app = express(); // <-- ESTO FALTABA
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const client = new MongoClient(MONGO_URI);

async function run() {
  try {
    await client.connect();
    console.log("✅ Conectado a MongoDB Atlas");
    
    app.listen(PORT, () => {
      console.log(Servidor corriendo en http://localhost:${PORT}); // <-- comillas invertidas
    });

  } catch (error) {
    console.error("❌ Error:", error);
  }
}

run();
---


