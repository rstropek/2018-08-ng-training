"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const caesar_1 = require("./caesar");
const key = 5;
const cypher = caesar_1.encrypt('aAzZdDeEhH', key);
const plain = caesar_1.decrypt(cypher, key);
console.log(cypher);
console.log(plain);
console.log(caesar_1.encrypt('', 5));
