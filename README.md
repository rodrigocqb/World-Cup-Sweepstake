# World Cup Sweepstake
This is a web application where you can bet on World Cup Games and see which of your friends is the best at guessing the match results

## About
This is a Typescript proof of concept. Below are the implemented features:

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
1. First, you have to register yourself. You can do this by sending an object with the property name.
2. Second, remember to add the matches that haven't already happened to the database. You can also check all registered matches.
3. You can do that by sending an object with the properties team1 and team2 including the name of the teams.
4. Afterwards, you can finally place your bets. To do that, you have to:
    - Send a header with the property name containing your name.
    - Send an object with the properties team1_score and team2_score.
5. If you want to update a bet, follow the previous step.
6. If you want to delete a bet, you also have to send the header object.
7. After a match is over, you can update it with the result, sending a body with the properties team1_score and team2_score.
8. Finally, when it's all over or you want to check it, you can see the ranking of the users with the most correct bets.
