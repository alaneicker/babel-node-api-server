import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = process.env.PORT || 9000;
const app = express();

let staticDir;

if (process.env.NODE_ENV === 'development') {
  staticDir = path.join(__dirname, '..', 'dist');
} else {
  staticDir = path.join(__dirname, '..');
}

app.use(bodyParser.json());
app.use(express.static(staticDir));
app.use(cors());

app.get('/api/cars', (req, res) => {
  res.send([
    {
      "make": "Ford",
      "model": "Explorer",
      "trim": "Limited",
      "year": "2017",
      "color": "Gray"
    },
    {
      "make": "Honda",
      "model": "C-RV",
      "trim": "EX-L",
      "year": "2018",
      "color": "White"
    },
    {
      "make": "GMC",
      "model": "Yukon",
      "trim": "Denali",
      "year": "2019",
      "color": "Black"
    },
  ])
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});