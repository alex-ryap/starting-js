let mover = {
  getDirection() {
    const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
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
        nextPosition.x--;
        nextPosition.y++;
        break;
      case 2:
        nextPosition.y++;
        break;
      case 3:
        nextPosition.x++;
        nextPosition.y++;
        break;
      case 4:
        nextPosition.x--;
        break;
      case 6:
        nextPosition.x++;
        break;
      case 7:
        nextPosition.x--;
        nextPosition.y--;
        break;
      case 8:
        nextPosition.y--;
        break;
      case 9:
        nextPosition.x++;
        nextPosition.y--;
        break;
    }
    return nextPosition;
  },
};
