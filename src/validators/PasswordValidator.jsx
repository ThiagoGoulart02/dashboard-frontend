export function validatePassword(password) {
  return /[A-Z]/.test(password);
}
