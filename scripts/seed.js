db = db.getSiblingDB("mongoflix");

db.movies.drop();
db.reviews.drop();

console.log("Start seeding for database Mongoflix...");

db.movies.insertMany([
    {
        title: "The Godfather",
        releaseDate: "1972-03-24T00:00:00Z",
        genres: ["Crime", "Drama"],
        director: "Francis Ford Coppola",
        actors: ["Marlon Brando", "Al Pacino"],
        reviewScore: 10,
        premiumMovie: true,
        viewCount: 12000
    },
    {
        title: "Inception",
        releaseDate: "2010-07-16T00:00:00Z",
        genres: ["Sci-Fi", "Thriller"],
        director: "Christopher Nolan",
        actors: ["Leonardo DiCaprio"],
        reviewScore: 9,
        premiumMovie: true,
        viewCount: 15000
    },
    {
        title: "The Dark Knight",
        releaseDate: "2008-07-18T00:00:00Z",
        genres: ["Action", "Crime"],
        director: "Christopher Nolan",
        actors: ["Christian Bale", "Heath Ledger"],
        reviewScore: 10,
        premiumMovie: true,
        viewCount: 20000
    },
    {
        title: "Pulp Fiction",
        releaseDate: "1994-10-14T00:00:00Z",
        genres: ["Crime", "Drama"],
        director: "Quentin Tarantino",
        actors: ["John Travolta", "Samuel L. Jackson"],
        reviewScore: 9,
        premiumMovie: false,
        viewCount: 11000
    },
    {
        title: "The Shawshank Redemption",
        releaseDate: "1994-10-14T00:00:00Z",
        genres: ["Drama"],
        director: "Frank Darabont",
        actors: ["Tim Robbins", "Morgan Freeman"],
        reviewScore: 10,
        premiumMovie: false,
        viewCount: 18000
    },
    {
        title: "Forrest Gump",
        releaseDate: "1994-07-06T00:00:00Z",
        genres: ["Drama", "Romance"],
        director: "Robert Zemeckis",
        actors: ["Tom Hanks"],
        reviewScore: 9,
        premiumMovie: false,
        viewCount: 14000
    },
    {
        title: "The Matrix",
        releaseDate: "1999-03-31T00:00:00Z",
        genres: ["Sci-Fi", "Action"],
        director: "Lana Wachowski and Lilly Wachowski",
        actors: ["Keanu Reeves"],
        reviewScore: 10,
        premiumMovie: true,
        viewCount: 16000
    },
    {
        title: "Titanic",
        releaseDate: "1997-12-19T00:00:00Z",
        genres: ["Drama", "Romance"],
        director: "James Cameron",
        actors: ["Leonardo DiCaprio", "Kate Winslet"],
        reviewScore: 9,
        premiumMovie: true,
        viewCount: 17000
    },
    {
        title: "Gladiator",
        releaseDate: "2000-05-05T00:00:00Z",
        genres: ["Action", "Drama"],
        director: "Ridley Scott",
        actors: ["Russell Crowe"],
        reviewScore: 9,
        premiumMovie: false,
        viewCount: 13000
    },
    {
        title: "Avatar",
        releaseDate: "2009-12-18T00:00:00Z",
        genres: ["Sci-Fi", "Adventure"],
        director: "James Cameron",
        actors: ["Sam Worthington"],
        reviewScore: 8,
        premiumMovie: true,
        viewCount: 19000
    }
]);

// przypisanie id do nazwy filmu aby można było użyć lookup
const moviesMap = {};
db.movies.find().forEach(movie => {
    moviesMap[movie.title] = movie._id;
});

db.reviews.insertMany([
    {
        movieId: moviesMap["The Godfather"],
        reviewScore: 10,
        description: "A masterpiece of crime cinema with impeccable performances and storytelling.",
        reviewerName: "Roger Ebert"
    },
    {
        movieId: moviesMap["Inception"],
        reviewScore: 9,
        description: "A mind-bending exploration of dreams with stunning visuals and depth.",
        reviewerName: "Peter Travers"
    },
    {
        movieId: moviesMap["The Dark Knight"],
        reviewScore: 10,
        description: "A dark, thrilling superhero epic anchored by an unforgettable villain.",
        reviewerName: "Richard Roeper"
    },
    {
        movieId: moviesMap["Pulp Fiction"],
        reviewScore: 9,
        description: "Nonlinear storytelling and sharp dialogue make this a modern classic.",
        reviewerName: "A.O. Scott"
    },
    {
        movieId: moviesMap["The Shawshank Redemption"],
        reviewScore: 10,
        description: "A powerful tale of hope and friendship that resonates deeply.",
        reviewerName: "Leonard Maltin"
    },
    {
        movieId: moviesMap["Forrest Gump"],
        reviewScore: 9,
        description: "A heartwarming journey through history seen through simple wisdom.",
        reviewerName: "Kenneth Turan"
    },
    {
        movieId: moviesMap["The Matrix"],
        reviewScore: 10,
        description: "Revolutionary sci-fi that redefined action and philosophical questions.",
        reviewerName: "James Berardinelli"
    },
    {
        movieId: moviesMap["Titanic"],
        reviewScore: 9,
        description: "A sweeping romance set against a historical tragedy with grand visuals.",
        reviewerName: "Claudia Puig"
    },
    {
        movieId: moviesMap["Gladiator"],
        reviewScore: 9,
        description: "A rousing epic of revenge and honor in ancient Rome.",
        reviewerName: "Mick LaSalle"
    },
    {
        movieId: moviesMap["Avatar"],
        reviewScore: 8,
        description: "A visually stunning sci-fi adventure with environmental themes.",
        reviewerName: "Owen Gleiberman"
    }
]);


console.log("Seeding for database Mongoflix completed!");
