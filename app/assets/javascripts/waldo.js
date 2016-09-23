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

  tag: function(x, y, characterName, id){
    this.x = x;
    this.y = y;
    this.character = characterName;
    this.id = id;
  },




  createTag: function(x, y, name, id){
    var tag = new Waldo.tag(x, y, name, id);
    Waldo.tags.unshift(tag);
  
  },

  persistTag: function(x, y, name){
    //send ajax request to tag controller
    $.ajax({
      url: "/tags",

      type: "POST",

      dataType: "json",
      contentType: "application/json",
      data: JSON.stringify({ tag: {x: x, y: y, character: name} }),

      success: function(json){
        console.log("tag persisted");
        Waldo.createTag(json.x, json.y, json.character, json.id);
        Waldo.getPersistedTags();
        Game.updateScore(1);
      },

      error: function(){
        console.log("tag not persisted");
      },

      complete: function(){
        console.log("persist request complete");
        
      }
    })
  },

  buildCharacters: function(){
    var names = ["Waldo", "Wenda", "Odlaw", "Wizard", "Woof"];
    names.forEach(function(name){
      var char = new Waldo.character(name);
      Waldo.characters.push(char);
    })
  },

  getPersistedTags: function(id){
    $.ajax({
      url: '/tags.json',
      type: "GET",
      dataType: 'json',

      success: function(json){
        Waldo.tags = [];
        json.forEach(function(tag){
          Waldo.createTag(tag.x, tag.y, tag.character, tag.id);
        })
        //Tags are stored after this
        View.init(Waldo.tags);
      },

      error: function(){
        console.log("could not get persisted tags");
      },

      complete: function(){
        console.log("getting persisted tags complete");

        if(id){
          View.removeTag(id);
        }
      }
    })
  },

  deleteTag: function(id){
    
    
    $.ajax({
      url: "/tags/" + id + ".json",
      type: "DELETE",
      //data: JSON.stringify({ tag: {id: id} }),

      dataType: "json",
      async: true,
      contentType: "application/json",
      success: function(json){
        console.log("IT FINALLY WORKED");
        Waldo.getPersistedTags(id);
        Game.updateScore(-1);
      },

      error: function(){
        console.log("something went wrong");
      },

      complete: function(){
        
        

      }

    })

  },

  init: function(){
    Waldo.buildCharacters();
    

    Waldo.getPersistedTags();
    //right after this the tags are not stored???
    //maybe the request is not complete at this time
    
  }







}
