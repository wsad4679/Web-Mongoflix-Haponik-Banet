### collection "movies"
```
title - string
releaseDate - Date
genres - array
director - string
actors - array
reviewScore - int
premiumMovie - bool
viewCount - int
```

### collection "reviews"
```
movies.title (reference to title field in movies collection) - string
reviewScore - int
description - string
reviewerName - string (tutaj musi być unique index żeby każdy użytkownik mógł wstawić tylko jedną recenzję)
```
