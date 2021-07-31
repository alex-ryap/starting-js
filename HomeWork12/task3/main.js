class Validator {
  constructor(form = '.form') {
    this.form = document.querySelector(form);
    this._init();
  }

  _init() {
    const btn = this.form.querySelector('button');

    btn.addEventListener('click', (event) => {
      event.preventDefault();
      this._clearError();
      this._validateForm();
    });
  }

  _clearError() {
    this.form.querySelectorAll('.error-text').forEach((errorBlock) => {
      errorBlock.innerText = '';
    });
    this.form.querySelectorAll('.input').forEach((input) => {
      input.classList.remove('error');
    });
    this.form.querySelector('textarea').classList.remove('error');
  }

  _validateForm() {
    // get blocks
    this.nameBlock = this.form.querySelector('#name').closest('.form__block');
    this.phoneBlock = this.form.querySelector('#phone').closest('.form__block');
    this.emailBlock = this.form.querySelector('#email').closest('.form__block');
    this.aboutBlock = this.form.querySelector('#about').closest('.form__block');

    // validate
    this._validateName();
    this._validatePhone();
    this._validateEmail();
    this._validateAbout();
  }

  _validateName() {
    const options = {
      block: this.nameBlock,
      type: 'input',
      value: this.nameBlock.querySelector('input').value,
      regExp: /^[a-z]+$/gi,
      error: 'Incorrect value. The field must be contain only letters',
    };

    if (this._checkIsEmpty(options)) return;
    this._checkRegExp(options);
  }

  _validatePhone() {
    const options = {
      block: this.phoneBlock,
      type: 'input',
      value: this.phoneBlock.querySelector('input').value,
      regExp:
        /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
      error:
        'Incorrect value. Please enter your phone numer on the format +7-900-000-00-00',
    };

    if (this._checkIsEmpty(options)) return;
    this._checkRegExp(options);
  }

  _validateEmail() {
    const options = {
      block: this.emailBlock,
      type: 'input',
      value: this.emailBlock.querySelector('input').value,
      regExp: /^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,3}$/,
      error:
        'Incorrect value. Please enter your email address on the format test@gmail.com',
    };

    if (this._checkIsEmpty(options)) return;
    this._checkRegExp(options);
  }

  _validateAbout() {
    const options = {
      block: this.aboutBlock,
      type: 'textarea',
      value: this.aboutBlock.querySelector('textarea').value,
    };

    if (this._checkIsEmpty(options)) return;

    this._showSuccess(options.block, options.type);
  }

  _checkRegExp(options) {
    if (!options.value.match(options.regExp)) {
      this._showError(options.block, options.error);
    } else {
      this._showSuccess(options.block);
    }
  }

  _checkIsEmpty(options) {
    if (!options.value) {
      this._showError(
        options.block,
        'The field must not be empty',
        options.type
      );
      return true;
    }
  }

  _showSuccess(block, type = 'input') {
    block.querySelector(type).classList = 'success';
  }

  _showError(block, textError, type = 'input') {
    block.querySelector(type).classList = 'error';
    block.querySelector('.error-text').innerText = textError;
  }
}

const validator = new Validator();
