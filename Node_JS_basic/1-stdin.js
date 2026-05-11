const stdin = process.stdin;

process.stdout.write('Welcome to Holberton School, what is your name?\n');

stdin.setEncoding('utf8');

stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
});

stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});