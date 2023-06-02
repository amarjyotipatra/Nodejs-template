const express = require('express');

const app = express();

const { ServerConfig } = require('../src/config');

app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
