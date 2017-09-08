const rpio = require('rpio');

module.exports = function getProduct(product) {
  return new Promise((resolve, reject) => {
    switch (product) {
      case 'A23':
        console.log('A23');
        rpio.open(7, rpio.OUTPUT, rpio.LOW);
        rpio.write(7, rpio.HIGH);
        rpio.sleep(5.2);
        rpio.write(7, rpio.LOW);
        resolve('done');
        break;
      case 'A22':
        console.log('A22');
        rpio.open(11, rpio.OUTPUT, rpio.LOW);
        rpio.write(11, rpio.HIGH);
        rpio.sleep(5.2);
        rpio.write(11, rpio.LOW);
        resolve('done');
        break;
      case 'A51':
        console.log('A51');
        rpio.open(13, rpio.OUTPUT, rpio.LOW);
        rpio.write(13, rpio.HIGH);
        rpio.sleep(5.2);
        rpio.write(13, rpio.LOW);
        resolve('done');
        break;
      case 'A52':
        console.log('A52');
        rpio.open(15, rpio.OUTPUT, rpio.LOW);
        rpio.write(15, rpio.HIGH);
        rpio.sleep(5.2);
        rpio.write(15, rpio.LOW);
        resolve('done');
        break;
    }
  });
};
