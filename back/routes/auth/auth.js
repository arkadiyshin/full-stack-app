import express from 'express';
import connection from '../../helpers/db.js';

const authRouter = express.Router();

authRouter.post('/signup', function (req, res, next) {
    console.log(req.body);
    connection.query('INSERT INTO users SET ?', req.body, function (error, results, fields) {
        //console.log
        if (error)
            res.status(500).json({ flash: error.message });
        else
            res.status(200).json({ flash: "User has been signed up!" });
    });
});

export default authRouter;