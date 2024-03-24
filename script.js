const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Tunisia",
  sport: "Football",
  year: 2022,
  isWorldCupWinner: false,
  headCoach: {
    coachName: "Jalel Kadri",
    matches: 3,
  },
  players: [
    {
      name: "Seifeddine Jaziri",
      position: "forward",
      number: 19,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Naim Sliti",
      position: "midfielder",
      number: 23,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ferjani Sassi",
      position: "midfielder",
      number: 13,
      isCaptain: false,
      nickname: "El Ferr",
    },
    {
      name: "Hannibal Mejbri",
      position: "midfielder",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Dylan Bronn",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nader Ghndri",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Nader",
    },
    {
      name: "Youssef Msekni",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "El nemss",
    },
    {
      name: "Yassine Meriah",
      position: "defender",
      number: 4,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Montassar Talbi",
      position: "defender",
      number: 3,
      isCaptain: false,
      nickname: "Monta",
    },
    {
      name: "Aissa Laidouni",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: "el chikh",
    },
    {
      name: "Wahbi Khazri",
      position: "forward",
      number: 10,
      isCaptain: true,
      nickname: "el capi",
    },
    {
      name: "Mohamed Ali Ben Romdhane",
      position: "midfielder",
      number: 15,
      isCaptain: false,
      nickname: "dali",
    },
    {
      name: "Ali Abdi",
      position: "defender",
      number: 24,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Anis Ben Slimane",
      position: "midfielder",
      number: 25,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Bechir Ben Said",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: "saha Bechir",
    },
    {
      name: "Bilel Ifa",
      position: "defender",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Taha Yassine Khenissi",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Mouez Hassen",
      position: "goalkeeper",
      number: 26,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Mohamed Drager",
      position: "defender",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Elyes Skhiri",
      position: "midfielder",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Wajdi Kechrida ",
      position: "defender",
      number: 21,
      isCaptain: false,
      nickname: "wajdi",
    },
    {
      name: "Ali Maaloul",
      position: "defender",
      number: 12,
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
      ({ name, position, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
  }
});
