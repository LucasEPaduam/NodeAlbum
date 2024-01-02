const app = require (`./config/server`);
const routes = require ('./app/routes/routes');

routes.home(app);

routes.login(app);
routes.autenticar(app);


    routes.insertingFoto(app);
    routes.salvarFoto(app);
