const express = require('express');
const app = express();
const client = require('soundoftext-js');
 


app.get('/speak/text=:text/lang=:lang', (req, res) => {
    const text = req.params.text;
    const lang = req.params.lang;
    client.sounds.create({ text: text, voice: lang })
  .then(soundUrl => {
    res.json({
    "status": 200,
    "developer": "hamza-saleem",
    "response": soundUrl
  });
  })
  .catch(e => {
    res.json({
        "status": 500,
        "developer": "hamza-saleem",
        "response": e
    });
  });
    
  
});


app.listen(3000, () => {
  console.log('Server is running on http://127.0.0.1:3000');
});
