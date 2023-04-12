import express, { Express, Request, Response } from 'express';
import { UserCreateController } from './adapter/in/user-create/controller';
import { Persistence } from './adapter/out/user-create/Persistence';
import { UserCreateService } from './application/service/UserCreateService';



const PORT = 3005
export const app: Express = express();
app.use(express.json());
app.get('/', (req, res) => {
    let persistence = new Persistence()
    let userCreateService = new UserCreateService(persistence)
    let user = new UserCreateController(userCreateService)
    user.run()
    res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});