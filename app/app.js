const express = require('express');
const app = express();
const port = 3000;
const path = require('path');




const indexRouter = require('./routes/routesPokenea');
console.log("Hola, mundo!"); // Imprime "Hola, mundo!" en la consola



app.use('/', indexRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

    function configureApp(app) {
        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, 'views'));
    }
    
    configureApp(app);
    
});
