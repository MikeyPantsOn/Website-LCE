import express, { text } from 'express';
import path from 'path';



const app = express();
const port = process.env.PORT || 3001;


// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Send Home Page (Login Page)
app.get('/', (req, res) => { res.sendFile(path.resolve("seiten/index.html")) });

// Send style.css
app.get('/style.css', (req, res) => { res.sendFile(path.resolve("seiten/Style.css")) });

// Response To Login
app.post('/SportLCE.html', (req, res) => {

  const username = req.body.username;
  const password = req.body.password;


  if (username === 'FraPiNo' && password === 'LCE2023') {
    res.sendFile(path.resolve("seiten/SportLCE.html"))
  }
  else {
    var error = -1;
    res.sendFile(path.resolve("seiten/index.html"), { name: error });
  }

});

// Get URL
app.listen(port, () => { console.log(`Server running at http://${hostname}/`); });