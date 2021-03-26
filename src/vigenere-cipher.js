
class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
    this.letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('ERROR');
    message = message.toLowerCase();
    let result = [];
    let newKey = '';
    
    while(newKey.length <= message.length) {
      newKey += key.toLowerCase();
    }
    let keyInd = 0; 
    for (let i = 0; i < message.length; i++) {
      if (this.letters.includes(message[i]) ) {
        result.push(this.letters[(this.letters.indexOf(message[i]) +
         this.letters.indexOf(newKey[keyInd])) % this.letters.length]);
         keyInd++
      } else {
        result.push(message[i]);
      }
      
    }
    return this.direction === false ?  result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
    }
 

  decrypt(message, key) {
    if (!message || !key) throw new Error('ERROR');
    message = message.toLowerCase();
    
    let result = [];
    let newKey = '';
    while(newKey.length <= message.length) {
      newKey += key.toLowerCase();
    }
    let keyInd = 0;
    for (let i = 0; i < message.length; i++) {
      if (this.letters.includes(message[i]) ) {
        result.push(this.letters[(this.letters.indexOf(message[i]) -
        this.letters.indexOf(newKey[keyInd]) + this.letters.length) % this.letters.length ] );
        keyInd++
      } else {
        result.push(message[i]);
      }
    }
    return this.direction === false ?  result.reverse().join('').toUpperCase() : result.join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
