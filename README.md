# leetcode-exercises

This is a NodeJS 18 project scaffolded with Typescript and Jest. It allows importing ES6 modules and top level await.

## Project Structure

```
leet-code-exercises
├── src
│   ├── index.ts
│   ├── utils
│   │   └── helper.ts
│   └── tests
│       └── index.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

## Files

### `src/index.ts`

This file is the entry point of the application. It exports nothing.

### `src/utils/helper.ts`

This file exports a function `sum` that takes two numbers and returns their sum.

### `src/tests/index.test.ts`

This file exports a test suite for the `sum` function. It uses Jest to run the tests.

### `tsconfig.json`

This file is the configuration file for TypeScript. It specifies the compiler options and the files to include in the compilation. It allows top level await and allows importing ES6 modules.

### `jest.config.js`

This file is the configuration file for Jest. It specifies the test environment and the files to include in the test suite.

### `package.json`

This file is the configuration file for npm. It lists the dependencies and scripts for the project.

### `README.md`

This file contains the documentation for the project.

## Usage

To run the tests, use the following command:

```
npm test
```

## License

This project is licensed under the MIT License.
