const validators = require("./validators/custom-validations.js");
const express = require('express');
const app = express();
var cors = require("cors");
require('google')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => validators.body(req, res, next));

app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");
});


//get all request

app.get("/api/users", (req, res) => {
    let users = repoContext
        .products
        .findAllUsers();
    res.send(users);
});


//get by id
app.get("/api/users/:id", (req, res) => {
    let id = req.params.id;
    let user = repoContext.users.findUserById(id); res.send(user);
    });


//Post request
app.post("/api/users", (req, res) => {
    let newUser = req.body;
    let addedUser = repoContext.users.createUser(newUser); res.send(addedUser);
    });

//put request 
app.put("/api/users", (req, res) => {
    let userToUpdate = req.body;
    let updatedUser = repoContext.users.updateUser(userToUpdate); res.send(updatedUser);
    });

//delete request
app.delete("/api/users/:id", (req, res) => {
    let id = req.params.id;
    let updatedDataSet = repoContext.users.deleteUser(id); res.send(updatedDataSet);
    });


