// const fs = require('fs/promises');
// const { game } = require('./guess-the-number');

// game();
// console.log(process.argv[1]);
// console.log(process.cwd());

// fs.readFile('test.txt')
//   .then(data => console.log(data.toString()))
//   .catch(err => console.log(err.message));

// async function test() {
//   try {
// read
// const data = await fs.readFile('test.txt', 'utf8')
// rewrite
// await fs.writeFile('test.txt', 'password', 'utf8');
//add
// await fs.appendFile('test.txt', ' myroslav111', 'utf8');
// rename file
//     await fs.rename('test.txt', ' myroslav111.txt', 'utf8');
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fs.readdir(__dirname)
//   .then(files => {
//     return Promise.all(
//       files.map(async filename => {
//         const stats = await fs.stat(filename);
//         return {
//           Name: filename,
//           Size: stats.size,
//           Date: stats.mtime,
//         };
//       })
//     );
//   })
//   .then(result => console.log(result));

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin, // input from standard stream
//   output: process.stdout, // output to standard stream
// });

// rl.on('line', cmd => {
//   console.log(`You just typed: ${cmd}`);
// });

// rl.question("What's your name?", answer => {
//   console.log(`Nice to meet you ${answer}`);
// });

const cont = require('./contacts/contacts-metod.js');

const invokenAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'getAll':
      const contacts = await cont.getAll();
      console.log(contacts);
      break;

    case 'add':
      const newContact = await cont.add({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    default:
      break;
  }
};
const actionIndex = process.argv.indexOf('--action');
// console.log(actionIndex + 1);
// console.log(process.argv);

if (actionIndex !== -1) {
  const action = process.argv[actionIndex + 1];
  invokenAction({ action });
}
// // invokenAction({ action: 'getAll' });
// invokenAction({
//   action: 'add',
//   name: 'Ch',
//   email: 'dui.in@egetlacus.ca',
//   phone: '(294)',
// });
