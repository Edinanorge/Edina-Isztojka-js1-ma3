const apiKey = "1cb9b3bb6506442cb7b2988b7ff8bb7f";
const url = `https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=${apiKey}`;

const resultContainer = document.querySelector(".results");

async function getGames() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const result = results.results;

    resultContainer.innerHTML = "";

    for (let i = 0; i < result.length; i++) {
      if (i === 8) {
        break;
      }

      resultContainer.innerHTML += `<div class="result">
                                      <div class="game-name">${result[i].name}</div> 
                                      <div>Rating: ${result[i].rating}</div>
                                      <div>Tags: ${result[i].tags.length}</div>
                                    </div>`;
    }
  } catch (error) {
    resultContainer.innerHTML = displayError("An error has occured !!!");
  }
}
getGames();
