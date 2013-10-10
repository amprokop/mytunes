// App.js - Defines a backbone model class for the whole app.
var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      this.get('songQueue').add(song);
      if(this.get('songQueue').length === 1){
        this.set('currentSong', song);
      }
    }, this);

    params.library.on('dequeue', function(song){
      //      this.remove('currentSong', song);
    }, this);
  }
});