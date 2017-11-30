var drawTree = function(h) {
  for (var i = 1; i <= h; i++) {
    var star = "";
    var space = "";
    for (var j = i; j < h; j++) {
      space += " ";
    }
    for (var j = 1; j <= (2 * i - 1); j++) {
      star += "*";
    }
    console.log(space + star);
  }
};

drawTree(12);
drawTree(9);
drawTree(13);