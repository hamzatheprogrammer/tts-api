const express = require('express');
const cors = require('cors');
const app = express();
const client = require('soundoftext-js');

// Use CORS middleware
app.use(cors());

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
