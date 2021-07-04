let game = {
  /**
   * Запускает игру
   */
  run() {
    while (true) {
      const direction = mover.getDirection();
      if (direction === null) {
        console.log('Игра окончена');
        return;
      }

      const nextPoint = mover.getNextPosition(direction);
    }
  },

  /**
   * Выполняется при открытии страницы
   */
  init() {
    console.log('Ваше положение на поле в виде о.');
    renderer.render();
    console.log('Чтобы начать игру введите game.run() и нажмите Enter');
  },
};

game.init();
