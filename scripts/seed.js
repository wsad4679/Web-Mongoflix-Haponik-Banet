db = db.getSiblingDB("mongoflix");

db.movies.drop();
db.reviews.drop();

console.log("Start seeding for database Mongoflix...");

const movieData = require('fs').readFileSync("../data/movies.json");//get json with movies
const moviesList = JSON.parse(movieData);

db.movies.insertMany(moviesList);


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
