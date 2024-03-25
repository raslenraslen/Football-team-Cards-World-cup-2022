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

const showPlayerStatsButton = document.getElementById("showPlayerStatsButton");

// Function to calculate and display player stats
function showPlayerStats() {
  // Calculate player stats here (e.g., goals scored, passes, etc.)
  // For demonstration, let's alert a message
  alert(
    "Player stats: Goals scored:  1, Goals conceded : 1, Goal Scorer: Wahbi khazri"
  );
}

// Add event listener to the button
showPlayerStatsButton.addEventListener("click", showPlayerStats);

const worldCupGamesButton = document.getElementById("showWorldCupGamesButton");
const worldCupGamesDiv = document.getElementById("worldCupGames");
const backToMainPageButton = document.getElementById("backToMainPageButton");

// Data containing World Cup games and results
const worldCupGames = [
  { opponent: "Denmark", result: "0/0" },
  { opponent: "Australia", result: "1/0 (Australia)" },
  { opponent: "France", result: "1/0 (Tunisia)" },
];

// Function to display World Cup games
function showWorldCupGames() {
  // Hide all other elements
  document.body.innerHTML = "";

  // Create a div to display World Cup games
  const container = document.createElement("div");
  container.id = "worldCupGamesContainer";
  container.style.padding = "20px";
  container.style.color = "#fff";

  // Display each game and result
  worldCupGames.forEach((game) => {
    const gameDiv = document.createElement("div");
    gameDiv.textContent = `Played against ${game.opponent} - Result: ${game.result}`;
    container.appendChild(gameDiv);
  });

  // Append the container to the body
  document.body.appendChild(container);

  // Show "Back to Main Page" button
  backToMainPageButton.style.display = "block";
}

// Function to go back to the main page
function backToMainPage() {
  // Reload the page
  location.reload();
}

// Add event listener to the "Show World Cup Games" button
worldCupGamesButton.addEventListener("click", showWorldCupGames);

// Add event listener to the "Back to Main Page" button
backToMainPageButton.addEventListener("click", backToMainPage);
