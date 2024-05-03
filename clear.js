const fs = require('fs');

fs.unlink('result.txt', (err) => {
  if (err) {
    console.log('Нет игр');
  } else {
    console.log('Лог игр удален');
  }
});