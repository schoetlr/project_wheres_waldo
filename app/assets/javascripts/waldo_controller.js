

var Controller = {

  init: function(){
    Waldo.init();
    //var tags = Controller.getTags();
    //no tags stored in Waldo
    //View.init(tags);
    //init the view after the ajax request for tags is complete
    
  },

  deleteTag: function(event, id){
    //remove the tag and it's link from the view

    //send ajax request to delete from db
    //pass the tag id
    Waldo.deleteTag(id);
    
  },

  processClick: function(event){
    //set the vars so the tag is centered around the click
    //the event.pageX/Y is relative to browser
    
    //the css is relative to the div
    //x and y are the top left of the tag
    var x = event.pageX - 20;
    var y = event.pageY - 30;

    //Waldo.createTag(x, y);
    //don't save tag to the model until a char is selected
    View.createTag(x, y);
  },

  selectCharacter: function(x, y, charName){
    //Waldo.createTag(x, y, charName);
    //call the above on persistTag success
    Waldo.persistTag(x, y, charName);
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