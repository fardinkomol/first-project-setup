import { Request, Response, Application } from 'express';
import express from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/config/modules/student/student.route';
const app: Application = express();
// const port = 3000
// Parser
app.use(express.json());
app.use(cors());

// appllication routes
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 'Hello';
  res.send(a);
};

app.get('/', getAController);

export default app;

// console.log(process.cwd());
// I:\Programming hero level 2\Module-8/.env
