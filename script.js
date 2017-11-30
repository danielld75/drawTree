var drawTree = function(h) {
  for (var i = 1; i <= h; i++) {
    var star = "";
    for (var j = i; j < h; j++) {
      star += " ";
    }
    for (var j = 1; j <= (2 * i - 1); j++) {
      star += "*";
    }
    console.log(star);
  }
};

drawTree(12);
drawTree(9);
drawTree(13);