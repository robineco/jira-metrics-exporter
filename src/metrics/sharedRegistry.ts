import { Registry } from 'prom-client';

const sharedRegistry = new Registry();

export default sharedRegistry;
