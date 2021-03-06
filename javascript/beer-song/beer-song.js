var BeerSong = function() {};

BeerSong.prototype.verse = function(verse) {
  if(verse === 0) {
    return "No more bottles of beer on the wall, no more bottles of beer.\n" +
           "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
  }
  if(verse === 1) {
    return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
           "Take it down and pass it around, no more bottles of beer on the wall.\n";
  }
  if(verse===2){
    return "2 bottles of beer on the wall, 2 bottles of beer.\n" +
           "Take one down and pass it around, 1 bottle of beer on the wall.\n";
  }
  return verse + " bottles of beer on the wall, " + verse + " bottles of beer.\n" +
                 "Take one down and pass it around, " + (verse - 1) +
                 " bottles of beer on the wall.\n";
};

BeerSong.prototype.sing = function(start, stop) {
  stop = stop || 0;
  var verses = [];
  for (var i=start; i >= stop; i--) {
    verses.push(this.verse(i));
  }
  return verses.join("\n");
};

module.exports = BeerSong;
