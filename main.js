function printText(text,tileX,tileY,charX,charY) {
  var baseTileX = tileX
  var baseCharX = charX
  charX--
  for (let i=0;i<text.length;i++) {
    doNotWrite = false
    charX++;
    if (charX == 16) {
      tileX++
      charX = 0
    }
    if (text[i] == "\n") {
      charY++
      tileX = baseTileX
      charX = baseCharX
      if (charY == 16) {
        tileY++
        charY = 0
      }
      charX--
      doNotWrite = true
    }
    if (charY == 8) {
        tileY++
        charY = 0
    }
    if (!doNotWrite) {
        writeCharTo(text[i],0,tileX,tileY,charX,charY);
    }
  };
};
