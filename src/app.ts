import { Request, Response, Application } from 'express';
import express from 'express';
import cors from 'cors';
const app: Application = express();
// const port = 3000

// Parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const a = 'Hello';
  // res.send('Hello World!')
  res.send(a);
});

export default app;

// console.log(process.cwd());
// I:\Programming hero level 2\Module-8/.env
