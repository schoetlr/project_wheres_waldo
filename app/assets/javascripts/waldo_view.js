var View = {

  init: function(tags){
    View.render(tags);
    View.setListeners();
  },

  setListeners: function(){
    
    $("#photo").click(function(event){
      Controller.processClick(event);
    })

    $("#photo-container").on("mouseleave", function(){
      
      //View.hideTags(event);
      //won't work calling View.hideTags()??
      $(".tag").hide();
      $(".character-select").hide();
    });

    $("#photo-container").on("mouseenter", function(event){
      View.showTags(event);
    })
    

  },

  showTags: function(event){
    event.preventDefault();
    $(".tag").show();
    $(".character-select").show();
    
  },

  hideTags: function(event){
    console.log("hiding");
    $(".tag").hide();
    $(".character-select").hide();
    
  },

  setSelect: function(){
    $(".character-select").change(function(event){
      $select = $(event.target);
      var char = $select.val();
      var x = $select.data("left");
      var y = $select.data("top");
      //pass the associated tag and the event
      Controller.selectCharacter(x, y, char);
    })
  },

  render: function(tags){
    View.displayTags(tags);
  },

  hideTags: function(){
    $(".tag").css("visibility", "hidden");
  },

  createTag: function(x, y){
    

    $tag = $("<div class='tag'></div>")
            .css("left", x + "px")
            .css("top", y + "px")
            .css("visibility", "visible")
            .data("left", x)
            .data("top", y);
    //not appending to body is making position weird
    $("#photo-container").append($tag);

    //make dropdown

    $characterContainer = $("<div class='character-container'></div>");
    var $dropdown = $("<select class='character-select'></select>");
    $dropdown.data("left", x)
              .data("top", y);

    $characterContainer.append($dropdown);
    $characterContainer.css("top", y + 60)
                        .css("left", x);
    
    var characters = Controller.getCharacterNames();
    $dropdown.append($("<option>"));
    characters.forEach(function(character){
      var $option = $("<option>" + character + "</option>");
      $dropdown.append($option);
    })
    
    $("#photo-container").append($characterContainer);
    //add char names to ul

    View.setSelect();

  },

  displayTags: function(tags){
    tags.forEach(function(tag){
      View.displayTag(tag);
    })
  }
}