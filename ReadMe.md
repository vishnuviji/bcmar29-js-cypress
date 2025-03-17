# JS Cypress Project

This project is a test automation framework using Cypress for end-to-end testing of web applications.

## Pre-requisites

Before you begin, ensure you have met the following requirements:
- [Node](https://nodejs.org/en/download)
- [Visual Studio Code](https://code.visualstudio.com/download) (optional)

## Installation

First, clone the repository and change to the project directory:

```bash
git clone https://github.com/Axone-Tech/js-cypress.git
cd js-cypress
```

To install the project dependencies, run the following command:

```bash
npm install
```

## Usage

To run the tests, use the following command:

```bash
npx cypress open
```

This will open the Cypress Test Runner, where you can run your tests interactively.

Alternatively, to run the tests in headless mode, use:

```bash
npx cypress run
```

To run the tests in headed mode, use:

```bash
npx cypress run --headed
```

## Project Structure

- `cypress/`: Contains all the test files and configurations.
- `cypress/integration/`: Contains the test specifications.
- `cypress/fixtures/`: Contains test data.
- `cypress/support/`: Contains support files and custom commands.

## Writing Tests

To write a new test, create a new file in the `cypress/integration/` directory with a `.spec.js` extension. Here is an example test:

```javascript
describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
  })
})
```

## Reports

To generate test reports, you can use the `cypress-mochawesome-reporter` plugin. First, install the plugin:

```bash
npm install --save-dev cypress-mochawesome-reporter
```

Then, add the following configuration to your `cypress.json` file:

```json
{
  "reporter": "cypress-mochawesome-reporter",
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": true,
    "json": true
  }
}
```

Finally, run your tests with the following command to generate the reports:

```bash
npx cypress run
```

The reports will be generated in the `cypress/reports` directory.
