import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((data) => {
        let output = 'This is the list of our students\n';
        for (const key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            output += `Number of students in ${key}: ${data[key].length}. List: ${data[key].join(', ')}\n`;
          }
        }
        return response.status(200).send(output);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    if (!['CS', 'SWE'].includes(request.params.major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    return readDatabase(process.argv[2])
      .then((data) => {
        if (!data[request.params.major]) {
          return response.status(500).send('Cannot load the database');
        }
        return response.status(200).send(`List: ${data[request.params.major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
