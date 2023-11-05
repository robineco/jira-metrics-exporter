import { Request, Response } from 'express';
import {
  getIssueSummary,
  getIssueInfo,
  getNewTicketCount,
} from '../services/jiraService';
import logger from '../logger/logger';

export async function getIssueSummaryController(req: Request, res: Response) {
  try {
    const { issueKey } = req.params;
    const issueSummary = await getIssueSummary(issueKey);
    res.json({ issueSummary });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to retrieve issue summary' });
  }
}

export async function getIssueInfoController(req: Request, res: Response) {
  try {
    const { issueKey } = req.params;
    const issueInfo = await getIssueInfo(issueKey);
    res.json({ issueInfo });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to retrieve issue info' });
  }
}

export async function getNewTicketCountController(req: Request, res: Response) {
  try {
    const { projectKey } = req.params;
    const newTicketCount = await getNewTicketCount(projectKey);
    res.json({ newTicketCount });
  } catch (error) {
    logger.error(error);
    res.status(500).json({ error: 'Failed to retrieve new ticket count' });
  }
}

export default getIssueSummaryController;
