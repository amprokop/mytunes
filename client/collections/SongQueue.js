// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){
  },
});

SongQueue.prototype.playFirst = function(){
    return (this.length === 1);
};

SongQueue.prototype.playNext = function(){
  return (this.length >= 1);
};