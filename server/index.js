const express = require('express');
const fs = require('fs');
const json = require('./users.json');
const server = express();
server.use(express.json());

server.post('/api/auth/login', (req, res) => {
    const {user, password} = req.body;
    const isLogged = json.users.find(userDB => ( userDB.username === user || userDB.email === user ) && userDB.password === password);

    if(!isLogged) {
        console.log("error usuario inválido o clave incorrecta línea 11")
        return res.sendStatus(401);
    }
    console.log(user);
    console.log(password);
    console.log(isLogged)
    return res.status(200).json(isLogged)
});

server.listen(7575, ()=>{console.log('Server Working at 7575')})