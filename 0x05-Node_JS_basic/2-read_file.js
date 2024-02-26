const fs = require('fs');
const readline = require('readline');

function countStudents(path) {
  fs.access(path, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
  });
  const rl = readline.createInterface({
    input: fs.createReadStream(path),
    output: process.stdout,
    terminal: false,
  });
  const hashtable = {};
  let students = -1;
  rl.on('line', (line) => {
    const colums = line.split(',');
    const field = colums[3];
    const firstname = colums[0];
    if (students >= 0) {
      if (!Object.hasOwnProperty.call(hashtable, field)) {
        hashtable[field] = [];
      }
      hashtable[field] = [...hashtable[field], firstname];
    }
    students += 1;
  });
  rl.on('close', () => {
    console.log(`Number of students: ${students}`);
    for (const key in hashtable) {
      if (Object.hasOwnProperty.call(hashtable, key)) {
        console.log(`Number of students in ${key}: ${hashtable[key].length}. List: ${hashtable[key].join(', ')}`);
      }
    }
  });
}

module.exports = countStudents;
