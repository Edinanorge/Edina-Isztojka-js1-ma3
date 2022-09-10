const apiKey = "1cb9b3bb6506442cb7b2988b7ff8bb7f";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const resultContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const games = data.results;

    displayGames(games);
  } catch (error) {
    resultContainer.innerHTML = displayError("An error has occured !!!");
  }
}
getGames();

function displayGames(games) {
  resultContainer.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    if (i === 8) {
      break;
    }

    resultContainer.innerHTML += `<div class="result">
                                    <div class="game-name">${games[i].name}</div> 
                                    <div>Rating: ${games[i].rating}</div>
                                    <div>Tags: ${games[i].tags.length}</div>
                                  </div>`;
  }
}
