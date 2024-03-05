/**
 *
 * @param password
 * @param userAccountName
 */
export default function testPasswordStrength(
  password: string,
  userAccountName: string,
): { valid: false; reason: 'NOT_LONG_ENOUGH' | 'NOT_COMPLEX_ENOUGH' } | { valid: true; strength: 'medium' | 'hard' } {
  if (password.length < 8) {
    return { valid: false, reason: 'NOT_LONG_ENOUGH' };
  }

  const containsUppercaseChars = /[A-Z]/.test(password);

  const containsLowercaseChars = /[a-z]/.test(password);

  const containsDigits = /\d/.test(password);

  const containsNonAlphanumeric = /\W/.test(password);

  const notLooksLikeHisAccountName = !passwordLooksLikeAccountName(password, userAccountName);

  const categories = [
    containsUppercaseChars,
    containsLowercaseChars,
    containsDigits,
    containsNonAlphanumeric,
    notLooksLikeHisAccountName,
  ];

  const positiveCategories = categories.reduce((prev, current) => prev + (current ? 1 : 0), 0);

  if (positiveCategories < 3) {
    return { valid: false, reason: 'NOT_COMPLEX_ENOUGH' };
  } else if (positiveCategories === 3) {
    return { valid: true, strength: 'medium' };
  } else {
    return { valid: true, strength: 'hard' };
  }
}

function passwordLooksLikeAccountName(password: string, userAccountName: string): boolean {
  if (userAccountName.length < 3) return false;

  const slices: string[] = [];

  for (let i = 0; i < userAccountName.length; i++) {
    for (let j = 3; j <= userAccountName.length; j++) {
      slices.push(userAccountName.slice(i, j).toLowerCase());
    }
  }

  return slices.some((slice) => password.toLowerCase().indexOf(slice) !== -1);
}
