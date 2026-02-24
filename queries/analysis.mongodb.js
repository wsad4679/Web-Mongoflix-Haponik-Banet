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

