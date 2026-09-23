[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=internxt_website&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=internxt_website)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=internxt_website&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=internxt_website)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=internxt_website&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=internxt_website)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=internxt_website&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=internxt_website)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=internxt_website&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=internxt_website)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=internxt_website&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=internxt_website)

# Project Manteinance

We aim to have:

- An 'A' score on Maintainability Rating
- An 'A' score on Security Rating
- A 3% of duplicated lines

# Getting Started

## Installation

First, use `yarn install` to install all the dependencies.

## Scripts

Runs the app in the development mode.

### `yarn dev` / `yarn run dev`

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### `yarn build` / `yarn run build`

Builds the app for production to the `.next` folder.

### `yarn start`

After executing `yarn build`, you can run the project as similar is in production running this command.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn cypress`

- Runs tests with [cypress](https://www.cypress.io/)

## Cloudflare Workers

The app can also be built for Cloudflare Workers through the [OpenNext](https://opennext.js.org/cloudflare) adapter. This is work in progress and does not replace the current deployment yet.

The worker runs in workerd, which does not read `.env.local`. Copy `.dev.vars.example` to `.dev.vars` and fill it in with the same values before previewing.

### `yarn build:cf`

Builds the app for Workers into the `.open-next` folder.

### `yarn preview:cf`

Builds and serves the worker locally, so API routes and SSR behave as they would on Workers.

### `yarn deploy:cf`

Builds and deploys to Cloudflare. Production variables and secrets are configured in the Cloudflare dashboard.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=internxt_drive-web)
