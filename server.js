const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`);
    },
});

//Create a post req and sending the res after the file is uploaded
app.post('/upload', multer({ storage: multerStorage }).single('files'), (req, res) => {
    console.log(req.file);
    res.status(200).json({
        status: 'success',
        message: 'File uploaded successfully ✔✔✔',
    });
});

app.listen(3000, 'localhost', () => {
    console.log(`Server started at post:3000`);
});
