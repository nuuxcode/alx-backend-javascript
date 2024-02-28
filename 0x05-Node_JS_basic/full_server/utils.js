import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) reject(Error('Cannot load the database'));
    else {
      const hashtable = {};
      const lines = data.split('\n');
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
      resolve(hashtable);
    }
  });
});

export default readDatabase;
