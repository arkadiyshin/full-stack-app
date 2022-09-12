import express from 'express';

const authRouter = express.Router();

console.log('i am in auth')

authRouter.post('/signup', function (req, res, next) {
    console.log('i am in signup')
    res.send('I am in POST signup');
});

export default authRouter;