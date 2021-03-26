
class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
    this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }
  encrypt(message, key) {
    message = message.toLowerCase();
    let result = [];
    let newKey = '';
    while(key.length <= message.length) {
      newKey += key.toLowerCase();
    }
    if (!message || !key) throw new Error('ERROR');
    for (let i = 0; i < message.length; i++) {
      if (this.letters.includes(message[i]) ) {
        result.push(this.letters[(this.letters.indexOf(message[i]) +
         this.letters.indexOf(newKey[i])) % this.letters.length]);
      } else {
        result.push(message[i]);
      }
    }
    return this.direction === false ?  result.reverse.join('').toUpperCase() : result.join('').toUpperCase();
    }
 

  decrypt(message, key) {
    message = message.toLowerCase();
    if (!message || !key) throw new Error('ERROR');
    let result = [];
    let newKey = '';
    while(key.length <= message.length) {
      newKey += key.toLowerCase();
    }
    for (let i = 0; i < message.length; i++) {
      if (this.letters.includes(message[i]) ) {
        result.push(this.letters[(this.letters.indexOf(message[i]) -
        this.letters.indexOf(newKey[i]) + this.letters.length) % this.letters.length ] )
      } else {
        result.push(message[i]);
      }
    }
    return this.direction === false ?  result.reverse.join('').toUpperCase() : result.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
