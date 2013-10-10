// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    console.log(this.songQueueView);

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.songQueueView.collection.on('add', function(model){
       console.log("added a song!");
       this.songQueueView.render();
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      new LibraryView({collection: this.model.get('library')}).render(),
      this.songQueueView.render(),
    ]);
  }

});
