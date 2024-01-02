let express = require("express");
let expressSession = require("express-session");

const app = express();
const port = 3000;

app.use(express.static('./public'));

app.set("view engine", "ejs");
app.set('views', './app/views');

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(expressSession({
    secret: "Lucas",
    resave: false,
    saveUninitialized: false
}));


app.listen(port, function(){
    console.log(`Servidor na porta ${port}`);
});

module.exports = app;