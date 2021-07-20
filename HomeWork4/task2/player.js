/**
 * @property {int} x Позиция игрока по X-координате
 * @property {int} y Позиция игрока по Y-координате
 */
const player = {
  x: 0,
  y: 0,

  /**
   * Передвигает игрока на карте
   * @param {{x: int, y: int}} nextPoint Следующая точка игрока
   */
  move(nextPoint) {
    // ограничение движений игрока размерами карты
    if (
      nextPoint.x < 0 ||
      nextPoint.x > config.colCount - 1 ||
      nextPoint.y < 0 ||
      nextPoint.y > config.rowCount - 1
    ) {
      return;
    }

    this.x = nextPoint.x;
    this.y = nextPoint.y;
  },
};
