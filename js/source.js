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
localStorage.setItem("api_key", "e0916c0e3743453e8298e48579b198f2");



async function load(){
    
    // add as many more as needed
    let gameID = localStorage.getItem("game_id");
    let apiKey = localStorage.getItem("api_key");
    
    // **************** Write you code below **************** 
    // let response = await fetch(
    //         `https://api.gamebrain.co/v1/games/${gameID}`,
    //         {
    //             headers: {"x-api-key": apiKey}
    //         }
    //     );

    // let game = await response.json();

    // // game hero section
    // let gameName = document.querySelector("#game-name");
    // let gameImage = document.querySelector(".game-image img");
    // let gameGenre = document.querySelector(".game-genre");
    // let gameMeta = document.querySelector(".game-meta");

    // gameName.textContent = game.name;
    // gameImage.src = game.image;
    // gameImage.alt = game.name;
    // gameGenre.textContent = game.genre;

    // gameMeta.textContent = game.developer + " . " + formatYearFromStr(game.release_date);

    

    //game news section
    

    // let response2 = await fetch(
    //         `https://api.gamebrain.co/v1/games/${gameID}/news`,
    //         {
    //             headers: {"x-api-key": apiKey}
    //         }
    //     );

    // let news = await response2.json();


    let news = {
        news: [
            {
                title: "Clair Obscur: Expedition 33 director praises Kingdom Hearts 2",
                url: "https://example.com/news1",
                source: "gamesradar.com",
                image: "https://cdn.mos.cms.futurecdn.net/WfDezAmceUqbcsh9vFiCF5-1920-80.jpg",
                published: "2026-06-30"
            },
            {
                title: "Kingdom Hearts 2 Fans Have Found A Weird Mistake In The Prologue",
                url: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/12/kingdomhearts2roxas.jpg?w=1600&h=900&fit=crop",
                source: "thegamer.com",
                image: "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/12/kingdomhearts2roxas.jpg?w=1600&h=900&fit=crop",
                published: "2025-12-26"
            }
        ]
    };

    let newsCards = document.querySelectorAll(".news-card");

    for (let i = 0; i < newsCards.length; i++) {
      let gamenews = news.news[i];

      if (gamenews) {
        let newsImage = newsCards[i].querySelector("img");
        let newsTitle = newsCards[i].querySelector(".news-info h3");
        let newsPublished = newsCards[i].querySelector(".news-published");

        newsImage.src = gamenews.image;
        newsImage.alt = gamenews.title;
        newsTitle.textContent = gamenews.title;
        newsPublished.textContent = "Published: " + gamenews.published;
    }else {
      newsCards[i].style.display = "none";
    }
    }


    // similar games section
    // let response3 = await fetch(
    //         `https://api.gamebrain.co/v1/games/${gameID}/similar`,
    //         {
    //             headers: {"x-api-key": apiKey}
    //         }
    //     );

    // let similarGames = await response3.json();

    let similarGames = {
      results: [
        {
          "year": 2020.0,
          "name": "KINGDOM HEARTS HD 2.8 Final Chapter Prologue",
          "rating": {
                "mean": 0.7468391562294002,
                "count": 486.0
            },
          "screenshots": [
              "https://img.gamebrain.co/games/565/kingdom_hearts_hd_2_8_final_chapter_prologue_squareenix_2024_9.jpg",
          ]
        },
        {
          "year": 2026.0,
          "name": "The Adventures of Elliot: The Millenium Tales",
          "rating": {
            "mean": 0.8404145077720211,
            "count": 966.0
          },
          "screenshots": [
            "https://img.gamebrain.co/games/661/the_adventures_of_elliot_the_millennium_tales_claytechworks_2026_7.jpg"
          ]
        }
      ]

    }

    let similarGameCards = document.querySelectorAll(".game-card");

    for (let i = 0; i < similarGameCards.length; i++) {
      let similarGame = similarGames.results[i];

      if (similarGame) {
        let similarGameImage = similarGameCards[i].querySelector("img");
        let similarGameMeta = similarGameCards[i].querySelector(".game-card-meta");
        let similarGameName = similarGameCards[i].querySelector("h3");

        
        if(similarGame.screenshots && similarGame.screenshots.length > 0) {
          similarGameImage.src = similarGame.screenshots[0];
        }
        similarGameImage.alt = similarGame.name;
        similarGameName.textContent = similarGame.name;

        similarGameMeta.querySelector("span:first-child").textContent = similarGame.year;
        similarGameMeta.querySelector("span:last-child").textContent = formatPercentage(similarGame.rating.mean);

        let screenshots = card.querySelector("");

      } else {
        similarGameCards[i].style.display = "none";
      }
    }
}
load();


   