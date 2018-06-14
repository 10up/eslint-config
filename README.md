# eslint-config-10up
> ESLint [shareable config](https://github.com/10up/eslint-config)

[eslint-config-10up](https://github.com/10up/eslint-config) is a shareable configuration package for [eslint](http://eslint.org).

## Installation

To use this config, install [@10up/eslint-config](https://github.com/10up/eslint-config) as a development dependecy of your project:

```sh
npm install @10up/eslint-config --save-dev
```

Next, add this configuration to your `package.json`:

```json
{
    "eslintConfig": {
        "extends": "@10up/eslint-config"
    }
}
```

Or add a .eslintrc file to your project root containing: 
```json
{
    "extends": "@10up/eslint-config"
}
```