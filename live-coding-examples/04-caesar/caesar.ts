const grA = 'A'.charCodeAt(0);
const grZ = 'Z'.charCodeAt(0);
const klZ = 'z'.charCodeAt(0);

const maxKey = 25;

function getLastChar(ch: string): number {
  const chCode = ch.charCodeAt(0);
  return (chCode >= grA && chCode <= grZ) ? grZ : klZ;
}

function getFirstChar(ch: string): number {
  return getLastChar(ch) - 25;
}

function checkKey(key: number): void {
  if ((key <= 0) || (key > maxKey)) {
    throw new Error('Invalid Key');
  }
}

export function encrypt(plain: string, key: number): string {
  let result: string = '';
  if (!plain && plain !== '') {
    throw new Error('Plain not valid');
  }
  checkKey(key);
  for (let i = 0; i < plain.length; i++) {
    let code: number = plain.charCodeAt(i) + key;
    const base = getLastChar(plain.charAt(i));
    if (code > base) {
      code -= 26;
    }

    result += String.fromCharCode(code);
  }

  return result;
}

export function decrypt(cypher: string, key: number): string {
  let result: string = '';
  if (!cypher && cypher !== '') {
    throw new Error('Cypher not valid');
  }
  checkKey(key);
  for (let i = 0; i < cypher.length; i++) {
    let code: number = cypher.charCodeAt(i) - key;
    const start = getFirstChar(cypher[i]);
    if (code < start) {
      code += 26;
    }

    result += String.fromCharCode(code);
  }

  return result;
}