var Game = {

  currentGame: undefined,

  score: 0,

  newGame: function(){
    $.ajax({
      url: "/games.json",

      type: "POST",

      contentType: "application/json",

      dataType: "json",

      success: function(json){
        Game.currentGame = json;
      },

      error: function(){
        console.log("something went wrong creating game");
      },

      complete: function(){
        console.log("the create game request is complete");
      }
    })
  },

  updateScore: function(point){
    $.ajax({
      url: "/games/" + Game.currentGame.id + "/score.json",

      type: "POST",

      data: JSON.stringify({point: point}),

      contentType: "application/json",
      dataType: "json",

      success: function(json){
        console.log("score updated");
        Game.score += point;
        Controller.score(Game.score);
        Game.checkGameOver();
      },

      error: function(){
        console.log("something went wrong updating score");
      },

      complete: function(){
        console.log("update score ajax call complete");
      }

    })
  },

  checkGameOver: function(){

  }


}