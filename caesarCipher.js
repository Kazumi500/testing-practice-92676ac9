const shiftChar = (ch, n) => {
  const code = ch.charCodeAt(0);
  const base = code >= 97 ? 97 : 65; // 'a' for lowercase, 'A' for uppercase
  const offset = (((code - base + n) % 26) + 26) % 26;
  return String.fromCharCode(base + offset);
};

const caesarCipher = (str, n) =>
  [...str].map((ch) => (/[a-zA-Z]/.test(ch) ? shiftChar(ch, n) : ch)).join('');

module.exports = caesarCipher;
