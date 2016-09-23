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
    //submit completion if game over
    //check high scores if game over
    //get user name if high score
    if (Game.score === 5){
      //ajax call to update game on completion
      //handle all the above in the update method
      var name = prompt("GAME OVER, What is your name?  Your score will be displayed if it is in the top ten all time scores!");

      Game.updateGameOver(name);


      //if high score prompt for name

    }
  },

  updateGameOver: function(name){
    $.ajax({
      url: "/games/" + Game.currentGame.id + "/finish.json",
      type: "POST",
      data: JSON.stringify({user_name: name}),
      dataType: 'json',
      contentType: "application/json",

      success: function(json){
        console.log("SUCCESSFULLY UPDATED");

      },

      error: function(){
        console.log("SOMETHING WENT WRONG UPDATING");
      },

      complete: function(){
        console.log("UPDATE COMPLETE");
      } 
    })
  }


}