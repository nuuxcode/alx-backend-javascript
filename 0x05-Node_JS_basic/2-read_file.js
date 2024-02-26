const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const lines = data.split('\n');
  const hashtable = {};
  let students = -1;
  for (const line of lines) {
    if (line.trim() !== '') {
      const columns = line.split(',');
      const field = columns[3];
      const firstname = columns[0];
      if (students >= 0) {
        if (!Object.hasOwnProperty.call(hashtable, field)) {
          hashtable[field] = [];
        }
        hashtable[field] = [...hashtable[field], firstname];
      }
      students += 1;
    }
  }
  console.log(`Number of students: ${students}`);
  for (const key in hashtable) {
    if (Object.hasOwnProperty.call(hashtable, key)) {
      console.log(`Number of students in ${key}: ${hashtable[key].length}. List: ${hashtable[key].join(', ')}`);
    }
  }
}

module.exports = countStudents;
