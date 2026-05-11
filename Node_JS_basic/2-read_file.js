const fs = require('fs');

function countStudents() {

fs.readFile('database.csv', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.trim().split('\n');

  const headers = lines[0].split(',');

  const students = lines.slice(1).map((line) => {
    const values = line.split(',');

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

    for (field in fields) {
      console.log(`Number of students in ${field}: ${fields[field]}`)
    }

  });
}

module.exports = countStudents;
