const express = require('express')
//const app = express()

const dbinfo = express.Router




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://test:zJV677n054vFgkLq@cluster0.z8s6sao.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports=dbinfo