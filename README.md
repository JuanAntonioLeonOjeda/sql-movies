# SQL-Movies API

### Auth Endpoints

| METHOD | ENDPOINT      | TOKEN | ROLE     | DESCRIPTION           | POST PARAMS                                                 | RETURNS        |
| ------ | ------------- | ----- | -------- | --------------------- | ----------------------------------------------------------- | -------------- |
| POST   | /auth/signup  | -     | -        | User Sign Up          | fullName, email, password                                   | email, token   |
| POST   | /auth/login   | -     | -        | User Login            | email, password                                             | email, token   |

### Users Endpoints

| METHOD | ENDPOINT                 | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------ | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /user                    | YES   | Admin | Get all users                | -                          | [{ users }]                          |
| GET    | /user/:userId            | YES   | Admin | Get one user                 | user_id                    | { user }                             |
| GET    | /user/me/favourite       | YES   | -     | Get own favourite movies     | -                          | [{ movie }]                          |
| PUT    | /user/:userId            | YES   | Admin | Update one user              | user_id, body              | { user }                             |
| PUT    | /user/me/favourite       | YES   | -     | Add favourite movie          | -                          | "Movie added" {movie}}               |
| DELETE | /user/:userId            | YES   | Admin | Remove user profile          | user_id                    | "Profile deleted"                    |

### Movies Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE                        | DESCRIPTION                       | POST PARAMS| RETURNS                      |
| ------ | ------------------ | ----- | --------------------------- | --------------------------------- | ---------- | ---------------------------- |
| GET    | /movie             | YES   | -                           | Get all movies                    | query      | [{ movies }]                 |
| GET    | /movie/:id         | YES   | -                           | Get one movie                     |            | { movie }                    |
| POST   | /movie             | YES   | Admin                       | Create one movie                  |            | { movie }                    |
| PUT    | /movie/:id         | YES   | Admin                       | Update one movie                  | req.body   | "movie updated", { movie }   |
| PUT    | /movie/:id/awards  | YES   | Admin                       | Assign awards to movie            | award_id   | "Awards assigned", { movie } |
| DELETE | /movie/:id         | YES   | Admin                       | Remove one movie                  |            | "movie deleted"              |

### Actors Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE                        | DESCRIPTION                       | POST PARAMS| RETURNS                    |
| ------ | ------------------ | ----- | --------------------------- | --------------------------------- | ---------- | -------------------------- |
| GET    | /actor             | YES   | -                           | Get all actors                    | query      | [{ actors }]               |
| GET    | /actor/:id         | YES   | -                           | Get one actor                     |            | { actor }                  |
| POST   | /actor             | YES   | Admin                       | Create one actor                  |            | { actor }                  |
| PUT    | /actor/:id         | YES   | Admin                       | Update one actor                  | body       | "actor updated", { actor } |
| PUT    | /actor/:id/movie   | YES   | Admin                       | Add movie to actor                | movie_id   | "movie added"              |
| DELETE | /actor/:id         | YES   | Admin                       | Remove one actor                  |            | "actor deleted"            |

### Directors Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE                        | DESCRIPTION                       | POST PARAMS| RETURNS                          |
| ------ | ------------------ | ----- | --------------------------- | --------------------------------- | ---------- | -------------------------------- |
| GET    | /director          | YES   | -                           | Get all directors                 | query      | [{ directors }]                  |
| GET    | /director/:id      | YES   | -                           | Get one director                  |            | { director }                     |
| POST   | /director          | YES   | Admin                       | Create one director               |            | { director }                     |
| PUT    | /director/:id      | YES   | Admin                       | Update one director               | body       | "director updated", { director } |
| DELETE | /director/:id      | YES   | Admin                       | Remove one director               |            | "director deleted"               |

### Genres Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE                        | DESCRIPTION                       | POST PARAMS| RETURNS                    |
| ------ | ------------------ | ----- | --------------------------- | --------------------------------- | ---------- | -------------------------- |
| GET    | /genre             | YES   | Admin                       | Get all genres                    | query      | [{ genres }]               |
| GET    | /genre/:id         | YES   | Admin                       | Get one genre                     |            | { genre }                  |
| POST   | /genre             | YES   | Admin                       | Create one genre                  |            | { genre }                  |
| PUT    | /genre/:id         | YES   | Admin                       | Update one genre                  | body       | "genre updated", { genre } |
| DELETE | /genre/:id         | YES   | Admin                       | Remove one genre                  |            | "genre deleted"            |

### Awards Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE                        | DESCRIPTION                       | POST PARAMS| RETURNS                    |
| ------ | ------------------ | ----- | --------------------------- | --------------------------------- | ---------- | -------------------------- |
| GET    | /award             | YES   | Admin                       | Get all awards                    | query      | [{ awards }]               |
| GET    | /award/:id         | YES   | Admin                       | Get one award                     |            | { award }                  |
| POST   | /award             | YES   | Admin                       | Create one award                  |            | { award }                  |
| PUT    | /award/:id         | YES   | Admin                       | Update one award                  | body       | "award updated", { award } |
| DELETE | /award/:id         | YES   | Admin                       | Remove one award                  |            | "award deleted"            |

### Ratings Endpoints

| METHOD | ENDPOINT            | TOKEN | ROLE                        | DESCRIPTION                        | POST PARAMS| RETURNS                    |
| ------ | ------------------- | ----- | --------------------------- | ---------------------------------- | ---------- | -------------------------- |
| GET    | /rating             | YES   | Admin                       | Get all ratings                    | query      | [{ ratings }]               |
| GET    | /rating/me          | YES   | -                           | Get profile ratings                |            | [{ ratings }]               |
| GET    | /rating/:id         | YES   | Admin                       | Get one rating                     |            | { rating }                  |
| POST   | /rating/me/:id      | YES   |                             | Create one rating                  |            | { rating }                  |
| PUT    | /rating/:id         | YES   | Admin                       | Update one rating                  | body       | "rating updated", { rating } |
| DELETE | /rating/:id         | YES   | Admin                       | Remove one rating                  |            | "rating deleted"            |