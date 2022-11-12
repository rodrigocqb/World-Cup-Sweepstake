# World Cup Sweepstake
This is an API, using Typescript and express, where you can bet on World Cup Games and see which of your friends is the best at guessing the match results

## About
This is a proof of concept so I could get comfortable building APIs with Typescript. Below are the implemented features:

- Create new users
- Create new matches
- Create new bets
- Read user bets
- Update bets
- Delete bets
- Update match results and bet statuses

## Technologies
The following tools and frameworks were used in the construction of this project:
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white'>
</p>

## How to run
1. Create a root project folder called WC-Sweepstake
```bash
mkdir WC-Sweepstake
```
2. Clone this repository
3. Install dependencies
```bash
npm i
```
4. Create .env based on .env.example
5. Run the project
```bash
npm start
```

## How to play
1. First, you have to register yourself on the /users route.
2. Second, remember to add the matches that haven't already happened to the database. You can also check all registered matches.
3. You can do that at the /matches route.
4. Afterwards, you can finally place, update and delete your bets at the /bets route.
7. After a match is over, you can update it with the result at the /matches route.
8. Finally, when it's all over or you want to check it, you can see the ranking of the users with the most correct bets.
9. Follow the documentation below for more info.

## Routes documentation
### POST /users
Body:
```json
{
    "name": "Rodrigo"
}
```
### POST /matches
Body:
```json
{
    "team1": "Qatar",
    "team2": "Ecuador"
}
```
### GET /matches
Response:
```json
[
  {
      "id": 1,
      "team1": "Qatar",
      "team2": "Ecuador",
      "status": true
  }
]
```
### PUT /matches/:matchId
Body:
```json
{
    "team1_score": 1,
    "team2_score": 2
}
```
### POST /bets/:matchId
Headers:
```json
{
    "name": "Rodrigo"
}
```
Body:
```json
{
    "team1_score": 1,
    "team2_score": 2
}
```
### GET /bets/user
Headers:
```json
{
    "name": "Rodrigo"
}
```
Response:
```json
[
  {
      "id": 3,
      "user_id": 4,
      "match_id": 2,
      "team1_score": 1,
      "team2_score": 1,
      "status": false,
      "cancelled": false
  }
]
```
### PUT /bets/:betId
Headers:
```json
{
    "name": "Rodrigo"
}
```
Body:
```json
{
    "team1_score": 1,
    "team2_score": 2
}
```
### DELETE /bets/:betId
Headers:
```json
{
    "name": "Rodrigo"
}
```
### GET /bets/ranking
Response:
```json
[
  {
      "id": 4,
      "name": "Gersada",
      "correct_bets": "3"
  },
  {
      "id": 1,
      "name": "Gersin",
      "correct_bets": "2"
  }
[
```
