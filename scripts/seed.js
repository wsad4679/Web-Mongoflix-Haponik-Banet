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


const reviewsData = require('fs').readFileSync("../data/reviews.json");//get json with reviews
const reviewsList = JSON.parse(reviewsData);


db.reviews.insertMany(reviewsList);





console.log("Seeding for database Mongoflix completed!");
