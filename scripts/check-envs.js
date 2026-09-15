/* eslint-disable no-console */

const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd());

const path = require('path');
const fs = require('fs');
const envExample = require('dotenv').config({ path: path.join(__dirname, '..', '.env.local.example') }).parsed;

const envLocalPath = path.join(__dirname, '..', '.env.local');
const useProcessEnv =
  process.env.VERCEL === '1' ||
  process.env.CF_PAGES === '1' ||
  process.env.CLOUDFLARE_BUILD === '1' ||
  process.env.SKIP_ENV_FILE === '1' ||
  !fs.existsSync(envLocalPath);

const env = useProcessEnv ? process.env : require('dotenv').config({ path: envLocalPath }).parsed;

const keysExample = Object.keys(envExample);
const keysEnv = Object.keys(env);

let error = false;
keysExample.forEach((envName) => {
  const index = keysEnv.indexOf(envName);
  if (index < 0 || !env[envName]) {
    error = true;
    console.error('Missing env variable: %s', envName);
  }
});

[
  'CSRF_SECRET',
  'STATIC_CONTENT_SERVING_URL',
  'KLAVIYO_PRIVATE_API_KEY',
  'NEXT_PUBLIC_KLAVIYO_LIST_ID',
  'KLAVIYO_S3_CONTACT_LIST_ID',
].forEach((envName) => {
  if (!env[envName]) {
    console.warn('Warning: missing env variable (used at runtime): %s', envName);
  }
});

if (!env.CLOUDFLARE_STATIC_ASSETS_HOST) {
  console.warn('Warning: CLOUDFLARE_STATIC_ASSETS_HOST is missing and is read at build time by next.config.js');
}

if (error) {
  process.exit(1);
}
