const express = require('express');
const fs = require('fs');
const json = require('./users.json');
const server = express();
server.use(express.json());
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const passwordRegex = /^(?=(?:.*[A-Z]){2,})(?=.*\d).{8,}$/;
const zipcodeRegex = /^[A-Z]\d{4}[A-Z]{3}$/;
const dataTemplate = {
    "id": null,
    "username": null,
    "name": null,
    "email": null,
    "password": null,
    "favorites": [],
    "sitepref": {
        "darkmode": "false",
        "isrecievingNotifications":"false"
    },
    "address": {"street": null, "zipcode": null, "city": null, "state": null},
    "invoiceaddress": {"street": null, "zipcode": null, "city": null, "state": null},
    "telephone": null
}

server.post('/api/auth/login', (req, res) => {
    const {user, password} = req.body;
    const isLogged = json.users.find(userDB => ( userDB.username === user || userDB.email === user ) && userDB.password === password);

    if(!isLogged) {
        console.log("error usuario inválido o clave incorrecta línea 31")
        return res.sendStatus(401);
    }
    return res.status(200).json(isLogged)
});
server.post('/api/auth/register', (req, res)=>{
    const {username, name, email, password} = req.body;    
    
    if(username && name && email && password) {
        const users = json.users;
        dataTemplate.username = username;
        dataTemplate.name = name;
        
        //todo check if username, name, and email exist
        const isUserCreated = users.find(user => user.username === username && user.email === email );
        console.log(isUserCreated)
        
        if(!isUserCreated) {
            //check if email is wellformed
            if(!emailRegex.test(email)) {
                console.log("issues line 50, email does not match the criteria");
                return res.sendStatus(400);
            } 
            dataTemplate.email = email;              
            
            //check if password matches the requeriment of 2 capital letters, minimum 8 characters, and at least one number
            if(!passwordRegex.test(password)) {
                console.log("issues line 57, password does not match the criteria");
                return res.sendStatus(400);
            }
            dataTemplate.password = password;            
            
            const lastId = Math.max(...users.map(user => user.id))+1;
            dataTemplate.id = lastId.toString();
            json.users.push(dataTemplate);
            fs.writeFile("./users.json", JSON.stringify(json, null, 2), "utf8", (err)=>{
                if (err) throw err;
                console.log('The file has been saved!');
            });
            res.status(201).json(dataTemplate); // 201 = created
        } else {
            console.log("line 48, user already created");
            return res.sendStatus(400);
        }
    } else {
        console.log("line 39, one of the required data is empty or null")
        return res.sendStatus(400);
    }
    
});

// server.put("/api/auth/users/:id")

server.put('/api/auth/user/:id', (req, res) => {
    const userId = req.params.id;
    let idx;
    const userToModify = json.users.find((user, index) => {
       idx = index;
       return  user.id === userId
    });
    const {username, password, email, sitepref, address, invoiceaddress, telephone} = req.body;

    if(!userToModify) return res.sendStatus(400);
    if(username) {
        //check if username exists
        const isUserNamedCreated = json.users.find(user => user.username === username);
        if(!isUserNamedCreated) {
            userToModify.username = username;
        }
    }
    if(password) {
        //check if the password matches
        if(!passwordRegex.test(password)) {
            console.log("issues line 101, password does not match the criteria");
            return res.sendStatus(400);
        }
        userToModify.password = password;
    }
    if(email) {
        //check if email is well formed
        if(!emailRegex.test(email)) {
            console.log("issue with email format line 109")
            return res.sendStatus(400);
        }
        userToModify.email = email;
    }
    if(sitepref && sitepref.darkmode && sitepref.isrecievingNotifications) {
        userToModify.sitepref = sitepref;
    } else {
        console.log('bad object sending for sitepref line 117')
        return res.sendStatus(400)
    }
    if(address) {
        console.log(address)
        //check if street is not empty
        if(!address.street) {
            console.log("issue with address street line 124");
            return res.sendStatus(400);
        }
        //check if it is a valid zipcode
        if(address.zipcode && !zipcodeRegex.test(address.zipcode)) {
            console.log("issue with zip code line 128");
            return res.sendStatus(400)
        }
        if(!address.city) {
             console.log("issue with city line 133");
            return res.sendStatus(400)
        }
        userToModify.address = address;
    }
    if(invoiceaddress) {
        //check if it is a valid zipcode
        if(!zipcodeRegex.test(zipcode)) {
            console.log("issue with zip code line 122");
            return res.sendStatus(400)
        }
    }
    //save changes
    json.users[idx] = userToModify;
    fs.writeFile("./users.json", JSON.stringify(json, null, 2), "utf8", (err)=>{
        if (err) throw err;
        console.log('The file has been saved!');
    });
    return res.sendStatus(200);
});

server.listen(7575, ()=>{console.log('Server Working at 7575')})