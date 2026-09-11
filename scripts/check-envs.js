/* eslint-disable no-console */

const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd());

const path = require('path');
const envExample = require('dotenv').config({ path: path.join(__dirname, '..', '.env.local.example') }).parsed || {};

// loadEnvConfig ya vuelca .env.local en process.env cuando existe, así que
// process.env sirve como única fuente tanto en local como en CI/Cloudflare.
const env = process.env;

const missing = Object.keys(envExample).filter((envName) => !env[envName]);

missing.forEach((envName) => {
  console.error('Missing env variable: %s', envName);
});

const error = missing.length > 0;

if (error) {
  process.exit(1);
}
