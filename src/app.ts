import express from 'express';
import dotenv from 'dotenv';

import logger from './logger/logger';
import requestLogger from './logger/request-logger';

import metricRoutes from './routes/metricsRoutes';
import jiraRoutes from './routes/jiraRoutes';

// import schedulingService from './services/schedulingService';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(requestLogger);

app.use('/metrics', metricRoutes);
app.use('/jira', jiraRoutes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// schedulingService.start();

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
