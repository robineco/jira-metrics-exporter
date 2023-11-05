import express from 'express';
import {
  getIssueSummaryController,
  getIssueInfoController,
  getNewTicketCountController,
} from '../controllers/jiraController';

const router = express.Router();

router.get('/ticket/:issueKey/summary', getIssueSummaryController);
router.get('/ticket/:issueKey', getIssueInfoController);

router.get('/project/:projectKey/new', getNewTicketCountController);

export default router;
