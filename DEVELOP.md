

# Metagraph

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>


## Generate a Typescript library

Run `nx g @nrwl/js:library --buildable --name=hello-tsc --dryRun` to generate a library (remove `--dryRun` to actually do it).

Then you can:

- lint: `nx lint hello-tsc`
- test: `nx test hello-tsc`
- build: `nx build hello-tsc`
- publish: TBD

Libraries are shareable across libraries and applications. They can be imported from `@metagraph/hello-tsc`.

## Generate a React application

Run `nx g @nrwl/react:app my-app` to generate an application.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a React library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@metagraph/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

