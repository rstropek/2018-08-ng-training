import {decrypt, encrypt} from './caesar';

const key: number = 5;

const cypher: string = encrypt('aAzZdDeEhH', key);

const plain: string = decrypt(cypher, key);


console.log(cypher);
console.log(plain);
console.log(encrypt('', 5));
