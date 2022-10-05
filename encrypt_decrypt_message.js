const EncryptRsa = require('encrypt-rsa').default;
const encryptRsa = new EncryptRsa();

const { privateKey: pvt1, publicKey: pub1 } = encryptRsa.createPrivateAndPublicKeys();
const { privateKey: pvt2, publicKey: pub2 } = encryptRsa.createPrivateAndPublicKeys();


// user2 sends encrypted message to user1 by using publicKey of user1,
const encryptedText1 = encryptRsa.encryptStringWithRsaPublicKey(
  { 
    text: "This is user2 using user1's publickey: pub1",   
    publicKey: pub1,
 }
);
console.log("pub1:", encryptedText1);



// user1 receives encrypted text from user2 and decrypts text using the privateKey
const decryptedText1 = encryptRsa.decryptStringWithRsaPrivateKey(
  { 
    text: encryptedText1,
    privateKey: pvt1
  }
);
console.log("pvt1:", decryptedText1);





// user1 sends encrypted text to user2 by using publicKey of user2,
const encryptedText2 = encryptRsa.encryptStringWithRsaPublicKey(
  { 
    text: "This is user2 using user1's publickey: pub2",   
    publicKey: pub2,
  }
);
console.log("pub2:", encryptedText2);



// user2 received encrypted text from user1 and decrypts text using the privateKey
const decryptedText2 = encryptRsa.decryptStringWithRsaPrivateKey(
  { 
    text: encryptedText2,
    privateKey: pvt2
  }
);
console.log("pvt2:", decryptedText2);