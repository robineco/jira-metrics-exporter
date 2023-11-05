import JiraApi from 'jira-client';
import dotenv from 'dotenv';

dotenv.config();

const jira = new JiraApi({
  protocol: 'https',
  host: process.env.JIRA_HOST || '',
  username: process.env.JIRA_USERNAME || '',
  password: process.env.JIRA_API_KEY || '',
  apiVersion: '2',
  strictSSL: true,
});

export default jira;
