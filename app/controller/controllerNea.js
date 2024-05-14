const pokeneas = require('../Data/pokeData');
const os = require("os");

const JSON = (res) => {

    const indiceAleatorio = Math.floor(Math.random() * pokeneas.length)
    const pokeneaAleatorio = pokeneas[indiceAleatorio];
    console.log(indiceAleatorio); 
    console.log(pokeneaAleatorio); 

  
    const responseData = { pokenea: pokeneaAleatorio, hostname: os.hostname() };

   
    res.json(responseData);
    
};

const show = (res) => {

    const indiceAleatorio = Math.floor(Math.random() * pokeneas.length)
    const pokeneaAleatorio = pokeneas[indiceAleatorio];
    res.render('toSee', {pokenea: pokeneaAleatorio, hostname: os.hostname()});
    
};

module.exports = { JSON, show, os };