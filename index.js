const readline = require('readline');
const fs = require('fs');

let readLn = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let coin = ['1','2'];
let start = () => {console.log('Введите 1 или 2')}
start()

readLn.on('line', function (cmd) {
    let rand = Math.floor(Math.random() * coin.length);
    let str;
      if ((cmd === '1') || (cmd === '2')){
        console.log('Введено ' + cmd + ', Загадано ' + coin[rand]);
        if (cmd === coin[rand]) {
          console.log('Победа');
          str = "Win\n";
        } else {
          console.log('Поражение');
          str = "Loss\n";
        }
        fs.appendFile('result.txt', str, (err) => {
          if (err) {
            throw err;
        	}
      	});
      } else {
        console.log('Введено неверное значение');
      }
    start();
});