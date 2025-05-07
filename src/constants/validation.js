const VALIDATION = {
  name: {
    required: 'Имя обязательно для заполнения',
    minLength: {
      value: 2,
      message: 'Имя должно содержать минимум 2 символа',
    },
    maxLength: {
      value: 15,
      message: 'Имя должно содержать максимум 15 символов',
    },
  },
  destination: {
    required: 'Выберите страну для поездки',
  },
  email: {
    required: 'Email обязателен для заполнения',
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Введите корректный email',
    },
  },
  phone: {
    required: 'Телефон обязателен для заполнения',
    pattern: {
      value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      message: 'Введите корректный номер телефона',
    },
  },
  dateFrom: {
    required: 'Выберите дату начала',
  },
  dateTo: {
    required: 'Выберите дату конца',
  },
  isAgree: {
    required: true,
  },
};

export default VALIDATION;
