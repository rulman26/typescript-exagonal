import express, { Express, Request, Response } from 'express';

const PORT = 3005
export const app: Express = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});