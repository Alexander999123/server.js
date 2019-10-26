const MovieList = require('../../models/movie');
const express = require('express');
const fs = require('fs');
const dataFilms = require('../../resources/InfoFilms.json');
var app = express();
var bodyParser = require('body-parser');
let pathToFile = "resources/InfoFilms.json"

let movieList = new MovieList();
movieList.setMovieList(dataFilms.list);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/', (req, res, next)=>{       
    res.set("Access-Control-Allow-Origin", "*");
    res.status(200).json(movieList);
});

app.post('/edit', (req, res) => {
    let ID = req.body.id;
    let options = req.body.options;
    let r = movieList.edit(ID, options)

    if(!r.result){
        res.send(r.data);
    }

    writeFile().then(data=>{
        res.set("Access-Control-Allow-Origin", "*");
        res.send(data)
    })
})

app.post('/delete', (req, res) => {
    let ID = req.body.id;
    let r = movieList.deleteMovie(ID)

    if(!r.result){
        res.send(r.data);
    }
       
    writeFile().then(data=>{
        res.set("Access-Control-Allow-Origin", "*");
        res.send(data)
    })
})

app.post('/add', (req, res) => {
    let Movie = req.body.Movie;
    movieList.addMovie(Movie);
    
    writeFile().then(data=>{
        res.set("Access-Control-Allow-Origin", "*");
        res.send(data)
    })
})

function writeFile() {
    let prom = new Promise((resolve) => {
        fs.open(pathToFile, 'w', 0644, (err, file_handle)=>{
            if(!err){
                fs.write(file_handle, JSON.stringify(movieList), null, 'utf8',(err, written)=>{
                    if(!err){
                        resolve('Successfully');
                    } else {
                        console.log('error:', err);                       
                        resolve(err);
                    }
                })
            } else {
                console.log('error:', err);
                resolve(err);
            }
        });
    })
    return prom;
}

module.exports = app;

// console.log("set:", movieList);

// movieList.deleteMovi("HO00000199");
// console.log("delete:", movieList);

// movieList.addMovie(value[0]);
// console.log("one item add:", movieList);

// movieList.addMovie(value);
// console.log("array add:", movieList);

// movieList.edit("HO00000205", {ID:"666", Title: "Hello world"});
// console.log("Edit item:", movieList);
