import { CronJob } from 'cron';
import { getNewTicketCount } from './jiraService';
import logger from '../logger/logger';

// Define your scheduling tasks
const scheduleTasks = [
  {
    name: 'Task 1',
    pattern: '*/1 * * * *', // Cron pattern for every 5 minutes
    task: () => {
      logger.info('Running Task 1');
      getNewTicketCount('AT');
    },
  },
];

const scheduledJobs = scheduleTasks.map(
  (task) => new CronJob(task.pattern, task.task, null, true, 'UTC'),
);

export default {
  start() {
    console.log('Starting scheduled tasks...');
    scheduledJobs.forEach((job) => job.start());
  },
};
