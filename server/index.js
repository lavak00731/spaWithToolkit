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
    return res.status(200).json(isLogged)
});
server.post('/api/auth/register', (req, res)=>{
    const {username, name, email, password} = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=(?:.*[A-Z]){2,})(?=.*\d).{8,}$/;
    const dataTemplate = {
            "id": null,
            "username": null,
            "name": null,
            "email": null,
            "password": null,
            "favorites": [],
            "sitepref": {},
            "address": null,
            "invoiceaddress": null,
            "zipcode": null,
            "telephone": null
        }
    if(username && name && email && password) {
        const users = json.users;
        dataTemplate.username = username;
        dataTemplate.name = name;
        
        //todo check if username and name exist
        
        //check if email is wellformed
        if(emailRegex.test(email)) {
            dataTemplate.email = email;
            console.log("issues line 40, email does not match the criteria");
            return res.sendStatus(400)
        }
        //check if password matches the requeriment of 2 capital letters, minimum 8 characters, and at least one number
        if(passwordRegex.test(password)) {
            dataTemplate.password = password;
            console.log("issues line 45, password does not match the criteria");
            return res.sendStatus(400);
        }
        const lastId = Math.max(...json.users.map(user => user.id));
        dataTemplate.id = lastId;

    } else {
        console.log("line 45, one of the required data is empty or null")
        return res.sendStatus(400);
    }
    
})

server.listen(7575, ()=>{console.log('Server Working at 7575')})