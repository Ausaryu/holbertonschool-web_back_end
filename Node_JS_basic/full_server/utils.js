import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      const lines = data
        .split('\n')
        .filter((line) => line.trim() !== '');

      const headers = lines[0].trim().split(',');

      const students = lines.slice(1).map((line) => {
        const values = line.trim().split(',');

        const student = {};

        headers.forEach((header, index) => {
          student[header.trim()] = values[index].trim();
        });

        return student;
      });

      const fields = {};

      students.forEach((student) => {
        if (!fields[student.field]) {
          fields[student.field] = [];
        }

        fields[student.field].push(student.firstname);
      });

      resolve(fields);
    });
  });
}

export default readDatabase;
