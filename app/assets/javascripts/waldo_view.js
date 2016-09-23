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
      View.hideTags(event);
    });

    $("#photo-container").on("mouseenter", function(event){
      View.showTags(event);
    })
    

  },

  showTags: function(event){
    event.preventDefault();
    $(".tag").show();
    $(".character-select").show();
    $(".delete-link").show();
  },

  hideTags: function(event){
    $(".delete-link").hide();
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
    console.log("RENDERING");
    View.displayTags(tags);
  },


  createTag: function(x, y){
    

    $tag = $("<div class='tag'></div>")
            .css("left", x + "px")
            .css("top", y + "px")
            .css("visibility", "visible")
            .data("left", x)
            .data("top", y);
    
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
  },

  displayTag: function(tag){
    
    var x = tag.x;
    var y = tag.y;
    var character = tag.character;
    

    $tag = $("<div class='tag'></div>")
            .css("left", x + "px")
            .css("top", y + "px")
            .css("visibility", "visible")
            .data("left", x)
            .data("top", y)
            .attr("data-id", tag.id);
            //.data("id", tag.id);
    
    $("#photo-container").append($tag);
    console.log($(".tag", "#photo-container").length);
    
    View.createLink(x, y, tag.id);
  },

  removeTag: function(id){
    $tag  = $(".tag[data-id='" + id + "']");
    
    $tag.remove();
    $(".delete-link[data-id='" + id + "']").remove();
  },

  createLink: function(x, y, id){
    $link = $("<a href='#'>Delete</a>")
              .addClass("delete-link")
              .css("position", "absolute")
              .attr("data-id", id)
              .css("top", (y-15) + "px")
              .css("left", x + "px");

    $("#photo-container").append($link);

    //set listener
    $link.click(function(event){
      var $link = $(event.target);
      foo = $link;
      var id = $link.data("id");
      
      Controller.deleteTag(event, id);
    })
  }
}