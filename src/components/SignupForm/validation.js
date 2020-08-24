const MIN_WEIGHT = 3;
const MAX_WEIGHT = 180;

export default (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (
    !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
      values.password
    )
  ) {
    errors.password =
      "Invalid password. Password must be at least 8 characters, and contain 1 letter, 1 number and 1 special character";
  }

  if (!values.passwordConfirm) {
    errors.passwordConfirm = "Required";
  } else if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = "Passwords do not match";
  }

  if (!values.name) {
    errors.name = "Required";
  }

  const weightRestraintError = `Weight must be between ${MIN_WEIGHT}-${MAX_WEIGHT}lbs`;
  if (!values.weight) {
    errors.weight = "Required";
  } else if (values.weight < MIN_WEIGHT || values.weight > MAX_WEIGHT) {
    errors.weight = weightRestraintError;
  }

  if (!values.idealWeight) {
    errors.idealWeight = "Required";
  } else if (
    values.idealWeight < MIN_WEIGHT ||
    values.idealWeight > MAX_WEIGHT
  ) {
    errors.idealWeight = weightRestraintError;
  }

  return errors;
};
