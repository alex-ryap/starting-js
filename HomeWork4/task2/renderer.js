let renderer = {
  map: '',

  /**
   *  Отображает карту и расположение игрока на ней
   */
  render() {
    for (let row = 0; row < config.rowCount; row++) {
      for (let col = 0; col < config.colCount; col++) {
        if (player.y == row && player.x == col) {
          this.map += 'o ';
        } else {
          this.map += 'x ';
        }
      }
      this.map += '\n';
    }
    console.log(this.map);
  },

  clear() {
    console.clear();
    this.map = '';
  },
};
