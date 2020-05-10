const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//Create a post req and sending the res after the file is uploaded
app.post('/upload', multer({ dest: path.join(__dirname, 'uploads') }).single('files'), (req, res) => {
    console.log(req.file);
    res.status(200).json({
        status: 'success',
        message: 'File uploaded successfully ✔✔✔',
    });
});

app.listen(3000, 'localhost', () => {
    console.log(`Server started at post:3000`);
});
