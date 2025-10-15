export interface ValidationResult {
  emailMessage?: string
  usernameMessage?: string
  phoneMessage?: string
  passwordMessage?: string
  confirmPasswordMessage?: string
  general?: string
  valid: boolean
}

export const validateInputs = (
  password: string,
  confirmPassword: string,
  username: string,
  email: string
): ValidationResult => {
  const result: ValidationResult = { valid: true }

  const usernameRegex =
    /^(?=.{4,}$)(?!.*[_.]{2})[a-zA-Z][a-zA-Z0-9._]*[a-zA-Z0-9]$/
  if (!usernameRegex.test(username)) {
    result.valid = false
    result.usernameMessage =
      'Username must be at least 4 characters, start with a letter, contain only letters, numbers, dots, or underscores, and not end with a dot or underscore.'
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    result.valid = false
    result.emailMessage = 'Invalid email address'
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  if (!passwordRegex.test(password)) {
    result.valid = false
    result.passwordMessage =
      'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character'
  }

  // Validate confirm password
  if (password !== confirmPassword) {
    result.valid = false
    result.confirmPasswordMessage = 'Passwords do not match'
  }

  return result
}

export const validateSignUp = (
  password: string,
  username: string,
  email?: string
): ValidationResult => {
  const result: ValidationResult = { valid: true }

  // if (!/^[a-zA-Z0-9_]+$/.test(username)) {
  //   result.valid = false;
  //   result.usernameMessage =
  //     "Username can only contain letters, numbers, and underscores";
  // } else if (username.length > 20) {
  //   result.valid = false;
  //   result.usernameMessage = "Username must not be more than 20 characters";
  // } else if (username.length < 3) {
  //   result.valid = false;
  //   result.usernameMessage = "Username must be at least 3 characters long";
  // } else if (/^[_\d]+$/.test(username)) {
  //   result.valid = false;
  //   result.usernameMessage =
  //     "Username must start with a letter and contain at least one letter";
  // }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email && !emailRegex.test(email)) {
    result.valid = false
    result.emailMessage = 'Invalid email address'
  }

  const usernameRegex =
    /^(?=.{4,}$)(?!.*[_.]{2})[a-zA-Z][a-zA-Z0-9._]*[a-zA-Z0-9]$/
  if (!usernameRegex.test(username)) {
    result.valid = false
    result.usernameMessage =
      'Username must be at least 4 characters, start with a letter, contain only letters, numbers, dots, or underscores, and not end with a dot or underscore.'
  }

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  if (!passwordRegex.test(password)) {
    result.valid = false
    result.passwordMessage =
      'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character'
  }

  return result
}
