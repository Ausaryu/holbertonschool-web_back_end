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

    console.log(`Number of students: ${students.length}`);
    
    const fields = {};

    students.forEach((student) => {
      if (!fields[student.field]) {
        fields[student.field] = [];
      }

      fields[student.field].push(student.firstname);
    });

    Object.entries(fields).forEach(([field, names]) => {
      console.log(
        `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`
      );
    });
  });
}

module.exports = countStudents;
