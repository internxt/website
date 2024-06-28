import zxcvbn from 'zxcvbn';

export const getRandomInteger = (min, max) => {
  const randomWords = new Uint32Array(1);
  window.crypto.getRandomValues(randomWords);
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor((randomWords[0] / (0xffffffff + 1)) * (max - min + 1)) + min;
};

export const checkPassword = (pswrd) => {
  const password = pswrd.target.value;

  if (password === '') {
    return 0;
  } else {
    // Check for crack time and get anti-crack feedback
    const crack = zxcvbn(password);

    return crack.score;
  }
};
