function printText(text,tileX,tileY,charX,charY) {
  charX--
  for (let i=0;i<text.length;i++) {
    charX++;
    if (charX == 16) {
      tileX++
      charX = 0
    }
    if (text[i] == "\n") {
      charY++
      charX = tileX-i
      if (charY == 16) {
        tileY++
        charY = 0
      }
    }
    writeCharTo(text[i],0,tileX,tileY,charX,charY);
  };
};
