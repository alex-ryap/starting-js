let mover = {
  getDirection() {
    const availableDirections = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    while (true) {
      let direction = parseInt(
        prompt(
          'Введите число от 1 до 9, куда вы хотите переместиться или нажмите "Отмена", чтобы закончить игру'
        )
      );

      if (isNaN(direction)) {
        return null;
      }

      if (!availableDirections.includes(direction)) {
        alert('Для перемещения необходимо ввести число от 1 до 9.');
        continue;
      }

      return direction;
    }
  },

  getNextPosition(direction) {
    const nextPosition = {
      x: player.x,
      y: player.y,
    };

    switch (direction) {
      case 1:
        nextPosition.x++;
        nextPosition.y;
    }
  },
};
