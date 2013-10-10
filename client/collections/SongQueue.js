// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({
  initialize: function(){
  },
});

SongQueue.prototype.playFirst = function(){
    if(this.length === 1){
      return true;
    } else if(this.length === 0){
      return false;
    } else{
      return (this.length >=1);
    }
};