db = db.getSiblingDB('mongoflix');

print('--- Raport bazy mongoflix ---');

printjson(
    '--- Filmy akcji wydane po roku 2000 ---\n',
    db.movies.aggregate([
        {
            $match:
                {
                    genres: {
                        $in: ["Action"]
                    },
                    releaseDate: {
                        $gte: "2000"
                    }
                }
        },
        {
            $project: {
                title: 1, _id:0, genres: 1, releaseDate: 1
            }
        }
    ])
)



printjson(
    "--- Ocena krytyków oraz średnia ocen użytkowników ---\n",

    db.movies.aggregate(
        [
            {
                $lookup:
                /**
                 * from: The target collection.
                 * localField: The local join field.
                 * foreignField: The target join field.
                 * as: The name for the results.
                 * pipeline: Optional pipeline to run on the foreign collection.
                 * let: Optional variables to use in the pipeline field stages.
                 */
                    {
                        from: "reviews",
                        localField: "_id",
                        foreignField: "movieId",
                        as: "userReviews"
                    }
            },
            {
                $unwind:
                /**
                 * path: Path to the array field.
                 * includeArrayIndex: Optional name for index.
                 * preserveNullAndEmptyArrays: Optional
                 *   toggle to unwind null and empty values.
                 */
                    {
                        path: "$userReviews"
                    }
            },
            {
                $group:
                /**
                 * _id: The id of the group.
                 * fieldN: The first field name.
                 */
                    {
                        _id: "$title",
                        criticsRating: {
                            $first: "$reviewScore"
                        },
                        avgUserRating: {
                            $avg: "$userReviews.reviewScore"
                        }
                    }
            }
        ])

)


printjson(
    "--- Łączne wyświetlenia zdobyte przez filmy danych reżyserów ---\n",
    db.movies.aggregate([
        {
            $group:
            /**
             * _id: The id of the group.
             * fieldN: The first field name.
             */
                {
                    _id: "$director",
                    directorFilmViews: {
                        $sum: "$viewCount"
                    }
                }
        }
    ])
)


printjson(
    "--- Wyświetlenie filmów z największą liczbą wyświetleń dla filmu premium oraz nonpremium ---\n",
    db.movies.aggregate([
        {
            $sort:
            /**
             * Provide any number of field/order pairs.
             */
                {
                    viewCount: -1
                }
        },
        {
            $group:
            /**
             * _id: The id of the group.
             * fieldN: The first field name.
             */
                {
                    _id: "$premiumMovie",
                    title: {
                        $first: "$title"
                    },
                    viewCount: {
                        $first: "$viewCount"
                    }
                }
        },
        {
            $project:
            /**
             * specifications: The fields to
             *   include or exclude.
             */
                {
                    _id: 0,
                    premiumMovie: "$_id",
                    title: 1,
                    viewCount: 1
                }
        }
    ])
)
