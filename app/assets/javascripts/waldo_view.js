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
            .attr("position", "absolute")
            .attr("left", x)
            .attr("top", y)
            .css("visibility", "visible");

    $("body").append($tag);

  },

  displayTags: function(tags){
    tags.forEach(function(tag){
      View.displayTag(tag);
    })
  }
}