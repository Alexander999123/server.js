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
    if(listMove instanceof Array){
        for (let index = 0; index < listMove.length; index++) {
            this.list.push(new Movie(listMove[index]));
        }
    }
    else throw new Error("Is not array");
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

module.exports = MovieList;