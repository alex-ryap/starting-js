class Question {
  /**
   * Конструктор вопроса
   * @param {string} question Вопрос который будет задан пользователю
   * @param {string} rightAnswer Правильный ответ на заданный вопрос
   * @param {string} answer1 Вариант ответа
   * @param {string} answer2 Вариант ответа
   * @param {string} answer3 Вариант ответа
   * @param {string} answer4 Вариант ответа
   */
  constructor(question, rightAnswer, answer1, answer2, answer3, answer4) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.answers = [answer1, answer2, answer3, answer4];
  }

  show() {
    let availableAnswers = ['a', 'b', 'c', 'd'];

    while (true) {
      let question = `${this.question}?\n
                    a. ${this.answers[0]}\n
                    b. ${this.answers[1]}\n
                    c. ${this.answers[2]}\n
                    d. ${this.answers[3]}`;

      let userAnswer = prompt(question);
      if (userAnswer == '') {
        return null;
      }

      if (!availableAnswers.includes(userAnswer)) {
        alert('Чтобы ответить на вопрос, введите букву a, b, c, или d');
      }

      return availableAnswers.indexOf(userAnswer);
    }
  }

  checkUserAnswer(userAnswer) {
    return this.answers[userAnswer] == this.rightAnswer;
  }
}
