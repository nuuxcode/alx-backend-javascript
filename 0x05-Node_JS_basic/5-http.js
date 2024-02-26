const http = require('http');
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
      let result = `Number of students: ${students}\n`
      for (const key in hashtable) {
        if (Object.hasOwnProperty.call(hashtable, key)) {
          const students = [];
          hashtable[key].forEach((value) => {
            students.push(value);
          });
          output += `Number of students in ${key}: ${students.length}. List: ${students.join(', ')}\n`
        }
      }
      resolve(result);
    });
  });
}

if (process.argv[2] === undefined) {
  console.log('enter name of database file')
  process.exit()
}

const app = http.createServer((req, res) => {
  const url = req.url
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  else if (url === '/students') {
    countStudents(process.argv[2])
      .then((result) => {
        res.write(result);
        res.end();
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    res.write('404');
    res.end();
  }

}).listen(1245);

module.exports = app;
