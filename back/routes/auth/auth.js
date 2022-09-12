import express from 'express';
import connection from '../../helpers/db.js';

const authRouter = express.Router();

authRouter.post('/signup', function (req, res, next) {

    connection.query('INSERT INTO users SET ?', req.body, function (error, results, fields) {
        if (error) {
            res.sendStatus(500);
        } else {
            res.sendStatus(200);
        }
    });
});

export default authRouter;