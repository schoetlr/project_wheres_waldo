var View = {

  init: function(tags){
    View.render(tags);
    View.setListeners();
  },

  setListeners: function(){
    
    $("#photo").click(function(event){
      Controller.processClick(event);
    })

  },

  render: function(tags){
    View.displayTags(tags);
  },

  hideTags: function(){
    $(".tag").css("visibility", "hidden");
  },

  createTag: function(tag){
    var x = tag.x;
    var y = tag.y;

    $tag = $("<div class='tag'></div>")
            .css("left", x + "px")
            .css("top", y + "px")
            .css("visibility", "visible")
            .data("left", x);

    $("body").append($tag);

    //make dropdown

    $characterContainer = $("<div class='character-container'></div>");
    var $dropdown = $("<select class='characters'></select>");
    $dropdown.data("left", x);

    $characterContainer.append($dropdown);
    $characterContainer.css("top", y + 60)
                        .css("left", x);
    
    var characters = Controller.getCharacterNames();

    characters.forEach(function(character){
      var $option = $("<option>" + character + "</option>");
      $dropdown.append($option);
    })
    
    $("body").append($characterContainer);
    //add char names to ul

  },

  displayTags: function(tags){
    tags.forEach(function(tag){
      View.displayTag(tag);
    })
  }
}