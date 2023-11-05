import sharedRegistry from './sharedRegistry';
import { Gauge } from 'prom-client';

export const jiraNewTicketCount = new Gauge({
  name: 'jira_new_ticket_count',
  help: 'Number of new tickets in a project',
  registers: [sharedRegistry],
});
