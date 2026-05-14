import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const { database } = request.app.locals;
    readDatabase(database)
      .then((data) => {
        let output = 'This is the list of our students\n';

        const sortedFields = Object.keys(data)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        sortedFields.forEach((field) => {
          const names = data[field];

          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        });
        return response.status(200).send(output.trim());
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    const { database } = request.app.locals;

    if (!(major === 'CS' || major === 'SWE')) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }

    return readDatabase(database)
      .then((data) => {
        const names = data[major];

        return response.status(200).send(`List: ${names.join(', ')}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}

export default StudentsController;
