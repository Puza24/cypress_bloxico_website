# cypress_bloxico_website

- [Description](#description)
- [Prerequisites](#prerequisites)
- [How to run tests](#how-to-run-tests)
- [Git Guidelines](#git-guidelines)

## Description

This repository purpose is practising writing Automation Tests for [Bloxico website](https://bloxico.com/) with Cypress Automation tool.

## Prerequisites

Install Node.js v14 or above
```
npm i 
```
Check if you already have Node or check Node version, run command: 
```
node -v
```

## How to run tests
1. Clone repo 
   - Navigate to [cypress-bloxico repo](https://github.com/Puza24/cypress_bloxico_website)
   - Clone repo to your local machine, run command: `git clone https://github.com/Puza24/cypress_bloxico_website.git`
   - Install all dependencies, run command: `npm install`

2. Run tests 
   - To open Cypress Test runner, run command: `npx cypress open`
   - Run test in headless mode `npm run headless`
   - Run test in headfull mode `npm run headfull`

## Git Guidelines
1. How to create new branch example:
```git checkout -b feat/FREP-[JIRA_TICKET_ID]_short_description```

2. When commiting follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) rules:
```git commit -m “feat: Short task description [JIRA_TICKET_ID]“```