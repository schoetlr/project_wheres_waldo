

var Controller = {

  init: function(){
    var tags = Controller.getTags();

    View.init(tags);
    console.log(tags);
  },

  processClick: function(event){
    console.log("running");
    console.log(event.pageX);
    //the EVENT is loaded and there is a pageX
    var x = event.pageX;
    var y = event.pageY;
    Waldo.createTag(x, y);
    View.createTag(Controller.getLastTag());
  },

  getTags: function(){
    return Waldo.tags
  },

  getLastTag: function(){
    return Waldo.tags[0];
  }

}


$(document).ready(function(){
  Controller.init();
})