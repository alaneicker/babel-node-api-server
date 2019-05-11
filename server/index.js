import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { 
  getContacts, 
  getContactById, 
  getContactByName
} from './queries';

const port = process.env.PORT || 9000;
const app = express();

let staticDir;

if (process.env.NODE_ENV === 'development') {
  staticDir = path.join(__dirname, '..', 'dist');
} else {
  staticDir = path.join(__dirname, '..');
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(staticDir));
app.use(cors());

app.get('/api/contacts', async (req, res) => {
  const contacts = await getContacts();
  res.send(contacts);
});

app.get('/api/contacts/:id', async (req, res) => {
  const { id } = req.params;
  const contact = await getContactById(id);
  res.send(contact);
});

app.post('/api/contact/by-name', async (req, res) => {
  const contact = await getContactByName(req.body);
  res.send(contact);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});