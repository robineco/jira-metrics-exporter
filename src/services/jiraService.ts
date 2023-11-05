import dotenv from 'dotenv';
import jira from '../jira/jiraClient';
import { jiraNewTicketCount } from '../metrics/jiraMetrics';

dotenv.config();

export async function getIssueSummary(issueKey: string): Promise<string> {
  try {
    const issue = await jira.findIssue(issueKey);
    return issue.fields.summary;
  } catch (error) {
    throw new Error(`Error fetching issue: ${error}`);
  }
}

export async function getIssueInfo(issueKey: string) {
  try {
    const issue = await jira.findIssue(issueKey);
    return issue;
  } catch (error) {
    throw new Error(`Error fetching issue: ${error}`);
  }
}

export async function getNewTicketCount(projectKey: string) {
  try {
    const response = await jira.searchJira(
      `project=${projectKey} AND status="${process.env.JIRA_NEW_TICKET_STATE_NAME}"`,
    );

    const newTicketCount = response.total;
    jiraNewTicketCount.set(newTicketCount);
    return newTicketCount;
  } catch (error) {
    throw new Error(`Error fetching new ticket count: ${error}`);
  }
}
