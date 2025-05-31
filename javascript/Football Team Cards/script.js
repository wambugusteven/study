const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Chelsea",
  sport: "Football",
  year: 2025,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Enzo Maresca",
    matches: 7,
  },
  players: [
    {
        name: "Cole Palmer",
        position: "forward",
        number: 1,
        isCaptain: false,
        nickname: null,
      },
    {
      name: "Enzo Fernadez",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "Pedro Neto",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
    {
      name: "Noni Madueke",
      position: "midfielder",
      number: 4,
      isCaptain: false,
      nickname: "Bichi",
    },
    {
      name: "Nickolas Jackson",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "Moses Caicedo",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
    },
    {
      name: "Romeo Lavia",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Burru",
    },
    {
      name: "Marc Cucurella",
      position: "defender",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Young Chalobar",
      position: "defender",
      number: 9,
      isCaptain: false,
      nickname: "El Cuchu",
    },
    {
      name: "Reece James",
      position: "midfielder",
      number: 10,
      isCaptain: true,
      nickname: "El Pibe de Oro",
    },
    {
      name: "Malo Gusto",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "The Philosopher of Football",
    },
    {
      name: "Mykailo Mudryk",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Levi Colwil",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Tosin Adrobayi",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Robert Sanchez",
      position: "goalkeeper",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
    },
    {
      name: "Liam Delap",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "William Estiavo",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Wesly Fofana",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Benoit Badiashile",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
    },
    {
      name: "Marc Guiu",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Joao Felix",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "Jorgens **",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};
Object.freeze(myFavoriteFootballTeam);

const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {


    playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) => {
        return `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      ` }
    )
    .join("");

};

playersDropdownList.addEventListener("change",() => {

}
);
