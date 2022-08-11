# SQL-Movies API

### Auth Endpoints

| METHOD | ENDPOINT      | TOKEN | ROLE     | DESCRIPTION           | POST PARAMS                                                 | RETURNS |
| ------ | ------------- | ----- | -------- | --------------------- | ----------------------------------------------------------- | ------- |
| POST   | /auth/signup  | -     | -        | User Sign Up          | fullName, email, password, confirm_password                 | token   |
| POST   | /auth/login   | -     | -        | User Login            | email, password                                             | token   |

### Users Endpoints

| METHOD | ENDPOINT                  | TOKEN | ROLE  | DESCRIPTION                  | POST PARAMS                | RETURNS                              |
| ------ | ------------------------- | ----- | ----- | ---------------------------- | -------------------------- | ------------------------------------ |
| GET    | /user                    | YES   | Admin | Get all users                | -                          | [{ users }]                          |
| GET    | /user/me                 | YES   | -     | Get own profile              | user_id                    | { user }                             |
| GET    | /user/:userId            | YES   | Admin | Get one user                 | user_id                    | { user }                             |
| PUT    | /user/:userId            | YES   | Admin | Update one user              | user_id, body              | { user }                             |
| PUT    | /user/me                 | YES   | -     | Update own profile           | user_id                    | { user }                             |
| DELETE | /user/:userId            | YES   | Admin | Remove user profile          | user_id                    | "Profile deleted"                    |
| POST   | /user/me/password        | YES   | -     | Change own password          | old_password, new_password | "Password updated"                   |


### Movies Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE                        | DESCRIPTION                       | POST PARAMS| RETURNS                    |
| ------ | ------------------ | ----- | --------------------------- | --------------------------------- | ---------- | -------------------------- |
| GET    | /movie             | YES   | -                           | Get all movies                    | query      | [{ movies }]               |
| GET    | /movie/:id         | YES   | -                           | Get one movie                     | movie_id   | { movie }                  |
| POST   | /movie             | YES   | Admin                       | Create one movie                  |            | { movie }                  |
| PUT    | /movie/:id         | YES   | Admin                       | Update one movie                  | movie_id   | "movie updated", { movie } |
| DELETE | /movie/:id         | YES   | Admin                       | Remove one movie                  | movie_id   | "movie deleted"            |

### Actors Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE                        | DESCRIPTION                       | POST PARAMS| RETURNS                    |
| ------ | ------------------ | ----- | --------------------------- | --------------------------------- | ---------- | -------------------------- |
| GET    | /actor             | YES   | -                           | Get all actors                    | query      | [{ actors }]               |
| GET    | /actor/:id         | YES   | -                           | Get one actor                     | actor_id   | { actor }                  |
| POST   | /actor             | YES   | Admin                       | Create one actor                  |            | { actor }                  |
| PUT    | /actor/:id         | YES   | Admin                       | Update one actor                  | actor_id   | "actor updated", { actor } |
| DELETE | /actor/:id         | YES   | Admin                       | Remove one actor                  | actor_id   | "actor deleted"            |

### Directors Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE                        | DESCRIPTION                       | POST PARAMS| RETURNS                          |
| ------ | ------------------ | ----- | --------------------------- | --------------------------------- | ---------- | -------------------------------- |
| GET    | /director          | YES   | -                           | Get all directors                 | query      | [{ directors }]                  |
| GET    | /director/:id      | YES   | -                           | Get one director                  | director_id| { director }                     |
| POST   | /director          | YES   | Admin                       | Create one director               |            | { director }                     |
| PUT    | /director/:id      | YES   | Admin                       | Update one director               | director_id| "director updated", { director } |
| DELETE | /director/:id      | YES   | Admin                       | Remove one director               | director_id| "director deleted"               |

### Genres Endpoints

| METHOD | ENDPOINT           | TOKEN | ROLE                        | DESCRIPTION                       | POST PARAMS| RETURNS                    |
| ------ | ------------------ | ----- | --------------------------- | --------------------------------- | ---------- | -------------------------- |
| GET    | /genre             | YES   | -                           | Get all genres                    | query      | [{ genres }]               |
| GET    | /genre/:id         | YES   | -                           | Get one genre                     | genre_id   | { genre }                  |
| POST   | /genre             | YES   | Admin                       | Create one genre                  |            | { genre }                  |
| PUT    | /genre/:id         | YES   | Admin                       | Update one genre                  | genre_id   | "genre updated", { genre } |
| DELETE | /genre/:id         | YES   | Admin                       | Remove one genre                  | genre_id   | "genre deleted"            |