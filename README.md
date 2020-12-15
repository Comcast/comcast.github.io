[![GitHub https://github.com/Comcast/Comcast.github.io/blob/master/LICENSE-Apache-2.0](https://img.shields.io/github/license/comcast/comcast.github.io)](https://github.com/Comcast/Comcast.github.io/blob/master/LICENSE-Apache-2.0)
[![GitHub contributors https://github.com/Comcast/Comcast.github.io/graphs/contributors](https://img.shields.io/github/contributors/comcast/comcast.github.io)](https://github.com/Comcast/Comcast.github.io/graphs/contributors)
[![GitHub last commit https://github.com/Comcast/Comcast.github.io/commits/master](https://img.shields.io/github/last-commit/comcast/comcast.github.io)](https://github.com/Comcast/Comcast.github.io/commits/master)

# comcast.github.io
This is the main landing page for Open Source at Comcast. It highlights our efforts in the Free/Libre and Open Source Software movement.

## Table of Contents
- [License](#license)
- [Code of Conduct](#code-of-conduct)
- [Contributing](#contributing)
- [Development Details](#development-details)
  - [Code Quality](#code-quality)
  - [Accessibility](#accessibility)
- [Local development](#local-development)
  - [Building](#building)
  - [Deploying](#deploying)
- [Documentation](#documentation)

## License
Comcast.github.io is licensed under [Apache License 2.0](/LICENSE-Apache-2.0). Valid-License-Identifier: Apache-2.0

## Code of Conduct
We take our [code of conduct](CODE_OF_CONDUCT.md) very seriously. Please abide by it.

## Contributing
Please read our [contributing guide](CONTRIBUTING.md) for details on how to contribute to our project.

## Development Details
This repository is a codebase built using [React](https://reactjs.org/). Static pages are built for deployment using [Next.js](https://nextjs.org/). Data is fetched from GitHub using the [GraphQL](https://graphql.org/) on the [GitHub GraphQL API
](https://docs.github.com/en/free-pro-team@latest/graphql). [Node](https://nodejs.org/), [NPM](https://www.npmjs.com/), and [Webpack](https://webpack.js.org/).

To separate concerns the components are in `src/components`, pages and layout files are contained in `src/pages`, and the content of the pages may be updated using the files in the `src/data`. This allows the content to be updated without needing to update the unit tests. Assets are contained in `public` as is standard practice for Next.js. Additional functions are in `src/shared`.

### Code Quality
The code is linted during the `pre-commit` hook, and both linted and tested during the `pre-push` hook. Target code coverage for unit tests is 80%. Unit tests are written using [Jest](https://jestjs.io/).

### Accessibility
Submitted code should adhere to [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/).

Automated accessibility testing is built into the workflow:
- `eslint-plugin-jsx-a11y` provides code-level accessibility checking.
- `react-axe` provides non-prod accessibility testing in the console.
- `jest-axe` provides the ability to write unit tests for accessibility.

Manual testing should include, at the minimum, testing for keyboard operability, and reviewing the site using [NVDA](https://www.nvaccess.org/download/) screen reader with the [FireFox](https://www.mozilla.org/en-US/firefox/) browser.

## Development
After the codebase has been cloned and `npm install` has been run, `npm run dev` will create a webserver on the specified port for local development.

### Building
`npm run build` generates the distribution files and exports them into the `docs` directory. It also creates a `.nojekyll` file to bypass Jekyll processing in Github Pages.

### Deploying
`npm run deploy`
- runs the `npm run build` command (above)
- adds the newly created files to git staging
- creates a commit
- pushes those changes to the main branch

## Documentation
The content of the pages may be updated using the files in the `src/data` directory or by updating the assets that are contained in the `public` directory. Full documentation for the pages, components, assets, and data sources can be found in the [Wiki](https://github.com/Comcast/Comcast.github.io/wiki).
