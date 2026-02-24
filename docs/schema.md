### collection "movies"

| **Field**      | **Type**   | **Description**                                                      | **Example**                          |
|:---------------|:-----------|:---------------------------------------------------------------------|:-------------------------------------|
| `title`        | **string** | Contains movie title                                                 | `"Gladiator"`                        |
| `releaseDate`  | **Date**   | Movie relase date                                                    | `"2009-12-18T00:00:00Z"`             |
| `genres`       | **array**  | List with movie genres                                               | `["Sci-fi", "Action"]`               |
| `director`     | **string** | Name of film's director                                              | `"Christopher Nolan"`                |
| `actors`       | **array**  | List of actors who played in film                                    | `["Christian Bale", "Heath Ledger"]` |
| `reviewScore`  | **int**    | Movie review scrore                                                  | `10`                                 |
| `premiumMovie` | **bool**   | Information if movie is premium (true - premium, false - nonpremium) | `"false"`                            |
| `viewCount`    | **int**    | Movies' views count number                                           | `"1106"`                             |




### collection "reviews"

| **Field**       | **Type**     | **Description**                                          | **Example**                            |
|:----------------|:-------------|:---------------------------------------------------------|:---------------------------------------|
| `movieId`       | **ObjectId** | Reference to movie (`_id` from movies collection)        | `ObjectId("65f1c2a4e8b4a21f9c123456")` |
| `reviewScore`   | **int**      | Score given by the reviewer                              | `9`                                    |
| `description`   | **string**   | Review content / description of the movie                | `"Good film (and Soup)"`               |
| `reviewerName`  | **string**   | Name of the review author                                | `"Roger Ebert"`                        |

