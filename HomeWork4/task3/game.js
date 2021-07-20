let game = {
  questions: [
    new Question(
      'Назовите самое соленое море в Мировом океане',
      'Красное море',
      'Черное море',
      'Каспийское море',
      'Красное море',
      'Балтийское море'
    ),
    new Question(
      'Кому принадлежит выражение: «Краткость – сестра таланта»',
      'Чехов',
      'Пушкин',
      'Чехов',
      'Лермонтов',
      'Даль'
    ),
    new Question(
      'Как называется ближайшая к Солнцу планета',
      'Меркурий',
      'Юпитер',
      'Сатурн',
      'Венера',
      'Меркурий'
    ),
    new Question(
      'Какая кинопремия вручается в Каннах',
      'Золотая пальмовая ветвь',
      'Золотая пальмовая ветвь',
      'Золотой глобус',
      'Золотой лев',
      'Золотая малина'
    ),
    new Question(
      'Как называется слой в атмосфере, защищающий землю от ультрафиолетового излучения',
      'Озоновый слой',
      'Гидросфера',
      'Атмосфера',
      'Озоновый слой',
      'Стратосфера'
    ),
  ],
  rightAnswerCount: 0,

  run() {
    for (let question of this.questions) {
      const userAnswer = question.show();
      if (userAnswer == null) {
        console.log('Игра окончена');
        return;
      }

      if (question.checkUserAnswer(userAnswer)) {
        this.rightAnswerCount++;
      }
    }
    this.showResult();
    console.log('Чтобы повторить игру, введите game.run() и нажмите Enter');
  },

  showResult() {
    let declination = 'вопросов';
    switch (this.rightAnswerCount) {
      case 1:
        declination = 'вопрос';
        break;
      case 2:
      case 3:
      case 4:
        declination = 'вопроса';
        break;
    }
    alert(
      `Поздравляем!\nВы угадали ${this.rightAnswerCount} ${declination} из ${this.questions.length}`
    );
  },

  init() {
    console.log(
      'Здравствуйте! Попробуйте сыграть в игру "Кто хочет стать миллионером?". Для начала игры введите game.run() и нажмите Enter'
    );
  },
};

game.init();
