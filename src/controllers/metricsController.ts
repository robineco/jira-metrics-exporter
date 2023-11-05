import { Request, Response } from 'express';
import sharedRegistry from '../metrics/sharedRegistry';

export default async function getMetrics(req: Request, res: Response) {
  try {
    const metrics = await sharedRegistry.metrics();
    res.set('Content-Type', sharedRegistry.contentType);
    res.end(metrics);
  } catch (error) {
    console.error('Error while fetching metrics:', error);
    res.status(500).end();
  }
}
