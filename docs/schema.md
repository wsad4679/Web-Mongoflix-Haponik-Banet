Każdy film w naszym systemie musi być opisany konkretnie: tytuł, data kiedy to weszło do kin, no i gatunki. Tylko nie ograniczajcie nas do jednego gatunku! Jak film jest komedią i horrorem naraz, to system musi to łyknąć (array).

Co do obsady, to wiecie jak jest – ludzie kochają gwiazdy. Chcemy widzieć kto reżyserował, ale też listę wszystkich aktorów, nawet jeśli jest ich dwudziestu (array). Skoro już o ludziach mowa, to nasi widzowie muszą mieć głos. Chcemy ocen (tak od 1 do 10) i krótkich recenzji pod filmami, żeby był ruch w interesie. Tylko pilnujcie porządku – nie chcemy, żeby jedna osoba psuła ranking i waliła dziesięć opinii pod jednym filmem. Jeden widz, jeden głos, jedna recenzja. Jasne?

Zarabianie? Oczywiście. Niektóre filmy będą 'Premium' za kasę, inne 'Public' za darmo – musimy to jakoś odróżniać w bazie. I na koniec najważniejsze dla księgowości: musimy wiedzieć, ile razy dany film został odpalony. Od tego zależą tantiemy dla twórców, więc ten licznik musi działać bezbłędnie przy każdym obejrzeniu. Powodzenia!”


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
