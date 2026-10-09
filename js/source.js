// *********************************************************************
// Homework 4 Public APIs
// *********************************************************************

function formatYearFromStr(dateString) {
  return dateString.split('-')[0];
}

function formatPercentage(value) {
  return `${(value * 100).toFixed(2)}%`;
}

localStorage.setItem("game_id", "1331152");
localStorage.setItem("api_key", "752a2d28dac74ceda08fbea9625d2433");



async function load(){
    
    // add as many more as needed
    let gameID = localStorage.getItem("game_id");
    let apiKey = localStorage.getItem("api_key");
    
    // **************** Write you code below **************** 
    let response = await fetch(
            `https://api.gamebrain.co/v1/games/${gameID}`,
            {
                headers: {"x-api-key": apiKey}
            }
        );

    let game = await response.json();

    let gameName = document.querySelector("#game-name");
    let gameImage = document.querySelector(".game-image img");
    let gameGenre = document.querySelector(".game-genre");
    let gameMeta = document.querySelector(".game-meta");

    gameName.textContent = game.name;
    gameImage.src = game.image;
    gameImage.alt = game.name;
    gameGenre.textContent = game.genre;

    gameMeta.textContent = game.developer + " . " + formatYearFromStr(game.release_date);

    
    

    




}
load();


   