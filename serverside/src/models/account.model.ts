import { Schema, Model } from "mongoose";
import mongoose from "mongoose";

const Account: Schema = new mongoose.Schema({
        username: {type: String, required: true},
        password: {type: String, required: true},
        uuid: {type: Object, required: true}
    }, { collection: 'accounts' }
)

const model = mongoose.model('Accounts', Account);

export default model