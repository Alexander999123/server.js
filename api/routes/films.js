const MovieList = require('../../models/movie');
const express = require('express');
const films = express.Router();
const dataFilms = require('../../resources/InfoFilms.json');

films.get('/', (req, res, next)=>{       
    let movieList = new MovieList();
    movieList.setMovieList(dataFilms);
    //let oneFilm = movieList.findMovie("HO00000199")

    res.set("Access-Control-Allow-Origin", "*");
     res.status(200).json(movieList);
    // res.status(200).json(movieList);
});

module.exports = films;

// console.log("set:", movieList);

// movieList.deleteMovi("HO00000199");
// console.log("delete:", movieList);

// movieList.addMovie(value[0]);
// console.log("one item add:", movieList);

// movieList.addMovie(value);
// console.log("array add:", movieList);

// movieList.edit("HO00000205", {ID:"666", Title: "Hello world"});
// console.log("Edit item:", movieList);
