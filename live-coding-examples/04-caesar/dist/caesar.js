"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grA = 'A'.charCodeAt(0);
const grZ = 'Z'.charCodeAt(0);
const klZ = 'z'.charCodeAt(0);
const maxKey = 25;
function getLastChar(ch) {
    const chCode = ch.charCodeAt(0);
    return (chCode >= grA && chCode <= grZ) ? grZ : klZ;
}
function getFirstChar(ch) {
    return getLastChar(ch) - 25;
}
function checkKey(key) {
    if ((key <= 0) || (key > maxKey)) {
        throw new Error('Invalid Key');
    }
}
function encrypt(plain, key) {
    let result = '';
    if (!plain && plain !== '') {
        throw new Error('Plain not valid');
    }
    checkKey(key);
    for (let i = 0; i < plain.length; i++) {
        let code = plain.charCodeAt(i) + key;
        const base = getLastChar(plain.charAt(i));
        if (code > base) {
            code -= 26;
        }
        result += String.fromCharCode(code);
    }
    return result;
}
exports.encrypt = encrypt;
function decrypt(cypher, key) {
    let result = '';
    if (!cypher && cypher !== '') {
        throw new Error('Cypher not valid');
    }
    checkKey(key);
    for (let i = 0; i < cypher.length; i++) {
        let code = cypher.charCodeAt(i) - key;
        const start = getFirstChar(cypher[i]);
        if (code < start) {
            code += 26;
        }
        result += String.fromCharCode(code);
    }
    return result;
}
exports.decrypt = decrypt;
