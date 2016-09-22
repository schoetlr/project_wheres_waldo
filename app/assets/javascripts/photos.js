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

  tag: function(x, y){
    this.x = x;
    this.y = y;
    this.character = undefined;

  },




  createTag: function(x, y){
    var tag = new Waldo.tag(x,y);
    Waldo.tags.unshift(tag);
  }







}
