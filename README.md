# 📝 Personal ESLint rules for Software Development

This repository contains all the ESLint rules being used in all my personal projects.

To use the ESLint rules of mine, run the following command in the repository you would like to use them:

```bash
npm i -D eslint-config-simonepizzoleo
```

<br />

# 🚀 Insert the downloaded ESLint rules in your ESLint configuration

Within your ESLint configuration file (the JSON configuration file should be named `.eslintrc.json`), add the following:

```json
{

    "extends": ["simonepizzoleo"]

}
```

<br />

You can also use the full name of the module, like below.

```json
{

    "extends": ["eslint-config-simonepizzoleo"]

}
```