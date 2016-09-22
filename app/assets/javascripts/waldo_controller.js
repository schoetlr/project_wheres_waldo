

var Controller = {

  init: function(){
    Waldo.init();
    var tags = Controller.getTags();

    View.init(tags);
    console.log(tags);
  },

  processClick: function(event){
    //set the vars so the tag is centered around the click
    var x = event.pageX - 10;
    var y = event.pageY - 30;

    //Waldo.createTag(x, y);
    //don't save tag to the model until a char is selected
    View.createTag(x, y);
  },

  selectCharacter: function(x, y, charName){
    Waldo.createTag(x, y, charName);
  },

  getTags: function(){
    return Waldo.tags
  },

  getLastTag: function(){
    return Waldo.tags[0];
  },

  getCharacterNames: function(){
    var chars = Waldo.characters.map(function(character, index){
      return character.name
    })

    return chars;
  }

}


$(document).ready(function(){
  Controller.init();
})