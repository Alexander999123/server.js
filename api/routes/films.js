const express = require('express');
const films = express.Router();
const fs = require('fs');

//Вынисти в отдельный js файл
function Movie (options){
    this.ID = options.ID;
    this.Title = options.Title;
    this.Description = options.Synopsis;
    this.RunTime = options.RunTime;
    this.OpeningDate = options.OpeningDate;
    this.TitleAlt = options.TitleAlt;
    this.GenreId = options.GenreId;
    this.Actors = [];
    this.RatingCount =  options.CustomerRatingTrailerStatistics.RatingCount;
}

function MovieList (){
    this.list = [];
}

MovieList.prototype.setMovieList = function (listMove) {
    for (let index = 0; index < listMove.length; index++) {
        this.list.push(new Movie(listMove[index]));
    }
}

MovieList.prototype.addMovie = function (movie){
    if(movie instanceof Array){
        this.setMovieList(movie)
        return;
    }
    this.list.push(new Movie(movie));
}

MovieList.prototype.findMovie = function (index) {
    return this.list.find(x=>x.ID === index);
}

MovieList.prototype.deleteMovi = function (index) {
   let indexDel = this.list.findIndex(x=>x.ID === index);
   if(indexDel !== -1){
        this.list.splice(indexDel,1);
   }
}

MovieList.prototype.edit = function (index, options) {
    let item = this.findMovie(index);
    for(var key in options){
        item[key] = options[key];
    }
}
//Вынисти в отдельный js файл


var value = [
    {
        "ID": "HO00000199",
        "ShortCode": "",
        "Title": "ІЗОЛЯЦІЯ ",
        "Rating": "16+",
        "RatingDescription": "",
        "Synopsis": "Лінда опиняється на відлюдному острові разом з убивцею. Вона змушена зробити розтин тіла, щоб знайти підказку для порятунку доньки коронера Герцфілда.",
        "ShortSynopsis": "",
        "HOFilmCode": "F000000244",
        "CorporateFilmId": "",
        "RunTime": 90,
        "OpeningDate": "2019-08-22T00:00:00",
        "GraphicUrl": "",
        "FilmNameUrl": "2018",
        "TrailerUrl": "",
        "AdditionalUrls": [],
        "IsComingSoon": true,
        "IsScheduledAtCinema": false,
        "TitleAlt": "Abgeschnitten ",
        "RatingAlt": "",
        "RatingDescriptionAlt": "",
        "SynopsisAlt": "Німеччина",
        "ShortSynopsisAlt": "Ziegler Film GmbH & Co. KG; Syrreal Entertainment GmbH",
        "WebsiteUrl": "",
        "GenreId": "0000000008",
        "EDICode": null,
        "TwitterTag": "українська",
        "TitleTranslations": [],
        "SynopsisTranslations": [],
        "ShortSynopsisTranslations": [],
        "RatingDescriptionTranslations": [],
        "CustomerRatingStatistics": {
            "RatingCount": 0,
            "AverageScore": null
        },
        "CustomerRatingTrailerStatistics": {
            "RatingCount": 0,
            "RatingCountLiked": 0
        },
        "FilmWebId": ""
    },
    {
        "ID": "HO00000205",
        "ShortCode": "",
        "Title": "ФОРСАЖ: ГОББС ТА ШОУ",
        "Rating": "12+",
        "RatingDescription": "",
        "Synopsis": "Закляті супротивники спецагент Гоббс і злочинець Шоу живуть за полярними принципами і ніколи не будуть довіряти один одному. Та у спін-офф культової франшизи «Форсаж» вони змушені об’єднатися, щоб захистити світ від нищівної біологічної атаки.",
        "ShortSynopsis": "http://bhfilms.com.ua/#tabr1nrS8T",
        "HOFilmCode": "F000000250",
        "CorporateFilmId": "",
        "RunTime": 140,
        "OpeningDate": "2019-08-01T00:00:00",
        "GraphicUrl": "",
        "FilmNameUrl": "2019",
        "TrailerUrl": "https://youtu.be/-qLiSKzkzcc",
        "AdditionalUrls": [],
        "IsComingSoon": true,
        "IsScheduledAtCinema": false,
        "TitleAlt": "Fast & Furious presents: Hobbs & Shaw",
        "RatingAlt": "",
        "RatingDescriptionAlt": "",
        "SynopsisAlt": "США",
        "ShortSynopsisAlt": "Universal Pictures",
        "WebsiteUrl": "",
        "GenreId": "0000000019",
        "EDICode": null,
        "TwitterTag": "українська",
        "TitleTranslations": [],
        "SynopsisTranslations": [],
        "ShortSynopsisTranslations": [],
        "RatingDescriptionTranslations": [],
        "CustomerRatingStatistics": {
            "RatingCount": 0,
            "AverageScore": null
        },
        "CustomerRatingTrailerStatistics": {
            "RatingCount": 0,
            "RatingCountLiked": 0
        },
        "FilmWebId": ""
    }
]



films.get('/', (req, res, next)=>{
    fs.readFile('../../resources/InfoFilms.json', (err, res)=>{
        console.log(res);
    })
    console.log(contents)
  
    res.status(200).json(value)
})

module.exports = films;


// let movieList = new MovieList();
// movieList.setMovieList(value);

// console.log("set:", movieList);

// movieList.deleteMovi("HO00000199");
// console.log("delete:", movieList);

// movieList.addMovie(value[0]);
// console.log("one item add:", movieList);

// movieList.addMovie(value);
// console.log("array add:", movieList);

// movieList.edit("HO00000205", {ID:"666", Title: "Hello world"});
// console.log("Edit item:", movieList);
