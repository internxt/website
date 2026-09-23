/* eslint-disable no-console */

const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd());

const fs = require('fs');
const path = require('path');
const envExample = require('dotenv').config({ path: path.join(__dirname, '..', '.env.local.example') }).parsed;

const envLocalPath = path.join(__dirname, '..', '.env.local');

const env = fs.existsSync(envLocalPath)
  ? require('dotenv').config({ path: envLocalPath }).parsed
  : process.env;

const keysExample = Object.keys(envExample || {});
const keysEnv = Object.keys(env || {});

const missing = keysExample.filter((envName) => keysEnv.indexOf(envName) < 0 || !env[envName]);

if (missing.length === keysExample.length && keysExample.length > 0) {
  console.warn('No environment variables found; skipping env validation.');
  process.exit(0);
}

missing.forEach((envName) => {
  console.error('Missing env variable: %s', envName);
});

if (missing.length > 0) {
  process.exit(1);
}
