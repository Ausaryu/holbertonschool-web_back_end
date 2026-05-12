const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');

      const headers = lines[0].trim().split(',');

      const students = lines.slice(1).map((line) => {
        const values = line.trim().split(',');

        const student = {};

        headers.forEach((header, index) => {
          student[header] = values[index];
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

      let output = `Number of students: ${students.length}\n`;

      Object.entries(fields).forEach(([field, names]) => {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });

      console.log(output.trim());

      resolve(output.trim());
    });
  });
}

module.exports = countStudents;
