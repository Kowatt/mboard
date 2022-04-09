import express, {Express} from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './routes/routes'

class Server {
    app: Express;
    constructor() {
        this.app = express();
    }
}

class Database {
    constructor() {
        mongoose.connect("mongodb://localhost/mboard")
        .then(() => console.log("> Database connected"))
        .catch((error) => console.log(error));
    }
}

const server: Server = new Server();
const database: Database = new Database();

server.app.use(express.json());
server.app.use(cors());
server.app.use("/mboard", router);

server.app.listen(4000, () => {
    console.log("> Server started on port 4000");
})