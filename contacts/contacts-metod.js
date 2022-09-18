const fs = require('fs/promises');
const path = require('path');
const n = require('nanoid');

const contactsPath = path.join(__dirname, 'contacts.json');

const getAll = async () => {
  const data = await fs.readFile(contactsPath, 'utf-8');

  return JSON.parse(data);
};

const add = async ({ name, email, phone }) => {
  const contacts = await getAll();
  const contact = {
    id: Math.random(),
    name,
    email,
    phone,
  };

  contacts.push(contact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
  return contacts;
};

module.exports = {
  getAll,
  add,
};
