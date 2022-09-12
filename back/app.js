import http from 'http';
import path from 'path';
import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/auth/auth.js';

const app = express();
const __dirname = path.resolve();

// set up the application
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/auth', authRouter);

// implement the API part
app.get("/", (req, res) => {
    res.send("youhou");
});

/// in case path is not found, return the 'Not Found' 404 code
app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// launch the node server
const listener = app.listen(process.env.PORT || 6000, function () {
    console.log('Listening on port ' + listener.address().port);
});