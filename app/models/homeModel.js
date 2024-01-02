module.exports = {
    getFotos: (dbConnection, callback) => {
        console.log('[Model da Home]');
        const sql = 'select * from fotos'
        dbConnection.query(sql, callback);
    },
    addFotos:(foto, dbConnection, callback) => {
        console.log('[Model da Home]');
        const sql = `insert into fotos (nome, artista, urlfoto) VALUES ("${foto.nome}", "${foto.artista}", "${foto.urlfoto}");`;
        dbConnection.query(sql, callback);
    },
    autentica: (user, dbConnection, callback) => {

        console.log('[Model da Home]');
        console.log(user);
        const sql = `select * from users where nome="${user.nome}" and password="${user.password}";`;
        dbConnection.query(sql, callback);
    },
}
    


