import express, { Router } from 'express';
import account from '../models/account.model';
import bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';
import security from '../security/crypto';

const router: Router = express.Router();

router.post("/account", async (req, res) => {
    const unique = await account.findOne({ username: req.body.username });

    if (unique) {
        res.json({status: 'error', content: 'Duplicate username'});
        return;
    }

    bcrypt.hash(req.body.password, 10, async (error, result) => {
        await account.create({
            username: req.body.username,
            password: result,
            uuid: security.encrypt(uuidv4(), req.body.password)
        })
        .then(() => res.json({status: 'ok'}))
        .catch((error) => res.json({status: 'error', error: error.message}))
    })
});

router.get("/account:username", async (req, res) => {

});

export default router;