var Waldo = {

  //store all characters to find
  characters: [],

  //store tags
  tags: [],

  character: function character(name, x, y){
    this.name = name;
    this.x = x;
    this.y = y;
  },

  tag: function(x, y, characterName){
    this.x = x;
    this.y = y;
    this.character = characterName;

  },




  createTag: function(x, y, name){
    var tag = new Waldo.tag(x, y, name);
    Waldo.tags.unshift(tag);
    
  },

  buildCharacters: function(){
    var names = ["Waldo", "Wenda", "Odlaw", "Wizard", "Woof"];
    names.forEach(function(name){
      var char = new Waldo.character(name);
      Waldo.characters.push(char);
    })
  },

  init: function(){
    Waldo.buildCharacters();
  }







}
