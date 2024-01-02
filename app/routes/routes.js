const app = require('../../config/server');
const { home, adicionaFotos, autenticar} = require('../controllers/homeController');
const { check, validationResult } = require('express-validator');


module.exports = {
    home: (app) => {
        
        app.get('/', function (req, res) {
            console.log("User" , req.session.user)
            home(app, req, res);
        });
    },
     insertingFoto: (app) => {
        app.get('/inserirFoto', function (req, res) {
            if(req.session.user){
            res.render('inserirFoto.ejs', {errors:[], foto:{}});
            }else{
            res.redirect('/login');
            }
        });
    },
    salvarFoto: (app) => {
       app.post('/salvarFoto',
       [
        check('nome').isLength({min:5}).withMessage('Nome deve ter no minimo 5 caracteres'),
        check('artista').isLength({min:5}).withMessage('Artista deve ter no minimo 5 caracteres'),
        check('urlfoto').isURL().withMessage('URL da imagem deve conter um link'),
       ],function(req, res) {
        const validation = validationResult(req);
        if(validation.errors.length === 0){
            adicionaFotos(app, req, res) 
        } else{
            const foto = req.body;
            res.render('inserirFoto.ejs', {errors: validation.errors, foto: foto});
        }            inserirFoto
              
    });

    },
    login: (app) => {
        app.get('/login', function (req, res) {
            res.render('login.ejs', {errors:[], user:{}});
        });
    },
    autenticar: (app) => {
        app.post('/autenticar',
        [
         check('nome').isLength({min:5}).withMessage('Nome deve ter no minimo 5 caracteres'),
         check('password').isLength({min:5}).withMessage('Password deve ter no minimo 5 caracteres'),       
        ],function(req, res) {
         const validation = validationResult(req);
         if(validation.errors.length === 0){
             autenticar(app, req, res) 
         } else{
             const user = req.body;
             res.render('login.ejs', {errors: validation.errors, user: user});
         }            
               
     });
 
     },
}