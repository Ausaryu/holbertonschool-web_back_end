const express = require('express');
const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
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

      let output = `Number of students: ${students.length}\n`;

      Object.entries(fields).forEach(([field, names]) => {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      });

      resolve(output.trim());
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(1245);

module.exports = app;
