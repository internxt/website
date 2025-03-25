/* eslint-disable no-console */
import { loadEnvConfig } from '@next/env';
import { config } from 'dotenv';
import path from 'path';

loadEnvConfig(process.cwd());

const envExample = config({ path: path.join(__dirname, '..', '.env.local.example') }).parsed;
const env = process.env.VERCEL === '1' ? process.env : config({ path: path.join(__dirname, '..', '.env.local') }).parsed;

if (!envExample || !env) {
  console.error('Error loading .env files');
  process.exit(1);
}

const keysExample = new Set(Object.keys(envExample));
const keysEnv = new Set(Object.keys(env));

let error = false;

keysExample.forEach((envName) => {
  if (!keysEnv.has(envName) || !env[envName]) {
    error = true;
    console.error(`Missing env variable: ${envName}`);
  }
});

if (error) {
  process.exit(1);
}
