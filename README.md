# 10up Eslint Config

> ESLint [shareable config](https://github.com/10up/eslint-config)

[![Support Level](https://img.shields.io/badge/support-active-green.svg)](#support-level)

[@10up/eslint-config](https://github.com/10up/eslint-config) is a shareable configuration package for [eslint](http://eslint.org) built on top of [eslint-airbnb-config](https://github.com/airbnb/javascript) and modified to meet 10up's own standards.

## Installation

1. Install all peer dependencies

```sh
npx install-peerdeps --dev @10up/eslint-config@next
```

2. Install [@10up/eslint-config](https://github.com/10up/eslint-config) as a development dependecy of your project:

```sh
npm install @10up/eslint-config --save-dev
```

## Avaliable ESLint configs

### @10up/eslint-config

The default export and contains common rules that are not specific to any framework or environment.

### @10up/eslint-config/react

Extends `@10up/eslint-config` adding specific rules to react.

This rule requires installing `babel-eslint`

```sh
npm install --save-dev 'babel-eslint
```

### @10up/eslint-config/gutenberg

Extends `@10up/eslint-config/react` adding the custom gutenberg rules from `@wordpress/eslint-plugin`.

This rule requires installing the `@wordpress/eslint-plugin` package.

```sh
npm install --save-dev @wordpress/eslint-plugin
```

### @10up/eslint-config/node

Extends `@10up/eslint-config` adding specific rules to Node.js.

## Usage

In order to use this config, choose the one you want and add this configuration to your `package.json`:

```json
{
    "eslintConfig": {
        "extends": "@10up/eslint-config"
    }
}
```

Or add a `.eslintrc.js` file to your project root containing:
```js
module.exports = {
	extends: '@10up/eslint-config',
};
```

## Support Level

**Active:** 10up is actively working on this, and we expect to continue work for the foreseeable future including keeping tested up to the most recent version of WordPress.  Bug reports, feature requests, questions, and pull requests are welcome.

## Like what you see?

<a href="http://10up.com/contact/"><img src="https://10updotcom-wpengine.s3.amazonaws.com/uploads/2016/10/10up-Github-Banner.png" width="850"></a>
