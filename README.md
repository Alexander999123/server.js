# Server.js 
*url: http://localhost:3000

# Methods get:
*1) GetAllFilms: http://localhost:3000/films - return all information for films

# Methods post: 
*1) AddFilm: 
		URL: http://localhost:3000/films/add
		body: Movie 
*2) EditFilm:
		 URL: http://localhost:3000/films/edit
		 body: {"id":"", options:{}}
*3) DeleteFilm:
		 URL: http://localhost:3000/films/delete
		 body: {"id"}
*4) GetByOptions
		 URL: http://localhost:3000/films/getByOptions
		 body: {"options":{"Genred":""/[], "Actors":""/[]}}

# Models and methods 
	*1) Movie: 
		*Methods: -
		
	*2) MovieList 
		*Methods:	
			setMovieList(movies)
			addMovie(movie/movieArray)
			findMovie(index)
			edit(index, otions)
			deleteMovie(index)
