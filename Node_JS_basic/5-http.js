const http = require('http');
const { argv } = require('process');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(argv[2])
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch(() => {
        res.end('Cannot load the database');
      });
  } else {
    res.end('404 page not found');
  }
});

app.listen(1245);

console.log('Server running...');

module.exports = app;
