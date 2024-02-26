const fsp = require('fs').promises;
const fs = require('fs');
const readline = require('readline');

async function countStudents(path) {
  try {
    await fsp.access(path, fs.constants.F_OK);
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const fileStream = fs.createReadStream(path);
  const rl = readline.createInterface({
    input: fileStream,
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
  await new Promise((resolve) => {
    rl.on('close', () => {
      console.log(`Number of students: ${students}`);
      for (const key in hashtable) {
        if (Object.hasOwnProperty.call(hashtable, key)) {
          const students = [];
          hashtable[key].forEach((value) => {
            students.push(value);
          });
          console.log(`Number of students in ${key}: ${students.length}. List: ${students.join(', ')}`);
        }
      }
      resolve();
    });
  });
}
module.exports = countStudents;
