const dbConnection = require('../../config/dbConnection')
const { getFotos ,addFotos, autentica } = require('../models/homeModel');


module.exports.home = (app, req, res) => {
    console.log('Controller da Home');
    dbConn = dbConnection();
    getFotos (dbConn, (error, result) => {
        console.log(result);
        console.log(error);
        res.render('home.ejs', {fotos: result});
    });
    
}

module.exports.adicionaFotos = (app, req, res) => {
    console.log('Controller da Home - Add foto');
    const foto = req.body;
    dbConn = dbConnection();
        addFotos (foto, dbConn, (error, result) => {
            console.log(result);
            res.redirect('/');
        });
    
}

module.exports.autenticar = (app, req, res) => {
    
    const user = req.body;
    console.log('Controller da Home - Autenticar');
    console.log(user);
    dbConn = dbConnection();
        autentica (user, dbConn, (error, result) => {
            console.log(result);
            console.log(error);

            if(result.length > 0){
                req.session.user = true;
                res.redirect('/');
            }else{
                req.session.user = false;
                res.redirect('/login');
            }
        });
    
}
    


    
