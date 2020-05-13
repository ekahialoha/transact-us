const validations = [
  {
    name: 'email',
    validations: [
      {
        type: 'isEmpty',
        validOn: false,
        error: 'Please enter your email address',
      },
      {
        type: 'isEmail',
        error: 'Please enter a valid email address',
      },
    ],
  },
  {
    name: 'password',
    type: 'isEmpty',
    validOn: false,
    error: 'Please enter your password',
  },
];

export default validations;
