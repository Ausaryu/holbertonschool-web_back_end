const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
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
      fields[student.field] = (fields[student.field] || 0) + 1;
    });

    console.log(`Number of students: ${students.length}`);

    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        console.log(`Number of students in ${field}: ${fields[field]}`);
      }
    }
  });
}

module.exports = countStudents;
